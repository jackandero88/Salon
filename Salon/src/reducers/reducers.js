
import {AsyncStorage} from 'react-native';
import ACTION_CONTAINER from '../actions/ActionTypes.js';

let cloneObject = function(obj){
	return JSON.parse(JSON.stringify(obj))
}

const INITSTATES = {ErrorMsg:'',user:[],signupData:[],arrCategories:[],APITag:''};

function DataShowReducer(state = INITSTATES, action) {
	switch (action.type) {
	case ACTION_CONTAINER.REFRESH_STORE:
		return INITSTATES
		case ACTION_CONTAINER.REFRESH_APITAG:
		 console.log("API TAG"+action.data);
				return {...state,'APITag':action.data}
	case ACTION_CONTAINER.HIDE_LOADER:
		return {...state,'showSpinner':false,showError:''}
	case ACTION_CONTAINER.SHOW_LOADER:
		return {...state,'showSpinner':true}
	case ACTION_CONTAINER.API_ERROR:
		return {...state,'ErrorMsg':action.payload}
	case ACTION_CONTAINER.LOGIN_FAILED:
		return {...state,'ErrorShow':action.data}
	case ACTION_CONTAINER.FORGOT_PASSWORD_MESSAGE:
		return {...state,'Forgot_msg':action.data}
	case ACTION_CONTAINER.LOGIN_USER:
		AsyncStorage.setItem("accessToken", JSON.stringify(action.data));
		return {...state,'user':action.data}
		case ACTION_CONTAINER.SIGNUP_USER:
			return {...state,'signupData':JSON.stringify(action.data)}
	case ACTION_CONTAINER.LOGOUT:
		return INITSTATES
		case ACTION_CONTAINER.FORGOT_PASSWORD_MESSAGE:
			return {...state,'Forgot_msg':action.data}
			case ACTION_CONTAINER.CATEGORIES :
			 //alert(JSON.stringify(action.data));
			 return {...state,'arrCategories':action.data}

			default:
				return state;
	}
}



export default DataShowReducer
