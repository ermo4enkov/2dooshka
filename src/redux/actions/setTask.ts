import { UPDATE_TASK_STATE } from "../../utils/constants/user";
import { DB } from "../../utils/constants/db";

export function setTask(event, name) {
    DB.completed_tasks.push(event.target.name);
    delete DB[name][event.target.value];
    
    return (dispatch: any) => {
        return dispatch(userTypeisGuest());
    };
};

function userTypeisGuest() {
    return {
        type: UPDATE_TASK_STATE
    };
}