import {ActionTypes} from './ActionTypes'

export const createPost = () => {
return{
    type: ActionTypes.CREATE_POST,
    payload: {name:'',url: ''}
}};


export const updatePost = () => {
    return{
        type: ActionTypes.UPDATE_POST,
        payload: {name: "",
                url: ""}
    }};

export const deletePost = () => {
    return{
        type: ActionTypes.DELETE_POST,
        payload: {id:""}
    }};