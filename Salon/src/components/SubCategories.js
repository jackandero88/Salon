import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Image,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Button,Body,Left,Title,Right} from 'native-base';
const window = Dimensions.get('window');
export default class SubCategories extends Component<Props> {
  render() {
      const {navigate} = this.props.navigation;
    var items = [
      'Hair Salons',
      'Hair Stylists',
      'Spa & Massage',
      'Brows & Lashes',
      'Nail Spa',
      'Body Arts',
      'Bridal Makeup',
      'Ladyies Beauty Parlors',
      'Others'
    ];
    return (
     <View style = {{flex : 1}}>
      <Container>
        <Header style = {{backgroundColor : '#4B4A92'}}>
          <Left/>
          <Body>
            <Title style = {{color : 'white'}}>Categories</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List dataArray={items}
            renderRow={(item) =>
              <ListItem>
                <Text>{item}</Text>
              </ListItem>
            }>
          </List>
        </Content>

      </Container>
  <View style={{height:100,backgroundColor:'white',marginTop:20}}>
    <Button rounded warning style = {{justifyContent: 'center',marginLeft : 20,width : window.width - 60,backgroundColor : '#4B4A92'}} onPress={() =>
    navigate('categories', { name: 'Jane' })} >
            <Text style = {{color : 'white', fontSize : 20}}>Save</Text>
          </Button>
          </View>

      </View>
    );
  }
}
