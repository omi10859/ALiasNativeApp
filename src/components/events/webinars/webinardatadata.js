import React, {Component} from 'react';
import {Image, TouchableHighlight} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import HTMLView from 'react-native-htmlview';


export default class Webinardatadata extends Component {
    render() {
      let articles = this.props.data.map(function(articleData, index){
          return(
            <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://yt3.ggpht.com/a-/ACSszfH9ab-CdL1nceY1PSKXNJvpobAKwNwcXmClhQ=s88-mo-c-c0xffffffff-rj-k-no'}} />
                <Body>
                  <Text>{articleData.title}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image style={{height: 206, width: 346}} source={{uri: 'http://asetalias.in/images/flashbox/default.jpg'}}/>
                <HTMLView value = {articleData.description}
                style={{margin: 2}}/>
              </Body>
            </CardItem>
          </Card>
          )
        });
        return (
            <Content>
              {articles}
            </Content>

        );

    }
}
