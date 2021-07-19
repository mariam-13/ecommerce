import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const Search = () => {
    return (
        <div>
            <Typography>
                Filters
            </Typography>
            <Input></Input>
            <Button variant="contained">Search</Button>
        </div>
    );
};

export default Search;