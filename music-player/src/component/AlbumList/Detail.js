import React, { Component } from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

export class Detail extends Component {
  render() {
    const {
      artist,
      company,
      cover_image,
      distributor,
      genre,
      kinds,
      sale_date,
      style,
      title
    } = this.props.detail;
    return (
      <div>
        <Card>
          <CardImg width="100%" src={cover_image} alt={title} />
          <CardBody>
            <CardTitle style={{ "font-size": "30px", "font-weight": "bold" }}>
              {title}
            </CardTitle>
            <CardText>
              <dl>
                <dt>아티스트</dt>
                <dd>{artist}</dd>
                <dt>회사</dt>
                <dd>{company}</dd>
                <dt>유통사</dt>
                <dd>{distributor}</dd>
                <dt>장르</dt>
                <dd>{genre}</dd>
                <dt>종류</dt>
                <dd>{kinds}</dd>
                <dt>발매일</dt>
                <dd>{sale_date.substring(0, 10)}</dd>
                <dt>스타일</dt>
                <dd>{style}</dd>
              </dl>
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Detail;
