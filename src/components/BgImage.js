import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    bgImage: {
        height: '400px',
    }
}));

const BgImage = () => {
    const classes = useStyles();
    return (
        <div>
            <CardMedia className={classes.bgImage}
                image="https://mdbootstrap.com/img/Photos/Others/clothes(5)-crop.jpg"
            />
        </div >
    );
};

export default BgImage;