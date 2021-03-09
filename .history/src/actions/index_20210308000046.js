import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts=async()=>{
  return async (dispatch)=>{
    const response=await jsonplaceholder.get('/posts')
    dispatch({type:'FETCH_POSTS',payload:response})
  }
} 

