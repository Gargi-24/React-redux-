import { RENDER_EMPLOYEES, SEARCH_TERM, SELECT_EMPLOYEE } from "../constants";

export function renderEmployees() {
    return {
        type: RENDER_EMPLOYEES,
    }
}

export function searchTerm(query) {
    return {
        type: SEARCH_TERM,
        query
    }
}

export function selectEmployee(employee) {
    return {
        type: SELECT_EMPLOYEE,
        employee
    }
}