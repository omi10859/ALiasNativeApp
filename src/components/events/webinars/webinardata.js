import React, {Component} from 'react';
import {Text} from 'react-native';
import {Content, Card, CardItem, Body,} from 'native-base';
import Webinardatadata from './webinardatadata.js';

export default class Webinardata extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      data:['something_other_than_null']
    }
  }
  getData(){
    return fetch('http://asetalias.in/data/webinars.json')
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

          <Webinardatadata data = {this.state.data}/>
          
      );
    }
}
