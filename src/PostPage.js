import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {deletePost} from './actions'




class PostPage extends Component {
   
    handleDelete= () =>{
       
        this.props.deletePost(this.props.id);
        
        
    }
    render(){
        console.log(this.props)
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                        <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.name}</span>
                            </Link>
                            <p>{post.url}</p>
                            <button key={post.id}className="btn red" onClick={() =>{this.handleDelete(post.id)}}>
                                 Delete Post
                            </button>
                            <button className="btn blue" onClick={this.handleChange}>
                                 Update Post
                            </button>
                
                        </div>
                    </div>
                )
            })
        ) : (
           <div className="center"> No posts yet</div> 
        )
       
     
            
    return(
        <div>
                <h4 className="center">PostPage</h4>
                {postList}
              
                <div>
                <input type='text' placeholder="Name..."/>
                <input type='text' placeholder="Url..."/>
                </div>
                <button className="btn green" onClick={this.handleClick}>
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
        deletePost: (id)=> dispatch(deletePost(id))
    }
}
export default connect(mapStateToProps ,mapDispatchToProps)(PostPage)