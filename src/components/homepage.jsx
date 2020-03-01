import React, { Component } from "react";
import blogPost from './blogPost';
import BlogPost from "./blogPost";
import show from '../services/blogService';

class Homepage extends Component {
  state = {
    blogs:[
      {
        _id: "1",
        title: "sfh",
        content: "fkniefbhjefbfyuefbvuvfbeure"
      },
      {
        _id: "2",

        title: "sfwefefh",
        content: "fkniefbhjefwfregtrh5 grbthb rbt4bfyuefbvuvfbeure"
      },
      {
        _id: "3",

        title: "sfweweweryh",
        content: "fkniefgbgr  gfbtr  grbtr grbtr bbhjefbfyuefbvuvfbeure"
      }
    ]
  };
 componentDidMount=()=>{
   //populate the blog posts
   console.log(show)
 }
 
  render() {
    return (
      <>
        {
          this.state.blogs.map(post=>{
            return <BlogPost post={post}></BlogPost>
          })
        }
      </>
    );
  }
}

export default Homepage;
