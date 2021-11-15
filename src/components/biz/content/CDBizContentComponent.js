import styled from "styled-components";
import { cdbizSelectorDelete, cdbizSelectorInsert } from "../../../modules/bizUrlSelector";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useState } from "react";
import $ from "jquery";
import { asyncCBizDelete, asyncCBizInsert, asyncDBizDelete, asyncDBizInsert } from "../../../modules/myCURD";

const CDBizWrapContent = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0px 40px;

    box-sizing: border-box;
`;

const CDBizTitleContent = styled.div`
    width: 100%;
    font-family: "NotoSansKR-Regular";
    font-size: 35px;
    font-weight: 100;
    color: black;
    padding-bottom: 10px;
    border-bottom: 5px solid red;
`;

const CDBizFormDiv = styled.form``;

const CDBizFormContent = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 15px;

    h2 {
        width: 20%;
        font-family: "NotoSansKR-Regular";
        font-size: 23px;
        font-weight: 100;
        margin-left: 20px;
        margin-right: 15px;
        box-sizing: border-box;
    }

    select {
        font-family: "NotoSansKR-Regular";
        width: 100%;
        padding: 10px;
        margin-right: 10px;
        box-sizing: border-box;
    }

    button {
        font-family: "NotoSansKR-Bold";
        background-color: red;
        width: 100%;
        height: 60px;
        padding: 15px 70px;
        border: none;
        border-radius: 30px;
        font-size: 16px;
        color: white;
        cursor: pointer;
        background-position: 0;
    }

    table {
        margin-top: 15px;
        width: 100%;
        border: 1px solid gray;
        border-collapse: collapse;
    }
    td {
        border: 1px solid gray;
        padding: 13px 20px;
        text-align: center;
        font-family: "NotoSansKR-Regular";
        font-size: 15px;
    }

    input {
        width: 100%;
        padding: 8px 3px;
    }

    .tableColor {
        background-color: #eff2f7;
    }

    li {
        list-style: none;
        font-family: "NotoSansKR-Regular";
        font-size: 15px;
    }

    .chkAll {
        width: 20px;
    }

    box-sizing: border-box;
`;

function CDBizContentComponent() {
    const state = useSelector((state) => {
        return state.bizUrlSelector;
    });
    const dispatch = useDispatch();

    const onSelectClick = useCallback(
        (e) => {
            e.preventDefault();
            if (e.target.value === "delete") {
                dispatch(cdbizSelectorDelete());
            } else {
                dispatch(cdbizSelectorInsert());
            }
        },
        [state]
    );

    return (
        <div className="CDbizContent">
            <CDBizWrapContent>
                <CDBizTitleContent>CD Biz</CDBizTitleContent>
                <CDBizFormDiv>
                    <CDBizFormContent>
                        <h2>메소드</h2>
                        <select name="register" className="select" onChange={onSelectClick} defaultValue={"none"}>
                            <option value="none" disabled>
                                선택
                            </option>
                            <option value="insert">등록</option>
                            <option value="delete">삭제</option>
                        </select>
                    </CDBizFormContent>
                </CDBizFormDiv>
            </CDBizWrapContent>
        </div>
    );
}

export default React.memo(CDBizContentComponent);

