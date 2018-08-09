import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Dimensions,
  View,
  Image,
  Alert,
  DatePickerIOS,
  TouchableOpacity,
} from 'react-native';
import { Container, Header, Content, List, ListItem, Text,Button,Body,Left,Title,Right,Icon,Spinner,CheckBox} from 'native-base';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const window = Dimensions.get('window');
  export default class TimeSlote extends Component<Props> {
  constructor(Props){
     super()
    this.state = {showLoder:false,isShowPicker:false,arrCategories:[],arrSectedBusinessType:[],arrShowPickerForDay:[],chosenDate: new Date(),chosenDate1: new Date()}
   this.setDate = this.setDate.bind(this);
    this.setDate1 = this.setDate1.bind(this);
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
  updateTime(id){
    let checkboxes = this.state.arrShowPickerForDay ;
      //checkboxes.splice(0, 1);
       this.state.arrShowPickerForDay.splice(0, 1);

        if(checkboxes.includes(id)){
          const index = checkboxes.indexOf(id);
          checkboxes.splice(index, 1);
        } else {
           checkboxes.push(id);
             console.log("id"+id);
             console.log("checkboxes"+checkboxes);
        }

        this.setState({arrShowPickerForDay : checkboxes});
  }
  componentDidMount()
  {
     this.setState({arrCategories : [{"day" : "Mon","time":"10:00 AM - 7:00 PM","selected":true},{"day" : "Tue","time":"10:00 AM - 7:00 PM","selected":true},{"day" : "Wed","time":"10:00 AM - 7:00 PM","selected":true},
     {"day" : "Thus","time":"10:00 AM - 7:00 PM","selected":true},{"day" : "Fri","time":"10:00 AM - 7:00 PM","selected":true},{"day" : "Sat","time":"10:00 AM - 7:00 PM","selected":true},{"day" : "Sun","time":"10:00 AM - 7:00 PM","selected":true}]});

     this.setState({arrSectedBusinessType : ["Mon","Tue","Wed","Thus","Fri","Sat","Sun"]});
  }
  renderListItems(){
    // alert(JSON.stringify(this.props.arrCategories ));
           if( this.state.arrCategories != null && this.state.arrCategories.length > 0){
             //  this.setState({ videosList : this.state.data});
             return this.state.arrCategories.map((data, index) => {
               return(
                 <ListItem key={index} >
                   <View style={{flexDirection:'column',flex:1}}>
                  <TouchableOpacity style={{flexDirection:'row'}} onPress={() => this.updateTime(data.day)}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <CheckBox  checked={this.state.arrSectedBusinessType.includes(data.day)}    onPress={ () => this.checkUncheckClick(data.day)}/>


                        <View style={{flexDirection:'row'}}>
                           <Text style={{color:'#666',fontSize:16}} >{data.day}</Text>
                             <Text style={{color:'#666',fontSize:16}} >  {data.time}</Text>
                             </View >

                     <Text style={{color:'blue',fontSize:25}} > + </Text>
                     </View>
                     </TouchableOpacity>
                      { this.state.arrShowPickerForDay.includes(data.day) ?
                         <View style={{flex:1,flexDirection : 'row',justifyContent:'space-between'}}>
                          <Text style={{fontSize:16}} > From </Text>
                         <View style={styles.container}>
                          <DatePickerIOS mode = 'time'
                         date={this.state.chosenDate}
                         onDateChange={this.setDate}
                            />

                            </View>
                              <Text style={{fontSize:16}} > To </Text>
                            <View style={styles.container}>
                             <DatePickerIOS mode = 'time'
                            date={this.state.chosenDate1}
                            onDateChange={this.setDate1}
                               />
                               </View>
                               </View>
                            :  <Text style={{height : 0}}> </Text> }
                            </View>
                 </ListItem>
               )
             })

         }
         }

   setDate(newDate) {
    this.setState({chosenDate: newDate})
       }
       setDate1(newDate) {
        this.setState({chosenDate1: newDate})
           }

  render() {
      const {navigate} = this.props.navigation;
    return (
     <View style = {{flex : 1,backgroundColor : "white"}}>

      <Container>
        <Header style = {{backgroundColor : '#4B4A92'}}>
          <Left/>
          <Body>
            <Title style = {{color : 'white', width : 200}}>Opening hours</Title>
          </Body>
          <Right />
        </Header>
                <Content>
                <List>
                   { this.renderListItems() }
                    </List>
                </Content>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
   justifyContent:'center'
  },
})
