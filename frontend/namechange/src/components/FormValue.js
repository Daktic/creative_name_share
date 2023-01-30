import {TextField} from "@mui/material";
import {useState} from "react";


const FormValue = () => {
    const [formValue, setFormValue] = useState('')
    const handleChange = ({target}) => {
        setFormValue(target.value);
    }
    return (
        <div>
            <TextField id="1" label="Value" variant="outlined" onChange={handleChange}
                       sx={{
                           alignSelf: 'center',
                           mx: 'auto',
                           my: 'auto'
                       }}/>
        </div>
    )
}

export default FormValue;