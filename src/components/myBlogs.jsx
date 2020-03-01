import React, { Component } from 'react';
import BlogPost from './blogPost';
import auth from "../services/authService"
class MyBlogs extends Component {
    state = {
        user: "",
        blogs: [{
            _id: "1",
            title: "P1",
            content: "jkfbe hfierf biefb ernniferfnreiufre ieinhrey"
        },
        {
            _id: "2",

            title: "P2o",
            content: "jkfbe hfierf biefb ernniferfnreiufre ieinhrey"
        },
        {
            _id: "3",

            title: "P3",
            content: "jkfbe hfierf biefb ernniferfnreiufre ieinhrey"
        }]
    }

    componentDidMount = () => {
        //fetch the current users blogs
        const user = auth.getCurrentUser();
        
        if (user) {
            console.log("currentuser:", user);
            console.log(user);
            this.setState({ user });
        }

        console.log("hello world");
    }

    handleDelete = async (id) => {
        let orgBlogs = [...this.state.blogs];
        try{
            //delete from the database using await

            const blogs= orgBlogs.filter(blog => blog._id !== id);
            this.setState({blogs});
        }
        catch(e)
        {

            console.log(e);
        }
    }


    render() {
        return (<>
            <h1>Your Blogs</h1>
            {
                !this.state.blogs.length && <h4>No Blogs to Show...</h4>
            }
            {
              this.state.blogs &&  this.state.blogs.map(post => {
                    return <BlogPost user={this.state.user} post={post} handleDelete={this.handleDelete}></BlogPost>
                })
            }
        </>);
    }
}

export default MyBlogs;