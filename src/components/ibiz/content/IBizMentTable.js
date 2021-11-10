import MyTable from "../../util/MyTable";
import { useCallback, useState } from "react";
import $ from "jquery";
import { useDispatch, useSelector } from "react-redux";
import { asyncMentDelete, asyncMentUpdate } from "../../../modules/ibizReducer";

export default function IBizMentTable({ ment }) {
    const [state, setState] = useState(false);

    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });
    const dispatch = useDispatch();

    const onClick = useCallback(() => {
        setState(!state);
        let mentIdx = $(`#mentIdx_${ment.mentIdx}`);
        let mentName = $(`#mentName_${ment.mentIdx}`);
        let mentDesc = $(`#mentDesc_${ment.mentIdx}`);

        mentIdx.removeAttr("disabled");
        mentName.removeAttr("disabled");
        mentDesc.removeAttr("disabled");
    }, [state]);

    const cancelOnClick = useCallback(() => {
        setState(!state);
        let mentIdx = $(`#mentIdx_${ment.mentIdx}`);
        let mentName = $(`#mentName_${ment.mentIdx}`);
        let mentDesc = $(`#mentDesc_${ment.mentIdx}`);

        mentIdx.val(ment.mentIdx);
        mentName.val(ment.mentName);
        mentDesc.val(ment.mentDesc);

        mentIdx.attr("disabled", true);
        mentName.attr("disabled", true);
        mentDesc.attr("disabled", true);
    }, [state]);

    const deleteOnClick = useCallback(() => {
        setState(!state);
        let mentIdx = $(`#mentIdx_${ment.mentIdx}`).val();

        dispatch(asyncMentDelete(loginstate.id, loginstate.loginmarker, loginstate.clientcode, mentIdx));
    }, [state]);

    const updateOnClick = useCallback(() => {
        setState(!state);
        let mentIdx = $(`#mentIdx_${ment.mentIdx}`);
        let mentName = $(`#mentName_${ment.mentIdx}`);
        let mentDesc = $(`#mentDesc_${ment.mentIdx}`);

        mentIdx.attr("disabled", true);
        mentName.attr("disabled", true);
        mentDesc.attr("disabled", true);

        dispatch(asyncMentUpdate(loginstate.id, loginstate.loginmarker, loginstate.clientcode, mentIdx.val(), mentName.val(), mentDesc.val()));
    }, [state]);

    return (
        <div className="IBizMentTable">
            <MyTable>
                <tr>
                    <td className="tableColor" colSpan={1}>
                        MentIdx
                    </td>
                    <td colSpan={1}>
                        <input type={"text"} disabled={true} defaultValue={ment.mentIdx} id={`mentIdx_${ment.mentIdx}`}></input>
                    </td>
                    <td className="tableColor" colSpan={1}>
                        MentName
                    </td>
                    <td colSpan={1}>
                        <input type={"text"} disabled={true} defaultValue={ment.mentName} id={`mentName_${ment.mentIdx}`}></input>
                    </td>
                    <td className="tableColor" colSpan={1}>
                        MentFile
                    </td>
                    <td colSpan={1}>
                        <input type={"text"} disabled={true} defaultValue={ment.mentFile} id={`mentFile_${ment.mentIdx}`}></input>
                    </td>
                </tr>
                <tr>
                    <td className="tableColor" colSpan={1}>
                        MentDesc
                    </td>
                    <td colSpan={1}>
                        <input type={"text"} disabled={true} defaultValue={ment.mentDesc} id={`mentDesc_${ment.mentIdx}`}></input>
                    </td>
                    <td className="tableColor" colSpan={1}>
                        MentType
                    </td>
                    <td colSpan={1}>
                        <input type={"text"} disabled={true} defaultValue={ment.mentType} id={`mentType_${ment.mentIdx}`}></input>
                    </td>
                    <td className="tableColor" colSpan={1}>
                        setIdx
                    </td>
                    <td colSpan={1}>
                        <input type={"text"} disabled={true} defaultValue={ment.setIdx} id={`setIdx_${ment.mentIdx}`}></input>
                    </td>
                </tr>
                <tr>
                    <td className="tableColor" colSpan={3}>
                        modDate
                    </td>
                    <td colSpan={1}>
                        <input type={"text"} disabled={true} defaultValue={ment.modDate}></input>
                    </td>
                    {state === false && (
                        <td colSpan={2}>
                            <button onClick={onClick}>수정하기</button>
                        </td>
                    )}

                    {state && (
                        <>
                            <td colSpan={1}>Submit</td>
                            <td colSpan={1}>
                                <button onClick={updateOnClick}>적용하기</button>
                                <button onClick={cancelOnClick}>취소하기</button>
                                <button onClick={deleteOnClick}>삭제하기</button>
                            </td>
                        </>
                    )}
                </tr>
            </MyTable>
        </div>
    );
}
