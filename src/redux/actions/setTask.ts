import { UPDATE_TASK_STATE } from "../../utils/constants/user";
import { DB } from "../../utils/constants/db";

export function setTask(event) {
    DB.completed_tasks.push(event.target.name);
    delete DB.everyday_tasks[event.target.value];

    console.log(DB);
    
    return (dispatch: any) => {
        return dispatch(userTypeisGuest());
    };
};

function userTypeisGuest() {
    return {
        type: UPDATE_TASK_STATE
    };
}