import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CommunitiesData from './communitiesData.js';
import { Container, Header, Body, Title } from 'native-base';
export default class Communities extends Component {
  constructor() {
    super();
    this.state = {
      data: ['something_other_than_null']
    };
  }
  getData() {
    return fetch('http://asetalias.in/data/communities.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ data: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Communities</Title>
          </Body>
        </Header>
        <CommunitiesData data={this.state.data} />
      </Container>
    );
  }
}
