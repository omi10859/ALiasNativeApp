import React, {Component} from 'react';
import {Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import HTMLView from 'react-native-htmlview';
import Video from 'react-native-video';
export default class Webinardatadata extends Component {
    render() {

        let articles = this.props.data.map(function(articleData, index){
          //const you= 'https://www.youtube.com/watch?v=';
          //const tube= {this.state.articleData.videoId};
          //const youtube = you+tube;
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
                <Image source={{uri: 'http://asetalias.in/images/flashbox/default.jpg'}}
                style={{height: 206, width: 346, flex: 1}}/>
                <HTMLView value = {articleData.description}
                style={{margin: 11}}
                />
                <Text>Date:{articleData.date}</Text>
                <Text>Start Time:{articleData.startTime}</Text>
                <Text>EndTime:{articleData.endTime}</Text>
                <Text>Location:{articleData.location}</Text>
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
