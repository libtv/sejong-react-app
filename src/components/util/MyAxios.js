import axios from "axios";
import { enCrypt } from "./AES128";

export async function getAxios(url) {
    const response = await axios({
        method: "GET",
        url: url,
        timeout: 3000,
    });
    return response.data;
}

export async function postAxios(url, body, sessionKey) {
    var sendData = enCrypt(JSON.stringify(body), sessionKey);

    const response = await axios({
        method: "POST",
        url: url,
        timeout: 3000,
        data: sendData,
    });

    return response.data;
}

export async function MyAxios(sessionUrl, postUrl, body) {
    try {
        const session_data = await getAxios(sessionUrl);

        if (session_data == null) {
            throw new Error("세션 데이터가 존재하지 않습니다.");
        } else if (session_data.result.resultCode !== "00") {
            throw new Error(session_data.result.resultMessage);
        }

        const sessionKey = session_data.session.sessionKey;
        const login_data = await postAxios(postUrl, body, sessionKey);

        if (login_data == null) {
            throw new Error("데이터가 존재하지 않습니다. 잠시 후 다시 시도해주세요.");
        } else if (login_data.result.resultCode !== "00") {
            throw new Error(login_data.result.resultMessage);
        }

        return login_data;
    } catch (err) {
        throw new Error(err);
    }
}
