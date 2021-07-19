import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const PriceRadio = () => {
    const [value, setValue] = React.useState('Unser $25');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Price</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                    <FormControlLabel value="UNDER $25" control={<Radio />} label="UNDER $25" />
                    <FormControlLabel value="$25 to $50" control={<Radio />} label="$25 to $50" />
                    <FormControlLabel value="$50 to $100" control={<Radio />} label="$50 to $100" />
                    <FormControlLabel value="$100 to $200" control={<Radio />} label="$100 to $200" />
                    <FormControlLabel value="$200 & ABOVE" control={<Radio />} label="$200 & ABOVE" />
                </RadioGroup>
            </FormControl>

        </div>
    );
};

export default PriceRadio;