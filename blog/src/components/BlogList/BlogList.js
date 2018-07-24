import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';
import { list } from '../../list.js'
import PostDetails from '../PostDetails/PostDetails'





class BlogList extends Component {

  // getInitialState() {
  //   return {
  //     list
  //   };
  // }

  render() {
    return (
      <div className="BlogList-container">
        <h1 className="BlogList-generalTitle">Blog</h1>
        {list.map((item) =>
          <Link to={"/post-details/" + item.id}>
            <div className="BlogList-wrapper" key={item.id}>
              <h2 className="BlogList-title">{item.title}</h2> 
              <p className="BlogList-author">{item.author}</p>
            </div>
          </Link>)}
      </div>
    );
  }
}

export default BlogList;
