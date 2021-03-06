import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import PostDetails from './components/PostDetails/PostDetails';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path='/' component={App}/>
      <Route path='/post-details/:id' component={PostDetails}/>
    </div>
  </BrowserRouter>,
document.getElementById('root'));
