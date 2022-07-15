import React, {Component} from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import About from './About'
import PostPage from './PostPage'

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
    <Switch>
    <Route exact path="/about" component={About}/>
    <Route exact path="/" component={PostPage}/>
    </Switch>
    </div>
    </BrowserRouter>
  );
}
}
export default App;