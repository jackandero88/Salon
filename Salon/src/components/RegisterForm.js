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
  NetinfogetConnectionInfo,
  Alert,
} from 'react-native';
import { Container, Content, InputGroup, Input, Icon,Item,Button,Spinner } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actionsto from '../actions/ActionToPerform.js';



const window = Dimensions.get('window');
const paddingSpace = 20;
const paddingSpaceLeft = 10;
const InputFieldHeight = 45;
const whiteColor = 'white';
const fontsize = 15;


type Props = {};
class RegisterForm extends Component<Props> {
  constructor(Props){
     super()
    this.state = {username : '', password:'', useremail :'', connectionInfo: null,signupData:[],showLoder:false}
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
  this.setState({email : text});
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
      }
      else if (((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(email)) != true) {

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
      var params={
      isShowLoader:true,
      APITag:'register',
      urlMethodName:'Account/Register',
      params:JSON.stringify({
        'email':this.state.email,
        'password':this.state.password,
        'confirmpassword':this.state.password,
        'firstname':this.state.username,
        'lastname':''
      })
    };
    let param = {
      'email':this.state.email,
      'password':this.state.password,
      'confirmpassword':this.state.password,
      'firstname':this.state.username,
      'lastname':'',
      'APITag':'register',
       'isShowLoader':true,
    };

    this.props.APICall(param);

     }
   }else{
     //alert('Please Check your network')
     Alert.alert(
           'Salon Gig',
         'Please check your network.',

       )
   }
  }
  componentWillReceiveProps(nextProps)
  {
    // alert(this.props.signupData);
    if (this.props.signupData.Succcess == true) {
      navigate('EmailVerification', { name: 'Jane' })
    }
  }

  componentWillUnmount() {
       // NetinfogetConnectionInfo.removeEventListener(
       //     'change',
       //     this._handleConnectionInfoChange
       // );
     }
  render() {
      const {navigate} = this.props.navigation;
    return (

      <View style = {{flex : 1}}>
      {
        this.props.showLoder == true  ?   <Spinner color='blue' /> : null
      }
      <KeyboardAwareScrollView>

        <View style = {{marginTop :0, height : window.height / 2 , backgroundColor : '#4B4A92', flexDirection : 'column'}}>
<View style = {{marginTop : 70, width : window.width, alignItems : 'center'}}>
<Text style = {{fontSize : 50 , color : 'white', fontWeight : '200'}}> Salon Gig </Text>
<Text style = {{fontSize : 20 , color : 'white',marginTop : 20}}> Sign up </Text>
</View>
<View style = {{marginTop : 10 , height : window.height / 2 ,borderRadius : 10, backgroundColor : 'white', marginLeft : 20, marginRight : 20}}>
<Text style = {{marginLeft : 20, color : '#C2C2C2', marginTop : 10}}>  </Text>
   <Item rounded style = {styles.inputStyle}>

  <Input style={{height:InputFieldHeight,fontSize:fontsize}} autoCapitalize={'none'}  placeholder='First name' onChangeText={this.onUsernameChanged.bind(this)}/>
  <Image style={{width: 25, height: 25,marginRight:5}} source={require('../images/signin/user_icon.png')}/>
  </Item>
  <Text style = {{marginLeft : 20, color : '#C2C2C2', height : 10}}>  </Text>
       <Item rounded style = {styles.inputStyle}>
      <Input style={{height:InputFieldHeight,fontSize:fontsize}} autoCapitalize={'none'}  placeholder='Last name' onChangeText={this.onUsernameChanged.bind(this)}/>
      <Image style={{width: 25, height: 25,marginRight:5}} source={require('../images/signin/user_icon.png')}/>
      </Item>
  <Text style = {{marginLeft : 20, color : '#C2C2C2', height : 10}}>  </Text>
       <Item rounded style = {styles.inputStyle}>
      <Input style={{height:InputFieldHeight,fontSize:fontsize}} autoCapitalize={'none'}  placeholder='Email' onChangeText={this.onEmailChanged.bind(this)}/>
      <Image style={{width: 25, height: 25,marginRight:5}} source={require('../images/signup/email_icon.png')}/>
      </Item>
      <Text style = {{marginLeft : 20, color : '#C2C2C2', height : 10}}>  </Text>
           <Item rounded style = {styles.inputStyle}>
          <Input style={{height:InputFieldHeight,fontSize:fontsize}} secureTextEntry = {true} autoCapitalize={'none'}  placeholder='Password' onChangeText={this.onPasswordChanged.bind(this)}/>
          <Image style={{width: 25, height: 25,marginRight:5}} source={require('../images/signin/password_icon.png')}/>
          </Item>
          <Text style = {{marginLeft : 20, color : '#C2C2C2', height : 10}}>  </Text>
               <Item rounded style = {styles.inputStyle}>
              <Input style={{height:InputFieldHeight,fontSize:fontsize}} secureTextEntry = {true} autoCapitalize={'none'}  placeholder='Confirm Password' onChangeText={this.onPasswordChanged.bind(this)}/>
              <Image style={{width: 25, height: 25,marginRight:5}} source={require('../images/signin/password_icon.png')}/>
              </Item>

              <View style = {{flexDirection : 'column',justifyContent : 'center', marginTop : 30, height : 50}}>
              <Button rounded warning style = {{ marginTop : 0,  justifyContent: 'center',marginLeft : 10,width : window.width - 60,backgroundColor : '#4B4A92'}} onPress={() =>navigate('emailVerification', { name: 'Jane' })} >
                      <Text style = {{color : 'white', fontSize : 20}}>Sign Up</Text>
                    </Button>
              </View>


</View>
<View style = {{flexDirection : 'row',justifyContent : 'center', marginTop : 70}}>
<Text style = {styles.textStyle , { color : '#C2C2C2' }} >Already have an account </Text>
<Text style = {styles.textStyle , {marginLeft : 5 }}   onPress={() =>
navigate('login', { name: 'Jane' })}>Sign In</Text>
</View>
        </View>

        </KeyboardAwareScrollView>


        </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
 return  bindActionCreators(Actionsto,dispatch);
}
const mapStateToProps = state => {
 return {
    signupData: state.signupData,
    showLoder : state.showSpinner
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterForm);

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
