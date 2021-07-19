import React from 'react';
import { borders } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { getRoles } from '@testing-library/react';
import { Grid } from '@material-ui/core/';


const defaultProps = {
    m: 1,
    border: 1,
    style: { width: '36px', height: '36px' },
};

const Colors = () => {
    return (
        <div>
            <Typography>Colors</Typography>
            <Grid container direction="row">

                <Box borderRadius="50%" bgcolor="info.contrastText" borderColor="grey.500" {...defaultProps} />
                <Box borderRadius="50%" bgcolor="grey.700" borderColor="grey.700" {...defaultProps} />
                <Box borderRadius="50%" bgcolor="common.black" borderColor="common.black" {...defaultProps} />
                <Box borderRadius="50%" bgcolor="success.main" borderColor="success.main" {...defaultProps} />
                <Box borderRadius="50%" bgcolor="primary.main" borderColor="primary.main" {...defaultProps} />
                <Box borderRadius="50%" bgcolor="error.dark" borderColor="error.dark" {...defaultProps} />
                <Box borderRadius="50%" bgcolor="warning.light" borderColor="warning.light" {...defaultProps} />
            </Grid>
        </div>
    );
};

export default Colors;