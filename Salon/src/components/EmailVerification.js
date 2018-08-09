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
 import FloatLabelTextInput from 'react-native-floating-label-text-input';
 import { Container, Content, InputGroup, Input, Icon,Item,Button } from 'native-base';
 import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



 const window = Dimensions.get('window');
 const paddingSpace = 20;
 const paddingSpaceLeft = 10;
 const InputFieldHeight = 45;
 const whiteColor = 'white';
 const fontsize = 15;


 type Props = {};
 export default class EmailVerification extends Component<Props> {
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

   render() {
       const {navigate} = this.props.navigation;
     return (
       <Container >
       <View style = {{flex : 1,backgroundColor : 'white'}}>

       <Image style={{width: window.width, height: 300,marginTop:45}} source={require('../images/signin/resentTop.png')}/>
          <Text style = {{width: window.width,color:'blue', fontSize : 16,marginTop:10,height:30,textAlign : 'center'}}>dineshpatel14888@gmail.com</Text>
          <Image style={{width: window.width, height: 60,marginTop:10}} source={require('../images/signin/resentText.png')}/>

       <Button rounded warning style = {{ marginTop : 30,  justifyContent: 'center',marginLeft : 30,width : window.width - 60,backgroundColor : '#4B4A92'}} >
         <Text style = {{color : 'white', fontSize : 20}}>Resend email</Text>
       </Button>
       <Button rounded warning style = {{ marginTop : 30,  justifyContent: 'center',marginLeft : 30,width : window.width - 60,backgroundColor : 'gray'}} onPress={() =>
         navigate('login', { name: 'Jane' })} >
         <Text style = {{color : 'white', fontSize : 20}}>Countinue</Text>
       </Button>
         </View>
         </Container>
     );
   }
 }

 const styles = StyleSheet.create({
 images : {width: 20, height: 20,marginLeft : 10,marginTop:10,marginRight:10},
 imageContainer: {marginTop : 10, flexDirection:'row',backgroundColor:'white'},
 });
