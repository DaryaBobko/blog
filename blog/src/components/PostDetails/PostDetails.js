import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PostDetails.css';
import PostsService from '../../list.js';

class PostDetails extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      post: PostsService.getPosts().find(x => x.id === +props.match.params.id),
      isShowForm: false
    }
  }

  deletePost = () => {
    PostsService.deletePost(this.state.post);

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="PostDetails-main">
        <div className="PostDetails-container">
          <div className="PostDetails-flex">
            <h1 className="PostDetails-title">{this.state.post.title}</h1>
            <span>{this.state.post.datetime.getDate() + "/" + this.state.post.datetime.getMonth() + "/" + this.state.post.datetime.getFullYear()}</span>
          </div>
          <p className="PostDetails-text"> {this.state.post.text}</p>
          <p className="PostDetails-author">{this.state.post.author}</p>
          <div className="PostDetails-wrapper-button">
            <Link to="/" className="btn btn-info">Return</Link>
            <button onClick={this.deletePost} type="button" className="btn btn-info">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PostDetails;
