import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
// import usePostData from '../hooks/usePostData'
import useSinglePostData from '../hooks/useSinglePostData'

const fetchSinglePostData = (queryKey) => {

  return axios.get(`http://localhost:4000/data/${queryKey[1]}`)
}

export default function RQsingleBlog() {

  const { postId } = useParams()

  const { isLoading, isError, error, data } = useSinglePostData(postId)

  if (isLoading) return <div>Loading...</div>
  
  if (isError) return <div>{error.message}</div>
  
  if (!data.data) {
    return (
      <div> NO POST DATA FOUND</div>
    )
  }

  return (
    <div>
      <h1>{data.data.title}</h1>
      <p>{data.data.content}</p>
    </div>
  )
}
