import { MyAxios } from "../components/util/MyAxios";

//******************//
//!!!! login area !!!//
//******************//
export async function loginRead(id, pwd, clientCode) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

//******************//
//!!!! ment area !!!//
//******************//

export async function asyncMentRead(id, loginmarker, clientcode) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncMentCreate(id, loginmarker, clientcode, mentName, mentDesc, uploadKey) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncMentRemove(id, loginmarker, clientcode, mentIdx) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncMentRevise(id, loginmarker, clientcode, mentIdx, mentName, mentDesc) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSchedualCreate(id, loginmarker, clientcode, scheduleName, scheduleType, startDate, endDate, startTime, endTime, weekType) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSchedualRevise(id, loginmarker, clientcode, scheduleIdx, scheduleName, scheduleType, startDate, endDate, startTime, endTime, weekType) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSchedualRemove(id, loginmarker, clientcode, scheduleIdx) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncDestinationCreate(id, loginmarker, clientcode, calledNumber) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncDestinationRevise(id, loginmarker, clientcode, calledIdx, calledNumber) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncDestinationRemove(id, loginmarker, clientcode, calledIdx) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncVnsCreate(id, loginmarker, clientcode, vnsNumber) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncVnsRevise(id, loginmarker, clientcode, vnsIdx, vnsNumber, defaultSetIdx) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncVnsRemove(id, loginmarker, clientcode, vnsIdx) {
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

        const data = await MyAxios(sessionUrl, postUrl, body);
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSetCreate(id, loginmarker, clientcode, setName, setType, scheduleSetIdx, vnsNumberSetIdx, calledNumberSetList, mentSetList) {
    try {
        let sequence = 0;
        let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
        let postUrl = `/set/insert?sequence=${sequence}&responseType=json`;
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSetRevise(id, loginmarker, clientcode, setIdx, setName, setType, scheduleSetIdx, vnsNumberSetIdx, calledNumberSetList, mentSetList) {
    try {
        let sequence = 0;
        let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
        let postUrl = `/set/update?sequence=${sequence}&responseType=json`;
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

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncSetRemove(id, loginmarker, clientcode, setIdx) {
    try {
        let sequence = 0;
        let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
        let postUrl = `/set/delete?sequence=${sequence}&responseType=json`;
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            setIdx: setIdx,
        };

        const data = await MyAxios(sessionUrl, postUrl, body);
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
        let sequence = 0;
        let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
        let postUrl = `/user/select?sequence=${sequence}&responseType=json`;
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",
        };

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asyncUserRevise(id, loginmarker, clientcode, userName, userPhone, newUserPwd) {
    try {
        let sequence = 0;
        let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
        let postUrl = `/user/change/info?sequence=${sequence}&responseType=json`;
        let body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            userName: encodeURIComponent(userName),
            userPhone: encodeURIComponent(userPhone),
        };

        let data = await MyAxios(sessionUrl, postUrl, body);

        if (data.result.resultCode !== "00") {
            throw new Error(data.result.resultMessage);
        }

        postUrl = `/user/change/password?sequence=${sequence}&responseType=json`;
        body = {
            userId: id,
            loginMarker: loginmarker,
            clientCode: clientcode,
            clientCodeType: "1",

            newUserPwd: newUserPwd,
        };

        data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}

export async function asynUserCreate(id, pwd, clientcode, userName, userPhone) {
    try {
        let sequence = 0;
        let sessionUrl = `/sequence/select?sequence=${sequence}&responseType=json`;
        let postUrl = `/user/join?sequence=${sequence}&responseType=json`;
        let body = {
            userId: id,
            userPwd: pwd,
            clientCode: clientcode,
            clientCodeType: "1",

            userName: encodeURIComponent(userName),
            userPhone: encodeURIComponent(userPhone),
        };

        const data = await MyAxios(sessionUrl, postUrl, body);
        return data;
    } catch (err) {
        throw new Error(err);
    }
}
