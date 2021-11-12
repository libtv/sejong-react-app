import {
    asyncDestinationCreate,
    asyncDestinationRead,
    asyncDestinationRemove,
    asyncDestinationRevise,
    asyncMentCreate,
    asyncMentRead,
    asyncMentRemove,
    asyncMentRevise,
    asyncScedualRead,
    asyncSchedualCreate,
    asyncSchedualRemove,
    asyncSchedualRevise,
    asyncSetCreate,
    asyncSetRead,
    asyncSetRemove,
    asyncSetRevise,
    asyncUserRead,
    asyncUserRevise,
    asyncVnsCreate,
    asyncVnsRead,
    asyncVnsRemove,
    asyncVnsRevise,
    asynUserCreate,
    loginRead,
} from "./myCURD";

//* action type *//
const LOADING_IBIZ = "ibiz/LOADING";
const ENDLOADING_IBIZ = "ibiz/ENDLOADING";
const LOGIN_IBIZ = "ibiz/LOGIN";
const LOGOUT_IBIZ = "ibiz/LOGOUT";
const LOGINFAILED_IBIZ = "ibiz/LOGINFAILED_IBIZ";
const MENTSELECT_IBIZ = "ibiz/MENT_SELECT";
const SCHEDUALSELECT_IBIZ = "ibiz/SCHDUAL_SELECT";
const DESTINATIONSELECT_IBIZ = "ibiz/DESTINATION_SELECT";
const VNSSELECT_IBIZ = "ibiz/VNS_SELECT";
const VNSTABLESELECT_IBIZ = "ibiz/VNS_TABLE_SELECT";
const SETSELECT_IBIZ = "ibiz/SET_SELECT";
const USERSELECT_IBIZ = "ibiz/USER_SELECT";

//* create action *//
export function startLoading() {
    return {
        type: LOADING_IBIZ,
    };
}

export function endLoading() {
    return {
        type: ENDLOADING_IBIZ,
    };
}

//******************//
//!!!! login area !!!//
//******************//

function login({ id, password, loginmarker, clientcode }) {
    return {
        type: LOGIN_IBIZ,
        id: id,
        password: password,
        clientcode: clientcode,
        loginmarker: loginmarker,
    };
}

export function logout() {
    return {
        type: LOGOUT_IBIZ,
    };
}

