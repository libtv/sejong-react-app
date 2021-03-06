import styled from "styled-components";
import MyClose from "../../util/MyClose";
import { AiOutlineSearch } from "react-icons/ai";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncDestinationSelect, asyncMentSelect, asyncScedualSelect, asyncVnsSelect, endLoading, startLoading } from "../../../modules/ibizReducer";
import IBizSearchOptionsForm from "./IBizSearchOptionsForm";
import $ from "jquery";
import Timeout from "../../util/Timeout";
import { asyncDestinationRead, asyncMentRead, asyncScedualRead, asyncVnsRead } from "../../../modules/myCURD";

const MyDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    background-color: #343d46;
    width: 100%;
    height: 100%;
    z-index: 3000;
    box-shadow: 2px 2px 2px 2px gray;
    align-items: center;
    color: white;
    overflow: scroll;
`;

const MyAiOutlineSearch = styled(AiOutlineSearch)`
    position: absolute;
    color: #4f5b66;
    top: 30%;
    left: 32%;
`;

const ContentDiv = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    position: relative;

    input {
        width: 300px;
        height: 50px;
        padding-left: 45px;
        margin-right: 10px;
        color: #63717f;
        border: none;
        border-radius: 5px;
        background: #2b303b;

        -webkit-transition: background 0.55s ease;
        -moz-transition: background 0.55s ease;
        -ms-transition: background 0.55s ease;
        -o-transition: background 0.55s ease;
        transition: background 0.55s ease;
    }
    input::-webkit-input-placeholder {
        color: #65737e;
    }

    input:-moz-placeholder {
        color: #65737e;
    }

    input::-moz-placeholder {
        color: #65737e;
    }

    input:-ms-input-placeholder {
        color: #65737e;
    }

    input:hover,
    input:focus {
        outline: none;
        background: #ffffff;
    }

    button {
        border-radius: 10px;
        border: none;
        background: #2b303b;
        color: white;
        font-size: 12px;
        padding: 0px 15px;

        &:hover {
            outline: none;
            background: #ffffff;
            color: black;
        }

        -webkit-transition: background 0.55s ease;
        -moz-transition: background 0.55s ease;
        -ms-transition: background 0.55s ease;
        -o-transition: background 0.55s ease;
        transition: background 0.55s ease;
    }
`;

export default function IBizSearchForm({ onCancel, myState, multiCheckTrueFalse, onSearchClick }) {
    const dispatch = useDispatch();
    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });
    const [datas, setData] = useState([]);
    const enterRef = useRef();
    const [checkedArr, setCheckedArr] = useState([]);

    let arr = [];

    const enterListener = (e) => {
        if (e.key === "Enter") {
            const searchIdx = $("#searchIdx");
            if (searchIdx.val() === "" || searchIdx.val() === null) {
                return alert("????????? ?????? ??????????????????.");
            }
            let mydata;
            if (myState === "schedule") {
                mydata = loginstate.sceduallist;
            } else if (myState === "vns") {
                mydata = loginstate.vnslist;
            } else if (myState === "destination") {
                mydata = loginstate.destinationlist;
            } else if (myState === "ment") {
                mydata = loginstate.mentlist;
            }

            setData([]);
            mydata.map((data) => {
                Object.entries(data).map(([key, value]) => {
                    if (searchIdx.val() === value) {
                        setData([data]);
                    }
                });
            });
        }
    };

    const enterListenerEvents = useCallback(() => {
        if (enterRef.current !== null) {
            enterRef.current.addEventListener("keypress", enterListener);
        }
    }, [datas]);

    useEffect(async () => {
        dispatch(startLoading());

        try {
            if (myState === "schedule") {
                const data = await asyncScedualRead(loginstate.id, loginstate.loginmarker, loginstate.clientcode);
                setData(data.scheduleList);
            } else if (myState === "vns") {
                const data = await asyncVnsRead(loginstate.id, loginstate.loginmarker, loginstate.clientcode);
                setData(data.vnsNumberList);
            } else if (myState === "destination") {
                const data = await asyncDestinationRead(loginstate.id, loginstate.loginmarker, loginstate.clientcode);
                setData(data.calledNumberList);
            } else if (myState === "ment") {
                const data = await asyncMentRead(loginstate.id, loginstate.loginmarker, loginstate.clientcode);
                setData(data.mentList);
            }
        } catch (err) {
            alert(err);
        }

        dispatch(endLoading());
        enterListenerEvents();
    }, []);

    const onClick = (e) => {
        e.preventDefault();
        onSearchClick(checkedArr);
    };

    const checkSetValidIdx = (idxArr, type) => {
        if (multiCheckTrueFalse === false) {
            arr = [];
            arr.push(idxArr);
            setCheckedArr(idxArr);
        } else {
            console.log(`${idxArr} ${type}`);
            if (type === true) {
                console.log("it`s true");
                arr.push(idxArr);
                setCheckedArr(arr);
            } else {
                arr = arr.filter((val) => {
                    return idxArr !== val;
                });
                setCheckedArr(arr);
            }
        }
    };

    return (
        <MyDiv>
            <MyClose onClickClose={onCancel}></MyClose>
            <h3>?????? ???</h3>
            <ContentDiv>
                <MyAiOutlineSearch></MyAiOutlineSearch>
                <input type={"text"} placeholder="Search IDX" id="searchIdx" title="??????" ref={enterRef}></input>
                <button onClick={onClick}>????????????</button>
            </ContentDiv>
            {Array.isArray(datas) ? datas.map((data, idx) => <IBizSearchOptionsForm data={data} multiCheckTrueFalse={multiCheckTrueFalse} idx={idx} checkSetValidIdx={checkSetValidIdx}></IBizSearchOptionsForm>) : ""}
        </MyDiv>
    );
}
