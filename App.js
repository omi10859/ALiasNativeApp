import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container} from 'native-base'


import Event from './src/components/events/event.js'
import AppFooter from './src/components/footer.js'
import AppHeader from './src/components/header.js'


export default class app extends Component{
  render() {
    return(
      <Container>
      <AppHeader/>
      <AppFooter/>

      </Container>
    );
  }
}
