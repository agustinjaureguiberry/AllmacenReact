import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export const ItemCantidad = ({ cantidad, onSelect }) => {

    const handleSelect = (event) => {
        onSelect(event)
    }

    const options = []

    const CargaOp = (options) => {
        if (cantidad > 1) {
            for (let i = 1; i <= cantidad; i++) {
                options.push(`${i}`)
            };
        }
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
                    newValue ? handleSelect(parseInt(newValue)) : handleSelect(1);
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