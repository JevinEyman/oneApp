import React, { Component } from 'react';

class ExitDiscussion extends Component {
    constructor () {
        super()
        this.state = {
          modal2Visible: false,
        }
      }

      handleToggle() {
        this.setState({
        modal2Visible: false
      });

    }
    
    render () {
        return (
            <button type="button" onClick={this.handleToggle} className="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        );
    }
}

export default ExitDiscussion;