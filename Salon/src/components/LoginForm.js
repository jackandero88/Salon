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
 class LoginForm extends Component<Props> {
  constructor(Props){
     super()
    this.state = {username : 'thlam75@gmail.com', password:'Password1234!',isValidUserName:false,user:[],connectionInfo: null,showLoder:false,focusDescriptionInput:false,isShowHidePassword:true,APITag:''}
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
 handleTitleInputSubmit() {
   this.setState({focusDescriptionInput:true});
 }
onEmailChanged(text) {
  this.setState({username : text}) ;
}
onPasswordChanged(text) {
  this.setState({password : text});
}


_handleConnectionInfoChange=(connectionInfo)=>{
    this.setState({
      connectionInfo
    });
  }
onShowHidePassword=()=>{
   if(this.state.isShowHidePassword == true){
  this.setState({isShowHidePassword:false});
}else{
    this.setState({isShowHidePassword:true});
}
}
  onSignInPress=(email, password)=>{

   const {connectionInfo}=this.state;
 //  console.log(connectionInfo);

if(connectionInfo!=='NONE'&&connectionInfo!=='none'){

        if (email == '') {
            Alert.alert(
                'Salon Gig',
                'Please enter your email id.',

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
       var params={
       isShowLoader:true,
       APITag:"login",
       urlMethodName:"api/Token",
       parameters:"email=thlam75@gmail.com&password=Password1234!&confirmpassword=Password1234!&firstname=dinesh&lastname=kumar",
     };

     this.props.login(params);
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
   if (nextProps.user.access_token && nextProps.APITag == 'login')
    {
      const {navigate}=this.props.navigation;
      navigate('businessInfo')
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

<KeyboardAwareScrollView>

<View style = {{marginTop :0, height : window.height / 2, backgroundColor : '#4B4A92', flexDirection : 'column'}}>
<View style = {{marginTop : 100, width : window.width, alignItems : 'center'}}>
<Text style = {{fontSize : 50 , color : 'white', fontWeight : '200'}}> Salon Gig </Text>
<Text style = {{fontSize : 20 , color : 'white',marginTop : 20}}> Sign In </Text>
</View>

<View style = {{marginTop : 50, height : window.height / 2  -  130 ,borderRadius : 10, backgroundColor : 'white', marginLeft : 20, marginRight : 20}}>

<Text style = {{marginLeft : 20, color : '#C2C2C2', marginTop : 5}}>  </Text>
{
  this.props.showLoder == true  ?   <Spinner color='blue' style={{height : 30,width:30,marginLeft: window.width / 2 - 30}} />  : null
}
<Item rounded style = {styles.inputStyle}>

<Input style={{height:InputFieldHeight,fontSize:fontsize}} autoCapitalize={'none'} value={this.state.username}  placeholder='Username' onChangeText={this.onEmailChanged.bind(this)}/>
<Image style={{width: 25, height: 25,marginRight:5}} source={require('../images/signin/user_icon.png')}/>
</Item>
<Text style = {{marginLeft : 20, color : '#C2C2C2'}}>  </Text>
<Item rounded style = {styles.inputStyle}>
<Input style={{height:InputFieldHeight,fontSize:fontsize}} value={this.state.password}  secureTextEntry = {this.state.isShowHidePassword}  placeholder='Password' onChangeText={this.onPasswordChanged.bind(this)} />
<Text onPress={this.onShowHidePassword.bind(this)} style={{width: 25, height: 25,marginRight:5,marginTop:5}}>
<Image style={{width: 25, height: 25,marginRight:5,marginTop:5}} source={require('../images/signin/password_icon.png')} />
</Text>
</Item>

<Text style = {styles.textStyle , {marginLeft : 20, marginTop : 5}} onPress={() =>
navigate('forgotPassword', { name: 'Jane' })}>Forgot Password?</Text>
{
  //onPress={()=> this.onSignInPress(this.state.username,this.state.password)}
}

<Button rounded warning style = {{ marginTop : 30,  justifyContent: 'center',marginLeft : 10,width : window.width - 60,backgroundColor : '#4B4A92'}} onPress={()=> this.onSignInPress(this.state.username,this.state.password)} >
      <Text style = {{color : 'white', fontSize : 20}}>Sign In</Text>
      </Button>

</View>

<View style = {{flexDirection : 'row',justifyContent : 'center', marginTop : 60}}>
<Text style = {styles.textStyle , {marginTop : 10, color : '#C2C2C2' }} >Do not have account? </Text>
<Text style = {styles.textStyle , {marginTop : 10 ,marginLeft : 5 }}   onPress={() =>navigate('register', { name: 'Jane' })}>Sign up</Text>
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
    user: state.user,
      showLoder : state.showSpinner,
      APITag:state.APITag
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);


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
