import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
// import "../css/Album.css";

export class Album extends Component {
  state = {
    isLoading: true,
    albumList: []
  };

  render() {
    const { id, artist, title, cover_image, sale_date } = this.props;
    return (
      <Card class="album" style={{ "margin-bottom": "2rem" }}>
        <Link to={{ pathname: `/album/${id}`, state: { id } }}>
          <CardImg src={cover_image} alt={title} title={title} />
        </Link>
        <CardBody class="album__data">
          <CardTitle class="album__title">
            {id}. {title}
          </CardTitle>
          <CardSubtitle class="album__artist">{artist}</CardSubtitle>
          <CardText class="movie__sale_date">
            {sale_date.substring(0, 10)}
          </CardText>
        </CardBody>
      </Card>
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
