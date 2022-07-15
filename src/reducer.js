import {ActionTypes} from './ActionTypes'
const initState = {
    posts:[
        {
          
            id: '1',
            name: "bulbasaur",
            url: "https://pokeapi.co/api/v2/pokemon/1/"
            },
            {
       
            id: '2',
            name: "ivysaur",
            url: "https://pokeapi.co/api/v2/pokemon/2/"
            },
            {
            
            id: '3',
            name: "venusaur",
            url: "https://pokeapi.co/api/v2/pokemon/3/"
            },
    ]
}


const reducer = (state=initState,action) => {
    switch(action.type){
        case 'DELETE_POST':
            const { id } = action.payload;
            let newPosts =state.posts.filter(post=> post.id !== id);
      
             return {...state, posts: [...newPosts] }
    
        case 'ADD_POST':
        case 'UPDATE_POST':
        default:
            return state
  }
    }



export default reducer