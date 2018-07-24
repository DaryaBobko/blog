import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';
import PostsService from '../../list.js'
import Form from '../Form/Form';

class BlogList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isShowForm: false
    }
  }

  openPostForm = () => {
    this.setState({isShowForm: true,});
  }

  onAdd = () => {
    this.forceUpdate();
  }

  render() {
    return (
      <div className="BlogList-container">
        <h1 className="BlogList-generalTitle">Blog</h1>
        {PostsService.getPosts().map((item) =>
          <Link key={item.id} to={"/post-details/" + item.id}>
            <div className="BlogList-wrapper" >
              <div>
                <h2 className="BlogList-title">{item.title}</h2> 
                <p className="BlogList-author">{item.author}</p>
              </div>
              <span className="BlogList-date">{item.datetime.getDate() + "/" + item.datetime.getMonth() + "/" + item.datetime.getFullYear()}</span>
            </div>
          </Link>)}
          <button onClick={this.openPostForm} type="button" className="btn btn-info BlogList-button">Add</button>
          {this.state.isShowForm &&
            <Form onAdd={this.onAdd}/>
          }
      </div>
    );
  }
}

export default BlogList;
