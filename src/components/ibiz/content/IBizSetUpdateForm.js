import styled from "styled-components";
import MyClose from "../../util/MyClose";
import MyTable from "../../util/MyTable";
import { useState } from "react";
import IBizSearchForm from "./IBizSearchForm";

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

export default function IBizSetUpdateForm({ onChangeState, setIdx }) {
    const [state, setState] = useState(null);
    const [scheduleSetIdx, setScheduleSetIdx] = useState(initialiState);
    const [vnsNumberSetIdx, setVnsNumberSetIdx] = useState(initialiState);
    const [calledIdx, setCalledIdx] = useState(initialiState);
    const [mentIdx, setMentIdx] = useState(initialiState);

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
        setCalledIdx({ idx: idxArr });
    };

    const onMentSearchClick = (idxArr) => {
        onCancel();
        setMentIdx({ idx: idxArr });
    };

    return (
        <>
            {state === "schedule" && <IBizSearchForm onCancel={onCancel} myState={state} multiCheckTrueFalse={false} onSearchClick={onScheduleSearchClick}></IBizSearchForm>}
            {state === "vns" && <IBizSearchForm onCancel={onCancel} myState={state} multiCheckTrueFalse={true} onSearchClick={onVnsSearchClick}></IBizSearchForm>}
            {state === "destination" && <IBizSearchForm onCancel={onCancel} myState={state} multiCheckTrueFalse={false} onSearchClick={onCalledSearchClick}></IBizSearchForm>}
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
                            <td>{calledIdx.idx === "" ? <button onClick={() => onClick("destination")}>검색</button> : calledIdx.idx}</td>
                        </tr>
                        <tr>
                            <td colSpan={100}>mentIdx</td>
                        </tr>
                        <tr>
                            <td className="tableColor" colSpan={1}>
                                mentIdx
                            </td>
                            <td>{mentIdx.idx === "" ? <button onClick={() => onClick("ment")}>검색</button> : mentIdx.idx}</td>
                        </tr>
                        <tr>
                            <td colSpan={100}>
                                <button>제출하기</button>
                                <button>삭제하기</button>
                            </td>
                        </tr>
                    </MyTable>
                </WhiteWrap>
            </IBizSetUpdateDiv>
        </>
    );
}
