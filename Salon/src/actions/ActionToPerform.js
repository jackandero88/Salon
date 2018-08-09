/*
 * action creators
 */

import ACTION_CONTAINER from './ActionTypes.js';
import {NetInfo} from 'react-native';
import { Container, Content, Toast, Button, Text, Icon } from 'native-base';
import {
   Alert,
  AsyncStorage
  } from 'react-native';
  import {Actions} from 'react-native-router-flux';
  import {bindActionCreators} from 'redux';
  import {connect} from 'react-redux';
  import * as Actionsto from '../actions/ActionToPerform.js';


//const liveUrl =  'http://172.24.2.167:4075/'
const liveUrl =  'http://api.datakindle.com/'

///////############ SHOW & HIDE LOADER METHOD  ###############//////////

/*****************************************************************/

export const  ShowLoader = () => {

 return (dispatch) => {
   dispatch({
     type: ACTION_CONTAINER.SHOW_LOADER,
   });
 }
}
export const HideLoader = () => {

 return (dispatch) => {
   dispatch({
     type: ACTION_CONTAINER.HIDE_LOADER,
   });
 }
}


/*****************************************************************/

///////####################### END  ####################//////////

/*****************************************************************/

/*****************************************************************/

///////############ FORGOT PASSWORD METHOD  ###############//////////

/*****************************************************************/




export const  ForgotPass = (Data) => {
  //console.log(UserDetails);
    console.log(Data);
 return (dispatch) => {
   dispatch({
      type: ACTION_CONTAINER.SHOW_LOADER,
    });
  fetch(liveUrl+'users/forgetpassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
     body: JSON.stringify(Data)
    }).then((response) => response.json())
          .then((responseJson) => {
               dispatch({
             type: ACTION_CONTAINER.HIDE_LOADER,
          });
           console.log("data =====",responseJson);
           if(responseJson.messageId == '200'){

                 dispatch({
             type: ACTION_CONTAINER.FORGOT_PASSWORD_MESSAGE,
             data:responseJson.message
          });

           }else{
          dispatch({
             type: ACTION_CONTAINER.FORGOT_PASSWORD_MESSAGE,
             data:responseJson.message
          });
           }

          })
          .catch((error) => {
                 dispatch({
             type: ACTION_CONTAINER.HIDE_LOADER,
          });
            console.log("error is coming",error);
          });
 }
};


/*****************************************************************/

///////####################### END  ####################//////////

/*****************************************************************/





/*****************************************************************/

///////############ CUSTOMER PRODUCT LISTING ###############//////////

/*****************************************************************/


 export const  GetUserProduct = (initialPosition) => {

   console.log("lat long "+initialPosition);

   if (initialPosition == ''){

     return function (dispatch) {
       dispatch({
         type: ACTION_CONTAINER.SHOW_LOADER,
       });
         fetch(liveUrl+'items/item_listing_for_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        body: JSON.stringify({"latitude":parseFloat('30.708393'),"longitude":parseFloat('76.702294')})
        }).then((response) => response.json())
           .then((responseJson) => {
             dispatch({
                type: ACTION_CONTAINER.HIDE_LOADER,
              });

            if(responseJson.status == "success"){
              console.log("sdata=======",responseJson);
             dispatch({
            type: ACTION_CONTAINER.LISTDATA,
            data: responseJson.data
          })
            }else{
              dispatch({
            type: ACTION_CONTAINER.FAILED,
            data: responseJson
          })
            }

           })
           .catch((error) => {
             dispatch({
                type: ACTION_CONTAINER.HIDE_LOADER,
              });
            // console.log(error);
           });
       };


   }else {

     return function (dispatch) {

       dispatch({
         type: ACTION_CONTAINER.SHOW_LOADER,
       });
         fetch(liveUrl+'items/item_listing_for_user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        body: JSON.stringify({"latitude":parseFloat(initialPosition.coords.latitude),"longitude":parseFloat(initialPosition.coords.longitude)})
        }).then((response) => response.json())
           .then((responseJson) => {
             dispatch({
                type: ACTION_CONTAINER.HIDE_LOADER,
              });

            if(responseJson.status == "success"){
              console.log("sdata=======",responseJson);
             dispatch({
            type: ACTION_CONTAINER.LISTDATA,
            data: responseJson.data
          })
            }else{
              dispatch({
            type: ACTION_CONTAINER.FAILED,
            data: responseJson
          })
            }

           })
           .catch((error) => {
             dispatch({
                type: ACTION_CONTAINER.HIDE_LOADER,
              });
            // console.log(error);
           });
       };
   }




 };


/*****************************************************************/

///////####################### END  ####################//////////

/*****************************************************************/





