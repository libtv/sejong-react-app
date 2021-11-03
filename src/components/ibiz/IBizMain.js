import React from "react";
import styled from "styled-components";
import IBizHeader from "./header/IBizHeader";
import IBizNav from "./header/IBizNav";
import IBizDashBoardContent from "./header/IBizDashBoardContent";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const IBizWrap = styled.div`
    width: 100%;
    height: 100%;
    color: black;
    display: flex;
    position: relative;
`;

export default function IBizMain() {
    const state = useSelector((state) => {
        return state.menuSelector;
    });

    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    if (loginstate.loginmarker == "" || loginstate.loginmarker == null) {
        return <Redirect to={"/"}></Redirect>;
    }

    return (
        <div className="IBizMain">
            <IBizHeader></IBizHeader>
            <IBizWrap>
                <IBizNav></IBizNav>
                {state.select == "dashboard" && <IBizDashBoardContent></IBizDashBoardContent>}
                {state.select == "vns" && <div>vns</div>}
                {state.select == "destination" && <div>destination</div>}
                {state.select == "schedual" && <div>schedual</div>}
                {state.select == "ment" && <div>ment</div>}
                {state.select == "ibiz" && <div>ibiz</div>}
                {state.select == "account" && <div>account</div>}
            </IBizWrap>
        </div>
    );
}
