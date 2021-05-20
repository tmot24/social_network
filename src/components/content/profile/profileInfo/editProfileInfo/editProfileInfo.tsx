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
    const handleToggle = () => {
        setOpen(!open)
    }

    return (
        <>
            <Button fullWidth variant="contained" onClick={handleToggle}>
                Edit profile info
            </Button>
            <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <ProfileDataForm profile={profile} saveProfile={saveProfile} handleToggle={handleToggle}/>
            </Backdrop>
        </>
    )
}
