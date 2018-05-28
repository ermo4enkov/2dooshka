import { GET_TASK_LIST } from '../../utils/constants/user';

export function getTaskList(user) {
    return dispatch => {
        return fetch(`https://dooshka-69dc0.firebaseio.com/users/${user}.json`)
            .then(function(response) {
                return response.json();
            }).then(response => {
                dispatch(updateTasksList(response));
            });
    }
}

function updateTasksList(data) {
    return {
        type: GET_TASK_LIST,
        payload: data,
    };
}