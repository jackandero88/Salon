import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Image,
  Alert,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Button,Body,Left,Title,Right,Icon,Spinner,CheckBox} from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actionsto from '../actions/ActionToPerform.js';

const window = Dimensions.get('window');
  class Categories extends Component<Props> {
  constructor(Props){
     super()
    this.state = {showLoder:false,arrCategories:[],arrSectedBusinessType:[]}
  }
  checkUncheckClick(id){
    let checkboxes = this.state.arrSectedBusinessType;

        if(checkboxes.includes(id)){
          const index = checkboxes.indexOf(id);
          checkboxes.splice(index, 1);
        } else {
           checkboxes.push(id);
             console.log("id"+id);
             console.log("checkboxes"+checkboxes);
        }

        this.setState({arrSectedBusinessType : checkboxes});
         console.log(this.state.arrSectedBusinessType);
  }
  moveToService() {
    if(this.state.arrSectedBusinessType.length == 0) {
      Alert.alert(
          'Salon Gig',
          'Please select atleast one business type.',

        );
    }else {
      const {navigate}=this.props.navigation;
      navigate('services')
    }

  }
  componentDidMount()
  {
   this.props.refreshAPITag({"APITag" : 'getCategoriesList'});
   this.props.getCategoriesList();
  }
  renderListItems(){
    // alert(JSON.stringify(this.props.arrCategories ));
           if( this.props.arrCategories != null && this.props.arrCategories.length > 0){
             //  this.setState({ videosList : this.state.data});
             return this.props.arrCategories.map((data, index) => {
               return(
                 <ListItem key={index} >
                 <CheckBox  checked={this.state.arrSectedBusinessType.includes(data.$id) ? true : false}    onPress={ () => this.checkUncheckClick(data.$id)}/>
                     <Body>
                             <Text style={{color:'#666',fontSize:16}} >{data.TypeName}</Text>
                     </Body>
                 </ListItem>
               )
             })

         }else{

             return(
               <ListItem>
                   <Body>
                       <Text>  </Text>
                   </Body>
               </ListItem>
             )
           }
         }


  render() {
      const {navigate} = this.props.navigation;
        var items = this.props.arrCategories;
    return (
     <View style = {{flex : 1,backgroundColor : "white"}}>

      <Container>
        <Header style = {{backgroundColor : '#4B4A92'}}>
          <Left/>
          <Body>
            <Title style = {{color : 'white', width : 200}}>Business Type</Title>
          </Body>
          <Right />
        </Header>
           {this.props.showLoder ? <Spinner color='blue' /> :

                <Content>
                <List>
             {this.renderListItems()}

                    </List>
                </Content>
                  }
     </Container>
  <View style={{height:100,backgroundColor:'white',marginTop : 20, backgroundColor:'white'}}>
    <Button rounded warning style = {{justifyContent: 'center',marginLeft : 20,width : window.width - 40,backgroundColor : '#4B4A92'}} onPress={() =>
    this.moveToService()} >
            <Text style = {{color : 'white', fontSize : 20}}>Next</Text>
          </Button>
          </View>

      </View>
    );
  }
}
const mapDispatchToProps = dispatch => {
 return  bindActionCreators(Actionsto,dispatch);
}
const mapStateToProps = state => {
 return {
   arrCategories: state.arrCategories,
      showLoder : state.showSpinner
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Categories);
