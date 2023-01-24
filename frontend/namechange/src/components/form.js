import React, {useEffect, useState} from 'react';
import {
    Box, TextField, Card, IconButton,
    FormControl, InputLabel, MenuItem
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import debounce from 'lodash.debounce';

const FormPiece = ({onSubmit, onAdd, onDelete, disabled, id}) => {

    const [modifier, setModifier] = useState('')
    const [formValue, setFormValue] = useState('')


    const handleModifierChange = (e) => {
        setModifier(e.target.value);
    }
    const handleValueChange = (e) => {
        setFormValue(e.target.value);
    }


    const handleClick = () => {
        onAdd()
    }
    const handleDelete = () => {
        onDelete(id)
    }

    useEffect (() => {

        const id = setTimeout(() => {
            onSubmit({
                modifier: modifier.toLowerCase(), formValue: formValue.toLowerCase()
            });
        },1000)

        return () => clearTimeout(id) // Cleans up the setTimeout
    }, [modifier,formValue]);


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
                <FormControl disabled={disabled} >
                    <InputLabel id="demo-simple-select-label">Modifier</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={modifier}
                        label="modifier"
                        onChange={handleModifierChange}
                    >
                        <MenuItem value={' && '}>And</MenuItem>
                        <MenuItem value={' || '}>Or</MenuItem>
                        <MenuItem value={' && !'}>And Not</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="filled-basic" label="Value" variant="filled"
                           value={formValue}
                           onChange={handleValueChange} />
                <IconButton aria-label="delete"
                            sx={{ maxWidth:30, maxHeight:30 }}
                            disabled={disabled}
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