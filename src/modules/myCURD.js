import { MyAxios } from "../components/util/MyAxios";
import {
    ACCOUNT_CREATE_URL,
    ACCOUNT_READ_URL,
    ACCOUNT_REVISE_PASSWORD_URL,
    ACCOUNT_REVISE_URL,
    CBIZ_DELETE_URL,
    CBIZ_INSERT_URL,
    DBIZ_DELETE_URL,
    DBIZ_INSERT_URL,
    DESTINATION_CREATE_URL,
    DESTINATION_READ_URL,
    DESTINATION_REMOVE_URL,
    DESTINATION_REVISE_URL,
    LOGIN_URL,
    MENT_CREATE_URL,
    MENT_READ_URL,
    MENT_REMOVE_URL,
    MENT_REVISE_URL,
    SCHEDUAL_CREATE_URL,
    SCHEDUAL_READ_URL,
    SCHEDUAL_REMOVE_URL,
    SCHEDUAL_REVISE_URL,
    SESSION_URL,
    SET_CREATE_URL,
    SET_READ_URL,
    SET_REMOVE_URL,
    SET_REVISE_URL,
    VNS_CREATE_URL,
    VNS_READ_URL,
    VNS_REMOVE_URL,
    VNS_REVISE_URL,
} from "../const/const";
import axios from "axios";
import { SERVER_INFO } from "../const/const";

