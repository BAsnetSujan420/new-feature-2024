import styled from 'styled-components';
const CardWrapper = styled.div``;
const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;
  border-radius: 40px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.div`
  background: white;
  color: black;
  font-weight: bold;
  padding: 8px 12px;
  border-radius: 4px;
`;

function Card() {
  return (
    <CardWrapper id="center">
      <ImageWrapper>
        <Image
          src="https://assets.codepen.io/2585/image_fx_.jpg"
          alt="a smiling sunny side up egg made of clay"
        />
      </ImageWrapper>

      <Title>Sunny Side Up</Title>
    </CardWrapper>
  );
}

export default Card;
