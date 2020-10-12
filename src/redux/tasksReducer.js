const GET_TASKS = 'Todo/GET_TASKS';

const initialState = {
	tasks: []
};

const TodoReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_TASKS:
			const fromLocalToRedux = () => {
				let LocalTasks = []
				for (let key of Object.keys(localStorage)) {
					if (key !== 'lastIndex') LocalTasks.push({ id: key, ...JSON.parse(localStorage.getItem(key))});
				}
				return LocalTasks.sort((a, b) => a.id - b.id);
			}

			return {
				...state,
				tasks: fromLocalToRedux(),
			}
		default:
			return state;
	}
};

export default TodoReducer;
export const getTasks = () => ({ type: GET_TASKS });

export const createTask = (text) => {
	return (dispatch) => {
		if (!localStorage['lastIndex']) localStorage.setItem('lastIndex', 0);
		++localStorage['lastIndex'];
		localStorage.setItem(localStorage.getItem('lastIndex').toString(), JSON.stringify({ text, done: false }))
		dispatch(getTasks());
	}
};

export const deleteTask = (id) => {
	return (dispatch) => {
		localStorage.removeItem(id)
		dispatch(getTasks());
	}
};

export const changeTask = (id, text, done) => {
	return (dispatch) => {
		localStorage[id] = JSON.stringify({ text, done })
		dispatch(getTasks());
	}
};