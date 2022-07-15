import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deletePost,createPost,updatePost} from './actions'

class Update extends Component {
    post = this.props.post

    
    state ={
        updateName:'',
        updateUrl:''
    }

    handleUpdateName = (e) => {
        this.setState({
            updateName: e.target.value
    })}
    handleUpdateUrl =(e) => {
        this.setState({
            updateUrl: e.target.value
        })
    }
    handleUpdate = (names,urls,ids) => {
        this.props.updatePost(names,urls,ids)
        this.setState({
            updateName:'',
            updateUrl:''
        })
       

    }
    handleDelete= (id) =>{
        this.props.deletePost(id);   
    }


render(){
                return(
                    <div className="post card" key={this.post.id}>
                        <div className="card-content">
                            <span className="card-title red-text">{this.post.name}</span>
                            <p>{this.post.url}</p>
                            <button key={this.post.id}className="btn red" onClick={() =>{
                                 console.log(this.post.id)
                                 this.handleDelete(this.post.id)}}>
                                 Delete Post
                            </button>
                            <div>
                                <input type='text' placeholder="Name..." value={this.state.updateName} onChange= {this.handleUpdateUrl}/>
                                <input type='text' placeholder="Url..." value={this.state.updateUrl} onChange={this.handleUpdateUrl}/>
                             </div>
                            <button key={this.post.id} className="btn blue" onClick={()=>{
                            console.log(this.post.id)
                            this.handleUpdate(this.state.updateName,this.state.updateUrl,this.post.id)}}>
                                 Update Post
                            </button>
                
                        </div>
                    </div>
                )
                            }}
     




class PostPage extends Component {
    state = {
        newName:'',
        newUrl:'',
      
    }

    handleAdd= (name,url) =>{
        this.props.createPost(name,url);
        this.setState({
            newName:'',
            newUrl:''
        })
       
    }
    handleName = (e) => {
        this.setState({
            newName: e.target.value
    })}
    handleUrl =(e) => {
        this.setState({
            newUrl: e.target.value
        })
    }


    
    render(){
        console.log(this.props)
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post => 
            <Update post={post}/>))
                
         : (
           <div className="center"> No posts yet</div> 
        )
  
      
            
    return(
        <div>
                <h4 className="center">PostPage</h4>
                {postList}
              
                <div>
                <input type='text' placeholder="Name..." value={this.state.newName} onChange={this.handleName} />
                <input type='text' placeholder="Url..." value={this.state.newUrl} onChange={this.handleUrl}/>
                </div>
                <button className="btn green"  onClick={()=>this.handleAdd(this.state.newName,this.state.newUrl)}  >
                       ADD POST
                </button>
   
                
        </div>
    )
    
    }
}

const mapStateToProps = (state) =>{  
    return{
        posts:state.posts,
      
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id)=> dispatch(deletePost(id)),
        createPost: (name,url) =>dispatch(createPost(name,url)),
        updatePost: (names,urls,ids) =>dispatch(updatePost(names,urls,ids))

    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(PostPage)