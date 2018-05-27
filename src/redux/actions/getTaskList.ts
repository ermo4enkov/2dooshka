import { GET_TASK_LIST } from '../../utils/constants/user';

export function getTaskList() {
    return dispatch => {
        return fetch('https://dooshka-69dc0.firebaseio.com/users/admin.json')
            .then(function(response) {
                return response.json();
            }).then(response => {
                    dispatch(updateTasksList(response['tasks']));
            });
    }
}

function updateTasksList(data) {
    return {
        type: GET_TASK_LIST,
        payload: data,
    };
}