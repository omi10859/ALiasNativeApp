import React, {Component} from 'react';
import {Text, View} from 'react-native';


export default class Communities extends Component{
  render() {
    return(
      <Text style={{ textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 99,
    width: 200,
    backgroundColor: 'yellow',}}>Community Page</Text>
    );
  }
}
