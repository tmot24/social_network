import {ContactsType, ProfileType} from "../../../../types/typs"
import {FC} from "react"
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography} from "@material-ui/core"

export const Contacts: FC<{ profile: ProfileType }> = ({profile}) => {

    console.log(profile)
    return (
        <>
            {
                Object.keys(profile.contacts)
                    .map(key =>
                        <Contact key={key} contactTitle={key}
                                 contactValue={profile.contacts[key as keyof ContactsType]}/>,
                    )
            }
        </>
    )
}


type ContactsPropType = {
    contactTitle: string
    contactValue: string
}

const Contact: FC<ContactsPropType> = ({contactTitle, contactValue}) => {
    // if (!contactValue) return null
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell component="th" scope="row">
                            {contactTitle}
                        </TableCell>
                        <TableCell align="right">{contactValue}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}