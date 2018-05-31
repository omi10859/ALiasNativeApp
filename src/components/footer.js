import React, {Component} from 'react';

import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

export default class AppFooter extends Component{
  render() {
    return(
      <Footer >
                <FooterTab>
                    <Button active>
                        <Icon name="alarm"/>
                        <Text>Events</Text>
                    </Button>

                    <Button >
                        <Icon active name="beer"/>
                        <Text >Communities</Text >
                    </Button>
                    <Button >
                        <Icon active name="person"/>
                        <Text >About</Text >
                    </Button>
                </FooterTab>
            </Footer>
    );
  }
}
