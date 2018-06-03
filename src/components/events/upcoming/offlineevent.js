import React, {Component} from 'react';
import {Text} from 'react-native';
import {Content, Card, CardItem, Body} from 'native-base';
import Offlineeventhelpers from './offlineeventhelpers.js';

export default class Offlineevent extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data:['something_other_than_null']
    }
  }
  getData(){
    return fetch('http://asetalias.in/data/events.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }
componentDidMount(){
  this.getData();

}
    render() {
        return (
          <Offlineeventhelpers data = {this.state.data}/>

      );
    }
}
