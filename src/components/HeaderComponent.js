import React from "react";
import styled, { css, keyframes } from "styled-components";
import "../css/font.css";
import { Link } from "react-router-dom";

const MouseOverKeyframe = keyframes`
  from {
    border: none;
    opacity: 0.4;
    border-width: 10%;
  }
  to {
    border-bottom: 3px solid red;
    color: red;
    opacity: 0.7;
    border-width: 100%;
  }
`;

const SejongHeader = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    border-bottom: 1px solid gray;
    position: fixed;
    z-index: 1000;
    background-color: white;
`;

const SejongBlockHeader = styled.div`
    width: 100%;
    height: 75px;
`;

const ImageDiv = styled.div`
    width: 25%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const ContentDiv = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
`;

const BlockContent = styled.div`
    width: 11%;
    height: 100%;
`;

const MyContentDiv = styled.div`
    width: 46%;
    height: 100%;

    display: flex;
    cursor: pointer;
`;

const MyContent = styled.div`
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        animation-duration: 0.25s;
        animation-timing-function: ease-out;
        animation-name: ${MouseOverKeyframe};
        animation-fill-mode: forwards;
    }
`;

const MyContentH2 = styled.h2`
    font-size: 16px;
    font-weight: 600;
    font-family: "NotoSansKR-Light";
    width: 100%;
    height: 100%;
`;

const MyLink = styled(Link)`
    list-style: none;
    text-decoration: none;
    &:visited {
        color: black;
    }
    &::link {
        color: black;
    }
`;

export default function HeaderComponent({ children, location, match }) {
    return (
        <div className="Header">
            <SejongHeader>
                <ImageDiv>
                    <MyLink to={"/"}>
                        <img src="./resources/img/h_logo.png" />
                    </MyLink>
                </ImageDiv>

                <ContentDiv>
                    <BlockContent />
                    <MyContentDiv>
                        <MyContent number={1}>
                            <MyLink to={"/"}>
                                <MyContentH2>세종텔레콤</MyContentH2>
                            </MyLink>
                        </MyContent>
                        <MyContent number={2}>
                            <MyLink to={"/cdbiz"}>
                                <MyContentH2>CD BIZ</MyContentH2>
                            </MyLink>
                        </MyContent>
                        <MyContent number={3}>
                            <MyLink to={"/gbiz"}>
                                <MyContentH2>G BIZ</MyContentH2>
                            </MyLink>
                        </MyContent>
                        <MyContent number={4}>
                            <MyLink to={"/ibiz"}>
                                <MyContentH2>I BIZ</MyContentH2>
                            </MyLink>
                        </MyContent>
                        <MyContent number={5}>
                            <MyLink to={"/ibiz"}>
                                <MyContentH2>고객지원</MyContentH2>
                            </MyLink>
                        </MyContent>
                    </MyContentDiv>
                </ContentDiv>
            </SejongHeader>
            <SejongBlockHeader />
        </div>
    );
}
