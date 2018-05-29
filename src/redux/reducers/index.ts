import { GET_TASK_LIST, ADD_COMPLETED_TODAY, ADD_COMPLETED_EVERYDAY } from '../../utils/constants/user';

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

      case ADD_COMPLETED_EVERYDAY:
        return {
            ...state,
            completedEvery: [...state.completedEvery, action.payload.name]
        };

      case ADD_COMPLETED_TODAY:
          return {
              ...state,
              completedToday: [...state.completedToday, ...action.payload.name]
          };


    default:
      return state;
  }
}
