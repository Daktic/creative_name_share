import {Button} from "@mui/material";


const Compiled = (props) => {

    const {onValidate} = props;

    const handleSubmit = () => {

        onValidate(prev => [...prev, props.formValues])
    }

    return (
        <div>
            <Button onClick={handleSubmit} variant="contained" sx={{margin:1}}>Validate</Button>
            <h3>Your string: </h3>
            {/*{props.formValues.map((form, index) => <p key={index}>{form.modifier} {form.formValue}</p>)}*/}
        </div>
    )
}

export default Compiled;