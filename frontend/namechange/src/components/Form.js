import React, {useEffect, useState} from 'react';
import FormValue from "./FormValue";
import {ButtonGroup, Button, IconButton } from "@mui/material";
import {Add} from '@mui/icons-material';



const Form = ({handleOr, handleFormValues}) => {
    const [formTypeValues, setFormTypeValues] = useState([]);
    const [formType, setFormType] = useState([]);
    const [formValue, setFormValue] = useState('');
    const [firstForm, setFirstForm] = useState(true);
    const handleClick = (event) => {
        setFirstForm(false)
        if (event.target.name === "Or") {
            handleOr()
        } else {
            setFormTypeValues(prev => [...prev,event.target.value]);
            setFormType((prev) =>
                [...prev, event.target.name]
            )
        }
    };
    useEffect(() => {

        handleFormValues([{
            formType:formType,
            formValue:formValue
        }])
    }, [formTypeValues])

    const handleChange = ({target}) => {
        setFormValue(target.value);
    }

    const buttonGroup = <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
    >
        <Button name={"And"} value={"&&"} onClick={handleClick}>
            And
        </Button>
        <Button name={"Or"} value={"||"} onClick={handleClick}>
            Or
        </Button>
        <Button name={"And Not"} value={"&& !"} onClick={handleClick}>
            And Not
        </Button>
    </ButtonGroup>

    const newButton = <Button name={"New"} value={""} onClick={handleClick}  ><Add /></Button>

    return (
        <div>
            {formTypeValues.map((formValue, index) => (
                <FormValue key={index} formValue={formValue} formType={formType} formId={index}
                handleChange={handleChange}/>
            ))}
            {firstForm ? newButton : buttonGroup}
        </div>
    );
};

export default Form;