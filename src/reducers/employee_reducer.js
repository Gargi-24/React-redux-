// import { RENDER_EMPLOYEES } from "../constants";

const employees = [
    { id: 1, name: "Rohini", contact: 8928593563 },
    { id: 2, name: "Komal", contact: 7845892564 },
    { id: 3, name: "Priyanka", contact: 9653451268 },
    { id: 4, name: "Ankur", contact: 895364256 },
    { id: 5, name: "Dhruvika", contact: 9653451268 },
];

const employee = (state = [], action) => {

    switch (action.type) {
        // case RENDER_EMPLOYEES:
        //     return employees
        default:
            return employees
    }
}

export default employee