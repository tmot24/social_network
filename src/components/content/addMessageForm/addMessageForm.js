import {useForm} from "react-hook-form";
import style from "./addMessageForm.module.css";
import {Form, Formik, Field} from "formik";
import {Box, Button} from "@material-ui/core";
import {TextField} from "formik-material-ui";

export const AddMessageForm = ({sendMessage, maxLength}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        sendMessage(data.newMessageBody);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.formControl}>
                <div>
                <textarea className={errors.newMessageBody ? style.error : ""}
                          type="text" placeholder={"Enter your message"}
                          {...register("newMessageBody", ({
                              required: "Field is required",
                              maxLength: {value: maxLength, message: `Max length is ${maxLength} symbols`}
                          }))}/>
                </div>
                {errors.newMessageBody && <span>{errors.newMessageBody.message}</span>}
                <input type="submit" value={"Send"}/>
            </div>
        </form>
    );
};

export const AddMessageFormik = ({sendMessage}) => {

    return (
        <Formik
            initialValues={{input: ""}}
            onSubmit={(values => sendMessage(values.input))}
        >
            {({submitForm, isSubmitting}) => (
                <Form>
                    <Box>
                        <Field component={TextField} name={"input"} label={"Add new post"}
                               helperText={"Enter your message"} style={{width: 250}}>
                        </Field>
                        <Box style={{display: "flex", justifyContent: "flex-end"}}>
                            <Button onClick={submitForm} disabled={isSubmitting}>
                                Send
                            </Button>
                        </Box>
                    </Box>
                </Form>
            )}
        </Formik>
    );
};