import React, { Component } from "react";

export class SongList extends Component {
  audio = new Audio(this.props.song.url);

  componentDidUpdate() {
    this.props.isPlaying ? this.audio.play() : this.audio.pause();
  }

  render() {
    const { song, id, isPlaying, isPlayChange } = this.props;
    return (
      <tr key={id + 1}>
        <th scope="row">{id + 1}</th>
        <td>{song.title}</td>
        <td>
          <button onClick={e => isPlayChange(id, isPlaying)}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </td>
      </tr>
    );
  }
}

export default SongList;
