import React, { Component } from "react";

export class SongList extends Component {
  state = {
    play: false
  };

  audio = new Audio(this.props.song.url);

  togglePlay = (e, id) => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
    this.props.isPlayChange(id, !this.state.play);
  };

  render() {
    const { song, id } = this.props;
    // const audio = new Audio(song.url);
    return (
      <tr key={id + 1}>
        <th scope="row">{id + 1}</th>
        <td>{song.title}</td>
        <td>
          <button onClick={e => this.togglePlay(e, id)}>
            {this.state.play ? "Pause" : "Play"}
          </button>
        </td>
      </tr>
    );
  }
}

export default SongList;
