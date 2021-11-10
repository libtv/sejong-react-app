import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentWrap, ContentBodyDiv, ContentCardDiv, ContentHeaderDivTitle } from "../../util/MyCard";
import { asyncScedualSelect, asyncSchedualInsert } from "../../../modules/ibizReducer";
import IBizSchedualTable from "./IBizSchedualTable";
import MyInput from "../../util/MyInput";
import MyButton from "../../util/MyButton";
import $ from "jquery";

export default function IBizSchedualContent() {
    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncScedualSelect(loginstate.id, loginstate.loginmarker, loginstate.clientcode));
    }, []);

    const schedualList = loginstate.sceduallist;

    const insertOnClick = (e) => {
        e.preventDefault();
        const schedualName = $("#schedualName");
        const schedualType = $("#schedualType");
        const startDate = $("#startDate");
        const endDate = $("#endDate");
        const startTime = $("#startTime");
        const endTime = $("#endTime");
        const weekType = $("#weekType");

        if (schedualName.val() === null || schedualName.val() === "") {
            return alert("Schedual Name을 확인해주세요.");
        }

        if (schedualType.val() === null || schedualType.val() === "") {
            return alert("Scedual Type을 확인해주세요.");
        }

        if (startDate.val() === null || startDate.val() === "" || endDate.val() === null || endDate.val() === "") {
            return alert("Date 를 확인해주세요.");
        }

        if (startTime.val() === null || startTime.val() === "" || endTime.val() === null || endTime.val() === "") {
            return alert("Time 을 확인해주세요.");
        }

        if (weekType.val() === null || weekType.val() === "") {
            return alert("Week Type을 확인해주세요.");
        }

        dispatch(asyncSchedualInsert(loginstate.id, loginstate.loginmarker, loginstate.clientcode, schedualName.val(), schedualType.val(), startDate.val(), endDate.val(), startTime.val(), endTime.val(), weekType.val()));
    };

    return (
        <ContentWrap>
            <ContentHeaderDivTitle>Scheduel</ContentHeaderDivTitle>

            <ContentBodyDiv>
                <ContentCardDiv>
                    <h3>Insert Scheduel</h3>
                    <div className="FormData">
                        <MyInput>
                            <input type={"text"} placeholder="Schedual Name" id="schedualName" title="일정의 이름"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="Schedual Type" id="schedualType" title="일정 유형(1 : 기간, 2 : 매월, 3 : 매년)"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="Start Date" id="startDate" title="시작일(일정 유형 1 : YYYYMMDD, 2 : DD, 3 : MMDD)"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="End Date" id="endDate" title="종료일(일정 유형 1 : YYYYMMDD, 2 : DD, 3 : MMDD)"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="Start Time" id="startTime" title="시작시간(HHMI)"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="End Time" id="endTime" title="종료시간(HHMI)"></input>
                        </MyInput>
                        <MyInput>
                            <input
                                type={"text"}
                                placeholder="Week Type"
                                id="weekType"
                                title="요일(0 : off, 1 : on으로 7자리. 앞에서부터 일월화수목금토 요일을 의미)
	시간 값은 0000 ~ 2400의 값을 가질 수 있다.
	시작시간이 종료시간보다 나중인 것을 허용한다. 예를 들어 1800 ~ 0900으로 업무 외 시간을 설정할 수 있다.
	시작/종료일과 시작/종료 시간은 서로 영향을 받는다. 1일 ~ 10일, 1800 ~ 0900시로 설정된 경우 1일 18시부터 24시까지, 2일 ~ 9일까지는 00시부터 09시까지, 18시부터 24시까지, 10일 00시부터 09시까지 적용된다.
"
                            ></input>
                        </MyInput>
                        <MyButton onClick={insertOnClick}>Insert</MyButton>
                    </div>
                </ContentCardDiv>

                <ContentCardDiv big={true}>
                    <h3>Schedual List</h3>
                    {Array.isArray(schedualList) ? schedualList.map((list) => <IBizSchedualTable schedual={list} key={list.scheduleIdx}></IBizSchedualTable>) : ""}
                </ContentCardDiv>
            </ContentBodyDiv>
        </ContentWrap>
    );
}
