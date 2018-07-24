import React, { Component } from 'react';
import './Form.css';
import PostsService from '../../list'

class Form extends Component {

  constructor(props){
    super(props);

    this.state = {
      newPostTittle: "",
      newPostAuthor: "",
      newPostContent: ""
    }
  }

  addPost = (e) =>  {
    e.preventDefault();
    PostsService.addNewPost(this.state.newPostTittle, this.state.newPostAuthor, this.state.newPostContent);
    this.props.onAdd();
  }

  tittleInput = (e) => {
    this.setState({
      newPostTittle: e.target.value
    });
  }

  authorInput = (e) => {
    this.setState({
      newPostAuthor: e.target.value
    });
  }

  contentInput = (e) => {
    this.setState({
      newPostContent: e.target.value
    });
  }



  render() {
    return (
      <form className="Form-form">
      <label className="Form-title">Fill in the data</label>
        <input onChange={this.tittleInput} type="text" className="form-control" required placeholder="Title"/>
        <input onChange={this.authorInput} type="text" className="form-control" placeholder="Author"/>
        <textarea onChange={this.contentInput} className="form-control" rows="3" required></textarea>
        <button onClick={this.addPost} className="btn btn-info">Save</button>
      </form>
    );
  }
}

export default Form;