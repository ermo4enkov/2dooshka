import { ADD_COMPLETED_TODAY, ADD_COMPLETED_EVERYDAY } from '../../utils/constants/user';

export function setTaskFinished(name, value, type) {
  const data = { "type": type, "name": name, "value": value};
  var myInit = { method: 'POST',
    body: name};

  fetch('https://dooshka-69dc0.firebaseio.com/users/admin/completedEvery.json', myInit).then(response => response.json()).then(response => console.log(response));
  return (dispatch: any) => {
    return data.type === 'completedEveryday' ? dispatch(updateCompletedEveryday(data)): dispatch(updateCompletedToday(data));
  }
}

function updateCompletedEveryday(data) {
  return {
    type: ADD_COMPLETED_EVERYDAY,
    payload: data
  };
}

function updateCompletedToday(data) {
  return {
    type: ADD_COMPLETED_TODAY,
    payload: data
  };
}

