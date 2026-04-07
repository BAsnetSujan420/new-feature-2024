import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 260px;
  border-radius: 16px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 180px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FeaturedTag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #ff4d4f;
  color: #fff;
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  border-radius: 999px;
  letter-spacing: 0.5px;
`;

const Content = styled.div`
  padding: 14px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin: 0 0 6px;
  color: #222;
`;

const Price = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #2e7d32;
  margin: 0;
`;

function Product() {
  return (
    <div id="center">
      <Card>
        <ImageWrapper>
          <ProductImage src="https://picsum.photos/300/200" />
          <FeaturedTag>Featured</FeaturedTag>
        </ImageWrapper>

        <Content>
          <Title>Product A</Title>
          <Price>$49.99</Price>
        </Content>
      </Card>
    </div>
  );
}

export default Product;
