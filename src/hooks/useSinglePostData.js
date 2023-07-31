import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'

const fetchSinglePostData = ({ queryKey }) => {
    return axios.get(`http://localhost:4000/data/${queryKey[1]}`)
}

export default function useSinglePostData(postId) {

    const queryClient = useQueryClient() // here query client now have access to cache data
    
    return useQuery(['single_post', postId], fetchSinglePostData, {
        initialData: () => {
            const posts  = queryClient?.getQueryData('getdata')?.data?.find(post => post.id === parseInt(postId) )

            if (posts) {
                return {
                    data: posts 
                }
            }else{
                return undefined
            }
        } 
    })
}
