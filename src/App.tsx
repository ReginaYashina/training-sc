import React from 'react';
import logo from './logo.svg';
import myImg from './myImg.png';
import './App.css';
import { Card } from './components/Card';
import { Image } from './components/Image';
import { Title } from './components/Title';
import { Text } from './components/Text';
import { Button } from './components/Button';

function App() {
  return (
    <div className='App'>
      <Card>
        <Image src={myImg}></Image>
        <Title>Headline</Title>
        <Text>
          Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
          ornare in venen.
        </Text>
        <Button buttonType={'primery'}>See more</Button>
        <Button buttonType={'outlined'}>Save</Button>
      </Card>
    </div>
  );
}

export default App;
