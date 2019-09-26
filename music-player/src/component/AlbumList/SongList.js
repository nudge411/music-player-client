import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";

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
          <div onClick={e => isPlayChange(id, isPlaying)}>
            {isPlaying ? (
              <FontAwesomeIcon icon={faPauseCircle} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faPlayCircle} size="2x" />
            )}
          </div>
        </td>
      </tr>
    );
  }
}

export default SongList;
