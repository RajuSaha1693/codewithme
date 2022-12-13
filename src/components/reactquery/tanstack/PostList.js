import React, { useState } from 'react'
import TanPost from './TanPost';
import SinglePost from './SinglePost';
export const PostList = () => {
    const [postId,setPostId]=useState(-1);

  return (
    <>
    {postId>-1 ? (
      <SinglePost postId={postId} setPostId={setPostId}/>
    ):(
      <TanPost setPostId={setPostId}/>
    )}
   
    </>
  )
}
