import React, { Component } from 'react';
import Post from "./Post";
import PostEditor from "./PostEditor";


class ThreadDisplay extends Component {
    constructor(props) {
        super(props);

        this.addPost = this.addPost.bind(this);
        

        this.state = {
            posts: [],
        }
    }

    addPost (newPostBody) {
        const newState = Object.assign({}, this.state);
        newState.posts.push(newPostBody);
        this.setState(newState);
    }

    render () {
        return(    
        <div>
            <div className="card post-feed">
                {
                    this.state.posts.map((postBody, idx) => {
                        return (
                            <Post key={idx} postBody={postBody} />
                        )
                    })
                }
            </div>

            <PostEditor addPost={this.addPost} />

        </div>
        );
    }
}

export default ThreadDisplay;