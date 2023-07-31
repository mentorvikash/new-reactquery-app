import React, { useState } from 'react'
// import axios from 'axios'
// import { useQuery } from 'react-query'
import usePostData from '../hooks/usePostData'
import { Link } from 'react-router-dom';
import { useAddNewPost } from '../hooks/usePostData';

// const fetchpostdata = () => {
//   return axios.get('http://localhost:4000/data')
// }

const onSuccess = (data) => {
  console.log("here we can perform our SUCCESS middle method");
}

const onError = (data) => {
  console.log("here we can perform our FAILED middle method");
}


export default function RcApiRequest() {
  
  const [title, setTitle ] = useState()
  const [desc, setDesc ] = useState()


  // const { data, isError, error, isLoading, isFetching, refetch } = useQuery('getdata', fetchpostdata,
  //   {
  //     // staleTime: 30000,
  //     // refetchOnMount: true,  // true | false | always
  //     // refetchOnWindowFocus: true, // true | false | always
  //     // cacheTime: 5000
  //     // refetchInterval: 3000 // default => false 
  //     // refetchIntervalInBackground: true  // default => false | if true then fetch event when window is no focus
  //     // enabled: false,  // if false data will not fetch unless you use refetch
  //     // onSuccess,
  //     // onError,
  //     select: (data) => {
  //       return data.data.map((el) => el.title)
  //     }
  //   })

  const { data, isError, error, isLoading, isFetching, refetch } = usePostData(onSuccess, onError)

  const { mutate: addPost, isLoading: isPostLoding , isError: isPostHaveError, error: postErrorMsg } = useAddNewPost()

  if (isLoading || isFetching) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }

  const handleSubmit = () => {
    
    const newPost = {title, desc} 
    addPost(newPost)
  }

  return (
    <div>
      <h2> RQ Post List</h2>
      <div>
        <input placeholder='enter new one' type='text' value={title} onChange={ (event) => setTitle(event.target.value)} />
        <input placeholder='enter description' type='text' value={desc} onChange={(event) => setDesc(event.target.value)} />
        <button onClick={handleSubmit} >Add New Post</button>
      </div>

      <button onClick={refetch}>Fetch Data</button>
      <ul>
        {data?.data.map(post => (
          <li key={post.id}>
            <Link to={`/single-post/${post.id}`} >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* <ul>
        {data.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul> */}
    </div>
  )
}