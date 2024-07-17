import React from 'react';
import logo from './logo.svg';
import myImg from './myImg.png';
import './App.css';
import { Card } from './components/Card';
import { Image } from './components/Image';
import { Title } from './components/Title';
import { Text } from './components/Text';
import { Button } from './components/Button';
import { Wrapper } from './components/Wrapper';

function App() {
  return (
    <div className='App'>
      <Wrapper color={'#c2c2c2'}>
        <Card>
          <Image src={myImg}></Image>
          <Title>Headline</Title>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
          <Button buttonType={'primary'}>See more</Button>
          <Button buttonType={'outlined'}>Save</Button>
        </Card>
        <Card>
          <Image src={myImg}></Image>
          <Title>Headline</Title>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
          <Button buttonType={'primary'}>See more</Button>
          <Button buttonType={'outlined'}>Save</Button>
        </Card>
        <Card>
          <Image src={myImg}></Image>
          <Title>Headline</Title>
          <Text>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
          </Text>
          <Button buttonType={'primary'}>See more</Button>
          <Button buttonType={'outlined'}>Save</Button>
        </Card>
      </Wrapper>
    </div>
  );
}

export default App;
