import {
    Button, Dialog, DialogActions, Box, FormControlLabel,
    DialogContent, DialogTitle, Typography
} from "@material-ui/core";
import {useState, FC} from "react";
import {Formik, Form, Field, FormikErrors} from "formik";
import {Switch, TextField} from "formik-material-ui";

type LoginType = {
    errorMessage: string | null,
    login: (email: string, password: string, rememberMe: boolean, captcha: string | null) => void
    captchaUrl: string | null

}
export type LoginValuesType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string | null
}

export const Login: FC<LoginType> = ({errorMessage, login, captchaUrl}) => {
    const [open, setOpen] = useState(false);

    const onSubmit = (data: LoginValuesType) => {
        login(data.email, data.password, data.rememberMe, data.captcha);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
                Login
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Login</DialogTitle>
                <DialogContent>
                    <Typography variant={"subtitle1"}>Please use test email: </Typography>
                    <Typography variant={"h4"}>free@samuraijs.com</Typography>
                    <Typography variant={"subtitle1"}>Please use test password: </Typography>
                    <Typography variant={"h4"}>free</Typography>
                    <Formik
                        initialValues={{
                            email: "free@samuraijs.com",
                            password: "free",
                            rememberMe: false,
                            captcha: null as string | null,
                        }}
                        validate={(values: LoginValuesType) => {
                            const errors: FormikErrors<LoginValuesType> = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            return errors;
                        }}
                        onSubmit={values => onSubmit(values)}
                    >
                        <Form>
                            <Box margin={1}>
                                <Field
                                    component={TextField}
                                    name={"email"}
                                    type={"email"}
                                    label={"Email"}
                                    helperText={"email"}
                                />
                            </Box>
                            <Box margin={1}>
                                <Field
                                    component={TextField}
                                    type="password"
                                    label="Password"
                                    name="password"
                                />
                            </Box>
                            <Box margin={1}>
                                <FormControlLabel
                                    control={
                                        <Field component={Switch} type="checkbox" name="rememberMe"/>
                                    }
                                    label="Remember me"
                                />
                            </Box>
                            <Box margin={1}>
                                {captchaUrl && <img style={{display: "inherit"}} src={captchaUrl} alt="captcha"/>}
                                {captchaUrl &&
                                <Field
                                    component={TextField}
                                    type="captcha"
                                    label="Captcha"
                                    name="captcha"
                                />}
                                {errorMessage && <Box margin={2}><Typography variant={"subtitle1"} style={{
                                    color: "red",
                                    backgroundColor: "white"
                                }}>{errorMessage}</Typography></Box>}
                            </Box>
                            <DialogActions>
                                <Button onClick={handleClose}>
                                    Cancel
                                </Button>
                                <Button type={"submit"}>
                                    Login
                                </Button>
                            </DialogActions>
                        </Form>
                    </Formik>
                </DialogContent>
            </Dialog>
        </div>
    );
};
