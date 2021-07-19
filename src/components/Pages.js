import React from 'react';
import ViewListIcon from '@material-ui/icons/ViewList';
import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import { Grid } from '@material-ui/core/';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const Pages = () => {
    return (
        <div>
            <Grid container direction="row" >
                <Box ml="88px">
                    <ViewListIcon />
                    <ViewQuiltIcon />
                </Box>
                <Box ml="164px">
                    <Typography>Label example</Typography>
                </Box>
                <Box ml="106px">
                    <Pagination count={3} color="primary" />
                </Box>

            </Grid>
        </div>
    );
};

export default Pages;