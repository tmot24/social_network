import {useDispatch, useSelector} from "react-redux"
import {AppStateType} from "../../../redux/redux-store"
import {sendMessage} from "../../../redux/chat-reducer"
import {Box, Button} from "@material-ui/core"
import {TextField} from "formik-material-ui"
import {Field, Form, Formik, FormikErrors} from "formik"
import {makeStyles, useTheme} from "@material-ui/core/styles"

type MessageFormType = {
    message: string
}

const useStyles = makeStyles(theme => ({
    button: {
        display: "flex",
        justifyContent: "flex-end"
    }
}))

export const AddMessageForm = () => {
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

    const theme = useTheme()
    const classes = useStyles(theme)

    const sendMessageHandler = (message: string) => {
        dispatch(sendMessage(message))
    }

    return (
        <div>
            <Formik
                initialValues={{
                    message: "",
                }}
                validate={((values: MessageFormType) => {
                    const errors: FormikErrors<MessageFormType> = {}
                    if (values.message.length === 0) {
                        errors.message = "Message should be more 1 symbols"
                    }
                    return errors
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(false)
                    resetForm()
                    sendMessageHandler(values.message)
                }}
            >
                {({submitForm, isSubmitting}) => (
                    <Form>
                        <Box margin={1}>
                            <Field
                                fullWidth={true}
                                component={TextField}
                                name={"message"}
                                type={"message"}
                                label={"Message"}
                                helperText={"Enter your message"}
                                variant="outlined"
                            />
                        </Box>
                        <Box margin={1} className={classes.button}>
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={isSubmitting || status !== "ready"}
                                onClick={submitForm}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </div>
    )
}