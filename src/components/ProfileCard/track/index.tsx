import React from "react";
import { Container, Title } from "./styles";

function TrackButton({ ...props }) {
  return (
    <Container onClick={props.onClick}>
      <img src={props.item.album.images[0].url} />
      <div className="card-info">
        <Title>
          {props.item.name}
          <span>{props.item.type}</span>
        </Title>
        <div>
          <p>{props.item.release_date}</p>
        </div>
      </div>
    </Container>
  );
}

export default TrackButton;
