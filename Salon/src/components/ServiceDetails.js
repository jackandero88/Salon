
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Image,
  NetinfogetConnectionInfo,
  Alert,
} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Container, Header, Content, List, ListItem, Text,Button,Body,Left,Title,Right,Icon,Spinner,CheckBox} from 'native-base';



const window = Dimensions.get('window');
const paddingSpace = 20;
const paddingSpaceLeft = 10;
const InputFieldHeight = 45;
const whiteColor = 'white';
const fontsize = 15;


type Props = {};
export default class ServiceDetails extends Component<Props> {
  constructor(Props){
     super()
    this.state = {username : '', password:'', useremail :'', connectionInfo: null,}
  }
  async componentWillMount(){
  NetinfogetConnectionInfo.addEventListener(
       'change',
       this._handleConnectionInfoChange
   );

   NetinfogetConnectionInfo.fetch().done(
       (connectionInfo) => { this.setState({connectionInfo}); }
   );
  }

  onUsernameChanged(text) {
  this.setState({username : text}) ;
  }
  onEmailChanged(text) {
  this.setState({useremail : text});
  }
  onPasswordChanged(text) {
  this.setState({password : text});
  }


  _handleConnectionInfoChange=(connectionInfo)=>{
    this.setState({
      connectionInfo
    });
  }

  onSignUpPress=(username,email, password)=>{

   const {connectionInfo}=this.state;
  //  console.log(connectionInfo);

  if(connectionInfo!=='NONE'&&connectionInfo!=='none'){

    if (username == '') {
        Alert.alert(
            'Salon Gig',
            'Please enter your username.',

          )

  }else if (email == '') {
            Alert.alert(
                'Salon Gig',
                'Please enter your email id.' ,

              )

      }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        //alert( 'Invalid email ID');
        Alert.alert(
            'Salon Gig',
            'Invalid email id.',

          )

        return ;
      }else if(password == ''){
        Alert.alert(
              'Salon Gig',
            'Please enter your password.',

          )

     //  alert('Please enter your password')
        return ;
     }else{

     }
   }else{
     //alert('Please Check your network')
     Alert.alert(
           'Salon Gig',
         'Please check your network.',

       )
   }
  }
  backPress(){
       const {navigate} = this.props.navigation;
          navigate('services');
  }

  render() {
      const {navigate} = this.props.navigation;
    return (

      <View style = {{flex : 1,backgroundColor : 'white'}}>

      <Header style = {{backgroundColor : '#4B4A92'}}>
        <Left>
              <Icon name="arrow-back" backgroundColor = "white" onPress={ () => this.backPress()} />
              </Left>
        <Body>
          <Title style = {{color : 'white', width : 200}}>Service Details</Title>
        </Body>
        <Right>
            <Text style={{color:'white',fontSize:16}}> Save </Text>
              </Right>
      </Header>

      <KeyboardAwareScrollView>
      <View style = {styles.imageContainer}>
      <FloatLabelTextInput
        placeholder={"Service name"}
        value={""}
      />
      </View>
      <View style = {styles.imageContainer}>
      <FloatLabelTextInput
        placeholder={"Service category"}
        value={""}
      />
    </View>

    <View style = {{backgroundColor:"#D6D6DB" ,marginTop : 10,marginLeft : 20, width : window.width - 40,height:30}} >
     <Text style = {{color:'gray',fontSize:15,marginTop : 5}}> Price Options </Text>
     </View >
    <View style = {styles.imageContainer, {flexDirection:'row',justifyContent: "space-between",marginLeft : 20, width: window - 40}}>
    <FloatLabelTextInput
      placeholder={"Duration"}
      value={"30min"}
    />
    <FloatLabelTextInput
      placeholder={"Price"}
      value={"$90.00"}
    />
     {
   //<Icon active name="arrow-forward" />
 }
    </View>
    <View style = {{backgroundColor:"#D6D6DB" ,marginTop : 10,marginLeft : 20, width : window.width - 40,height:30}} >
     <Text style = {{color:'gray',fontSize:15,marginTop : 5}}> REQUIRED STAFF & RESOURCES </Text>
     </View >
    <View style = {styles.imageContainer, {flexDirection:'row',justifyContent: "space-between",marginLeft : 20, width: window - 40}}>
    <Text style = {{color:'gray',fontSize:15,marginTop : 0,width : window.width - 100}}> Staff Members (Anuj)   </Text>
    <Icon active name="arrow-forward"/>


    </View>
        </KeyboardAwareScrollView>

        </View>
    );
  }
}

const styles = StyleSheet.create({
images : {width: 20, height: 20,marginLeft : 10,marginTop:10,marginRight:10},
imageContainer: {marginTop : 10, flexDirection:'row',backgroundColor:'white',marginLeft : 20,width : window.width - 40},
});
