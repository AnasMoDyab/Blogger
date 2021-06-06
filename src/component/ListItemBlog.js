import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '100ch',
        justifyItems: 'center',
        backgroundColor: theme.palette.background.paper,
    },

}));
const ListBlog = () => {
    const classes = useStyles();
    return (


        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    read More
        </Button>
                <Button size="small" color="primary">
                    Edit Blog
        </Button>
            </CardActions>
        </Card>
    )
}

export default ListBlog;