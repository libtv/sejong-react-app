import React, { useCallback, useEffect, useRef, useState } from "react";
import MyInput from "../../util/MyInput";
import MyButton from "../../util/MyButton";
import { useDispatch, useSelector } from "react-redux";
import IBizMentTable from "./IBizMentTable";
import { asyncMentInsert, asyncMentSelect } from "../../../modules/ibizReducer";
import $ from "jquery";
import { ContentWrap, ContentBodyDiv, ContentCardDiv, ContentHeaderDivTitle } from "../../util/MyCard";

export default function IBizMentContent() {
    const [drag, setDrag] = useState(false);
    const dragRef = useRef();
    const [file, setFile] = useState({
        filename: "",
    });

    const { filename } = file;

    const onChangeFiles = useCallback((e) => {
        let selectFiles;

        if (e.type === "drop") {
            selectFiles = e.dataTransfer.files;
        } else {
            selectFiles = e.target.files;
        }

        setFile({ filename: selectFiles[0].name });
    }, []);

    const handleDragIn = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
    }, []);

    const handleDragOut = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();

        setDrag(false);
    }, []);

    const handleDragOver = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();

        if (!e.dataTransfer.files) {
            setDrag(true);
        }
    }, []);

    const handleDrop = useCallback(
        (e) => {
            e.preventDefault();
            e.stopPropagation();
            onChangeFiles(e);
            setDrag(false);
        },
        [onChangeFiles]
    );

    const initDragEvents = useCallback(() => {
        if (dragRef.current !== null) {
            dragRef.current.addEventListener("dragenter", handleDragIn);
            dragRef.current.addEventListener("dragleave", handleDragOut);
            dragRef.current.addEventListener("dragover", handleDragOver);
            dragRef.current.addEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    const resetDragEvents = useCallback(() => {
        if (dragRef.current !== null) {
            dragRef.current.removeEventListener("dragenter", handleDragIn);
            dragRef.current.removeEventListener("dragleave", handleDragOut);
            dragRef.current.removeEventListener("dragover", handleDragOver);
            dragRef.current.removeEventListener("drop", handleDrop);
        }
    }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

    const dispatch = useDispatch();

    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    useEffect(() => {
        initDragEvents();

        dispatch(asyncMentSelect(loginstate.id, loginstate.loginmarker, loginstate.clientcode));
        return () => resetDragEvents();
    }, [initDragEvents, resetDragEvents]);

    const mentData = loginstate.mentlist;

    const onClickMentUpload = async (e) => {
        e.preventDefault();
        // var uploadFile = $("#fileUpload").prop("files")[0];

        // const data = await axios.post(`/upload/ment/user/${loginstate.id}/clientCode/${loginstate.clientcode}/clientCodeType/1/insert`, uploadFile, {
        //     headers: {
        //         "content-type": "blob.type",
        //     },
        // });
        const mentName = $("#mentName").val();
        const mentDesc = $("#mentDesc").val();
        const uploadKey = "7mMB0Fxsz0AyUR38";

        dispatch(asyncMentInsert(loginstate.id, loginstate.loginmarker, loginstate.clientcode, mentName, mentDesc, uploadKey));
    };

    return (
        <ContentWrap>
            <ContentHeaderDivTitle>Ment</ContentHeaderDivTitle>

            <ContentBodyDiv>
                <ContentCardDiv>
                    <h3>Upload File</h3>
                    <div className="DragDrop">
                        <input type={"file"} id="fileUpload" onChange={onChangeFiles} className="fileUpload"></input>
                        <label className={drag ? "DragDrop-File-Dragging" : "DragDrop-File"} htmlFor="fileUpload" ref={dragRef}>
                            {filename ? filename : "파일을 업로드해주세요."}
                        </label>
                    </div>
                    <div className="FormData">
                        <MyInput>
                            <input type={"text"} placeholder="Ment Name" id="mentName"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="Ment Desc" id="mentDesc"></input>
                        </MyInput>
                        <MyButton onClick={onClickMentUpload}>Upload</MyButton>
                    </div>
                </ContentCardDiv>

                <ContentCardDiv big={true}>
                    <h3>Ment List</h3>
                    {Array.isArray(mentData) && mentData.map((ment) => <IBizMentTable ment={ment} key={ment.mentIdx}></IBizMentTable>)}
                </ContentCardDiv>
            </ContentBodyDiv>
        </ContentWrap>
    );
}
