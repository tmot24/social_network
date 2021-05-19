import {Form, Formik, Field, FormikHelpers} from "formik"
import {Button, InputBase, MenuItem} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"
import {fade, makeStyles, useTheme} from "@material-ui/core/styles"
import {FilterType} from "../../../redux/users-reducer"
import {FC} from "react"
import {Select} from "formik-material-ui"

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    select: {
        width: 141
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputRoot: {
        color: "inherit",
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}))

const usersSearchFormValidate = (values: any) => {
    return {}
}

type UsersSearchFormPropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type FormType = {
    term: string
    friend: "true" | "false" | "null"
}

export const UsersSearchForm: FC<UsersSearchFormPropsType> = ({onFilterChanged}) => {
    const classes = useStyles(useTheme())

    const onSubmit = (values: FormType, {setSubmitting}: FormikHelpers<FormType>) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false,
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div className={classes.root}>
            <Formik
                initialValues={{term: "", friend: "null"}}
                onSubmit={onSubmit}
                validate={usersSearchFormValidate}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                  }) => (
                    <Form>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <Field
                                component={InputBase}
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{"aria-label": "search"}}
                                id={"term"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.term}
                            />
                            <Field
                                className={classes.select}
                                component={Select}
                                type="text"
                                name="friend"
                                variant="standard"
                            >
                                <MenuItem value={"null"}>All</MenuItem>
                                <MenuItem value={"true"}>Only followed</MenuItem>
                                <MenuItem value={"false"}>Only unfollowed</MenuItem>
                            </Field>
                            <Button type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}