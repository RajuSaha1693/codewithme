import React from 'react'
import Posts from './post/Posts';
import Post from './post/Post';
import Container  from '@mui/material/Container';
import Box from '@mui/material/Box';

function ReactQuery() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 2 }}>
        <Post/>
        <Posts/>
      </Box>
    </Container>
  )
}

export default ReactQuery