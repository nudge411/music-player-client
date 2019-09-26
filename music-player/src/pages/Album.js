import React, { Component } from "react";
import Albums from "../component/Albums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import axios from "axios";
import "../css/Album.css";

export class Album extends Component {
  state = {
    isLoading: true,
    albumList: []
  };

  _getAlbums = async () => {
    const {
      data: { result }
    } = await axios.get("http://15.164.21.91:3000/album");
    this.setState({
      albums: result,
      isLoading: false
    });
    console.log(result);
  };

  componentDidMount() {
    this._getAlbums();
  }

  render() {
    const { isLoading, albums } = this.state;
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loder__text">
              <FontAwesomeIcon icon={faSpinner} spin size="3x" />
            </span>
          </div>
        ) : (
          <div class="albums">
            {albums.map(album => (
              <Albums
                id={album.id}
                artist={album.artist}
                title={album.title}
                cover_image={album.cover_image}
                sale_date={album.sale_date}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

Album.propTypes = {
  id: PropTypes.number.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover_image: PropTypes.string.isRequired,
  sale_date: PropTypes.string.isRequired
};

export default Album;
