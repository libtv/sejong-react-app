import React from "react";
import styled, { css, keyframes } from "styled-components";

const Content = styled.div`
    width: 100%;
    height: 100vh;
`;

const ContentTitleDiv = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentTitle = styled.h2`
    font-family: "NotoSansKR-Regular";
    font-size: 45px;
    font-weight: 100;

    padding-bottom: 25px;
    border-bottom: 5px solid red;
`;

const ContentTextDiv = styled.div`
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const ContentText = styled.h2`
    font-family: "NotoSansKR-Regular";
    font-size: 18px;
    font-weight: 100;
    margin-bottom: 5px;
`;

export default function BizContent({ children }) {
    return (
        <div className="BizContent">
            <Content>
                <ContentTitleDiv>
                    <ContentTitle>{children}</ContentTitle>
                </ContentTitleDiv>
                <ContentTextDiv>
                    <ContentText>온·오프라인에서 노출되는 고객의 전화번호를 대신하여 가상의 개인번호(Virtual Number, '050')를 부여하고</ContentText>
                    <ContentText>통화 연결하는 서비스 개인의 전화번호가 노출되지 않도록 제공하는 안심번호 서비스입니다.</ContentText>
                </ContentTextDiv>
            </Content>
        </div>
    );
}
