import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const fetchpostdata = () => {
    return axios.get('http://localhost:4000/data')
}

const addNewPost = (postData) =>{
    return axios.post('http://localhost:4000/data', postData)
}

export default function usePostData(onSuccess, onError) {
    return useQuery('getdata', fetchpostdata,
        {
            onSuccess,
            onError,
            // select: (data) => {
            //     return data.data.map((el) => el.title)
            // }
        })
}

// how to create the data with mutation in react query
export function useAddNewPost () {
    const queryClient = new useQueryClient()
    return useMutation(addNewPost
        ,{
        // onSuccess: (data) =>{
        //     // queryClient.invalidateQueries('getdata')
        //     queryClient.setQueryData('getdata', (oldQueryData) => {
        //         return {
        //             ...oldQueryData,
        //             data: [...oldQueryData.data, data.data]
        //         }
        //     })
        // }

        // here we are going to perform the optmization of code to make our UI looks super fast
        onMutate: (newPost) => {

        },
        onError: () => {},
        onSettled: () => {},
    }
    )
}

// on success, invalidateQueries will set getdata to notvalid mode so it will refeatch the data automatically once again.