export function asyncLogin(id, pwd, clientCode) {
    return async function (dispatch, state) {
        dispatch(startLoading());

        try {
            const login_data = await loginRead(id, pwd, clientCode);

            dispatch(endLoading());
            return dispatch(
                login({
                    id: id,
                    password: pwd,
                    clientcode: clientCode,
                    loginmarker: login_data.result.resultMessage,
                })
            );
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncLogout() {
    return async function (dispatch, state) {
        dispatch(logout());
    };
}

//******************//
//!!!! ment area !!!//
//******************//

function mentSelect(mentlist) {
    return {
        type: MENTSELECT_IBIZ,
        mentlist: mentlist,
    };
}

export function asyncMentSelect(id, loginmarker, clientcode) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            const mentSelect_data = await asyncMentRead(id, loginmarker, clientcode);
            dispatch(endLoading());
            return dispatch(mentSelect(mentSelect_data.mentList));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncMentInsert(id, loginmarker, clientcode, mentName, mentDesc, uploadKey) {
    return async function (dispatch) {
        dispatch(startLoading());
        try {
            await asyncMentCreate(id, loginmarker, clientcode, mentName, mentDesc, uploadKey);
            dispatch(endLoading());
            return dispatch(asyncMentSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncMentDelete(id, loginmarker, clientcode, mentIdx) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncMentRemove(id, loginmarker, clientcode, mentIdx);
            dispatch(endLoading());
            return dispatch(asyncMentSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncMentUpdate(id, loginmarker, clientcode, mentIdx, mentName, mentDesc) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncMentRevise(id, loginmarker, clientcode, mentIdx, mentName, mentDesc);
            dispatch(endLoading());
            return dispatch(asyncMentSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

//******************//
//! schedual area *//
//******************//

function scedualSelect(scedualList) {
    return {
        type: SCHEDUALSELECT_IBIZ,
        sceduallist: scedualList,
    };
}

export function asyncScedualSelect(id, loginmarker, clientcode) {
    return async function (dispatch) {
        dispatch(startLoading());
        try {
            const mentSelect_data = await asyncScedualRead(id, loginmarker, clientcode);

            dispatch(endLoading());
            return dispatch(scedualSelect(mentSelect_data.scheduleList));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncSchedualInsert(id, loginmarker, clientcode, scheduleName, scheduleType, startDate, endDate, startTime, endTime, weekType) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncSchedualCreate(id, loginmarker, clientcode, scheduleName, scheduleType, startDate, endDate, startTime, endTime, weekType);
            dispatch(endLoading());
            return dispatch(asyncScedualSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncSchedualUpdate(id, loginmarker, clientcode, scheduleIdx, scheduleName, scheduleType, startDate, endDate, startTime, endTime, weekType) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncSchedualRevise(id, loginmarker, clientcode, scheduleIdx, scheduleName, scheduleType, startDate, endDate, startTime, endTime, weekType);
            dispatch(endLoading());
            return dispatch(asyncScedualSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncSchedualDelete(id, loginmarker, clientcode, scheduleIdx) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncSchedualRemove(id, loginmarker, clientcode, scheduleIdx);
            dispatch(endLoading());
            return dispatch(asyncScedualSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

//******************//
//! destination area *//
//******************//

function destinationSelect(destinationList) {
    return {
        type: DESTINATIONSELECT_IBIZ,
        destinationlist: destinationList,
    };
}

export function asyncDestinationSelect(id, loginmarker, clientcode) {
    return async function (dispatch) {
        dispatch(startLoading());
        try {
            const destinationSelect_data = await asyncDestinationRead(id, loginmarker, clientcode);
            dispatch(endLoading());
            return dispatch(destinationSelect(destinationSelect_data.calledNumberList));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncDestinationInsert(id, loginmarker, clientcode, calledNumber) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncDestinationCreate(id, loginmarker, clientcode, calledNumber);
            dispatch(endLoading());
            return dispatch(asyncDestinationSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncDestinationUpdate(id, loginmarker, clientcode, calledIdx, calledNumber) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncDestinationRevise(id, loginmarker, clientcode, calledIdx, calledNumber);
            dispatch(endLoading());
            return dispatch(asyncDestinationSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncDestinationDelete(id, loginmarker, clientcode, calledIdx) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncDestinationRemove(id, loginmarker, clientcode, calledIdx);
            dispatch(endLoading());
            return dispatch(asyncDestinationSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

//******************//
//! vns area *//
//******************//

function vnsSelect(vnsList) {
    return {
        type: VNSSELECT_IBIZ,
        vnslist: vnsList,
    };
}

export function asyncVnsSelect(id, loginmarker, clientcode) {
    return async function (dispatch) {
        dispatch(startLoading());
        try {
            const vnsSelect_data = await asyncVnsRead(id, loginmarker, clientcode);
            dispatch(endLoading());

            var list = [];
            vnsSelect_data.vnsNumberList.map((vns, idx) => {
                if (idx >= 0 && idx < 10) {
                    list.push(vns);
                }
            });
            dispatch(asyncVnsTableSelect(list));
            dispatch(vnsSelect(vnsSelect_data.vnsNumberList));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

function vnsTableSelect(vnslist) {
    return {
        type: VNSTABLESELECT_IBIZ,
        vnstablelist: vnslist,
    };
}

export function asyncVnsTableSelect(vnslist) {
    return function (dispatch) {
        dispatch(vnsTableSelect(vnslist));
    };
}

export function asyncVnsInsert(id, loginmarker, clientcode, vnsNumber) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncVnsCreate(id, loginmarker, clientcode, vnsNumber);
            dispatch(endLoading());
            return dispatch(asyncVnsSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncVnsUpdate(id, loginmarker, clientcode, vnsIdx, vnsNumber, defaultSetIdx) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncVnsRevise(id, loginmarker, clientcode, vnsIdx, vnsNumber, defaultSetIdx);
            dispatch(endLoading());
            return dispatch(asyncVnsSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncVnsDelete(id, loginmarker, clientcode, vnsIdx) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncVnsRemove(id, loginmarker, clientcode, vnsIdx);
            dispatch(endLoading());
            return dispatch(asyncVnsSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

//******************//
//! set area *//
//******************//

function setSelect(setList) {
    return {
        type: SETSELECT_IBIZ,
        setlist: setList,
    };
}

export function asyncSetSelect(id, loginmarker, clientcode) {
    return async function (dispatch) {
        dispatch(startLoading());
        try {
            const setSelect_data = await asyncSetRead(id, loginmarker, clientcode);
            dispatch(endLoading());
            dispatch(setSelect(setSelect_data.setList));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncSetInsert(id, loginmarker, clientcode, setName, setType, scheduleSetIdx, vnsNumberSetIdx, calledNumberSetList, mentSetList) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            dispatch(setSelect(""));
            await asyncSetCreate(id, loginmarker, clientcode, setName, setType, scheduleSetIdx, vnsNumberSetIdx, calledNumberSetList, mentSetList);
            dispatch(endLoading());
            return dispatch(asyncSetSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncSetUpdate(id, loginmarker, clientcode, setIdx, setName, setType, scheduleSetIdx, vnsNumberSetIdx, calledNumberSetList, mentSetList) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            dispatch(setSelect(""));
            await asyncSetRevise(id, loginmarker, clientcode, setIdx, setName, setType, scheduleSetIdx, vnsNumberSetIdx, calledNumberSetList, mentSetList);
            dispatch(endLoading());
            return dispatch(asyncSetSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncSetDelete(id, loginmarker, clientcode, setIdx) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            dispatch(setSelect(""));
            await asyncSetRemove(id, loginmarker, clientcode, setIdx);
            dispatch(endLoading());
            return dispatch(asyncSetSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

//******************//
//! user area *//
//******************//

function userSelect(userList) {
    return {
        type: USERSELECT_IBIZ,
        userlist: userList,
    };
}

export function asyncUserSelect(id, loginmarker, clientcode) {
    return async function (dispatch) {
        dispatch(startLoading());
        try {
            const userSelect_data = await asyncUserRead(id, loginmarker, clientcode);
            dispatch(endLoading());
            dispatch(userSelect(userSelect_data.user));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncUserUpdate(id, loginmarker, clientcode, userName, userPhone, newUserPwd) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            await asyncUserRevise(id, loginmarker, clientcode, userName, userPhone, newUserPwd);
            dispatch(endLoading());
            alert("새로운 정보롤 업데이트가 완료되었습니다. 다시 로그인해주시기 바랍니다.");
            return dispatch(logout());
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

export function asyncUserInsert(id, pwd, clientCode, userName, userPhone) {
    return async function (dispatch) {
        dispatch(startLoading());

        try {
            const data = await asynUserCreate(id, pwd, clientCode, userName, userPhone);
            if (data.result.resultCode === "00") {
                alert("회원가입이 완료되었습니다.");
            } else {
                alert(data.result.resultMessage);
            }
            dispatch(endLoading());
        } catch (err) {
            alert(err);
            dispatch(endLoading());
        }
    };
}

//******************//
//! default area *//
//******************//

//* initialize const variable *//
const initializeState = {
    loading: false,
    id: "",
    password: "",
    clientcode: "",
    loginmarker: "",
    failed: false,
    mentlist: "",
    sceduallist: "",
    destinationlist: "",
    vnslist: "",
    vnstablelist: "",
    setlist: "",
    userlist: "",
};

//* reducer *//
export default function ibizReducer(state = initializeState, action) {
    switch (action.type) {
        case LOADING_IBIZ:
            return {
                ...state,
                loading: true,
            };
        case ENDLOADING_IBIZ:
            return {
                ...state,
                loading: false,
            };
        case LOGIN_IBIZ:
            return {
                ...state,
                id: action.id,
                password: action.password,
                clientcode: action.clientcode,
                loginmarker: action.loginmarker,
            };
        case LOGOUT_IBIZ:
            return initializeState;
        case LOGINFAILED_IBIZ:
            return {
                ...initializeState,
                failed: true,
            };
        case MENTSELECT_IBIZ:
            return {
                ...state,
                mentlist: action.mentlist,
            };
        case SCHEDUALSELECT_IBIZ:
            return {
                ...state,
                sceduallist: action.sceduallist,
            };
        case DESTINATIONSELECT_IBIZ:
            return {
                ...state,
                destinationlist: action.destinationlist,
            };
        case VNSSELECT_IBIZ:
            return {
                ...state,
                vnslist: action.vnslist,
            };
        case VNSTABLESELECT_IBIZ:
            return {
                ...state,
                vnstablelist: action.vnstablelist,
            };

        case SETSELECT_IBIZ:
            return {
                ...state,
                setlist: action.setlist,
            };

        case USERSELECT_IBIZ:
            return {
                ...state,
                userlist: action.userlist,
            };
        default:
            return state;
    }
}
