import { Container, LoadingCircle } from "./styles";

function Loading() {
  return (
    <Container>
      <LoadingCircle />
      <div>
        <span />
        <span />
        <span />
      </div>
    </Container>
  );
}

export default Loading;
