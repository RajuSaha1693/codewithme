import axios from 'axios'
import { useQuery } from 'react-query'
const usePost = (postId) => {
    const getPostById=async(id)=>{
        const {data}=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return data
    }

  return (
    useQuery({
        queryKey:["post",postId],
        queryFn:()=>getPostById(postId),
        enabled:!!postId
    })
  )
}

export default usePost