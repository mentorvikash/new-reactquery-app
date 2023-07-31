// infinite loading button with react quary

import React from 'react'
import { useInfiniteQuery } from 'react-query'
import axios from 'axios'

const fetchColors = ({ pageParam = 1 }) => {

    return axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)
}

export default function InfiniteColors() {

    const { data, isLoading, isError, error, hasNextPage , fetchNextPage , isFetching, isFetchingNextPage  } = useInfiniteQuery('infiniteColors', fetchColors, 
    {
        getNextPageParam: (_lastPage, pages) => {
            
            if (pages.length < 5) {
                return pages.length + 1
            } else {
                return undefined;
            }
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }

    // console.log({data})

    return (
        <>
            {
                data?.pages?.map((group, index) => {
                    console.log({group})
                    return <div key={index} style={{ color: 'red' }} >{
                        group.data.map(color =>(
                            <div key={color.id}>{color.color}</div>
                        ))
                    }</div>
                })
            }
            <div>
                <button disabled={!hasNextPage} onClick={fetchNextPage} >
                    Load More
                </button>
                <div>{isFetching && !isFetchingNextPage ? 'fetching...' : null }</div>
            </div>
        </>
    )
}


// NOTE

// hasNextPage - is used to check if next page exist?
// fetchNextPage - will trigger the react query for the next page.
// isFetchingNextPage - will return true if next page exist and is fetching data.
// getNextPageParam - used to generate thex page number you want to pass into your api request
// pageParam - getNextPageParam always update the value of pageParam (not pageparams)