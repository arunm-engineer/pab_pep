import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { makeStyles, Card, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';


function Home(props) {
    const useStyles = makeStyles({
        root: {
            display: "flex",
            justifyContent: "space-around",
            height: "calc( 100vh - 7rem )",
            alignItems: "center"
        },
        card: {
            width: "30vw",
            height: "60vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        cardMedia: {
            width: "20vw",
            height: "35vh",
            margin: "auto"
        },

    })

    const classes = useStyles();
    const { Product, Cart } = props;
    return (
        <div className={classes.root}>
            {
                Product.map(product => {
                    return (
                        <Card className={classes.card}>
                                <CardMedia
                                className={classes.cardMedia}
                                image={product.image}
                                />
                                <CardContent>
                                    <Typography variant="h4">{product.title}</Typography>
                                    <Typography variant="h5" color="textSecondary">Rs. {product.price}</Typography>
                                    <CardActions>
                                        <Button variant="outlined" color="primary">View Product</Button>
                                        <Button variant="outlined" color="secondary"
                                        onClick={() => props.addItem(product)}>Add to Cart</Button>
                                    </CardActions>
                                </CardContent>
                        </Card>
                    )
                })
            }
        </div>
    )
}

const mapToStateProps = (store) => {
    return store;
}

const mapDispatchToProps = (dispatch)  => {
    return {
        addItem: (item) => {
            return dispatch({type: "add_item", payload: item});
        }
    }
}

export default connect(mapToStateProps, mapDispatchToProps)(Home);