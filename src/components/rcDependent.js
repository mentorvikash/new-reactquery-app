// Making use of multiple usequery

import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchCoureKey = (email) =>{
    return axios.get(`http://localhost:4000/user-data/${email}`,)
}

const fetchCourses = (tokendString) =>{
    return axios.get(`http://localhost:4000/getCourses/${tokendString}`,)
}

export default function RcDependent({email}) {
    const {data: usedata } = useQuery(['depedentReq', email], () => fetchCoureKey(email) )
    
    const tokenString = usedata?.data.tokendString

    const {data: courses } = useQuery(['courses', tokenString], () => fetchCourses(tokenString), {enabled: !!tokenString})

    return (
        <>
            <h2>Dependendent Request</h2>
        </>
    )
}
