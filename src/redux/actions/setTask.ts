import { UPDATE_TASK_STATE } from "../../utils/constants/user";

export function setTask() {
    return (dispatch: any) => {
        return dispatch(userTypeisGuest());
    };
};

function userTypeisGuest() {
    return {
        type: UPDATE_TASK_STATE
    };
}