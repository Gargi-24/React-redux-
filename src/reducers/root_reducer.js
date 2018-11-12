import { SELECT_EMPLOYEE } from "../constants";

const selectedEmployee = (state = null, action) => {

    let employee = null
    switch (action.type) {
        case SELECT_EMPLOYEE:
            employee = action.employee
            return employee
        default:
            return state
    }
}

export default selectedEmployee