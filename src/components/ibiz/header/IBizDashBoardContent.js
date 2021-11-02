import styled from "styled-components";
import React from "react";

const ContentWrap = styled.div`
    width: calc(100% - 280px);
    height: fit-content;
    background-color: #f5f8fa;

    position: relative;
    box-sizing: border-box;
`;

const ContentHeaderDivTitle = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 35px;
    background-color: white;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 30px;
`;

const ContentBodyDiv = styled.div`
    width: 100%;
    padding: 0 120px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
`;

const ContentCardDiv = styled.div`
    width: 400px;
    height: 540px;
    box-sizing: border-box;
    background-color: white;
    padding: 30px 26px;
    font-weight: 600;
    font-size: 18px;

    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 80px;
`;

export default function IBizDashBoardContent() {
    return (
        <ContentWrap>
            <ContentHeaderDivTitle>DashBoard</ContentHeaderDivTitle>

            <ContentBodyDiv>
                <ContentCardDiv>Sales Stastics</ContentCardDiv>
                <ContentCardDiv>Sales Stastics</ContentCardDiv>
                <ContentCardDiv>Sales Stastics</ContentCardDiv>
                <ContentCardDiv>Sales Stastics</ContentCardDiv>
            </ContentBodyDiv>
        </ContentWrap>
    );
}
