import {ProfileType} from "../../../../types/typs"
import {FC} from "react"
import {Paper, Table, TableBody, TableCell, TableContainer, TableRow} from "@material-ui/core"


type ProfileDataTypes = {
    profile: ProfileType
}

export const ProfileData: FC<ProfileDataTypes> = ({profile}) => {

    const data = [
        ["Full name:", profile.fullName], ["Looking for a job:", profile.lookingForAJob ? "yes" : "no"],
        ["My professional skills:", profile.lookingForAJobDescription], ["About me:", profile.aboutMe],
    ]

    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableBody>
                        {
                            data.map((elem, index) =>
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">
                                        {elem[0]}
                                    </TableCell>
                                    <TableCell align="right">{elem[1]}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}