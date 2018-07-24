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

  tittleInput = (e) => {
    this.changeState('newPostTittle', e.target.value);
  }

  authorInput = (e) => {
    this.changeState('newPostAuthor', e.target.value);
  }

  contentInput = (e) => {
    this.changeState('newPostContent', e.target.value);
  }

  changeState = (property, newValue) => {
    this.state.setState({
      property: newValue
    });
  }

  AddNewPost = () => {
    // var newPost = {
    //   id: 
    // }
  }

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

          {/* <form>
              <label>
                Tittle <input onChange={this.tittleInput}/>
              </label>
              <label>
                Author <input onChange={this.authorInput}/>
              </label>
              <label>
                Content <textarea onChange={this.contentInput}></textarea>
              </label>

              <button onClick={this.AddNewPost}>Add new</button>
          </form> */}
      </div>
    );
  }
}

export default BlogList;
