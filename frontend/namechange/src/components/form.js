import React, {useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, Paper, TextField} from '@mui/material';

const FormPiece = () => {
    let boxHeight = 100;
    const [forms, setForms] = useState([
        <TextField id="1" label="Value" variant="outlined"
                   sx={{
                       alignSelf: 'center',
                       mx: 'auto',
                       my: 'auto'
                   }}/>
    ])
    const [cards, setCards] = useState(forms)

    const handleClick = ({target}) => {
        if (target.name === 'Or') {
            setCards(prev => [
                ...prev,
                <TextField id={(forms.length + 1).toString()} label="Value" variant="outlined"
                           sx={{
                               alignSelf: 'center',
                               mx: 'auto',
                               my: 'auto'
                           }}/>
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