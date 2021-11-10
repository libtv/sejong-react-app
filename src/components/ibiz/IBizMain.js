import React from "react";
import styled from "styled-components";
import IBizHeader from "./header/IBizHeader";
import IBizNav from "./header/IBizNav";
import IBizDashBoardContent from "./content/IBizDashBoardContent";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Loading from "../util/Loading";
import IBizMentContent from "./content/IBizMentContent";
import IBizSchedualContent from "./content/IBizSchedualContent.js";
import IBizDestinationContent from "./content/IBizDestinationContent";
import IBizVNSContent from "./content/IBizVNSContent";
import IBizSetContent from "./content/IBizSetContent";

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

    if (loginstate.loginmarker === "" || loginstate.loginmarker === null) {
        return (
            <>
                <Loading></Loading>
                <Redirect to={"/"}></Redirect>
            </>
        );
    }

    return (
        <div className="IBizMain">
            <IBizHeader></IBizHeader>
            <IBizWrap>
                {loginstate.loading && <Loading></Loading>}
                <IBizNav></IBizNav>
                {state.select === "dashboard" && <IBizDashBoardContent></IBizDashBoardContent>}
                {state.select === "vns" && <IBizVNSContent>vns</IBizVNSContent>}
                {state.select === "destination" && <IBizDestinationContent>destination</IBizDestinationContent>}
                {state.select === "schedual" && <IBizSchedualContent>schedual</IBizSchedualContent>}
                {state.select === "ment" && <IBizMentContent>ment</IBizMentContent>}
                {state.select === "ibiz" && <IBizSetContent>ibiz</IBizSetContent>}
                {state.select === "account" && <div>account</div>}
            </IBizWrap>
        </div>
    );
}
