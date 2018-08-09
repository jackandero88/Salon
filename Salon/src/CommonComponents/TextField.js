, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Container, Content, InputGroup, Input, Icon,Item,Button } from 'native-base';

const TextField = (props) => {
	return (

    <View style={styles.header}>
				<Text style={styles.textStyle}>{props.headerTitle}
        </Text>
        <Item rounded style = {styles.inputStyle}>
        <Icon name='ios-mail' />
       <Input style={{height:InputFieldHeight,fontSize:fontsize}} autoCapitalize={'none'}  placeholder='Type your username or Mobile' onChangeText={this.onEmailChanged.bind(this)}/>
       </Item>
			</View>)
};

export default TextField;

const styles = StyleSheet.create({
  header: {
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  inputStyle: {
    height:40,
    alignSelf: 'stretch',
    paddingLeft:10,
    backgroundColor:'white',
     justifyContent : 'center',
     borderColor : '#DC7B36'
  },
  // textStyle: {
  //   fontSize: 20,
  //   textAlign: 'center',
  // },
});
