import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Header = (props) => {
	return (<View style={styles.header}>
				<Text style={styles.textStyle}>{props.headerTitle}
        </Text>
			</View>)
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
});
