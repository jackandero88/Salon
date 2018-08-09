import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Button,Body,Left,Title,Right,Icon,Spinner,CheckBox} from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Actions} from 'react-native-router-flux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actionsto from '../actions/ActionToPerform.js';

const window = Dimensions.get('window');
  class Services extends Component<Props> {
  constructor(Props){
     super()
    this.state = {showLoder:false,arrCategories:[],arrSectedBusinessType:[]}
  }
   backPress(){
        const {navigate} = this.props.navigation;
           navigate('categories');
   }
   addService() {
     const {navigate} = this.props.navigation;
        navigate('serviceDetails');
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
  componentDidMount()
  {

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
     <View style = {{flex : 1}}>

      <Container>
        <Header style = {{backgroundColor : '#4B4A92'}}>
          <Left>
                <Icon name="arrow-back" backgroundColor = "white" onPress={ () => this.backPress()} />
                </Left>


          <Body>
            <Title style = {{color : 'white', width : 200}}>Services</Title>
          </Body>
          <Right>
              <Text style={{color:'white',fontSize:16}} onPress={() => this.addService()}> Add </Text>
                </Right>
        </Header>
           {this.props.showLoder ? <Spinner color='blue' /> :

                <Content>
                <List>
                <ListItem>
                 <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.addService()}>
                  <Text >Color</Text>

                    <Body>

                    </Body>
                    <Right>

                      <Text style={{color:'#666',fontSize:16, width : 100, textAlign:'right'}} > 1h
                      <Text>  $900</Text>
                      </Text>
                          </Right>
                          </TouchableOpacity>
                </ListItem>
                <ListItem>
                 <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.addService()}>

                  <Text>Highlights</Text>

                    <Body>

                    </Body>
                    <Right>
                    <Text style={{color:'#666',fontSize:16, width : 100, textAlign:'right'}} > 1h
                    <Text>  $900</Text>
                    </Text>
                          </Right>
                          </TouchableOpacity >
                </ListItem>
                <ListItem>
 <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.addService()}>
                  <Text>Haircut</Text>
                    <Body>

                    </Body>
                    <Right>
                    <Text style={{color:'#666',fontSize:16, width : 100, textAlign:'right'}} > 1h
                    <Text>  $900</Text>
                    </Text>
                          </Right>
                          </TouchableOpacity >
                </ListItem>
                </List>
                {
             //    <List>
             // {//this.renderListItems()
             //  }
             //
             //        </List>
           }
                </Content>
                  }
     </Container>
<View style={{backgroundColor : 'white'}}>
     <Button rounded warning style = {{  justifyContent: 'center',marginLeft : 30,width : window.width - 60,backgroundColor : '#4B4A92'}} onPress={() =>
     navigate('timeSlote', { name: 'Jane' })} >
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

export default connect(mapStateToProps,mapDispatchToProps)(Services);
