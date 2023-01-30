import Form from './Form';
import React, {useState} from "react";
import {Box, Button, Paper} from "@mui/material";
const FormBox = ({Javascriptify}) => {
    const [forms, setForms] = useState([<Form />]);
    const [formValues, setFormValues] = useState([]);

    const handleOr = () => {
        setForms(prev => [...prev, <Form />])
    }
    const handlejavascriptify = () => {
        Javascriptify(formValues);
    }

    return (
        <Box>
            {forms.map((formValue, index) => (
                <Paper sx={{marginLeft:'20%', marginRight:'20%', marginBottom:10}} elevation={3} >
                    <Form key={index} formValue={formValue}
                          formId={index} handleOr={handleOr}
                          handleFormValues={setFormValues} />
                </Paper>
            ))}
            <Button
                onClick={handlejavascriptify}
                variant={"contained"}
                sx={{":hover": {
                background:"purple"}
                }}
            >JavaScriptify</Button>
        </Box>
    )
}
export default FormBox;