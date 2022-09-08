import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export const ItemCantidad = ({ cantidad }) => {

    const options = []
    console.log(options)
    const CargaOp = (options) => {
        for (let i = 1; i < cantidad; i++) {
            options.push(`${i}`)
        };

    }

    CargaOp(options)

    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');




    return (
        <div>
            <br />
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                id="controllable-states-demo"
                options={options}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="Cantidad" />}
            />
        </div>
    );
}