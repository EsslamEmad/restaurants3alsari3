import React, {Component} from 'react';
import {Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {Container, Content, Header} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import {scale, verticalScale, primaryColor} from './Assets/Styles/Style';

class Lunch extends Component {
  componentDidMount = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      const user = await JSON.parse(value);
      if (user.id != null) {
        Actions.reset('homeStack');
      } else {
        Actions.reset('auth')
        // alert('user fail')
      }
    } catch (e) {}
  };
  render() {
    return (
      <Container>
        <Header
          androidStatusBarColor={primaryColor}
          style={{display: 'none'}}
        />

        <Content>
          <Image
            source={require('./Assets/Images/splash.png')}
            resizeMode="stretch"
            style={{width: scale(100), height: verticalScale(100)}}
          />
        </Content>
      </Container>
    );
  }
}

export default Lunch;
