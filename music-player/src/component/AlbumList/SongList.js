import React, { Component } from "react";

export class SongList extends Component {
  state = {
    play: false
  };

  audio = new Audio(this.props.song.url);

  togglePlay = (e, id) => {
    this.props.isPlayChange(id, !this.state.play);
    this.setState({ play: !this.state.play }, () => {
      this.state.play && this.props.isPlaying
        ? this.audio.play()
        : this.audio.pause();
    });
  };

  componentDidUpdate() {
    this.state.play && this.props.isPlaying
      ? this.audio.play()
      : this.audio.pause();
  }

  render() {
    const { song, id, isPlaying } = this.props;
    return (
      <tr key={id + 1}>
        <th scope="row">{id + 1}</th>
        <td>{song.title}</td>
        <td>
          <button onClick={e => this.togglePlay(e, id)}>
            {this.state.play && isPlaying ? "Pause" : "Play"}
          </button>
        </td>
      </tr>
    );
  }
}

export default SongList;
