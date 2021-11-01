//* url info */
const URL_INSERT_CDBIZ = "http://127.0.0.1:8082/cdbiz/insert";
const URL_DELETE_CDBIZ = "http://127.0.0.1:8082/cdbiz/delete";

//* action type *//
const ACTION_INSERT_CDBIZ = "bizUrlSelector/cdbiz/INSERT";
const ACTION_DELETE_CDBIZ = "bizUrlSelector/cdbiz/DELETE";
const ACTION_RESET = "bizUrlSelector/cdbiz/RESET";

//* create action *//
export function cdbizSelectorInsert() {
    return {
        type: ACTION_INSERT_CDBIZ,
    };
}

export function cdbizSelectorDelete() {
    return {
        type: ACTION_DELETE_CDBIZ,
    };
}

export function resetSelector() {
    return {
        type: ACTION_RESET,
    };
}

//* initialize const variable *//
const initializeState = {
    url: "",
};

//* reducer *//
export default function bizUrlSelector(state = initializeState, action) {
    switch (action.type) {
        case ACTION_INSERT_CDBIZ:
            return {
                url: URL_INSERT_CDBIZ,
            };
        case ACTION_DELETE_CDBIZ:
            return {
                url: URL_DELETE_CDBIZ,
            };
        default:
            return {
                url: "",
            };
    }
}
