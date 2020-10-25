import React,{useState} from 'react';
import axios from 'axios';

import { Grid, TextField, Button, makeStyles, Paper } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    },
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))



const Post = () => {
    const classes = useStyle();
    const [title, setTitle] = useState('');

    const onSubmitHandle = async(e) => {
        e.preventDefault();

        await axios.post('http://localhost:4000/posts', {
            title
        });

        setTitle('');
    };

    return <div>
            <Paper className={classes.pageContent}>
                <form className={classes.root} onSubmit={onSubmitHandle}>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField variant='outlined' label='Title' value={title} onChange={e => setTitle(e.target.value)}/>  
                        </Grid>
                    </Grid>
                <Button variant='contained' color='primary' type='submit' size='large'>Submit</Button>                     
                </form>
            </Paper>
        </div>;
};
export default Post;