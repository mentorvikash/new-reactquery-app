// Making use of multiple usequery

import React from 'react'
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSinglePost = (id) => axios.get(`http://localhost:4000/data/${id}`)


export default function RcDynamicParallelquery({postIds}) {

    const results =  useQueries(
        postIds.map(id => {
            return {
                queryKey: ['post-list', id],
                queryFn: () => fetchSinglePost(id) 
            }
        })

    )

    return (
        <>
            <h2>Dynamic Parallel query</h2>
        </>
    )
}
