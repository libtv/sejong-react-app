import styled from "styled-components";
import MyClose from "../../util/MyClose";
import MyTable from "../../util/MyTable";
import { useCallback, useState } from "react";
import IBizSearchForm from "./IBizSearchForm";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetDelete, asyncSetInsert, asyncSetUpdate } from "../../../modules/ibizReducer";

const IBizSetUpdateDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2000;
`;

const WhiteWrap = styled.div`
    margin: 0 auto;
    width: 85%;
    background-color: white;
    height: fit-content;
    border-radius: 35px;

    box-sizing: border-box;

    .Center {
        margin: 0 auto;
        text-align: center;
    }
`;

const initialiState = {
    idx: "",
};

export default function IBizSetUpdateForm({ onChangeState, setIdx, type }) {
    const [state, setState] = useState(null);
    const [scheduleSetIdx, setScheduleSetIdx] = useState(initialiState);
    const [vnsNumberSetIdx, setVnsNumberSetIdx] = useState(initialiState);
    const [calledIdx, setCalledIdx] = useState([]);
    const [mentIdx, setMentIdx] = useState([]);

    const dispatch = useDispatch();
    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const onClick = (caseState) => {
        setState(caseState);
    };

    const onCancel = () => {
        setState(null);
    };

    const onScheduleSearchClick = (idxArr) => {
        onCancel();
        setScheduleSetIdx({ idx: idxArr });
    };

    const onVnsSearchClick = (idxArr) => {
        onCancel();
        setVnsNumberSetIdx({ idx: idxArr });
    };

    const onCalledSearchClick = (idxArr) => {
        onCancel();
        let arr = [];
        idxArr.map((val) => {
            arr.push({ calledIdx: val });
        });
        setCalledIdx([...arr]);
    };

    const onMentSearchClick = (idxArr) => {
        onCancel();
        let arr = [];

        idxArr.map((val) => {
            let mentType = "";
            if (window.confirm(`${val}의 멘트 타입을 등록합니다. 예를 누르시면 발신자 대기음(2), 아니오를 누르시면 호 종료 안내 멘트(4) 로 설정됩니다.`)) {
                mentType = 2;
            } else {
                mentType = 4;
            }
            arr.push({ mentIdx: val, mentType: mentType });
        });
        setMentIdx([...arr]);
    };

    const onSubmit = useCallback(async () => {
        const setName_real = $("#update_setName").val();
        const setType_real = $("#update_setType").val();
        const setIdx_real = $("#update_setIdx").val();
        let scheduleSetIdx_real = "";
        let vnsNumberSetIdx_real = "";
        let calledNumberSetList_real = [];
        let mentSetList_real = [];

        await setScheduleSetIdx((value) => {
            scheduleSetIdx_real = value.idx;
            return value;
        });

        await setVnsNumberSetIdx((value) => {
            vnsNumberSetIdx_real = value.idx;
            return value;
        });

        await setCalledIdx((value) => {
            calledNumberSetList_real = value;
            return value;
        });

        await setMentIdx((value) => {
            mentSetList_real = value;
            return value;
        });

        if (setName_real === "" || setType_real === "" || scheduleSetIdx_real === "" || vnsNumberSetIdx_real === "" || calledNumberSetList_real.length === 0 || mentSetList_real.length === 0) {
            return alert("Input Value을 확인해주시기 바랍니다.");
        }

        if (type == "INSERT") {
            dispatch(asyncSetInsert(loginstate.id, loginstate.loginmarker, loginstate.clientcode, setName_real, setType_real, scheduleSetIdx_real, vnsNumberSetIdx_real, calledNumberSetList_real, mentSetList_real));
        } else {
            dispatch(asyncSetUpdate(loginstate.id, loginstate.loginmarker, loginstate.clientcode, setIdx_real, setName_real, setType_real, scheduleSetIdx_real, vnsNumberSetIdx_real, calledNumberSetList_real, mentSetList_real));
        }
        onChangeState();
    });

    const onDelete = useCallback(() => {
        const setIdx_real = $("#update_setIdx").val();
        onChangeState();
        dispatch(asyncSetDelete(loginstate.id, loginstate.loginmarker, loginstate.clientcode, setIdx_real));
    });

    return (
        <>
            {state === "schedule" && <IBizSearchForm onCancel={onCancel} myState={state} multiCheckTrueFalse={false} onSearchClick={onScheduleSearchClick}></IBizSearchForm>}
            {state === "vns" && <IBizSearchForm onCancel={onCancel} myState={state} multiCheckTrueFalse={false} onSearchClick={onVnsSearchClick}></IBizSearchForm>}
            {state === "destination" && <IBizSearchForm onCancel={onCancel} myState={state} multiCheckTrueFalse={true} onSearchClick={onCalledSearchClick}></IBizSearchForm>}
            {state === "ment" && <IBizSearchForm onCancel={onCancel} myState={state} multiCheckTrueFalse={true} onSearchClick={onMentSearchClick}></IBizSearchForm>}
            <IBizSetUpdateDiv>
                <MyClose onClickClose={onChangeState}></MyClose>
                <WhiteWrap>
                    <MyTable>
                        <tr>
                            <td colSpan={100}>iBiz</td>
                        </tr>
                        <tr>
                            <td className="tableColor" colSpan={1}>
                                setIdx
                            </td>
                            <td>
                                <input type={"text"} disabled={true} defaultValue={setIdx} id={`update_setIdx`}></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="tableColor" colSpan={1}>
                                setName
                            </td>
                            <td>
                                <input type={"text"} id={`update_setName`}></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="tableColor" colSpan={1}>
                                setType
                            </td>
                            <td>
                                <input type={"text"} id={`update_setType`}></input>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={100}>scheduleSetIdx</td>
                        </tr>
                        <tr>
                            <td className="tableColor" colSpan={1}>
                                scheduleSetIdx
                            </td>
                            <td>{scheduleSetIdx.idx === "" ? <button onClick={() => onClick("schedule")}>검색</button> : scheduleSetIdx.idx}</td>
                        </tr>
                        <tr>
                            <td colSpan={100}>vnsNumberSetIdx</td>
                        </tr>
                        <tr>
                            <td className="tableColor" colSpan={1}>
                                vnsNumberSetIdx
                            </td>

                            <td>{vnsNumberSetIdx.idx === "" ? <button onClick={() => onClick("vns")}>검색</button> : vnsNumberSetIdx.idx}</td>
                        </tr>
                        <tr>
                            <td colSpan={100}>calledIdx</td>
                        </tr>
                        <tr>
                            <td className="tableColor" colSpan={1}>
                                calledIdx
                            </td>
                            <td>{calledIdx.length === 0 ? <button onClick={() => onClick("destination")}>검색</button> : JSON.stringify(calledIdx)}</td>
                        </tr>
                        <tr>
                            <td colSpan={100}>mentIdx</td>
                        </tr>
                        <tr>
                            <td className="tableColor" colSpan={1}>
                                mentIdx
                            </td>
                            <td>{mentIdx.length === 0 ? <button onClick={() => onClick("ment")}>검색</button> : JSON.stringify(mentIdx)}</td>
                        </tr>
                        <tr>
                            <td colSpan={100}>
                                <button onClick={onSubmit}>제출하기</button>
                                {setIdx !== "" && <button onClick={onDelete}>삭제하기</button>}
                            </td>
                        </tr>
                    </MyTable>
                </WhiteWrap>
            </IBizSetUpdateDiv>
        </>
    );
}
