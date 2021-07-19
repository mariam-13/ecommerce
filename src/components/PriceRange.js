import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    input: {
        width: 42,
    },
});

const PriceRange = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.root}>
            <Typography id="input-slider" gutterBottom>
                Price
            </Typography>
            <Grid item xs>
                <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                />
                <Grid container direction="row" justifyContent="space-between">
                    <Typography>
                        $0
                    </Typography>
                    <Typography>
                        $100
                    </Typography>
                </Grid>

            </Grid>
        </div>
    );
};

export default PriceRange;