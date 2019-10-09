import React, { Component } from 'react';

import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AppFooter extends Component {
  constructor() {
    super();
    this.state = { activeTabName: 'event' };
  }
  tabAction(tab) {
    this.setState({ activeTabName: tab });
    if (tab == 'event') {
      Actions.event();
    } else if (tab == 'communities') {
      Actions.communities();
    } else {
      Actions.about();
    }
  }
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button
            active={this.state.activeTabName == 'event' ? true : ''}
            onPress={() => {
              this.tabAction('event');
            }}
          >
            <Icon name="alarm" />
            <Text>Events</Text>
          </Button>
          <Button
            active={this.state.activeTabName == 'communities' ? true : ''}
            onPress={() => {
              this.tabAction('communities');
            }}
          >
            <Icon active name="beer" />
            <Text>Communities</Text>
          </Button>
          <Button
            active={this.state.activeTabName == 'about' ? true : ''}
            onPress={() => {
              this.tabAction('about');
            }}
          >
            <Icon active name="person" />
            <Text>About</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