/*****************************************************************/

 ////////############ VENDOR PRODUCT LISTING ###############//////////

/*****************************************************************/



 /*
  * action TO show data
  */

 export const  changeText = (text) => {
  return {
    type: ACTION_CONTAINER.CHANGE_DATA,
    text
  }
 };

/*****************************************************************/

///////####################### END  ####################//////////

/*****************************************************************/





/*****************************************************************/

////////############ NETWORK CONNECTIVITY CHECKER ###############//////////

/*****************************************************************/

function handleFirstConnectivityChange(isConnected)
{
  console.log('First change: ' + isConnected);
  if (!isConnected)
  {
    alert('Your Internet connection is offline. Please try after some time.');
  }
  NetInfo.removeEventListener( 'change', handleFirstConnectivityChange );
}
export const refreshAllActions = () => {
    console.log("refresh Error message");
  return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.API_ERROR,
      payload:''
    });
  }
}



/*****************************************************************/

///////####################### END  ####################//////////

/*****************************************************************/
export const  getCategoriesList = () => {


return function (dispatch) {
  dispatch({
    type: ACTION_CONTAINER.REFRESH_APITAG,
     data: 'businessInfo'
  });
  dispatch({
    type: ACTION_CONTAINER.SHOW_LOADER,
  });
   fetch('http://api.datakindle.com/Business/GetBusinessTypeList')
      .then((response) => response.json())
      .then((responseJson) => {

          //alert(JSON.stringify(responseJson));
         dispatch({
        type: ACTION_CONTAINER.CATEGORIES,
        data: responseJson
      })
      dispatch({
         type: ACTION_CONTAINER.HIDE_LOADER,
       });
      })
      .catch((error) => {
        dispatch({
           type: ACTION_CONTAINER.HIDE_LOADER,
         });
         dispatch({
           type: ACTION_CONTAINER.API_ERROR,
           payload:error.message
         });
      });
  };


};



/*****************************************************************/

  ////////############ COMMON API METHODS ###############//////////

/*****************************************************************/

 export const APICall = ({isShowLoader,APITag,urlMethodName,parameters}) => {


  return (dispatch) => {

  // if (isShowLoader == true) {
  //   dispatch({
  //     type: ACTION_CONTAINER.SHOW_LOADER,
  //   });
  //   }
    fetch(liveUrl+urlMethodName, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'no-cache'
      },
      body: "grant_type=password&"+parameters
    })

    .then((response) => response.json())
          .then((responseJson) => {

            alert("Success"+JSON.stringify(responseJson));

      if (isShowLoader == true) {
      dispatch({
        type: ACTION_CONTAINER.HIDE_LOADER,
      });

    }
    if (responseJson.Success == true){

             console.log('API TAg'+APITag);
         if (APITag == 'login' ) {
             alert("null value in API");
             //  console.log("adsfadsfadsf"+APITag,responseJSON.data);
               dispatch({
                 type: ACTION_CONTAINER.LOGIN_USER,
                 data: responseJson.data
               })
           }
          if (APITag == 'register' ) {

          //  console.log("adsfadsfadsf"+APITag,responseJSON.data);
            dispatch({
              type: ACTION_CONTAINER.SIGNUP_USER,
              data: responseJson.data
            })
        }

      }else {
        dispatch({
          type: ACTION_CONTAINER.HIDE_LOADER,
          payload:responseJson.data
        });
        // dispatch({
        //   type: ACTION_CONTAINER.API_ERROR,
        //   payload:response.Message
        // });


      }

    })
    .catch(e => {
      dispatch({
        type: ACTION_CONTAINER.HIDE_LOADER,
        payload:responseJson.Message
      });
      dispatch({
        type: ACTION_CONTAINER.API_ERROR,
        payload:responseJson.Message
      });

    });

    //call the API and use the promise to check the response
    // in response callBack .then() call the dispatcher.
  }
 };


/*****************************************************************/

///////####################### END  ####################//////////

/*****************************************************************/

/****************************Sign up ***************************/
export const  signUp = (UserDetails) => {
  //alert(JSON.stringify(UserDetails))
return (dispatch) => {
   fetch('http://api.datakindle.com/api/Account/Register', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Cache-Control': 'no-cache'
       },
            body:`grant_type=password&email=thlam75@gmail.com&password=Password1234!&confirmpassword=Password1234!&firstname=dinesh&lastname=kumar`

          //JSON.stringify(UserDetails)

     }).then((response) => response.json())
           .then((responseJson) => {
            console.log("data =====",responseJson);
            alert("Success"+responseJson)
            dispatch({
              type: ACTION_CONTAINER.SIGNUP_USER,
              data: responseJson
            })

           })
           .catch((error) => {
          console.log("error is coming",error);
          alert("Catch block"+error.message);
           });

};
};






