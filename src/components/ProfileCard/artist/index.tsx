import { Title, Container } from "./style";

function ArtistButton({ ...props }) {
  return (
    <Container onClick={props.onClick}>
      <img src={props.item.images[0].url} />
      <div className="card-info">
        <Title>
          {props.item.name}
          <span>{props.item.type}</span>
        </Title>

        <div>
          {props.item.genres.map((genre: string, index: number) => {
            return <p key={index}>{genre}</p>;
          })}
        </div>
      </div>
    </Container>
  );
}

export default ArtistButton;
