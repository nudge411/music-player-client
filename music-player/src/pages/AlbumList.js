import React, { Component } from "react";
import axios from "axios";
import Detail from "../component/AlbumList/Detail";
import SongList from "../component/AlbumList/SongList";
import { Table } from "reactstrap";

export class AlbumList extends Component {
  state = {
    albums: [],
    isLoading: true,
    isPlaying: false,
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
    // 현재 play 여부와 하위 컴포넌트의 playState를 비교한다
    state
      ? this.state.isPlaying
        ? this._anotherSongStop(id)
        : this._playingSetTrue(id)
      : this._playingSetFalse();
  };

  _playingSetTrue = () => {
    console.log("셋트루");
    this.setState({ isPlaying: true });
  };

  _playingSetFalse = () => {
    console.log("셋펄스");
    this.setState({ isPlaying: false });
  };

  _anotherSongStop = id => {
    console.log("나머지정지");
    this.setState({ isPlaying: true });
    this.setState({ playSongId: id });

    // 처음에는 isPlaying : false 로 유지한다.
    // 특정 하위 컴포넌트에서 this.state.play 가 true가 되면
    // 상위 컴포넌트의  isPlaying : true 로 셋한다.
    // 여기서 다시 특정 하위 컴포넌트에서 this.state.play 가 true가 되면
    // 상위 컴포넌트의 isPlaying 을 보러온다
    // 만약 isPlaying : false 면 isPlaying : true 로 셋해준다.
    // 만약 isPlaying : true 면

    // 특정 하위 컴포넌트를 제외한 컴포넌트는 this.state.play 값을 false로 바꿔준다.
    // 이 때 상위 컴포넌트와 하위컴포넌트의 state 와 props 를 어떻게 관리해야할까..
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
            <span className="loder__text">Loading...</span>
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
                  {console.log(playSongId)}
                  {albums[0].Songs.map((song, id) =>
                    playSongId ? (
                      playSongId === id ? (
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
                    ) : (
                      <SongList
                        song={song}
                        id={id}
                        isPlaying={this.state.isPlaying}
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
