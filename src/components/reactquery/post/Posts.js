import React from 'react'
import {useQuery} from 'react-query';
import axios from 'axios';
import Grid from '@mui/material/Grid'
import Paper  from '@mui/material/Paper';
function Posts() {
    async function fetchPosts(){
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data
    }
    const {data,error,isError,isLoading}=useQuery('posts',fetchPosts)
    if(isLoading){
        return <>Is Loading..</>
    }
    if(isError){
        return <>Some thing went wrong!! {error.message}</>
    }
    return (
        <Grid container spacing={2}>
        {data.map((post,index)=>(
            <Grid item xs={6} key={index}>
            <Paper style={{textAlign:'left',padding:'5px',borderRadius:'10px',height:'100%'}}>
                <b style={{textTransform:'capitalize'}}>{post.title}</b>
                <p>{post.body}</p>
            </Paper>
            </Grid>
        ))}
        </Grid>
    )
}

export default Posts