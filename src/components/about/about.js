import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class About extends Component {
  render() {
    return (
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 18,
          marginTop: 99,
          width: 200,
          backgroundColor: 'yellow'
        }}
      >
        About page
      </Text>
    );
  }
}
