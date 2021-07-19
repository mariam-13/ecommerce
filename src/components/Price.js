import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginRight: theme.spacing(1),
            width: '20ch',
        },
    },
}));

const Price = () => {
    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="$ Min" variant="outlined" />
                {/* <Typography>-</Typography> */}
                <TextField id="outlined-basic" label="$ Max" variant="outlined" />
            </form>
        </div>
    );
};

export default Price;