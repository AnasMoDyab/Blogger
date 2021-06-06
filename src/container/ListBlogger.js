import React from 'react';
import ListItemBlog from './../component/ListItemBlog';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

const ListBlogger = () => {
    const classes = useStyles()

    return (
        <>
            <h1>List Blogger</h1>
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {['', " ", " "].map((text, index) => (
                        <Grid item xs={12} sm={6} md={4} >
                            <ListItemBlog key={index} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>
    )

}

export default ListBlogger;