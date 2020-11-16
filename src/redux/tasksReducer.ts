import { ThunkAction } from "redux-thunk";
import { stateType, taskType } from "../types/types";

const GET_TASKS = 'Todo/GET_TASKS';

const initialState: stateType = {
	tasks: []
};

const TodoReducer = (state = initialState, action: getTasksActionType): stateType => {
	switch (action.type) {
		case GET_TASKS:
			const fromLocalToRedux = (): Array<taskType> => {
				let LocalTasks = []
				for (let key of Object.keys(localStorage)) {
					if (key !== 'lastIndex') LocalTasks.push({ id: key, ...JSON.parse(localStorage.getItem(key) as string)});
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

interface getTasksActionType {
	type: typeof GET_TASKS
}
export const getTasks = (): getTasksActionType => ({ type: GET_TASKS });

export const createTask = (text: string): ThunkAction<void, stateType, unknown, getTasksActionType> => {
	return (dispatch) => {
		if (!localStorage['lastIndex']) localStorage.setItem('lastIndex', '0');
		++localStorage['lastIndex'];
		localStorage.setItem(localStorage.getItem('lastIndex') as string, JSON.stringify({ text, done: false }))
		dispatch(getTasks());
	}
};

export const deleteTask = (id: string): ThunkAction<void, stateType, unknown, getTasksActionType> => {
	return (dispatch) => {
		localStorage.removeItem(id)
		dispatch(getTasks());
	}
};

export const changeTask = (id: string, text: string, done: boolean): ThunkAction<void, stateType, unknown, getTasksActionType> => {
	return (dispatch) => {
		localStorage[id] = JSON.stringify({ text, done })
		dispatch(getTasks());
	}
};