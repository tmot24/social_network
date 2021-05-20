import {useForm} from "react-hook-form"
import React, {FC, useState} from "react"
import {ProfileType} from "../../../../types/typs"
import {Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@material-ui/core"
import {makeStyles, useTheme} from "@material-ui/core/styles"

type ProfileDataFormPropsType = {
    profile: ProfileType
    saveProfile: (profile: ProfileType) => Promise<any>
    handleClose: () => void
}

const useStyles = makeStyles(theme => ({
    title: {
        margin: theme.spacing(3),
    },
    errors: {
        color: "red",
    },
    buttons: {
        display: "flex",
        justifyContent: "space-between",
    },
}))


export const ProfileDataForm: FC<ProfileDataFormPropsType> = ({profile, saveProfile, handleClose}) => {
    const [errors, setErrors] = useState([])
    const {register, handleSubmit} = useForm({
        defaultValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
            contacts: {
                facebook: profile.contacts.facebook,
                website: profile.contacts.website,
                vk: profile.contacts.vk,
                twitter: profile.contacts.twitter,
                instagram: profile.contacts.instagram,
                youtube: profile.contacts.youtube,
                github: profile.contacts.github,
                mainLink: profile.contacts.mainLink,
            },
        },
    })
    const theme = useTheme()
    const classes = useStyles(theme)

    const onSubmit = (data: ProfileType) => {
        saveProfile(data)
            .then(() => {
                handleClose()
                setErrors([])
            })
            .catch(reject => setErrors(reject))

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TableContainer component={Paper}>
                <Typography className={classes.title} variant={"h4"} align={"center"}>Edit profile info</Typography>
                {errors.map(elem =>
                    <Typography align={"center"} className={classes.errors} key={elem}>
                        {elem}
                    </Typography>)
                }
                <Table size="small">
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Full name
                            </TableCell>
                            <TableCell align="right">
                                <input type="text" placeholder={"Full name"}{...register("fullName")}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Looking for a job
                            </TableCell>
                            <TableCell align="right">
                                <input type="checkbox" {...register("lookingForAJob")}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                My professional skills
                            </TableCell>
                            <TableCell align="right">
                                <textarea
                                    placeholder={"My professional skills"}{...register("lookingForAJobDescription")}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                About me
                            </TableCell>
                            <TableCell align="right">
                                <textarea placeholder={"About me"}{...register("aboutMe")}/>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Typography align={"center"}>Contacts</Typography>
                            </TableCell>
                        </TableRow>
                        {
                            Object.keys(profile.contacts)
                                .map(key =>
                                    <TableRow key={key}>
                                        <TableCell>
                                            {key}
                                        </TableCell>
                                        <TableCell align="right">
                                            <input type="text"
                                                   placeholder={key}{...register(`contacts.${key}` as any)}/>
                                        </TableCell>
                                    </TableRow>,
                                )
                        }
                    </TableBody>
                </Table>
                <Box margin={2} className={classes.buttons}>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type={"submit"}>Send</Button>
                </Box>
            </TableContainer>
        </form>
    )
}