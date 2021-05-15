import {useForm} from "react-hook-form";
import {Form, Formik, Field} from "formik";
import {Box, Button} from "@material-ui/core";
import {TextField} from "formik-material-ui";
import {FC} from "react";

type AddMessageFormPropsType = {
    sendMessage: (text: string) => void
    maxLength: number
}

export const AddMessageForm: FC<AddMessageFormPropsType> = ({sendMessage, maxLength}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data: { newMessageBody: string }) => {
        sendMessage(data.newMessageBody);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div>
                <textarea placeholder={"Enter your message"}
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

type AddMessageFormikPropsType = {
    sendMessage: (text: string) => void
}

export const AddMessageFormik: FC<AddMessageFormikPropsType> = ({sendMessage}) => {

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