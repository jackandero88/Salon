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
  Image,
  CheckBox,
  ListItem,
} from 'react-native';
import { Container, Content, InputGroup, Input, Icon,Item,Button } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const window = Dimensions.get('window');
const paddingSpace = 20;
const paddingSpaceLeft = 10;
const InputFieldHeight = 45;
const whiteColor = 'white';
const fontsize = 15;


type Props = {};
export default class ForgotPassword extends Component<Props> {
  onBackButtonClick()
   {
     Actions.CustomerLoginForm({type: "reset"})
   }
   onEmailChanged(text) {

       }
  render() {
        const {navigate} = this.props.navigation;
    return (

          <View style = {{flex : 1}}>
            <View style = {{marginTop :0, height : window.height / 2, backgroundColor : '#4B4A92', flexDirection : 'column'}}>
<View style = {{marginTop : 100, width : window.width, alignItems : 'center'}}>
<Text style = {{fontSize : 50 , color : 'white', fontWeight : '200'}}> Salon Gig </Text>
<Text style = {{fontSize : 20 , color : 'white',marginTop : 20}}> Forgot Password </Text>
</View>
<View style = {{marginTop : 50 , height : 170  ,borderRadius : 10, backgroundColor : 'white', marginLeft : 20, marginRight : 20}}>

 <Text style = {{marginLeft : 20, color : '#C2C2C2', marginTop : 30}}>  </Text>
<Item rounded style = {styles.inputStyle}>

<Input style={{height:InputFieldHeight,fontSize:fontsize}} autoCapitalize={'none'}  placeholder='Enter valid email' onChangeText={this.onEmailChanged.bind(this)}/>
  <Image style={{width: 25, height: 25,marginRight:5}} source={require('../images/signup/email_icon.png')}/>
</Item>
<Button rounded warning style = {{ marginTop : 20,  justifyContent: 'center',marginLeft : 10,width : window.width - 60,backgroundColor : '#4B4A92'}} onPress={() =>
   navigate('login', { name: 'Jane' })} >
       <Text style = {{color : 'white', fontSize : 20}} >Countinue</Text>
     </Button>
</View>
            </View>


            </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop : 22
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
      marginLeft:10,
        marginRight:10,
    backgroundColor:'white',
     justifyContent : 'center',

  },
  textStyle: {
    height:21,
    alignSelf: 'stretch',
    paddingLeft:20,
    fontSize : 15,
    color : '#E0E0E0',
     justifyContent : 'center'
  },
  buttonStyle: {
    height:30,
    fontSize:40,
    alignSelf: 'stretch',
    backgroundColor:'#22aa22',
  }
});
