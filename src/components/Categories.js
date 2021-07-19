import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));


const Categories = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="column">
                <Typography className={classes.root}>Subcategories</Typography>
                <Link href="#">RETURN TO CLOTHING, SHOES, ACCESSORIES</Link>
                <Link href="#">DRESSES</Link>
                <Link href="#">TOPS, TEES & BLOUSES</Link>
                <Link href="#">SWEATERS</Link>
                <Link href="#">FASHION HOODIES & SWEATSHIRTS</Link>
                <Link href="#">JEANS</Link>
            </Grid>
        </div>
    );
};

export default Categories;