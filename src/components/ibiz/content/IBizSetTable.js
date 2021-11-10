import MyTable from "../../util/MyTable";
import styled, { keyframes, css } from "styled-components";
import { useCallback, useState } from "react";
import IBizSetUpdateForm from "./IBizSetUpdateForm";

const Ball = keyframes`
    from{
        position: relative;
        top: -200px;
    }
    
    to {
        position: relative;
        top:0px;
    }
`;

const ChildrenTable = styled.div`
    position: absolute;
    

    table {
        margin-top: 15px;
        width: 100%;
        border: none;
        border-collapse: collapse;
        box-shadow: 2px 2px 10px 3px gray;
    }

    }
    td {
        border: 1px solid gray;
        padding: 13px 20px;
        text-align: center;
        font-family: "NotoSansKR-Regular";
        font-size: 15px;
    }

    .tableColor {
        background-color: #eff2f7;
    }

    .tableColorBLUE {
        background-color: cornflowerblue;
        color: white;
    }

    input[type="file"] {
        display: block;
    }

    button {
        border: none;
        background-color: inherit;
        font-family: "NotoSansKR-Regular";
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        border-bottom: 1px solid brown;

        &:hover {
            color: tomato;
        }
    }
    display: none;

    animation-name: ${Ball};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-direction: alternate;
    animation-fill-mode: forwards;

    .newLine {
        color: red !important;
        
    }
`;

const IBiSetTable = styled.div`
    position: relative;

    ${(props) => {
        return props.state === props.imstate
            ? css`
                  ${ChildrenTable} {
                      display: initial;
                  }
              `
            : "";
    }}
`;

