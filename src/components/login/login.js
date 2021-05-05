import {
    Button, Dialog, DialogActions, Box, FormControlLabel,
    DialogContent, DialogContentText, DialogTitle, Typography
} from "@material-ui/core";
import {useState} from "react";
import {Formik, Form, Field} from "formik";
import {Switch, TextField} from "formik-material-ui";

export const Login = ({errorMessage, login, captchaUrl}) => {
    const [open, setOpen] = useState(false);

    const onSubmit = (data) => {
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
                    <DialogContentText>
                        <Typography variant={"subtitle1"}>Please use test email: </Typography>
                        <Typography variant={"h4"}>free@samuraijs.com</Typography>
                        <Typography variant={"subtitle1"}>Please use test password: </Typography>
                        <Typography variant={"h4"}>free</Typography>
                    </DialogContentText>
                    <Formik
                        initialValues={{
                            email: "free@samuraijs.com",
                            password: "free",
                        }}
                        validate={(values) => {
                            const errors = {};
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
                        {({submitForm}) => (
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
                                    <Button onClick={submitForm}>
                                        Login
                                    </Button>
                                </DialogActions>
                            </Form>
                        )}
                    </Formik>
                </DialogContent>
            </Dialog>
        </div>
    );
};
