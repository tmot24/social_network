import React, {FC} from "react"
import Backdrop from "@material-ui/core/Backdrop"
import Button from "@material-ui/core/Button"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles"
import {ProfileDataForm} from "../profileDataForm"
import {ProfileType} from "../../../../../types/typs"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: "#fff",
        },
    }),
)

export const SimpleBackdrop: FC<{ profile: ProfileType, saveProfile: (profile: ProfileType) => Promise<any> }> = ({
                                                                                                                      profile,
                                                                                                                      saveProfile,
                                                                                                                  }) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }

    return (
        <>
            <Button fullWidth variant="contained" onClick={handleOpen}>
                Edit profile info
            </Button>
            <Backdrop className={classes.backdrop} open={open}>
                <ProfileDataForm profile={profile} saveProfile={saveProfile} handleClose={handleClose}/>
            </Backdrop>
        </>
    )
}
