import { useEffect, useState } from 'react';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Grid } from '@material-ui/core/';




const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 141,
    },
    media: {
        height: 140,
    },

}));


const CardBox = () => {
    const [data, setData] = useState();
    useEffect(() => {
        setData([
            {
                imageUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg",
                title: "black denim jacket",
                price: "$89.99"
            },
            {
                imageUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
                title: "Blue denim shirt",
                price: "$99.99"
            },
            {
                imageUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
                title: "Red hoodie",
                price: "$35.99"
            },
            {
                imageUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg",
                title: "Grey sweater",
                price: "$21.99"
            }, ,
            {
                imageUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
                title: "Red hoodie",
                price: "$35.99"
            }
            ,
            {
                imageUrl: "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
                title: "Blue denim shirt",
                price: "$99.99"
            }

        ]
        )
    }, [])
    const classes = useStyles();
    console.log("data", data);
    return (
        <>
            {
                data && (
                    <div>
                        <Grid container direction="row">
                            {data.map((el, index) => (

                                <div className="cards" >
                                    <Card className={classes.root}>
                                        <CardMedia
                                            className={classes.media}
                                            image={el.imageUrl}
                                            title="Contemplative Reptile"
                                        />
                                    </Card>
                                    <Typography variant="h6" component="h2" align="center">
                                        {el.title}
                                    </Typography>
                                    <Typography variant="body2" component="p" align="center">
                                        {el.price}

                                    </Typography>
                                </div>
                            ))}
                        </Grid>
                    </div>

                )
            }

        </>
    );
};

export default CardBox;