export default function IBizSetTable({ set, onClick, state }) {
    const [update, setUpdate] = useState(false);

    const onChangeState = useCallback(() => {
        setUpdate(!update);
    });

    return (
        <IBiSetTable state={state} imstate={set.setIdx}>
            {update === true && <IBizSetUpdateForm onChangeState={onChangeState} setIdx={set.setIdx}></IBizSetUpdateForm>}
            <MyTable state={state} imstate={set.setIdx}>
                <tr onClick={(e) => onClick(set.setIdx)} className="StateChange">
                    <td colSpan={100}>iBiz</td>
                </tr>

                <tr>
                    <td className="tableColor" colSpan={1}>
                        setIdx
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={set.setIdx} id={`setIdx_${set.setIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        setName
                    </td>

                    <td>
                        <input type={"text"} disabled={true} defaultValue={set.setName} id={`setName_${set.setIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        setType
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={set.setType} id={`setType_${set.setIdx}`}></input>
                    </td>
                </tr>

                <tr>
                    <td className="tableColor" colSpan={1}>
                        setWeight
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={set.setWeight} id={`setIdx_${set.setWeight}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        ibizCode
                    </td>

                    <td>
                        <input type={"text"} disabled={true} defaultValue={set.ibizCode} id={`setName_${set.ibizCode}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        modId
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={set.modId} id={`setType_${set.modId}`}></input>
                    </td>
                </tr>

                <tr>
                    <td className="tableColor" colSpan={4}>
                        modDate
                    </td>
                    <td colSpan={1}>
                        <input type={"text"} disabled={true} defaultValue={set.modDate} id={`setType_${set.modDate}`}></input>
                    </td>
                    <td>{state === set.setIdx && <button onClick={onChangeState}>수정하기</button>}</td>
                </tr>
            </MyTable>

            <ChildrenTable>
                <table>
                    <tbody>
                        <tr>
                            <td className="tableColorBLUE" colSpan={100}>
                                Scheduel
                            </td>
                        </tr>

                        <tr>
                            <td className="tableColor" colSpan={1}>
                                scheduleIdx
                            </td>
                            <td>
                                <input type={"text"} disabled={true} defaultValue={set.schedule.scheduleIdx} id={`scheduleIdx_${set.setIdx}`}></input>
                            </td>

                            <td className="tableColor" colSpan={1}>
                                scheduleName
                            </td>

                            <td>
                                <input type={"text"} disabled={true} defaultValue={set.schedule.scheduleName} id={`scheduleName_${set.setIdx}`}></input>
                            </td>

                            <td className="tableColor" colSpan={1}>
                                scheduleType
                            </td>
                            <td>
                                <input type={"text"} disabled={true} defaultValue={set.schedule.scheduleType} id={`scheduleType_${set.setIdx}`}></input>
                            </td>
                        </tr>

                        <tr>
                            <td className="tableColor" colSpan={1}>
                                startDate
                            </td>
                            <td>
                                <input type={"text"} disabled={true} defaultValue={set.schedule.startDate} id={`startDate_${set.setIdx}`}></input>
                            </td>

                            <td className="tableColor" colSpan={1}>
                                endDate
                            </td>

                            <td>
                                <input type={"text"} disabled={true} defaultValue={set.schedule.endDate} id={`endDate_${set.setIdx}`}></input>
                            </td>

                            <td className="tableColor" colSpan={1}>
                                weekType
                            </td>
                            <td>
                                <input type={"text"} disabled={true} defaultValue={set.schedule.weekType} id={`weekType_${set.setIdx}`}></input>
                            </td>
                        </tr>

                        <tr>
                            <td className="tableColor" colSpan={1}>
                                startTime
                            </td>
                            <td colSpan={1}>
                                <input type={"text"} disabled={true} defaultValue={set.schedule.startTime} id={`setType_${set.setIdx}`}></input>
                            </td>

                            <td className="tableColor" colSpan={1}>
                                endTime
                            </td>
                            <td colSpan={1}>
                                <input type={"text"} disabled={true} defaultValue={set.schedule.endTime} id={`setType_${set.setIdx}`}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ChildrenTable>

            <ChildrenTable>
                <table>
                    <tbody>
                        <tr>
                            <td className="tableColorBLUE" colSpan={100}>
                                vnsNumber
                            </td>
                        </tr>

                        <tr>
                            <td className="tableColor" colSpan={1}>
                                vnsIdx
                            </td>
                            <td>
                                <input type={"text"} disabled={true} defaultValue={set.vnsNumber.vnsIdx} id={`setIdx_${set.setIdx}`}></input>
                            </td>

                            <td className="tableColor" colSpan={1}>
                                vnsNumber
                            </td>

                            <td>
                                <input type={"text"} disabled={true} defaultValue={set.vnsNumber.vnsNumber} id={`setName_${set.setIdx}`}></input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ChildrenTable>

            <ChildrenTable>
                <table>
                    <tbody>
                        <tr>
                            <td className="tableColorBLUE" colSpan={100}>
                                calledNumberList
                            </td>
                        </tr>
                        {Array.isArray(set.calledNumberList)
                            ? set.calledNumberList.map((calledNumberList, idx) => (
                                  <tr>
                                      <td className="tableColor" colSpan={1}>
                                          calledIdx
                                      </td>
                                      <td>
                                          <input type={"text"} disabled={true} defaultValue={calledNumberList.calledIdx} id={`calledIdx_${set.setIdx}_${idx}`}></input>
                                      </td>

                                      <td className="tableColor" colSpan={1}>
                                          calledNumber
                                      </td>

                                      <td>
                                          <input type={"text"} disabled={true} defaultValue={calledNumberList.calledNumber} id={`calledNumber_${set.setIdx}_${idx}`}></input>
                                      </td>

                                      <td className="tableColor" colSpan={1}>
                                          calledNumber
                                      </td>

                                      <td>
                                          <input type={"text"} disabled={true} defaultValue={calledNumberList.calledNumber} id={`calledNumber_${set.setIdx}_${idx}`}></input>
                                      </td>
                                  </tr>
                              ))
                            : ""}
                    </tbody>
                </table>
            </ChildrenTable>

            <ChildrenTable>
                <table>
                    <tbody>
                        <tr>
                            <td className="tableColorBLUE" colSpan={100}>
                                mentList
                            </td>
                        </tr>
                        {Array.isArray(set.mentList)
                            ? set.mentList.map((mentList, idx) => (
                                  <>
                                      <tr className="newLine">
                                          <td className="tableColor" colSpan={1}>
                                              mentIdx
                                          </td>
                                          <td>
                                              <input type={"text"} disabled={true} defaultValue={mentList.mentIdx} id={`mentIdx_${set.setIdx}_${idx}`}></input>
                                          </td>

                                          <td className="tableColor" colSpan={1}>
                                              mentName
                                          </td>

                                          <td>
                                              <input type={"text"} disabled={true} defaultValue={mentList.mentName} id={`mentName_${set.setIdx}_${idx}`}></input>
                                          </td>

                                          <td className="tableColor" colSpan={1}>
                                              mentDesc
                                          </td>

                                          <td>
                                              <input type={"text"} disabled={true} defaultValue={mentList.mentDesc} id={`mentDesc_${set.setIdx}_${idx}`}></input>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td className="tableColor" colSpan={1}>
                                              mentType
                                          </td>
                                          <td>
                                              <input type={"text"} disabled={true} defaultValue={mentList.mentType} id={`mentType_${set.setIdx}_${idx}`}></input>
                                          </td>

                                          <td className="tableColor" colSpan={1}>
                                              setIdx
                                          </td>

                                          <td>
                                              <input type={"text"} disabled={true} defaultValue={mentList.setIdx} id={`setIdx_${set.setIdx}_${idx}`}></input>
                                          </td>

                                          <td className="tableColor" colSpan={1}>
                                              uploadKey
                                          </td>

                                          <td>
                                              <input type={"text"} disabled={true} defaultValue={mentList.uploadKey} id={`uploadKey_${set.setIdx}_${idx}`}></input>
                                          </td>
                                      </tr>
                                  </>
                              ))
                            : ""}
                    </tbody>
                </table>
            </ChildrenTable>
        </IBiSetTable>
    );
}
