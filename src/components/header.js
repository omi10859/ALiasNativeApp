import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Body,
  Title,
  Left,
  Right
} from 'native-base';
import Offlineevent from './events/upcoming/offlineevent.js';
import Webinardata from './events/webinars//webinardata.js';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>AsetAlias</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
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
