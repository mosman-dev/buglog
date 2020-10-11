import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOGS,
	DELETE_LOGS,
	UPDATE_LOG,
	SEARCH_LOGS,
	SET_CURRENT,
	CLEAR_CURRENT,
} from '../actions/types';

// @@ Create initial state in the reducer
// @@ Logs will start as null and be filled with array of logs when we make a request to JSON server and receive a response

const initialState = {
	logs: null,
	current: null,
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false,
			};
		case ADD_LOGS:
			return {
				...state,
				logs: [...state.logs, action.payload],
				loading: false,
			};
		case DELETE_LOGS:
			return {
				...state,
				logs: state.logs.filter((log) => log.id !== action.payload),
				loading: false,
			};
		case UPDATE_LOG:
			return {
				...state,
				logs: state.logs.map((log) =>
					log.id === action.payload.id ? action.payload : log
				),
			};
		case SEARCH_LOGS:
			return {
				...state,
				logs: action.payload,
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case LOGS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
