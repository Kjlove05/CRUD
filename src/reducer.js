
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
    ],
    newName:"",
    newUrl:""
}


const reducer = (state=initState,action) => {
    switch(action.type){
        case 'DELETE_POST':

            const  id  = action.payload;
            let newPosts =state.posts.filter(post=> post.id !== id);
      
             return {...state, posts: [...newPosts] }
    
        case 'CREATE_POST':
           const {name,url} = action.payload;
           
           const newPost= {
            id:Math.floor(Math.random()*1000),
            name:name,
            url:url
           } 
            return {...state, posts: state.posts.concat(newPost) }           
        case 'UPDATE_POST':
            const{ids,names,urls} =action.played
            const editpost = state.posts.find(post=> post.id !== ids)
            editpost.name=names
            editpost.url=urls
           return{...state}
        default:
            return state
  }
    }



export default reducer