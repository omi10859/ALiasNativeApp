import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Container} from 'native-base';

import {Router, Scene} from 'react-native-router-flux';

import Event from './src/components/events/event.js';
import AppFooter from './src/components/footer.js';
import AppHeader from './src/components/header.js';

import About from './src/components/about/about.js';
import Communities from './src/components/communities/communities.js';

import SplashScreen from 'react-native-splash-screen';

export default class App extends Component{
  componentDidMount(){
    SplashScreen.hide()
  }

  render() {
    return(
      <Container>
        <Router>
          <Scene key="event" component={AppHeader} title='Event' hideNavBar={true} />
          <Scene key="communities" component={Communities} title='Communities' hidenNavBar={true}/>
          <Scene key="about" component={About} title='About' hidenNavBar={true}/>
        </Router>
      <AppFooter/>
      </Container>
    );
  }
}
