import { UPDATE_TASK_STATE, GET_TASK_LIST } from '../../utils/constants/user';
import { DB } from '../../utils/constants/db';

const initialState = {
  error: '',
  login: false,
  user_type: 'guest',
  fetching: false,
  data_user: {},
};

export default function userState(state: any = initialState, action: any) {
  switch (action.type) {
    case UPDATE_TASK_STATE:
      console.log(state);
      console.log(action.payload['type']);
      console.log(action.payload['name']);
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
        data_user: {...action.payload},
      };

    // case CODE_RECIEVED_FAIL:
    //     return {...state,
    //         error: "This phone is already used",
    //         fetching: false,
    //         user_type: "guest",
    //         succesGetCode: false,
    //     };

    // case CODE_VERIFY_SUCCESS:
    //     return {...state,
    //         error: "",
    //         succesVerifyCode: true,
    //         type_of_input: "userName"
    //     };

    // case CODE_VERIFY_FAIL:
    //     return {...state,
    //         error: "This code do not exist",
    //         succesVerifyCode: false,
    //     };

    // case USER_SIGN_UP_SUCCESS:
    //     return {...state,
    //         login: true,
    //         user_type: "user",
    // };

    // case USER_SIGN_UP_FAIL:
    //     return {...state,
    //         login: false,
    //         user_type: "guest",
    // };

    // case USER_SIGN_IN_SUCCESS:
    //     return {...state,
    //         login: true,
    //         user_type: "user",
    // };

    // case USER_SIGN_IN_FAIL:
    //     return {...state,
    //         login: false,
    //         user_type: "guest",
    //         error: "Please check username or password"
    // };

    // case LOGING_OUT:
    //     return Object.assign( {}, state, {
    //         error: '',
    //         fetching: false,
    //         user_type: 'Guest',
    //         login: false,
    //         data: action.payload,
    //         data_user: '',
    //     });

    // case LOGING_IN_TRUE:
    //     return Object.assign( {}, state, {
    //         error: '',
    //         fetching: false,
    //         user_type: 'User',
    //         login: true,
    //         data: action.payload,
    //         data_user: '',
    //     });

    // case USER_ROLE_SUCCESS:
    //     return Object.assign( {}, state, {
    //         data_user: action.payload,
    //     });

    // case USER_ROLE_ERROR:
    //     return Object.assign( {}, state, {
    //         data_user: action.payload,
    //     });

    default:
      return state;
  }
}
