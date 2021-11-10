import styled from "styled-components";
import { cdbizSelectorDelete, cdbizSelectorInsert } from "../../../modules/bizUrlSelector";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import MyTable from "../../util/MyTable";

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
        width: 60%;
        padding: 20px;
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
    return (
        <div className="CDBizContentInsertComponent">
            <CDBizWrapContent>
                <CDBizTitleContent>CDBiz 등록 폼</CDBizTitleContent>
                <CDBizFormContent>
                    <MyTable>
                        <tr>
                            <td className="tableColor">LogisCode</td>
                            <td colSpan={7}>
                                <input type={"text"}></input>
                            </td>
                        </tr>

                        <tr>
                            <td className="tableColor">userPwd</td>
                            <td colSpan={3}>
                                <input type={"text"}></input>
                            </td>
                            <td className="tableColor">vnsNumber</td>
                            <td colSpan={3}>
                                <input type={"text"}></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="tableColor">cstime</td>
                            <td colSpan={7}>
                                <input type={"text"}></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="tableColor">cetime</td>
                            <td colSpan={7}>
                                <input type={"text"}></input>
                            </td>
                        </tr>

                        <tr>
                            <td className="tableColor">called ID</td>
                            <td colSpan={7}>
                                <input type={"text"}></input>
                            </td>
                        </tr>
                    </MyTable>
                </CDBizFormContent>
                <CDBizFormContent>
                    <input type="checkbox" name="chkAll" id="chk" className="chkAll" />
                    <li>이용약관, 개인정보 수집 및 이용, 위치정보 이용약관(선택), 프로모션 안내 메일 수신(선택)에 모두 동의합니다.</li>
                </CDBizFormContent>
                <CDBizFormContent>
                    <input type="checkbox" name="chkAll" id="chk" className="chkAll" />
                    <li>해당 사이트를 이용한 불법적인 행위를 금지하는 것에 동의합니다.</li>
                </CDBizFormContent>
                <CDBizFormContent>
                    <button>제출하기</button>
                </CDBizFormContent>
            </CDBizWrapContent>
        </div>
    );
}

export function CDBizContentDeleteComponent() {
    return (
        <div className="CDBizContentDeleteComponent">
            <CDBizWrapContent>
                <CDBizTitleContent>CDBiz 삭제 폼</CDBizTitleContent>
                <CDBizFormContent>
                    <table>
                        <tbody>
                            <tr>
                                <td className="tableColor">LogisCode</td>
                                <td colSpan={7}>
                                    <input type={"text"}></input>
                                </td>
                            </tr>

                            <tr>
                                <td className="tableColor">userPwd</td>
                                <td colSpan={3}>
                                    <input type={"text"}></input>
                                </td>
                                <td className="tableColor">vnsNumber</td>
                                <td colSpan={3}>
                                    <input type={"text"}></input>
                                </td>
                            </tr>
                            <tr>
                                <td className="tableColor">cstime</td>
                                <td colSpan={7}>
                                    <input type={"text"}></input>
                                </td>
                            </tr>
                            <tr>
                                <td className="tableColor">cetime</td>
                                <td colSpan={7}>
                                    <input type={"text"}></input>
                                </td>
                            </tr>

                            <tr>
                                <td className="tableColor">called ID</td>
                                <td colSpan={7}>
                                    <input type={"text"}></input>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </CDBizFormContent>
                <CDBizFormContent>
                    <input type="checkbox" name="chkAll" id="chk" className="chkAll" />
                    <li>이용약관, 개인정보 수집 및 이용, 위치정보 이용약관(선택), 프로모션 안내 메일 수신(선택)에 모두 동의합니다.</li>
                </CDBizFormContent>
                <CDBizFormContent>
                    <input type="checkbox" name="chkAll" id="chk" className="chkAll" />
                    <li>해당 사이트를 이용한 불법적인 행위를 금지하는 것에 동의합니다.</li>
                </CDBizFormContent>
                <CDBizFormContent>
                    <button>제출하기</button>
                </CDBizFormContent>
            </CDBizWrapContent>
        </div>
    );
}
