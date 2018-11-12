import { SEARCH_TERM } from "../constants";

const search = (state = '', action) => {

    switch (action.type) {
        case SEARCH_TERM:
            console.log(action.query);

            return action.query;

        default: return state;
    }
}

export default search