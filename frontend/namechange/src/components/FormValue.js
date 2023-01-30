import {TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";


const FormValue = ({formType, formId, handleChange}) => {



    return (
        <div>
            <Typography>{formType[formId]}</Typography>
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