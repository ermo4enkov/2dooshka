import { GET_TASK_LIST, UPDATE_COMPLETED_TODAY, UPDATE_COMPLETED_EVERYDAY } from '../../utils/constants/user';

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
      case GET_TASK_LIST:
          return {
              ...state,
              error: '',
              fetching: false,
              everydayTasks: [...action.payload['everydayTasks']],
              completedToday: [...action.payload['completedToday']],
              completedEvery: [...action.payload['completedEvery']],
              todayTasks: [...action.payload['todayTasks']],
              days: [...action.payload['days']]
          };

      case UPDATE_COMPLETED_EVERYDAY:
        return {
            ...state,
            completedEvery: [...action.payload.name]
        };

      case UPDATE_COMPLETED_TODAY:
          return {
              ...state,
              completedToday: [action.payload.name]
          };


    default:
      return state;
  }
}
