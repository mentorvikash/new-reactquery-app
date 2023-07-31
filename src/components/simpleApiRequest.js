import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function SimpleApiRequest() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  // error state
  const [error, setError] = useState(null)

  // making async request in useeffect
  useEffect(() => {

    setIsLoading(true)
    axios.get('http://localhost:4000/data')
      .then(response => {
        setData(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setIsLoading(false)
        setError(error)
      })
  }, [])

  
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  
  if (error) {
    return <h2>Error: {error.message}</h2>
  }

  return (
    <div>
      <h2> Simple Post List</h2>
      <ul>
        {data?.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
