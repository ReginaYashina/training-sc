import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import myImg from '../myImg.png';
import { Wrapper } from './Wrapper';
import { Title } from './Title';
import { Button } from './Button';
import { Text } from './Text';
import { Image } from './Image';

const Card = () => {
  return (
    <StyledCard>
      <Image src={myImg} />
      <Title>Headline</Title>
      <Text>
        Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
        ornare in venen.
      </Text>
      <Button buttonType={'primary'}>See more</Button>
      <Button buttonType={'outlined'}>Save</Button>
    </StyledCard>
  );
};

export default Card;

export const StyledCard = styled.article`
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
  max-width: 300px;
  min-height: 350px;
`;

// вывести в App заголовок,  описание и путь к картинке
