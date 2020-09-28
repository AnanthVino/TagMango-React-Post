import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreatePost from './components/create-post';
import PostView from './components/view-post'
import Header from './container/header';
import Home from './components/home';
import './App.css';

const App = () => {
  return (
    <div className="App">
       <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/post" component={PostView} />
            <Route path="/create-post/:id" component={CreatePost} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
