import React, { Component } from 'react';
import { Form, Button } from "react-bootstrap";

const BlogPost = (
    {post, user, handleDelete}
) => {
    return ( 
        <div style={{textAlign: "left"}}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            {user && (<><Button className="btn-sm  btn-warning">Edit</Button> <Button className="btn-sm btn-danger" onClick={()=>handleDelete(post._id)}>Delete</Button></>) }
        </div>
     );
}
 
export default BlogPost;