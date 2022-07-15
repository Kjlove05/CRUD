import {ActionTypes} from './ActionTypes'

export const createPost = (name,url) => {
return{
    type: ActionTypes.CREATE_POST,
    payload: {
        name:name,
        url:url,
      
    }
}};

export const updatePost = (ids,names,urls) => {
    return{
        type: ActionTypes.UPDATE_POST,
        payload: {id:ids,
            name:names ,
                url:urls }
    }};

export const deletePost = (id) => {
    return{
        type: ActionTypes.DELETE_POST,
        payload: id
    }};