import React from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core/';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const SocialNetworks = () => {
    return (
        <div className="socialNetworks">
            <Box bgcolor="info.main" color="primary.contrastText" >
                <Container>
                    <Grid container direction="row" justifyContent="space-between" bgcolor='primary.main'>
                        <Typography>
                            Get connected with us on social networkas!
                        </Typography>
                        <Grid item xs={1.5}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <WhatsAppIcon />
                            <LinkedInIcon />
                            <InstagramIcon />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </div>
    );
};

export default SocialNetworks;