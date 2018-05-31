import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs,Body,Title,Left,Right } from 'native-base';
import Offlineevent from './offlineevent.js';
import Webinardata from './webinardata.js';
export default class TabsExample extends Component{
  render() {
    return (
      <Container>
        <Header>
        <Left/>
        <Body>
          <Title>AsetAlias</Title>
        </Body>
        <Right />
      </Header>
        <Tabs initialPage={1}>
          <Tab heading="Upcoming">
            <Offlineevent />
          </Tab>
          <Tab heading="Webinars">
            <Webinardata />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
