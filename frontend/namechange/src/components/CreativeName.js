import TextField from '@mui/material/TextField';



const CreativeName = (props) => {
    const {onChange} = props;

    const handleChange = ({target}) => {
        onChange(target.value.toLowerCase())
    }


    return (
        <div >
            <h3>Input The Desired creative name <span>
                <TextField label="Target Creative Name" defaultValue="Creative Name" variant="filled" color="success" focused
                onChange={handleChange} />
            </span></h3>

        </div>
    )
}

export default CreativeName;