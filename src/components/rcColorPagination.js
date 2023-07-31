import React, {useState} from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

const fetchColors = ({queryKey}) => {
  
  return axios.get(`http://localhost:4000/colors?_limit=${queryKey[2]}&_page=${queryKey[1]}`)
}

export default function RcColorPagination() {
  
  const [pageNum, setPageNum] = useState(1)
  const [pageLimit] = useState(2)
  
  const { data, isError, error, isLoading, isFetching } = useQuery(['getcolor', pageNum, pageLimit], fetchColors, {
    keepPreviousData: true,
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>{error.message}</p>
  }
  
  return (
    <div>
      <h2> RQ Color List</h2>
      <ul>
        {data?.data.map(el => (
          <li key={el.id}>
              {el.color}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={ () => setPageNum(prev => prev - 1)} disabled={ pageNum == 1 && true}  >Prev</button>
        <button onClick={() => setPageNum(prev => prev + 1) } disabled={ pageNum == 5 && true}  >Next</button>
      </div>
      {isFetching && <p>Loding.....</p>}
    </div>
  )
}