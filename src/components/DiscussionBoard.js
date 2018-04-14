import React, { Component } from 'react';
import "../styles/DiscussionBoard.css";
import ThreadDisplay from './discussionBoard/components/ThreadDisplay';
import ExitDiscussion from './discussionBoard/components/ExitDiscussion'

class DiscussionBoard extends Component {
    constructor () {
        super()
        this.state = {
          modal2Visible: false,
        }
      }
    
      setModal2Visible(modal2Visible) {
        this.setState({ modal2Visible });
      }
    
    render () {
        return (
            <div>
                <ExitDiscussion onClick={() => this.setModal2Visible(false)} />
                <ThreadDisplay />
            </div>
        );
    }
}

export default DiscussionBoard;