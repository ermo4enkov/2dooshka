import { UPDATE_TASK_STATE, GET_TASK_LIST } from '../../utils/constants/user';
import { DB } from '../../utils/constants/db';

const initialState = {
  error: '',
  login: false,
  user_type: 'guest',
  fetching: false,
  everydayTasks: [],
  completedToday: [],
  completedEvery: [],
  todayTasks: [],
  days:[]
};

export default function userState(state: any = initialState, action: any) {
  switch (action.type) {
    case UPDATE_TASK_STATE:
      return {
        ...state,
        error: '',
        fetching: false,
        data_user: {..."tasks"["completed"][action.payload['type']].push(action.payload['name'])}
      };

    case GET_TASK_LIST:
      return {
        ...state,
        error: '',
        fetching: false,
        everydayTasks: [...action.payload['everydayTasks']],
        completedToday: [...action.payload['completedToday']],
        completedEvery: [...action.payload['completedEvery']],
        todayTasks: [...action.payload['todayTasks']],
        days:[...action.payload['days']]
      };

    default:
      return state;
  }
}