//******************//
//!!!! login area !!!//
//******************//
export async function loginRead(id, pwd, clientCode) {
    try {
        let body = {
            userId: id,
            userPwd: pwd,
            clientCode: clientCode,
            clientCodeType: "1",
        };

        const data = await MyAxios(SESSION_URL, LOGIN_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

//******************//
//!!!! ment area !!!//
//******************//

export async function asyncMentUpload(id, clientcode, file) {
    try {
        const data = await axios.post(`${SERVER_INFO}/upload/ment/user/${id}/clientCode/${clientcode}/clientCodeType/1/insert`, file, {
            headers: {
                "content-type": "application/octet-stream",
            },
        });

        return data.data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncMentRead(id, loginmarker, clientcode) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",
            mentIdx: "",
            mentName: "",
            mentDesc: "",
        };

        const data = await MyAxios(SESSION_URL, MENT_READ_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncMentCreate(id, loginmarker, clientcode, mentName, mentDesc, uploadKey) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",
            mentName: encodeURIComponent(mentName),
            mentDesc: encodeURIComponent(mentDesc),
            uploadKey: uploadKey,
        };

        const data = await MyAxios(SESSION_URL, MENT_CREATE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncMentRemove(id, loginmarker, clientcode, mentIdx) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",
            mentIdx: mentIdx,
        };

        const data = await MyAxios(SESSION_URL, MENT_REMOVE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncMentRevise(id, loginmarker, clientcode, mentIdx, mentName, mentDesc) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",
            mentIdx: mentIdx,
            mentName: encodeURIComponent(mentName),
            mentDesc: encodeURIComponent(mentDesc),
        };

        const data = await MyAxios(SESSION_URL, MENT_REVISE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

//******************//
//! schedual area *//
//******************//

export async function asyncScedualRead(id, loginmarker, clientcode) {
    try {
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

        const data = await MyAxios(SESSION_URL, SCHEDUAL_READ_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSchedualCreate(id, loginmarker, clientcode, scheduleName, scheduleType, startDate, endDate, startTime, endTime, weekType) {
    try {
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

        const data = await MyAxios(SESSION_URL, SCHEDUAL_CREATE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSchedualRevise(id, loginmarker, clientcode, scheduleIdx, scheduleName, scheduleType, startDate, endDate, startTime, endTime, weekType) {
    try {
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

        const data = await MyAxios(SESSION_URL, SCHEDUAL_REVISE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSchedualRemove(id, loginmarker, clientcode, scheduleIdx) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            scheduleIdx: scheduleIdx,
        };

        const data = await MyAxios(SESSION_URL, SCHEDUAL_REMOVE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

//******************//
//! destination area *//
//******************//

export async function asyncDestinationRead(id, loginmarker, clientcode) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            calledNumber: "",
        };

        const data = await MyAxios(SESSION_URL, DESTINATION_READ_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncDestinationCreate(id, loginmarker, clientcode, calledNumber) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            calledNumber: calledNumber,
        };

        const data = await MyAxios(SESSION_URL, DESTINATION_CREATE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncDestinationRevise(id, loginmarker, clientcode, calledIdx, calledNumber) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            calledIdx: calledIdx,
            calledNumber: calledNumber,
        };

        const data = await MyAxios(SESSION_URL, DESTINATION_REVISE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncDestinationRemove(id, loginmarker, clientcode, calledIdx) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            calledIdx: calledIdx,
        };

        const data = await MyAxios(SESSION_URL, DESTINATION_REMOVE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

//******************//
//! vns area *//
//******************//

export async function asyncVnsRead(id, loginmarker, clientcode) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            vnsNumber: "",
        };

        const data = await MyAxios(SESSION_URL, VNS_READ_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncVnsCreate(id, loginmarker, clientcode, vnsNumber) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            vnsNumber: vnsNumber,
        };

        const data = await MyAxios(SESSION_URL, VNS_CREATE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncVnsRevise(id, loginmarker, clientcode, vnsIdx, vnsNumber, defaultSetIdx) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            vnsIdx: vnsIdx,
            vnsNumber: vnsNumber,
            defaultSetIdx: defaultSetIdx,
        };

        const data = await MyAxios(SESSION_URL, VNS_REVISE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncVnsRemove(id, loginmarker, clientcode, vnsIdx) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            vnsIdx: vnsIdx,
        };

        const data = await MyAxios(SESSION_URL, VNS_REMOVE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

//******************//
//! set area *//
//******************//

export async function asyncSetRead(id, loginmarker, clientcode) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            setIdx: "",
            setName: "",
            vnsNumberSetIdx: "",
        };

        const data = await MyAxios(SESSION_URL, SET_READ_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSetCreate(id, loginmarker, clientcode, setName, setType, scheduleSetIdx, vnsNumberSetIdx, calledNumberSetList, mentSetList) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            setName: encodeURIComponent(setName),
            setType: setType,
            scheduleSetIdx: scheduleSetIdx,
            vnsNumberSetIdx: vnsNumberSetIdx,
            calledNumberSetList: calledNumberSetList,
            mentSetList: mentSetList,
        };

        const data = await MyAxios(SESSION_URL, SET_CREATE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSetRevise(id, loginmarker, clientcode, setIdx, setName, setType, scheduleSetIdx, vnsNumberSetIdx, calledNumberSetList, mentSetList) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            setIdx: setIdx,
            setName: encodeURIComponent(setName),
            setType: setType,
            scheduleSetIdx: scheduleSetIdx,
            vnsNumberSetIdx: vnsNumberSetIdx,
            calledNumberSetList: calledNumberSetList,
            mentSetList: mentSetList,
        };

        const data = await MyAxios(SESSION_URL, SET_REVISE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSetRemove(id, loginmarker, clientcode, setIdx) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            setIdx: setIdx,
        };

        const data = await MyAxios(SESSION_URL, SET_REMOVE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

//******************//
//! account area *//
//******************//

export async function asyncUserRead(id, loginmarker, clientcode) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",
        };

        const data = await MyAxios(SESSION_URL, ACCOUNT_READ_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncUserRevise(id, loginmarker, clientcode, userName, userPhone, newUserPwd) {
    try {
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            userName: encodeURIComponent(userName),
            userPhone: encodeURIComponent(userPhone),
        };

        let data = await MyAxios(SESSION_URL, ACCOUNT_REVISE_URL, body);

        if (data.result.resultCode !== "00") {
            throw new Error(data.result.resultMessage);
        }

        body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            newUserPwd: newUserPwd,
        };

        data = await MyAxios(SESSION_URL, ACCOUNT_REVISE_PASSWORD_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asynUserCreate(id, pwd, clientcode, userName, userPhone) {
    try {
        let body = {
            userId: id,
            userPwd: pwd,
            clientCode: clientcode,
            clientCodeType: "1",

            userName: encodeURIComponent(userName),
            userPhone: encodeURIComponent(userPhone),
        };

        const data = await MyAxios(SESSION_URL, ACCOUNT_CREATE_URL, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

//******************//
//! cdbiz area *//
//******************//

export async function asyncCBizInsert(logisCode, userPwd, vnsNumber, callingHash, csTime, ceTime, callId, level) {
    try {
        let body = {
            userPwd: userPwd,
            vnsNumber: vnsNumber,
            callingHash: callingHash,
            cstime: csTime,
            cetime: ceTime,
            callId: callId,
            level: level,
        };

        const POST_URL = `${CBIZ_INSERT_URL}${logisCode}`;
        const data = await axios.post(POST_URL, [JSON.stringify(body)]);

        return data.data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncDBizInsert(logisCode, userPwd, vnsNumber, mentKind) {
    try {
        let body = {
            userPwd: userPwd,
            vnsNumber: vnsNumber,
            mentKind: mentKind,
        };

        const POST_URL = `${DBIZ_INSERT_URL}${logisCode}`;
        const data = await axios.post(POST_URL, [JSON.stringify(body)]);

        return data.data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncCBizDelete(logisCode, userPwd, vnsNumber, callingHash, csTime, ceTime, callId) {
    try {
        let body = {
            userPwd: userPwd,
            vnsNumber: vnsNumber,
            callingHash: callingHash,
            cstime: csTime,
            cetime: ceTime,
            callId: callId,
        };

        const POST_URL = `${CBIZ_DELETE_URL}${logisCode}`;
        const data = await axios.post(POST_URL, [JSON.stringify(body)]);

        return data.data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncDBizDelete(logisCode, userPwd, vnsNumber) {
    try {
        let body = {
            userPwd: userPwd,
            vnsNumber: vnsNumber,
        };

        const POST_URL = `${DBIZ_DELETE_URL}${logisCode}`;
        const data = await axios.post(POST_URL, [JSON.stringify(body)]);

        return data.data;
    } catch (err) {
        throw new Error(err);
    }
}
