import { useCallback, useState } from "react";
import MyTable from "../../util/MyTable";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { asyncVnsDelete, asyncVnsUpdate } from "../../../modules/ibizReducer";

export default function IBizVNSTable({ vns }) {
    const [state, setState] = useState(false);
    const vnsIdx = $(`#vnsIdx_${vns.vnsIdx}`);
    const vnsNumber = $(`#vnsNumber_${vns.vnsIdx}`);
    const defaultSetIdx = $(`#defaultSetIdx_${vns.vnsIdx}`);

    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const dispatch = useDispatch();

    const stateChange = useCallback(() => {
        setState(!state);

        vnsIdx.attr("disabled", false);
        vnsNumber.attr("disabled", false);
        defaultSetIdx.attr("disabled", false);
    }, [state]);

    const updateOnClick = useCallback(() => {
        setState(!state);

        vnsIdx.attr("disabled", true);
        vnsNumber.attr("disabled", true);
        defaultSetIdx.attr("disabled", true);

        dispatch(asyncVnsUpdate(loginstate.id, loginstate.loginmarker, loginstate.clientcode, vnsIdx.val(), vnsNumber.val(), defaultSetIdx.val()));
    }, [state]);

    const cancelOnClick = useCallback(() => {
        setState(!state);

        vnsIdx.attr("disabled", true);
        vnsNumber.attr("disabled", true);
        defaultSetIdx.attr("disabled", true);

        vnsIdx.val(vns.vnsIdx);
        vnsNumber.val(vns.vnsNumber);
        defaultSetIdx.val(vns.defaultSetIdx);
    }, [state]);

    const deleteOnClick = useCallback(() => {
        setState(!state);

        vnsIdx.attr("disabled", true);
        vnsNumber.attr("disabled", true);
        defaultSetIdx.attr("disabled", true);

        dispatch(asyncVnsDelete(loginstate.id, loginstate.loginmarker, loginstate.clientcode, vnsIdx.val()));
    }, [state]);

    return (
        <div className="IBizVNSTable">
            <MyTable>
                <tr>
                    <td className="tableColor" colSpan={1}>
                        vnsIdx
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={vns.vnsIdx} id={`vnsIdx_${vns.vnsIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        vnsNumber
                    </td>

                    <td>
                        <input type={"text"} disabled={true} defaultValue={vns.vnsNumber} id={`vnsNumber_${vns.vnsIdx}`}></input>
                    </td>
                </tr>
                <tr>
                    <td className="tableColor" colSpan={1}>
                        defaultSetIdx
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={vns.defaultSetIdx} id={`defaultSetIdx_${vns.vnsIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        defaultSetName
                    </td>

                    <td>
                        <input type={"text"} disabled={true} defaultValue={vns.defaultSetName} id={`defaultSetName_${vns.vnsIdx}`}></input>
                    </td>
                </tr>

                <tr>
                    {state === false && (
                        <td colSpan={100}>
                            <button onClick={stateChange}>수정하기</button>
                        </td>
                    )}

                    {state && (
                        <td colSpan={100}>
                            <button onClick={updateOnClick}>적용하기</button>
                            <button onClick={cancelOnClick}>취소하기</button>
                            <button onClick={deleteOnClick}>삭제하기</button>
                        </td>
                    )}
                </tr>
            </MyTable>
        </div>
    );
}
