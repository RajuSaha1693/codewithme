import React from 'react'
import Container  from '@mui/material/Container';
import Box from '@mui/material/Box';
import { PostList } from './tanstack/PostList';
function TanStack() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 2 }}>
       <PostList/>
      </Box>
    </Container>
  )
}

export default TanStack