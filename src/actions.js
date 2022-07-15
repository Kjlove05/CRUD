import {ActionTypes} from './ActionTypes'

export const createPost = (name,url) => {
return{
    type: ActionTypes.CREATE_POST,
    payload: name,url
}};


export const updatePost = (name,url) => {
    return{
        type: ActionTypes.UPDATE_POST,
        payload: name,url
    }};

export const deletePost = (id) => {
    return{
        type: ActionTypes.DELETE_POST,
        payload: {id:id}
    }};