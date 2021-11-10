import { useCallback, useState } from "react";
import MyTable from "../../util/MyTable";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { asyncDestinationDelete, asyncDestinationUpdate } from "../../../modules/ibizReducer";

export default function IBizDestinationTable({ destination }) {
    const calledIdx = $(`#calledIdx_${destination.calledIdx}`);
    const calledNumber = $(`#calledNumber_${destination.calledIdx}`);

    const [state, setState] = useState(false);
    const dispatch = useDispatch();
    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const onClickChangeState = useCallback(() => {
        setState(!state);

        calledIdx.attr("disabled", false);
        calledNumber.attr("disabled", false);
    }, [state]);

    const onCancel = useCallback(() => {
        setState(!state);

        calledIdx.attr("disabled", true);
        calledNumber.attr("disabled", true);

        calledIdx.val(destination.calledIdx);
        calledNumber.val(destination.calledNumber);
    }, [state]);

    const onUpdate = useCallback(() => {
        setState(!state);

        calledIdx.attr("disabled", true);
        calledNumber.attr("disabled", true);

        dispatch(asyncDestinationUpdate(loginstate.id, loginstate.loginmarker, loginstate.clientcode, calledIdx.val(), calledNumber.val()));
    }, [state]);

    const onDelete = useCallback(() => {
        setState(!state);

        calledIdx.attr("disabled", true);
        calledNumber.attr("disabled", true);

        dispatch(asyncDestinationDelete(loginstate.id, loginstate.loginmarker, loginstate.clientcode, calledIdx.val()));
    });

    return (
        <div className="IBizDestinationTable">
            <MyTable>
                <tr>
                    <td className="tableColor" colSpan={1}>
                        CalledIdx
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={destination.calledIdx} id={`calledIdx_${destination.calledIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        CalledNumber
                    </td>

                    <td>
                        <input type={"text"} disabled={true} defaultValue={destination.calledNumber} id={`calledNumber_${destination.calledIdx}`}></input>
                    </td>

                    {state === false && (
                        <td colSpan={2}>
                            <button onClick={onClickChangeState}>수정하기</button>
                        </td>
                    )}

                    {state && (
                        <td colSpan={2}>
                            <button onClick={onUpdate}>적용하기</button>
                            <button onClick={onCancel}>취소하기</button>
                            <button onClick={onDelete}>삭제하기</button>
                        </td>
                    )}
                </tr>
            </MyTable>
        </div>
    );
}
