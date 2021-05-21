import { Preloader } from "../../common/preloader/preloader";
import { ProfileStatus } from "./profileStatus";
import avatar from "../../../../assets/images/avatar.svg";
import { ChangeEvent, FC } from "react";
import { Box, Grid, Input, Typography } from "@material-ui/core";
import { ProfileType } from "../../../../types/typs";
import { Contacts } from "./contacts";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ProfileData } from "./profileData";
import { SimpleBackdrop } from "./editProfileInfo/editProfileInfo";

type ProfileInfoTypes = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
    },
    title: {
        textAlign: "right",
        margin: theme.spacing(1),
    },
    img: {
        width: "100%",
    },
}))

export const ProfileInfo: FC<ProfileInfoTypes> = ({
                                                      profile,
                                                      status,
                                                      updateUserStatus,
                                                      isOwner,
                                                      savePhoto,
                                                      saveProfile,
                                                  }) => {

    const theme = useTheme()
    const classes = useStyles(theme)

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    if (!profile) return <Preloader/>
    return (
        <Grid container spacing={5} className={classes.root}>
            <Grid item>
                <img src={profile.photos.large || avatar} alt="img"/>
                <ProfileStatus profile={profile} status={status} updateUserStatus={updateUserStatus} isOwner={isOwner}/>
                <ProfileData profile={profile}/>
            </Grid>
            <Grid item>
                <Typography className={classes.title} variant={"h5"}>Contacts</Typography>
                <Contacts profile={profile}/>
                {isOwner && <>
                    <Box margin={1} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
                        <Typography align={"center"}>Change avatar</Typography>
                        <Input type={"file"} onChange={mainPhotoSelected}/>
                    </Box>
                    <Box margin={1} display={"flex"} justifyContent={"center"}>
                        <SimpleBackdrop profile={profile} saveProfile={saveProfile}/>
                    </Box>
                </>}
            </Grid>
        </Grid>
    )
}
