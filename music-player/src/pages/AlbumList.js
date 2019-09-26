import React, { Component } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Detail from "../component/AlbumList/Detail";
import SongList from "../component/AlbumList/SongList";
import { Table } from "reactstrap";

export class AlbumList extends Component {
  state = {
    albums: [],
    isLoading: true,
    isPlaying: false,
    isNow: false,
    playSongId: ""
  };

  _getAlbumList = async id => {
    const {
      data: { result }
    } = await axios.get(`http://15.164.21.91:3000/album/${id}`);
    this.setState({
      albums: result,
      isLoading: false
    });
  };

  _isPlayChange = (id, state) => {
    this.setState({
      playSongId: id,
      isNow: state
    });
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this._getAlbumList(id);
  }

  render() {
    const { isLoading, albums, playSongId } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <FontAwesomeIcon icon={faSpinner} spin size="3x" />
          </div>
        ) : (
          <div className="songs">
            <div className="songs__detail">
              {albums.map((detail, key) => (
                <Detail detail={detail} key={key} />
              ))}
            </div>
            <div className="songs__list">
              <Table dark>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>TITLE</th>
                  </tr>
                </thead>
                <tbody>
                  {albums[0].Songs.map((song, id) =>
                    playSongId === id && !this.state.isNow ? (
                      <SongList
                        song={song}
                        id={id}
                        isPlaying={true}
                        isPlayChange={this._isPlayChange}
                      />
                    ) : (
                      <SongList
                        song={song}
                        id={id}
                        isPlaying={false}
                        isPlayChange={this._isPlayChange}
                      />
                    )
                  )}
                </tbody>
              </Table>
            </div>
          </div>
        )}
      </section>
    );
  }
}

AlbumList.propTypes = {};

export default AlbumList;
