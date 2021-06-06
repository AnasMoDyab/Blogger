import React from 'react';
import NavDrawer from '../component/NavDrawer';
import { makeStyles } from '@material-ui/core/styles';
import BlogEditor from './../component/BlogEditor';
import { Route, Switch } from 'react-router-dom';
import ListBlogger from './ListBlogger';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <NavDrawer />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Route exact path="/" component={BlogEditor} />
                    <Route path="/listBlogger" component={ListBlogger} />
                </Switch>

            </main>

        </div>
    );
}

export default Home;