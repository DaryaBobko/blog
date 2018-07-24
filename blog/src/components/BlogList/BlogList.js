import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';
import { list } from '../../list.js'
import PostDetails from '../PostDetails/PostDetails'

class BlogList extends Component {

  render() {
    return (
      <div className="BlogList-container">
        <h1 className="BlogList-generalTitle">Blog</h1>
        {list.map((item) =>
          <Link key={item.id} to={"/post-details/" + item.id}>
            <div className="BlogList-wrapper" >
              <h2 className="BlogList-title">{item.title}</h2> 
              <p className="BlogList-author">{item.author}</p>
              <span>{item.datetime.getDate() + "/" + item.datetime.getMonth() + "/" + item.datetime.getFullYear()}</span>
            </div>
          </Link>)}
      </div>
    );
  }
}

export default BlogList;
