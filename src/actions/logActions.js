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
} from './types';

export const getLogs = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('/logs');
		const data = await res.json();

		dispatch({
			type: GET_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// @@ Add new log

export const addLog = (log) => async (dispatch) => {
	try {
		setLoading();

		// @@ Making post request
		const res = await fetch('/logs', {
			method: 'POST',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: ADD_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Delete log from server

export const deleteLog = (id) => async (dispatch) => {
	try {
		setLoading();

		await fetch(`/logs/${id}`, {
			method: 'DELETE',
		});

		dispatch({
			type: DELETE_LOGS,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Update log on server

export const updateLog = (log) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs/${log.id}`, {
			method: 'PUT',
			body: JSON.stringify(log),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();

		dispatch({
			type: UPDATE_LOG,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Search logs

export const searchLogs = (text) => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch(`/logs?q=${text}`); // json-server search functionality (adding ?q=text query parameter)
		const data = await res.json();

		dispatch({
			type: SEARCH_LOGS,
			payload: data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response.statusText,
		});
	}
};

// Set current log
export const setCurrent = (log) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};

// Clear current log
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
