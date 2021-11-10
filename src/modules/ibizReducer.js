import { MyAxios } from "../components/util/MyAxios";

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

//* create action *//
function startLoading() {
    return {
        type: LOADING_IBIZ,
    };
}

function endLoading() {
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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/user/login?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                userPwd: pwd,
                clientCode: clientCode,
                clientCodeType: "1",
            };

            const login_data = await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/ment/select?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",
                mentIdx: "",
                mentName: "",
                mentDesc: "",
            };

            const mentSelect_data = await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/ment/insert?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",
                mentName: encodeURIComponent(mentName),
                mentDesc: encodeURIComponent(mentDesc),
                uploadKey: uploadKey,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/ment/delete?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",
                mentIdx: mentIdx,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/ment/update?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",
                mentIdx: mentIdx,
                mentName: encodeURIComponent(mentName),
                mentDesc: encodeURIComponent(mentDesc),
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/schedule/select?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",
                scheduleName: "",
                scheduleType: "",
                startDate: "",
                endDate: "",
                startTime: "",
                endTime: "",
                weekType: "",
            };

            console.log(`id : ${id} loginmarker : ${loginmarker} clientcode : ${clientcode}`);

            const mentSelect_data = await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/schedule/insert?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                scheduleName: encodeURIComponent(scheduleName),
                scheduleType: scheduleType,
                startDate: startDate,
                endDate: endDate,
                startTime: startTime,
                endTime: endTime,
                weekType: weekType,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/schedule/update?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                scheduleIdx: scheduleIdx,
                scheduleName: encodeURIComponent(scheduleName),
                scheduleType: scheduleType,
                startDate: startDate,
                endDate: endDate,
                startTime: startTime,
                endTime: endTime,
                weekType: weekType,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/schedule/delete?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                scheduleIdx: scheduleIdx,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/number/ibiz/called/select?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                calledNumber: "",
            };

            const destinationSelect_data = await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/number/ibiz/called/insert?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                calledNumber: calledNumber,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/number/ibiz/called/update?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                calledIdx: calledIdx,
                calledNumber: calledNumber,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/number/ibiz/called/delete?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                calledIdx: calledIdx,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/number/ibiz/vns/select?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                vnsNumber: "",
            };

            const vnsSelect_data = await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/number/ibiz/vns/insert?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                vnsNumber: vnsNumber,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/number/ibiz/vns/update?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                vnsIdx: vnsIdx,
                vnsNumber: vnsNumber,
                defaultSetIdx: defaultSetIdx,
            };

            await MyAxios(sessionUrl, postUrl, body);

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/number/ibiz/vns/delete?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                vnsIdx: vnsIdx,
            };

            await MyAxios(sessionUrl, postUrl, body);

            dispatch(endLoading());
            return dispatch(asyncVnsSelect(id, loginmarker, clientcode));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

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
            let sequence = 0;
            let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
            let postUrl = `/set/select?sequence=${sequence}&responseType=json`;
            let body = {
                userId: id,
                loginMarker: loginmarker,
                clientCode: clientcode,
                clientCodeType: "1",

                setIdx: "",
                setName: "",
                vnsNumberSetIdx: "",
            };

            const setSelect_data = await MyAxios(sessionUrl, postUrl, body);

            dispatch(endLoading());
            console.log(setSelect_data);
            dispatch(setSelect(setSelect_data.setList));
        } catch (err) {
            alert(err);
            dispatch(endLoading());
            return dispatch(logout());
        }
    };
}

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
        default:
            return state;
    }
}
