import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core/';

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Very Satisfied',
    },
};
function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

const Review = () => {
    return (
        <div>
            <Box mb={3} borderColor="transparent">
                <Typography component="legend">Avg. Customer Review</Typography>
                <Grid container direction="row">
                    <Rating
                        name="customized-empty"
                        defaultValue={4}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                    <Typography>$ UP</Typography>
                </Grid>
                <Grid container direction="row">
                    <Rating
                        name="customized-empty"
                        defaultValue={3}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                    <Typography>$ UP</Typography>
                </Grid>
                <Grid container direction="row">
                    <Rating
                        name="customized-empty"
                        defaultValue={2}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                    <Typography>$ UP</Typography>
                </Grid>
                <Grid container direction="row">
                    <Rating
                        name="customized-empty"
                        defaultValue={1}
                        precision={0.5}
                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    />
                    <Typography>$ UP</Typography>
                </Grid>

            </Box>

        </div>
    );
};

export default Review;