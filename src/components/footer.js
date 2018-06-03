import React, {Component} from 'react';

import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import {Actions} from 'react-native-router-flux';

export default class AppFooter extends Component{
  render() {
    return(
      <Footer >
                <FooterTab>
                    <Button active onPress={Actions.event}>
                        <Icon name="alarm"/>
                        <Text>Events</Text>
                    </Button>
                    <Button  onPress={Actions.communities}>
                        <Icon active name="beer"/>
                        <Text>Communities</Text >
                    </Button>
                    <Button  onPress={Actions.about}>
                        <Icon active name="person"/>
                        <Text >About</Text >
                    </Button>
                </FooterTab>
            </Footer>
    );
  }
}
