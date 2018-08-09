/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image
} from 'react-native';
import { Container, Content, InputGroup, Input, Icon,Item,Button } from 'native-base';
import {StackNavigator} from 'react-navigation';
import LoginForm from '../components/LoginForm.js';
import RegisterForm from '../components/RegisterForm.js';
import ForgotPassword from '../components/ForgotPassword.js';
import OtpForm from '../components/OtpForm.js';
import BusinessInfo from '../components/BusinessInfo.js';
import LocationInfo from '../components/LocationInfo.js';
import Categories from '../components/Categories.js';
import EmailVerification from '../components/EmailVerification.js';
import Services  from '../components/Services.js';
import ServiceDetails  from '../components/ServiceDetails.js';
 import TimeSlote  from '../components/TimeSlote.js';

const NavRoot = StackNavigator({
  login: { screen: LoginForm,navigationOptions:{header: null} },
  register: { screen: RegisterForm,navigationOptions:{header: null} },
  forgotPassword: { screen: ForgotPassword,navigationOptions:{header: null} },
  otpform: { screen: OtpForm,navigationOptions:{header: null} },
  businessInfo: { screen: BusinessInfo,navigationOptions:{header: null} },
  locationInfo: { screen: LocationInfo,navigationOptions:{header: null} },
  categories: { screen: Categories,navigationOptions:{header: null} },
  emailVerification: { screen: EmailVerification,navigationOptions:{header: null} },
  services: { screen: Services ,navigationOptions:{header: null} },
  serviceDetails: { screen: ServiceDetails ,navigationOptions:{header: null} },
  timeSlote: { screen: TimeSlote ,navigationOptions:{header: null} },
});


type Props = {};
export default class RouterForm extends Component<Props> {

  render() {
    return (
      <NavRoot/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginLeft : 20,
    marginRight : 20,
  },
  seperator: {
    height:1,
    alignSelf: 'stretch',
    backgroundColor:'#DC7B36',
    paddingTop:1,
    marginLeft:20,
    marginRight:10,
    marginTop:10
  },
  line: {
    height:1,
    alignSelf: 'stretch',
    backgroundColor:'#DC7B36',
    paddingTop:10,
    marginLeft:20,
    marginRight:20
  },
  inputStyle: {
    height:40,
    alignSelf: 'stretch',
    paddingLeft:10,
    backgroundColor:'white',
     justifyContent : 'center',
     borderColor : '#DC7B36'
  },
  textStyle: {
    height:21,
    alignSelf: 'stretch',
    paddingLeft:20,
    color : 'black',
     justifyContent : 'center'
  },
  buttonStyle: {
    height:30,
    fontSize:40,
    alignSelf: 'stretch',
    backgroundColor:'#22aa22',
  }
});
