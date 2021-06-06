import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles((theme) => ({

    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },

    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));
const BlogEditor = (props) => {
    const classes = useStyles();
    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );

    const postBlog = () => {
        console.log(editorState.getCurrentContent().getPlainText());
    }
    return (
        <div>
            <h1>Add Blog</h1>
            <div className={classes.toolbar}>
                <Fab
                    variant="extended"
                    size="small"
                    color="secondary"
                    aria-label="add"
                    className={classes.margin}
                    onClick={postBlog}
                >
                    Post blog
          <ArrowForwardIcon className={classes.extendedIcon} />
                </Fab>
            </div>
            <div style={{ border: "1px solid black", padding: '2px', minHeight: '400px' }}>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={editorState => setEditorState(editorState)}

                />
            </div>
        </div>
    )
}

export default BlogEditor;