import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function NumberDropdown(inputId, inputLabel, labelId, selectId, rangeUpto, value) {
  const [number, setNumber] = React.useState('');

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <FormControl variant='filled'>
        <InputLabel id={inputId}>{inputLabel}</InputLabel>
      <Select
        labelId={labelId}
        id={selectId}
        value={number}
        label="Number"
        onChange={handleChange}
      >
        {[...Array(rangeUpto).keys()].map((num) => (
          <MenuItem key={num + 1} value={num + 1}>
            {num + 1}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default NumberDropdown;