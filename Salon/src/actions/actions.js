
import ACTION_CONTAINER from './ActionTypes.js';

export const emailChanged = (text) => {

	return {
		type: ACTION_TYPES.EMAIL_CHANGED,
		payload: text
	}
};


export const passwordChanged = (text) => {

	return {
		type: ACTION_TYPES.PASSWORD_CHANGED,
		payload: text
	}
};
