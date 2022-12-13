import React,{useState} from 'react'
import axios from 'axios'
import {useMutation} from 'react-query'
import  TextField  from '@mui/material/TextField';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
function Post() {
    const [title,setTitle]=useState('');
    const [message,setMessage]=useState('');
    const [description,setDescription]=useState('');

    const {isLoading,isError,error,mutate}=useMutation(createPost,{retry:3})

    async function createPost(){
        const response=await axios.post('https://jsonplaceholder.typicode.com/posts')
        setMessage(response.data)
    }

  return (
    <div>
      <Paper style={{padding:'10px'}}>
        <TextField 
        id="name" 
        label="Title" 
        name="title" 
        variant="outlined" 
        onChange={(e)=>setTitle(e.target.value)} 
        value={title}
        style={{width:'100%',margin:'5px'}}/>
        <TextField 
        id="description" 
        label="Description" 
        variant='outlined' 
        name='description' 
        value={description} 
        onChange={(e)=>setDescription(e.target.value)} 
        style={{width:'100%',margin:'5px'}}/>
        <Button 
        onClick={()=>{mutate({id:Date.now,title,description})}}
        variant="contained"
        >Create</Button>
        </Paper>
        <p> Created a new Post ID: {message && message.id}</p>
        <div>
            {isLoading? 'Saving':''}
            {isError ? error.message:''}
        </div>
    </div>
  )
}

export default Post