/*****************************************************************/

 ////////############ LOGIN  API METHODS ###############//////////

/*****************************************************************/

// {
//           grant_type=password&
//           username= thlam75@gmail.com&
//           password=Password1234!
//           }

export const  login = (UserDetails) => {
return (dispatch) => {
  dispatch({
    type: ACTION_CONTAINER.REFRESH_APITAG,
     data: UserDetails.APITag
  });
  dispatch({
    type: ACTION_CONTAINER.SHOW_LOADER,
  });

   fetch('http://api.datakindle.com/Token', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
         'Cache-Control': 'no-cache'
       },
            body:`grant_type=password&username=thlam75@gmail.com&password=Password1234!`

          //JSON.stringify(UserDetails)

     }).then((response) => response.json())
           .then((responseJson) => {
            dispatch({
              type: ACTION_CONTAINER.LOGIN_USER,
              data: responseJson
            })
            dispatch({
              type: ACTION_CONTAINER.HIDE_LOADER,
            });


           })
           .catch((error) => {
             dispatch({
               type: ACTION_CONTAINER.HIDE_LOADER,
             });
          console.log("error is coming",error);

           });
   }
};
export const  refreshAPITag = (dataValue) => {
 return (dispatch) => {
   dispatch({
     type: ACTION_CONTAINER.REFRESH_APITAG,
      data: dataValue
   });
}
};

//
//
// /*****************************************************************/
//
// ///////####################### END  ####################//////////
//
// /*****************************************************************/
//
//
//
// export const  getDeviceToken = (value) => {
//   //console.log(UserDetails);
//  return (dispatch) => {
//
//     dispatch({
//       type: ACTION_CONTAINER.DEVICETOKEN,
//       value
//     });
//
// }
// };






/*****************************************************************/

 ////////############ USER DETAIL METHOD  ###############//////////

/*****************************************************************/


export const  UserDetails = (value) => {
  //console.log(UserDetails);
 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.USERDETAILSTORE,
      value
    });

}
};
export const  refreshUserDetails = () => {
  //console.log(UserDetails);
 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.USERDETAILSTORE,
      value:{}
    });

}
};
export const  refreshAllCards = () => {
  //console.log(UserDetails);
 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.ALLCARDS,
      data:{data:[]}
    });

}
};
export const  userProfileupdate = () => {

 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.USERPROFILEUPDATE,
      data:{'value':false}
    });

}
};

export const  refreshAddCardStatus = () => {
  //console.log(UserDetails);
 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.ADDNEWCARD,
      data:{'addNewCardResult':false}
    });

}
};



/*****************************************************************/

///////####################### END  ####################//////////

/*****************************************************************/







/*****************************************************************/

 ////////############ Logout  METHOD  ###############//////////

/*****************************************************************/


export const  LogoutAction = () => {
  //console.log(UserDetails);
 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.LOGOUT,

    });

}
};


/*****************************************************************/

///////####################### END  ####################//////////

/*****************************************************************/







/*****************************************************************/

 ////////############ PRODUCT DETAIL  METHOD  ###############//////////

/*****************************************************************/


export const  ProductDetailMehod = (data) => {
  //console.log(UserDetails);
 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.PRODUCT_DETAIL,
      data
    });

}
};

export const  ProductDetailRefreshMehod = () => {
  //console.log(UserDetails);
 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.PRODUCT_DETAIL,
      payload:{}
    });

}
};
export const  refreshCustomerOrderlist = () => {
  //console.log(UserDetails);
 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.CUSTOMERORDERLISTREFRESH,
      data:{}
    });

}
};
export const  refreshStoplist = () => {
  //console.log(UserDetails);
 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.STOPREFRESH,
      data:{}
    });

}
};

/*****************************************************************/

///////####################### END  ####################//////////

/*****************************************************************/






/*****************************************************************/

 ////////############ ADD TO CART  METHOD  ###############//////////

/*****************************************************************/


export const  addToCart = (data) => {

 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.ADDTOCART,
      data
    });

}
};

export const  refreshToCart = () => {

 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.ADDTOCART,
      payload:{data:[]}
    });

}
};

export const  updatePaymentStatus = () => {

 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.PAYMENTREFRESHRESULT,
      data:{'paymentStatus':false}
    });

}
};

export const  updateUserinfo = (data) => {

 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.LOGIN_USER,
      payload:data
    });

}
};

export const  getUerType = (data) => {

 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.USERTYPE,
      payload:data
    });

}
};
export const  selectedCardInfo = (data) => {

 return (dispatch) => {

    dispatch({
      type: ACTION_CONTAINER.CURRENTSELECTEDCARD,
      data
    });

}
};
