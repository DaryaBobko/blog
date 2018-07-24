import React, { Component } from 'react';
import './PostDetails.css';
import { list } from '../../list.js';

class PostDetails extends Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      post: list.find(x => x.id == +props.match.params.id)
    }
  }

  deletePost = () => {
    const index = list.indexOf(this.state.post);

    list.splice(index, 1);

    this.props.history.push('/');
  }

  render() {
    return (
      <div className="PostDetails-container">
      <div className="PostDetails-flex">
        <h1 className="PostDetails-title">{this.state.post.title}</h1>
        <span>{this.state.post.datetime.getDate() + "/" + this.state.post.datetime.getMonth() + "/" + this.state.post.datetime.getFullYear()}</span>
      </div>
        
        <p className="PostDetails-text"> {this.state.post.text}</p>
        <p className="PostDetails-author">{this.state.post.author}</p>
        <button onClick={this.deletePost}>Delete</button>
      </div>
    );
  }
}

export default PostDetails;
