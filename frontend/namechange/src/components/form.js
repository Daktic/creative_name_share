import React, {useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, Paper, TextField} from '@mui/material';
import FormValue from "./FormValue";

const FormPiece = () => {
    let boxHeight = 100;
    const [forms, setForms] = useState([
        <FormValue />
    ])
    const [cards, setCards] = useState(forms)

    const handleClick = ({target}) => {
        if (target.name === 'Or') {
            setCards(prev => [
                ...prev,
                FormBox
            ])
        } else {
            boxHeight += 100;
            setForms(prev => [
                ...prev,
                <TextField id={(forms.length + 1).toString()} label="Value" variant="outlined"
                           sx={{
                               alignSelf: 'center',
                               mx: 'auto',
                               my: 'auto'
                           }}/>
            ])
        }
    }

// I bet if I make this a child, i can pass props down to only show
    // 1 array of Forms in the box at a time
    // On the parent component I could increment.

    const FormBox = (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                alignSelf: 'center',
                '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: {boxHeight},
                },
            }}
        >
            <Paper elevation={3}>
                {forms.map((form, index) => (
                    <div key={index} >
                        {form}
                    </div>
                ))}
            </Paper>
        </Box>
    )

    useEffect(() => {
        setCards([FormBox])
    },[forms])


    return (
            <div>
                {cards.map((card, index) => (
                    <div key={index} >
                        {card}
                    </div>
                ))}
            <ButtonGroup variant="contained" aria-label="outlined primary button group" >
                <Button
                    name={"And"}
                    value={"&&"}
                    onClick={handleClick} >And</Button>
                <Button
                    name={"Or"}
                    value={"||"}
                    onClick={handleClick} >Or</Button>
                <Button
                    name={"And Not"}
                    value={"&& !"}
                    onClick={handleClick} >And Not</Button>
            </ButtonGroup>
        </div>

    )
}

export default FormPiece;