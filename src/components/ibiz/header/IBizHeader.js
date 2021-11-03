import styled from "styled-components";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiUser, FiAirplay } from "react-icons/fi";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncLogout } from "../../../modules/ibizReducer";

const MyLink = styled(Link)`
    list-style: none;
    text-decoration: none;
    &:visited {
        color: white;
    }
    &::link {
        color: white;
    }
`;

const HeaderBarDiv = styled.div`
    width: 100%;
    height: 70px;
    color: white;
    background-color: #1e1e2d;
    position: fixed;
    left: 0;
    top: 0;

    display: flex;
    z-index: 2000;
`;

const HeaderBarTrunkDiv = styled.div`
    width: 100%;
    height: 70px;
    left: 0;
    top: 0;
`;

const HeaderLogoDiv = styled.div`
    width: 280px;
    height: 100%;
    padding-left: 30px;

    display: flex;
    box-sizing: border-box;

    align-items: center;
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    background-color: #1a1a27;

    h5 {
        color: red;
    }
`;

const HeaderMenuBarDiv = styled.div`
    width: calc(100% - 280px);
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderDashMenuDiv = styled.div`
    width: fit-content;
    height: 100%;

    display: flex;
    margin: 0 15px;
`;

const HeaderDashMenuChildren = styled.div`
    position: absolute;
    width: 230px;
    height: fit-content;
    background-color: white;
    top: 70px;
    left: 5px;

    box-shadow: 2px 2px 2px 2px gray;

    display: none;
`;

const HeaderDashMenuChildrenContent = styled.div`
    width: 100%;
    height: fit-content;
    margin-top: 15px;
    color: black;
    z-index: 1000;
    position: relative;

    .NavBarContent {
        display: flex;
        align-items: center;

        width: 100%;

        padding: 15px 14px;
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
    }

    .LastChild {
        position: absolute;
        right: 0;
        padding: 5px 10px;
    }
`;

const HeaderDashMenuText = styled.div`
    height: 100%;
    padding: 26px 15px;
    box-sizing: border-box;

    font-family: Poppins;
    font-weight: 500;
    font-size: 15px;

    cursor: pointer;

    color: #828491;

    &:hover {
        background-color: rgba(26, 26, 39, 0.9);
        color: white;
        ${HeaderDashMenuChildren} {
            display: initial;
        }
    }

    position: relative;
`;

export default function IBizHeader() {
    const dispatch = useDispatch();

    const onClickFunction = (e) => {
        e.preventDefault();
    };

    const onClickLogOut = (e) => {
        e.preventDefault();
        dispatch(asyncLogout());
    };

    return (
        <div className="IBizHeader">
            <HeaderBarTrunkDiv></HeaderBarTrunkDiv>
            <HeaderBarDiv>
                <MyLink to={"/"}>
                    <HeaderLogoDiv>
                        <h3>SEJONG.</h3>
                        <h5>TEL</h5>
                    </HeaderLogoDiv>
                </MyLink>
                <HeaderMenuBarDiv>
                    <HeaderDashMenuDiv>
                        <HeaderDashMenuText id="Dashboard" onClick={onClickFunction}>
                            Dashboard
                        </HeaderDashMenuText>
                        <HeaderDashMenuText id="Options" onClick={onClickFunction}>
                            Options
                            <HeaderDashMenuChildren>
                                <HeaderDashMenuChildrenContent>
                                    <div className="NavBarContent">
                                        <FiAirplay></FiAirplay>
                                        <h3>IBiz Settings</h3>
                                    </div>
                                    <div className="NavBarContent">
                                        <FiAirplay></FiAirplay>
                                        <h3>VNS Settings</h3>
                                    </div>
                                    <div className="NavBarContent">
                                        <FiAirplay></FiAirplay>
                                        <h3>Destination Number</h3>
                                    </div>
                                    <div className="NavBarContent">
                                        <FiAirplay></FiAirplay>
                                        <h3>Schedual Settings</h3>
                                    </div>
                                    <div className="NavBarContent">
                                        <FiAirplay></FiAirplay>
                                        <h3>Ment Settings</h3>
                                    </div>
                                </HeaderDashMenuChildrenContent>
                            </HeaderDashMenuChildren>
                        </HeaderDashMenuText>
                        <HeaderDashMenuText id="Users" onClick={onClickFunction}>
                            Users
                            <HeaderDashMenuChildren>
                                <HeaderDashMenuChildrenContent>
                                    <div className="NavBarContent">
                                        <FiAirplay></FiAirplay>
                                        <h3>Accounts</h3>
                                    </div>
                                </HeaderDashMenuChildrenContent>
                            </HeaderDashMenuChildren>
                        </HeaderDashMenuText>
                    </HeaderDashMenuDiv>
                    <HeaderDashMenuDiv>
                        <HeaderDashMenuText>
                            <AiOutlineSearch></AiOutlineSearch>
                        </HeaderDashMenuText>
                        <HeaderDashMenuText>
                            <FiUser onClick={onClickLogOut}></FiUser>
                        </HeaderDashMenuText>
                    </HeaderDashMenuDiv>
                </HeaderMenuBarDiv>
            </HeaderBarDiv>
        </div>
    );
}
