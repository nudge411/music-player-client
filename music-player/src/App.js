import React, { Component } from "react";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";

class App extends Component {
  state = {
    play: false
  };

  _handlePlay = () => {
    this.setState({
      play: !this.state.play
    });
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this._handlePlay} variant="contained" color="primary">
          Hello World
        </Button>
        <ReactPlayer
          url="https://4week-project-image-upload-test.s3.ap-northeast-2.amazonaws.com/newProduct/samlemp3.mp3"
          playing={this.state.play}
        />
      </div>
    );
  }
}

export default App;
