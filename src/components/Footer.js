import React from 'react';
import { Grid } from '@material-ui/core/';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import MapIcon from '@material-ui/icons/Map';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
    },
}));


const Footer = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return (
        <div>

            <Box bgcolor="warning.contrastText" color="primary.contrastText">
                <Container>

                    <Grid container direction="row">
                        <Grid item xs={3}>
                            <Typography variant="h6" >
                                About me
                            </Typography>
                            <Typography variant="h7">
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" className={classes.root}>
                                Products
                            </Typography >
                            <Grid container direction="column">
                                <Link href="#" onClick={preventDefault}>
                                    MDBootstrap
                                </Link>
                                <Link href="#" onClick={preventDefault}>
                                    MDWordPress
                                </Link>
                                <Link href="#" onClick={preventDefault}>
                                    BrandFlow
                                </Link>
                                <Link href="#" onClick={preventDefault}>
                                    Bootstrap Angular
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" className={classes.root}>
                                Useful links
                            </Typography>
                            <Grid container direction="column">
                                <Link href="#" onClick={preventDefault}>
                                    Your Account
                                </Link>
                                <Link href="#" onClick={preventDefault}>
                                    Become an Affiliate
                                </Link>
                                <Link href="#" onClick={preventDefault}>
                                    Shipping Rates
                                </Link>
                                <Link href="#" onClick={preventDefault}>
                                    Help
                                </Link>

                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" className={classes.root}>
                                Contacts
                            </Typography>
                            <Grid container direction="column">
                                <Grid container direction="row">
                                    <MapIcon />
                                    <Link href="#" onClick={preventDefault}>
                                        New York, Avenue Street 10
                                    </Link>

                                </Grid>
                                <Grid container direction="row">
                                    <PhoneIcon />
                                    <Link href="#" onClick={preventDefault}>
                                        042 876 836 908
                                    </Link>
                                </Grid>
                                <Grid container direction="row">
                                    <MailOutlineIcon />
                                    <Link href="#" onClick={preventDefault}>
                                        company@example.com
                                    </Link>

                                </Grid>
                                <Grid container direction="row">
                                    <AccessTimeIcon />
                                    <Link href="#" onClick={preventDefault}>
                                        Monday - Friday: 10-17
                                    </Link>
                                </Grid>


                            </Grid>
                        </Grid>

                    </Grid>
                </Container>
            </Box>

        </div>
    );
};

export default Footer;