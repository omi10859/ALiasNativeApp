import React, { Component } from 'react';
import { Image, TouchableHighlight, ScrollView } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from 'native-base';
import HTMLView from 'react-native-htmlview';
import { MarkdownView } from 'react-native-markdown-view';

export default class CommunitiesData extends Component {
  render() {
    let articles = this.props.data.map(function(articleData, index) {
      return (
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  url:
                    'https://yt3.ggpht.com/a-/ACSszfH9ab-CdL1nceY1PSKXNJvpobAKwNwcXmClhQ=s88-mo-c-c0xffffffff-rj-k-no'
                }}
              />
              <Body>
                <Text>{articleData.title}</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{
                  uri:
                    'https://github.com/asetalias/asetalias.github.io/blob/master/images/logos/pydelhi.png'
                }}
                style={{ height: 200, width: 200, flex: 1 }}
              />
              <MarkdownView>{articleData.desc}</MarkdownView>
            </Body>
          </CardItem>
        </Card>
      );
    });
    return <Content>{articles}</Content>;
  }
}
