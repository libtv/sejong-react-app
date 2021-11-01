//* action type *//
const INSERT = "cdbiz/INSERT";
const DELETE = "cdbiz/DELETE";

//* create action *//
export function insert() {
    return {
        type: INSERT,
    };
}

export function asyncInsert() {
    return function (dispatch, state) {
        setTimeout(() => {
            dispatch(insert());
        }, 1000);
    };
}

//* initialize const variable *//
const initializeState = {};

//* reducer *//
export default function cdbizReducer(state = initializeState, action) {
    switch (action.type) {
        case INSERT:
            return state;
        case DELETE:
            return state;
        default:
            return state;
    }
}
