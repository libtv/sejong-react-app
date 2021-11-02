import React from "react";
import styled, { css } from "styled-components";
import { FiAirplay, FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { dashboard, destination, ibiz, ment, schedual, vns, account } from "../../../modules/menuSelector";

const NavBarDiv = styled.div`
    width: 280px;
    height: 100%;
    position: fixed;
    background-color: #1e1e2d;
    color: #828491;
    box-sizing: border-box;
`;

const NavBarTrunkDiv = styled.div`
    width: 280px;
    height: 100%;
    background-color: rgba(255, 255, 255, 1);
`;

const NavBarContentDiv = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 45px;
    color: #828491;
    z-index: 1000;
    span {
        display: inline-block;
        margin-left: 25px;
        font-size: 12px;
        letter-spacing: 0.1rem !important;
        margin-bottom: 15px;
    }
    position: relative;

    .LastChild {
        position: absolute;
        right: 0;
        padding: 5px 10px;
    }
`;

const NavBarContent = styled.div`
    display: flex;
    align-items: center;

    width: 100%;

    padding: 15px 28px;
    box-sizing: border-box;

    cursor: pointer;

    h3 {
        margin-left: 25px;
        font-size: 15px;
    }

    &:hover {
        color: white;
        background-color: #db1430;
    }

    ${(props) => {
        if (props.state === props.currentstate) {
            return css`
                color: white;
                background-color: #db1430;
            `;
        }
    }}
`;

export default function IBizNav() {
    const state = useSelector((state) => {
        return state.menuSelector;
    });

    const dispatch = useDispatch();

    const onClickDashboard = (e) => {
        e.preventDefault();
        dispatch(dashboard());
    };

    const onClickIBiz = (e) => {
        e.preventDefault();
        dispatch(ibiz());
    };

    const onClickVns = (e) => {
        e.preventDefault();
        dispatch(vns());
    };

    const onClickDestination = (e) => {
        e.preventDefault();
        dispatch(destination());
    };

    const onClickSchedual = (e) => {
        e.preventDefault();
        dispatch(schedual());
    };

    const onClickMent = (e) => {
        e.preventDefault();
        dispatch(ment());
    };

    const onClickAccount = (e) => {
        e.preventDefault();
        dispatch(account());
    };

    return (
        <div className="IBizNav">
            <NavBarDiv>
                <NavBarContentDiv>
                    <span>DASHBOARD</span>
                    <NavBarContent state={"dashboard"} currentstate={state.select} onClick={onClickDashboard}>
                        <FiAirplay></FiAirplay>
                        <h3>Dashboard</h3>
                    </NavBarContent>
                </NavBarContentDiv>
                <NavBarContentDiv>
                    <span>OPTIONS</span>
                    <NavBarContent state={"ibiz"} currentstate={state.select} onClick={onClickIBiz}>
                        <FiAirplay></FiAirplay>
                        <h3>IBiz Settings</h3>
                    </NavBarContent>
                    <NavBarContent state={"vns"} currentstate={state.select} onClick={onClickVns}>
                        <FiAirplay></FiAirplay>
                        <h3>VNS Settings</h3>
                    </NavBarContent>
                    <NavBarContent state={"destination"} currentstate={state.select} onClick={onClickDestination}>
                        <FiAirplay></FiAirplay>
                        <h3>Destination Number</h3>
                    </NavBarContent>
                    <NavBarContent state={"schedual"} currentstate={state.select} onClick={onClickSchedual}>
                        <FiAirplay></FiAirplay>
                        <h3>Schedual Settings</h3>
                    </NavBarContent>
                    <NavBarContent state={"ment"} currentstate={state.select} onClick={onClickMent}>
                        <FiAirplay></FiAirplay>
                        <h3>Ment Settings</h3>
                    </NavBarContent>
                </NavBarContentDiv>
                <NavBarContentDiv>
                    <span>USERS</span>
                    <NavBarContent state={"account"} currentstate={state.select} onClick={onClickAccount}>
                        <FiAirplay></FiAirplay>
                        <h3>Accounts</h3>
                    </NavBarContent>
                </NavBarContentDiv>
            </NavBarDiv>
            <NavBarTrunkDiv> </NavBarTrunkDiv>
        </div>
    );
}