export function CDBizContentInsertComponent() {
    const initializeState = "";
    const [state, setState] = useState(initializeState);

    const onChangeState = (e) => {
        setState(e.target.value);
    };

    const onSubmitCDBiz = async () => {
        //* cbiz 일 경우 *//
        if (state === "cbiz") {
            const logisCode = $("#cbiz-insert-logiscode").val();
            const userPwd = $("#cbiz-insert-userpwd").val();
            const vnsNumber = $("#cbiz-insert-vnsnumber").val();
            const callingHash = $("#cbiz-insert-callinghash").val();
            const csTime = $("#cbiz-insert-cstime").val();
            const ceTime = $("#cbiz-insert-cetime").val();
            const callId = $("#cbiz-insert-callid").val();
            const level = $("#cbiz-insert-level").val();

            if (logisCode === "" || userPwd === "" || vnsNumber === "" || callingHash === "" || csTime === "" || ceTime === "" || callId === "" || level === "") {
                return alert("값을 입력해주세요.");
            }

            try {
                const data = await asyncCBizInsert(logisCode, userPwd, vnsNumber, callingHash, csTime, ceTime, callId, level);
                return alert(data.result.resultMessage);
            } catch (err) {
                return alert(err);
            }
        } else if (state === "dbiz") {
            const logisCode = $("#dbiz-insert-logiscode").val();
            const userPwd = $("#dbiz-insert-userpwd").val();
            const vnsNumber = $("#dbiz-insert-vnsnumber").val();
            const mentKind = $("#dbiz-insert-mentKind").val();

            if (logisCode === "" || userPwd === "" || vnsNumber === "" || mentKind === "") {
                return alert("값을 입력해주세요.");
            }

            try {
                const data = await asyncDBizInsert(logisCode, userPwd, vnsNumber, mentKind);
                return alert(data.result.resultMessage);
            } catch (err) {
                return alert(err);
            }
        }
    };

    return (
        <div className="CDBizContentInsertComponent">
            <CDBizWrapContent>
                <CDBizTitleContent>CDBiz 등록 폼</CDBizTitleContent>
                <CDBizFormContent>
                    <table>
                        <tbody>
                            <tr>
                                <td className="tableColor">Option</td>
                                <td colSpan={7}>
                                    <select name="register" className="select" defaultValue={"none"} onChange={onChangeState}>
                                        <option value="none" disabled>
                                            선택
                                        </option>
                                        <option value="cbiz">C biz</option>
                                        <option value="dbiz">D biz</option>
                                    </select>
                                </td>
                            </tr>
                            {state === "cbiz" && (
                                <>
                                    <tr>
                                        <td className="tableColor">LogisCode</td>
                                        <td colSpan={7}>
                                            <input type={"text"} id="cbiz-insert-logiscode"></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="tableColor">userPwd</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="cbiz-insert-userpwd"></input>
                                        </td>
                                        <td className="tableColor">vnsNumber</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="cbiz-insert-vnsnumber"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tableColor">callingHash</td>
                                        <td colSpan={7}>
                                            <input type={"text"} id="cbiz-insert-callinghash"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tableColor">cstime</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="cbiz-insert-cstime"></input>
                                        </td>

                                        <td className="tableColor">cetime</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="cbiz-insert-cetime"></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="tableColor">call Id</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="cbiz-insert-callid"></input>
                                        </td>

                                        <td className="tableColor">level</td>
                                        <td colSpan={3}>
                                            <select id="cbiz-insert-level">
                                                <option value="none" disabled>
                                                    선택
                                                </option>
                                                <option value="0">가벼운 사기</option>
                                                <option value="1">보통 사기</option>
                                                <option value="2">심한 사기</option>
                                            </select>
                                        </td>
                                    </tr>
                                </>
                            )}

                            {state === "dbiz" && (
                                <>
                                    <tr>
                                        <td className="tableColor">LogisCode</td>
                                        <td colSpan={7}>
                                            <input type={"text"} id="dbiz-insert-logiscode"></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="tableColor">userPwd</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="dbiz-insert-userpwd"></input>
                                        </td>
                                        <td className="tableColor">vnsNumber</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="dbiz-insert-vnsnumber"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tableColor">mentKind</td>
                                        <td colSpan={7}>
                                            <select id="dbiz-insert-mentkind">
                                                <option value="none" disabled>
                                                    선택
                                                </option>
                                                <option value="0">착신자 멘트 사용 안함</option>
                                                <option value="1">네이버 Short 착신자 멘트</option>
                                                <option value="2">네이버 Full(기본) 착신자 멘트</option>
                                                <option value="3">모두 Full 착신자 멘트</option>
                                            </select>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </CDBizFormContent>
                <CDBizFormContent>
                    <input type="checkbox" name="chkAll" id="chk" className="chkAll" />
                    <li>해당 사이트를 이용한 불법적인 행위를 금지하는 것에 동의합니다.</li>
                </CDBizFormContent>
                <CDBizFormContent>
                    <button onClick={onSubmitCDBiz}>제출하기</button>
                </CDBizFormContent>
            </CDBizWrapContent>
        </div>
    );
}

export function CDBizContentDeleteComponent() {
    const initializeState = "";
    const [state, setState] = useState(initializeState);

    const onChangeState = (e) => {
        setState(e.target.value);
    };

    const onSubmitCDBiz = async () => {
        //* cbiz 일 경우 *//
        if (state === "cbiz") {
            const logisCode = $("#cbiz-delete-logiscode").val();
            const userPwd = $("#cbiz-delete-userpwd").val();
            const vnsNumber = $("#cbiz-delete-vnsnumber").val();
            const callingHash = $("#cbiz-delete-callinghash").val();
            const csTime = $("#cbiz-delete-cstime").val();
            const ceTime = $("#cbiz-delete-cetime").val();
            const callId = $("#cbiz-delete-callid").val();

            if (logisCode === "" || userPwd === "" || vnsNumber === "" || callingHash === "" || csTime === "" || ceTime === "" || callId === "") {
                return alert("값을 입력해주세요.");
            }

            try {
                const data = await asyncCBizDelete(logisCode, userPwd, vnsNumber, callingHash, csTime, ceTime, callId);
                return alert(data.result.resultMessage);
            } catch (err) {
                return alert(err);
            }
        } else if (state === "dbiz") {
            const logisCode = $("#dbiz-delete-logiscode").val();
            const userPwd = $("#dbiz-delete-userpwd").val();
            const vnsNumber = $("#dbiz-delete-vnsnumber").val();

            if (logisCode === "" || userPwd === "" || vnsNumber === "") {
                return alert("값을 입력해주세요.");
            }

            try {
                const data = await asyncDBizDelete(logisCode, userPwd, vnsNumber);
                return alert(data.result.resultMessage);
            } catch (err) {
                return alert(err);
            }
        }
    };
    return (
        <div className="CDBizContentDeleteComponent">
            <CDBizWrapContent>
                <CDBizTitleContent>CDBiz 삭제 폼</CDBizTitleContent>
                <CDBizFormContent>
                    <table>
                        <tbody>
                            <tr>
                                <td className="tableColor">Option</td>
                                <td colSpan={7}>
                                    <select name="register" className="select" defaultValue={"none"} onChange={onChangeState}>
                                        <option value="none" disabled>
                                            선택
                                        </option>
                                        <option value="cbiz">C biz</option>
                                        <option value="dbiz">D biz</option>
                                    </select>
                                </td>
                            </tr>
                            {state === "cbiz" && (
                                <>
                                    <tr>
                                        <td className="tableColor">LogisCode</td>
                                        <td colSpan={7}>
                                            <input type={"text"} id="cbiz-delete-logiscode"></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="tableColor">userPwd</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="cbiz-delete-userpwd"></input>
                                        </td>
                                        <td className="tableColor">vnsNumber</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="cbiz-delete-vnsnumber"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tableColor">callingHash</td>
                                        <td colSpan={7}>
                                            <input type={"text"} id="cbiz-delete-callinghash"></input>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="tableColor">cstime</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="cbiz-delete-cstime"></input>
                                        </td>

                                        <td className="tableColor">cetime</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="cbiz-delete-cetime"></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="tableColor">call Id</td>
                                        <td colSpan={7}>
                                            <input type={"text"} id="cbiz-delete-callid"></input>
                                        </td>
                                    </tr>
                                </>
                            )}

                            {state === "dbiz" && (
                                <>
                                    <tr>
                                        <td className="tableColor">LogisCode</td>
                                        <td colSpan={7}>
                                            <input type={"text"} id="dbiz-delete-logiscode"></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="tableColor">userPwd</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="dbiz-delete-userpwd"></input>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="tableColor">vnsNumber</td>
                                        <td colSpan={3}>
                                            <input type={"text"} id="dbiz-delete-vnsnumber"></input>
                                        </td>
                                    </tr>
                                </>
                            )}
                        </tbody>
                    </table>
                </CDBizFormContent>
                <CDBizFormContent>
                    <input type="checkbox" name="chkAll" id="chk" className="chkAll" />
                    <li>해당 사이트를 이용한 불법적인 행위를 금지하는 것에 동의합니다.</li>
                </CDBizFormContent>
                <CDBizFormContent>
                    <button onClick={onSubmitCDBiz}>제출하기</button>
                </CDBizFormContent>
            </CDBizWrapContent>
        </div>
    );
}
