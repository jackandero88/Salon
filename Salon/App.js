// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */
//
// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, View,ScrollView,Alert} from 'react-native';
// import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
// type Props = {};
//  const  login = (UserDetails) => {
//   //console.log(UserDetails);
//
//  alert( 'body:`grant_type=password&username=${UserDetails.Username}&password=${UserDetails.Password}`');
//   fetch('http://api.datakindle.com/Token', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'Cache-Control': 'no-cache'
//       },
//            body:`grant_type=password&username=thlam75@gmail.com&password=Password1234!`
//
//          //JSON.stringify(UserDetails)
//
//     }).then((response) => response.json())
//           .then((responseJson) => {
//            console.log("data =====",responseJson);
//          alert(JSON.stringify(responseJson));
//           })
//           .catch((error) => {
//          console.log("error is coming",error);
//          alert(error.message);
//           });
//   if(UserDetails.email =="test@test.com" && UserDetails.password == 123456){
//       return {
//         type: '',
//       }
//   }else{
//       return {
//         type: '',
//       }
//
//   }
//
// };
//
// export default class App extends Component<Props> {
//   constructor(props) {
//     super(props);
//     this.state = {};
//     this.onDayPress = this.onDayPress.bind(this);
//      alert('hi');
//     login({
//     'Username': 'thlam75@gmail.com',
//     'Password' : 'Password1234!'
//   });
//   }
//
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <Text style={styles.text}>Calendar with selectable date and arrows</Text>
//         <Calendar
//           onDayPress={this.onDayPress}
//           style={styles.calendar}
//           hideExtraDays
//           markedDates={{[this.state.selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}}}
//         />
//         <Text style={styles.text}>Calendar with marked dates and hidden arrows</Text>
//         <Calendar
//           style={styles.calendar}
//           current={'2012-05-16'}
//           minDate={'2012-05-10'}
//           maxDate={'2012-05-29'}
//           firstDay={1}
//           markedDates={{
//             '2012-05-23': {selected: true, marked: true},
//             '2012-05-24': {selected: true, marked: true, dotColor: 'green'},
//             '2012-05-25': {marked: true, dotColor: 'red'},
//             '2012-05-26': {marked: true},
//             '2012-05-27': {disabled: true, activeOpacity: 0}
//           }}
//           // disabledByDefault={true}
//           hideArrows={true}
//         />
//         <Text style={styles.text}>Calendar with custom day component</Text>
//         <Calendar
//           style={[styles.calendar, {height: 300}]}
//           dayComponent={({date, state}) => {
//             return (<View style={{flex: 1}}><Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black'}}>{date.day}</Text></View>);
//           }}
//         />
//         <Text style={styles.text}>Calendar with period marking and spinner</Text>
//         <Calendar
//           style={styles.calendar}
//           current={'2012-05-16'}
//           minDate={'2012-05-10'}
//           displayLoadingIndicator
//           markingType={'period'}
//           theme={{
//             calendarBackground: '#333248',
//             textSectionTitleColor: 'white',
//             dayTextColor: 'red',
//             todayTextColor: 'white',
//             selectedDayTextColor: 'white',
//             monthTextColor: 'white',
//             selectedDayBackgroundColor: '#333248',
//             arrowColor: 'white',
//             // textDisabledColor: 'red',
//             'stylesheet.calendar.header': {
//               week: {
//                 marginTop: 5,
//                 flexDirection: 'row',
//                 justifyContent: 'space-between'
//               }
//             }
//           }}
//           markedDates={{
//             '2012-05-17': {disabled: true},
//             '2012-05-08': {textColor: '#666'},
//             '2012-05-09': {textColor: '#666'},
//             '2012-05-14': {startingDay: true, color: 'blue', endingDay: true},
//             '2012-05-21': {startingDay: true, color: 'blue'},
//             '2012-05-22': {endingDay: true, color: 'gray'},
//             '2012-05-24': {startingDay: true, color: 'gray'},
//             '2012-05-25': {color: 'gray'},
//             '2012-05-26': {endingDay: true, color: 'gray'}}}
//           hideArrows={false}
//         />
//         <Text style={styles.text}>Calendar with multi-dot marking</Text>
//         <Calendar
//           style={styles.calendar}
//           current={'2012-05-16'}
//           markingType={'multi-dot'}
//           markedDates={{
//             '2012-05-08': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'white'}, {key: 'massage', color: 'red', selectedDotColor: 'white'}], selected: true},
//             '2012-05-09': {dots: [{key: 'vacation', color: 'blue', selectedDotColor: 'red'}, {key: 'massage', color: 'red', selectedDotColor: 'blue'}], disabled: true}
//           }}
//           hideArrows={false}
//         />
//         <Text style={styles.text}>Calendar with multi-period marking</Text>
//         <Calendar
//           style={styles.calendar}
//           current={'2012-05-16'}
//           markingType={'multi-period'}
//           markedDates={{
//             '2012-05-16': {
//               periods: [
//                 { startingDay: true, endingDay: false, color: '#5f9ea0' },
//                 { startingDay: true, endingDay: false, color: '#ffa500' },
//               ]
//             },
//             '2012-05-17': {
//               periods: [
//                 { startingDay: false, endingDay: true, color: '#5f9ea0' },
//                 { startingDay: false, endingDay: true, color: '#ffa500' },
//                 { startingDay: true, endingDay: false, color: '#f0e68c' },
//               ]
//             },
//             '2012-05-18': {
//               periods: [
//                 { startingDay: true, endingDay: true, color: '#ffa500' },
//                 { color: 'transparent' },
//                 { startingDay: false, endingDay: false, color: '#f0e68c' },
//               ]
//             },
//           }}
//           hideArrows={false}
//         />
//         <Text style={styles.text}>Calendar with week numbers</Text>
//         <Calendar
//           onDayPress={this.onDayPress}
//           style={styles.calendar}
//           hideExtraDays
//           showWeekNumbers
//           markedDates={{[this.state.selected]: {selected: true}}}
//         />
//         <Text style={styles.text}>Custom calendar with custom marking type</Text>
//         <Calendar
//           style={styles.calendar}
//           onDayLongPress={this.onDayLongPress}
//           hideExtraDays
//           current={'2018-03-01'}
//           minDate={'2018-03-01'}
//           markingType={'custom'}
//           markedDates={{
//             '2018-03-01': {
//               customStyles: {
//                 container: {
//                   backgroundColor: 'white',
//                   elevation: 2
//                 },
//                 text: {
//                   color: 'blue',
//                 },
//               }
//             },
//             '2018-03-08': {selected: true},
//             '2018-03-09': {
//               customStyles: {
//                 container: {
//                   backgroundColor: 'red',
//                   elevation: 4,
//                 },
//                 text: {
//                   color: 'white',
//                 },
//               }
//             },
//             '2018-03-10': {disabled: true},
//             '2018-03-14': {
//               customStyles: {
//                 container: {
//                   backgroundColor: 'green',
//                 },
//                 text: {
//                   color: 'white',
//                 },
//               },
//             },
//             '2018-03-15': {
//               customStyles: {
//                 container: {
//                   backgroundColor: 'black',
//                   elevation: 2
//                 },
//                 text: {
//                   color: 'yellow',
//                 },
//               }
//             },
//             '2018-03-20': {
//               customStyles: {
//                 container: {
//                   backgroundColor: 'pink',
//                   elevation: 4,
//                 },
//                 text: {
//                   color: 'blue',
//                 },
//               }
//             },
//             '2018-03-21': {disabled: true},
//             '2018-03-28': {
//               customStyles: {
//                 container: {
//                   backgroundColor: 'green',
//                 },
//                 text: {
//                   color: 'black',
//                   fontWeight: 'bold'
//                 },
//               },
//             },
//             '2018-03-29': {
//               customStyles: {
//                 container: {
//                   backgroundColor: 'white',
//                   elevation: 2
//                 },
//                 text: {
//                   color: 'blue',
//                 },
//               }
//             },
//             '2018-03-30': {
//               customStyles: {
//                 container: {
//                   backgroundColor: 'violet',
//                   elevation: 4,
//                   borderColor: 'red',
//                   borderWidth: 5,
//                 },
//                 text: {
//                   marginTop: 3,
//                   fontSize: 11,
//                   color: 'yellow',
//                 },
//               }
//             },
//             '2018-03-31': {
//               customStyles: {
//                 container: {
//                   backgroundColor: 'green',
//                   borderRadius: 0,
//                 },
//                 text: {
//                   color: 'white',
//                 },
//               },
//             }}}
//           hideArrows={false}
//         />
//       </ScrollView>
//     );
//   }
//
//   onDayPress(day) {
//     this.setState({
//       selected: day.dateString
//     });
//   }
// }
//
// const styles = StyleSheet.create({
//   calendar: {
//     borderTopWidth: 1,
//     paddingTop: 5,
//     borderBottomWidth: 1,
//     borderColor: '#eee',
//     height: 350
//   },
//   text: {
//     textAlign: 'center',
//     borderColor: '#bbb',
//     padding: 10,
//     backgroundColor: '#eee'
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'gray'
//   }
// });

import React from 'react';
import { View } from 'react-native';
import {Provider} from 'react-redux';
import reducers from './src/reducers/reducers.js'
import LoginForm from './src/components/LoginForm.js'
import RouterForm from './src/Router/RouterForm.js'

import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
const store = createStore(
 reducers,
 applyMiddleware(thunk)
);


const App = () => {
 return (
     <Provider store={store}>
         <RouterForm/>
     </Provider>

   );
}

export default App;
