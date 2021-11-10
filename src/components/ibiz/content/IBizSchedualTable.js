import MyTable from "../../util/MyTable";
import $ from "jquery";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSchedualDelete, asyncSchedualUpdate } from "../../../modules/ibizReducer";

export default function IBizSchedualTable({ schedual }) {
    const schedualIdx = $(`#schedualIdx_${schedual.scheduleIdx}`);
    const scheduleName = $(`#schedualName_${schedual.scheduleIdx}`);
    const scheduleType = $(`#schedualType_${schedual.scheduleIdx}`);
    const startDate = $(`#startDate_${schedual.scheduleIdx}`);
    const endDate = $(`#endDate_${schedual.scheduleIdx}`);
    const startTime = $(`#startTime_${schedual.scheduleIdx}`);
    const endTime = $(`#endTime_${schedual.scheduleIdx}`);
    const weekType = $(`#weekType_${schedual.scheduleIdx}`);

    const [state, setState] = useState(false);

    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const dispatch = useDispatch();

    const stateChange = useCallback(() => {
        setState(!state);

        schedualIdx.attr("disabled", false);
        scheduleName.attr("disabled", false);
        scheduleType.attr("disabled", false);
        startDate.attr("disabled", false);
        endDate.attr("disabled", false);
        startTime.attr("disabled", false);
        endTime.attr("disabled", false);
        weekType.attr("disabled", false);
    }, [state]);

    const cancelOnClick = useCallback(() => {
        setState(!state);

        schedualIdx.attr("disabled", true);
        scheduleName.attr("disabled", true);
        scheduleType.attr("disabled", true);
        startDate.attr("disabled", true);
        endDate.attr("disabled", true);
        startTime.attr("disabled", true);
        endTime.attr("disabled", true);
        weekType.attr("disabled", true);

        schedualIdx.val(schedual.scheduleIdx);
        scheduleName.val(schedual.scheduleName);
        scheduleType.val(schedual.scheduleType);
        startDate.val(schedual.startDate);
        endDate.val(schedual.endDate);
        startTime.val(schedual.startTime);
        endTime.val(schedual.endTime);
        weekType.val(schedual.weekType);
    }, [state]);

    const updateOnClick = useCallback(() => {
        setState(!state);

        schedualIdx.attr("disabled", true);
        scheduleName.attr("disabled", true);
        scheduleType.attr("disabled", true);
        startDate.attr("disabled", true);
        endDate.attr("disabled", true);
        startTime.attr("disabled", true);
        endTime.attr("disabled", true);
        weekType.attr("disabled", true);

        dispatch(asyncSchedualUpdate(loginstate.id, loginstate.loginmarker, loginstate.clientcode, schedualIdx.val(), scheduleName.val(), scheduleType.val(), startDate.val(), endDate.val(), startTime.val(), endTime.val(), weekType.val()));
    }, [state]);

    const deleteOnClick = useCallback(() => {
        setState(!state);

        dispatch(asyncSchedualDelete(loginstate.id, loginstate.loginmarker, loginstate.clientcode, schedualIdx.val()));
    }, [state]);

    return (
        <div className="IBizSchedualTable">
            <MyTable>
                <tr>
                    <td className="tableColor" colSpan={1}>
                        SchedualIdx
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={schedual.scheduleIdx} id={`schedualIdx_${schedual.scheduleIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        ScheduleName
                    </td>

                    <td>
                        <input type={"text"} disabled={true} defaultValue={schedual.scheduleName} id={`schedualName_${schedual.scheduleIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        scheduleType
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={schedual.scheduleType} id={`schedualType_${schedual.scheduleIdx}`}></input>
                    </td>
                </tr>

                <tr>
                    <td className="tableColor" colSpan={1}>
                        startDate
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={schedual.startDate} id={`startDate_${schedual.scheduleIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        endDate
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={schedual.endDate} id={`endDate_${schedual.scheduleIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        modId
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={schedual.modId} id={`modId_${schedual.scheduleIdx}`}></input>
                    </td>
                </tr>

                <tr>
                    <td className="tableColor" colSpan={1}>
                        startTime
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={schedual.startTime} id={`startTime_${schedual.scheduleIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        endTime
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={schedual.endTime} id={`endTime_${schedual.scheduleIdx}`}></input>
                    </td>

                    <td className="tableColor" colSpan={1}>
                        weekType
                    </td>
                    <td>
                        <input type={"text"} disabled={true} defaultValue={schedual.weekType} id={`weekType_${schedual.scheduleIdx}`}></input>
                    </td>
                </tr>

                {state === false && (
                    <tr>
                        <td colSpan={100}>
                            <button onClick={stateChange}>수정하기</button>
                        </td>
                    </tr>
                )}

                {state && (
                    <tr>
                        <td colSpan={100}>
                            <button onClick={updateOnClick}>적용하기</button>
                            <button onClick={cancelOnClick}>취소하기</button>
                            <button onClick={deleteOnClick}>삭제하기</button>
                        </td>
                    </tr>
                )}
            </MyTable>
        </div>
    );
}
