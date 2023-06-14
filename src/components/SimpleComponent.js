// Code SimpleComponent Here
import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor() {
    super();

    this.state = {
      mood: "happy",
    };
  }

  // handleClick = () => {
  //   this.setState((previousState) => {
  //     return {
  //       mood: !previousState.mood,
  //     };
  //   });
  // };

  handleClick = () => {
    this.setState({
        mood: "sad",
    });
  };

  render() {
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
      // <div onClick={this.handleClick}>{this.state.mood ? "happy" : "sad"}</div>
    )
  }
}

export default SimpleComponent