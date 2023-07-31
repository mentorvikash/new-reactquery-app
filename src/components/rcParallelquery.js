// Making use of multiple usequery

import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'


const fetchpostlist = () => {
    return axios.get('http://localhost:4000/data')
}

const fetchfriendslist = () => {
    return axios.get('http://localhost:4000/friends')
}

export default function RcParallelquery() {
    const { data: postlist } = useQuery('postlist', fetchpostlist)
    const { data: friendslist } = useQuery('friendslist', fetchfriendslist)

    
    return (
        <>
            <h2>Friends</h2>
            <div>
                {
                    friendslist?.data && friendslist?.data?.map(friend => {
                        return (
                            <div key={friend.id}>
                                {friend.name}
                            </div>
                        )
                    })
                }
            </div>
            <h2>Post</h2>
            <div>
                {
                    postlist?.data && postlist?.data?.map(post => {
                        return (
                            <div key={post.id}>
                                {post.title}
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
