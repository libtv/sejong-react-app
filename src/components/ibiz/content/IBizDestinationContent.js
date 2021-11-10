import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncDestinationInsert, asyncDestinationSelect } from "../../../modules/ibizReducer";
import { ContentWrap, ContentBodyDiv, ContentCardDiv, ContentHeaderDivTitle } from "../../util/MyCard";
import IBizDestinationTable from "./IBizDestinationTable";
import MyInput from "../../util/MyInput";
import MyButton from "../../util/MyButton";
import $ from "jquery";

export default function IBizDestinationContent() {
    const dispatch = useDispatch();

    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const onClickInsert = (e) => {
        e.preventDefault();
        const calledNumber = $("#calledNumber");

        if (calledNumber === "" || calledNumber === null) {
            return alert("착신번호 필드를 확인해주세요.");
        }

        dispatch(asyncDestinationInsert(loginstate.id, loginstate.loginmarker, loginstate.clientcode, calledNumber.val()));
    };

    useEffect(() => {
        dispatch(asyncDestinationSelect(loginstate.id, loginstate.loginmarker, loginstate.clientcode));
    }, []);

    const destinationList = loginstate.destinationlist;

    return (
        <ContentWrap>
            <ContentHeaderDivTitle>Destination</ContentHeaderDivTitle>

            <ContentBodyDiv>
                <ContentCardDiv>
                    <h3>Insert Destination</h3>
                    <div className="FormData">
                        <MyInput>
                            <input type={"text"} placeholder="calledNumber" id="calledNumber" title="등록하고자 하는 착신 번호"></input>
                        </MyInput>
                        <MyButton onClick={onClickInsert}>Insert</MyButton>
                    </div>
                </ContentCardDiv>

                <ContentCardDiv big={true}>
                    <h3>Destination List</h3>
                    {Array.isArray(destinationList) ? destinationList.map((destination) => <IBizDestinationTable destination={destination} key={destination.calledIdx}></IBizDestinationTable>) : ""}
                </ContentCardDiv>
            </ContentBodyDiv>
        </ContentWrap>
    );
}
