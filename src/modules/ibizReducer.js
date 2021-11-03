import axios from "axios";

//* action type *//
const LOADING_IBIZ = "ibiz/LOADING";
const LOGIN_IBIZ = "ibiz/LOGIN";
const LOGOUT_IBIZ = "ibiz/LOGOUT";

//* create action *//
function startLoading() {
    return {
        type: LOADING_IBIZ,
    };
}

function login(loginmarker) {
    return {
        type: LOGIN_IBIZ,
        loginmarker: loginmarker,
    };
}

export function logout() {
    return {
        type: LOGOUT_IBIZ,
    };
}

export function asyncLogin() {
    return async function (dispatch, state) {
        dispatch(startLoading());
        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts");
            console.log(response);
            return dispatch(login("HELLOWORLD"));
        } catch (err) {
            return null;
        }
    };
}

export function asyncLogout() {
    return async function (dispatch, state) {
        dispatch(logout());
    };
}

//* initialize const variable *//
const initializeState = {
    loading: false,
    id: "",
    password: "",
    loginmarker: "",
};

//* reducer *//
export default function ibizReducer(state = initializeState, action) {
    switch (action.type) {
        case LOADING_IBIZ:
            return {
                ...state,
                loading: true,
            };
        case LOGIN_IBIZ:
            return {
                ...state,
                loading: false,
                loginmarker: action.loginmarker,
            };

        case LOGOUT_IBIZ:
            return initializeState;
        default:
            return state;
    }
}
