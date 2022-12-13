/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import usePost from '../../utils/usePost'
const SinglePost = ({postId,setPostId}) => {
    const {status,data,error,isFetching}=usePost(postId)
  return (
    <div>
        <div>
        <a onClick={() => setPostId(-1)} href="#">
          Back
        </a>
      </div>
      {!postId || status==="loading"?(
        "Loading..."
      ):status==="error"?(
        <span>Error {error.message}</span>
      ):(
        <>
        <div>
        <h1>{data.title}</h1>
        <p>{data.body}</p>
        </div>
        <div>{isFetching ? "Background Updating..." : " "}</div>
        </>
      )}
    </div>
  )
}

export default SinglePost