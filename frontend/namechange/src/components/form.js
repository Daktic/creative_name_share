import React, {useEffect, useState} from 'react';
import {
    Box, TextField, Card, IconButton,
    FormControl, InputLabel, MenuItem
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Select, { SelectChangeEvent } from '@mui/material/Select';




const FormPiece = (props) => {
    const { onAdd, onDelete, onComplete } = props;
    const [modifier, setModifier] = React.useState('');
    const [formValue, setFormValue] = React.useState('');


    const handleDropChange = (event) => {
        setModifier(event.target.value);

    };

    const handleClickChange = (event) => {
        setFormValue(event.target.value);
    };

    const handleClick = () => {
        onAdd()
    }
    const handleDelete = () => {
        onDelete(props.id)
    }

    useEffect(() => {
        onComplete({modifier:modifier.toLowerCase(), formValue:formValue.toLowerCase()});
    },[modifier,formValue])



    return (
        <Card sx={{ minWidth: 275 }}>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl disabled={props.disabled} >
                    <InputLabel id="demo-simple-select-label">Modifier</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={modifier}
                        label="modifier"
                        onChange={handleDropChange}
                    >
                        <MenuItem value={'And'}>And</MenuItem>
                        <MenuItem value={'Or'}>Or</MenuItem>
                        <MenuItem value={'Not'}>And Not</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="filled-basic" label="Value" variant="filled"
                           value={formValue}
                           onChange={handleClickChange} />
                <IconButton aria-label="delete"
                            sx={{ maxWidth:30, maxHeight:30 }}
                            disabled={props.disabled}
                            onClick={handleDelete}
                            >
                    <DeleteIcon  />
                </IconButton>
            </Box>
            <IconButton aria-label="add"
                        sx={{ m: 0, p: 0, minWidth:0 }}
                        onClick={handleClick}>
                <AddIcon />
            </IconButton>
        </Card>

    )
}

export default FormPiece;