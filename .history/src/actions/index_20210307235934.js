import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts=async()=>{
  return async function(dispatch,getState){
    const response=await jsonplaceholder.get('/posts')
    dispatch({type:'FETCH_POSTS',payload:response})
  }
} 

