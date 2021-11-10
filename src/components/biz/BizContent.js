import React, { useCallback, useState } from "react";
import styled from "styled-components";
import MyButton from "../util/MyButton";
import WrapActionContentComponent from "./WrapActionContentComponent";

const Content = styled.div`
    width: 100%;
    height: fit-content;
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

const ContentButtonDiv = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentGrayBoxDiv = styled.div`
    background-color: #f9f9f9;
    height: 340px;
    width: 1200px;

    h2 {
        margin-top: 100px;
        text-align: center;
        font-family: "NotoSansKR-Regular";
        font-size: 25px;
    }
`;

const MyContext = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;

    h3 {
        display: inline-block;
        text-align: center;
        font-family: "NotoSansKR-Regular";
        font-size: 18px;
        padding-bottom: 10px;
        border-bottom: 2px solid red;
        margin-bottom: 20px;
    }

    p {
        font-family: "NotoSansKR-Regular";
    }
`;

const ContextServiceDiv = styled.div`
    width: 100%;
    height: 650px;
    background-image: url("./resources/img/line_other_bg.jpg");
    margin: 0 auto;

    h3 {
        margin-top: 90px;
        display: inline-block;
        width: 100%;
        text-align: center;
        font-family: "NotoSansKR-Regular";
        font-size: 45px;
        font-weight: 100;
        color: white;
        margin-bottom: 50px;
    }
`;

const HexagonDiv = styled.div`
    position: relative;
    width: 200px;
    height: 115.3px;
    margin: 57.7px 0;
    border-left: solid 1px #b6b6b6; /* 외곽라인 두께및 색상 */
    border-right: solid 1px #b6b6b6; /* 외곽라인 두께및 색상 */
    float: left;

    &:before,
    &:after {
        content: "";
        position: absolute;
        z-index: 1;
        width: 141.42px;
        height: 141.42px;
        -webkit-transform: scaleY(0.5774) rotate(-45deg);
        -ms-transform: scaleY(0.5774) rotate(-45deg);
        transform: scaleY(0.5774) rotate(-45deg);
        background-color: inherit;
        left: 27.965px;
    }

    &:before {
        top: -71.384px;
        border-top: solid 1.4142px #b6b6b6; /* 외곽라인 두께및 색상 */
        border-right: solid 1.4142px #b6b6b6; /* 외곽라인 두께및 색상 */
    }

    &:after {
        bottom: -71.384px;
        border-bottom: solid 1.4142px #b6b6b6; /* 외곽라인 두께및 색상 */
        border-left: solid 1.4142px #b6b6b6; /* 외곽라인 두께및 색상 */
    }

    padding: 34px 33px;
    box-sizing: border-box;
    color: white;
    font-family: "NotoSansKR-Regular";
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const HexagonWrapDiv = styled.div`
    width: 1250px;
    height: 230px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
`;

const ContextFooterDiv = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #f9f9f9;
    margin: 0 auto;
    text-align: center;

    h2 {
        margin: 50px 0;
        display: inline-block;
    }

    .ContentDiv {
        width: 100%;
        height: 1000px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ContentImageDiv {
        width: 1200px;
        height: 900px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    }
`;

function BizContent({ children, contents, buttonAciton }) {
    const [state, setState] = useState(false);

    const MyButtonActionOnClick = useCallback(() => {
        setState(!state);
    }, [state]);

    return (
        <div className="BizContent">
            <WrapActionContentComponent state={state} setState={setState} bizName={children}></WrapActionContentComponent>
            <Content>
                <ContentTitleDiv>
                    <ContentTitle>{children}</ContentTitle>
                </ContentTitleDiv>
                <ContentTextDiv>
                    <ContentText>{contents[0]}</ContentText>
                    <ContentText>{contents[1]}</ContentText>
                </ContentTextDiv>
                <ContentButtonDiv>
                    <a href="#BizSendWrapContent">
                        <MyButton onClick={MyButtonActionOnClick}>서비스 이용</MyButton>
                    </a>
                </ContentButtonDiv>
                <ContentButtonDiv>
                    <ContentGrayBoxDiv>
                        <h2>대상고객</h2>
                        <ContentButtonDiv>
                            <MyContext>
                                <h3>01</h3>
                                <p>050BIZ WEB 서비스 개발이나 별도 구축없이</p>
                                <p>고객 및 직원의 개인정보보호를 위해</p>
                                <p>안심번호 서비스를 이용하려는 기업</p>
                            </MyContext>
                            <MyContext>
                                <h3>02</h3>
                                <p>050BIZ WEB 서비스 개발이나 별도 구축없이</p>
                                <p>고객 및 직원의 개인정보보호를 위해</p>
                                <p>안심번호 서비스를 이용하려는 기업</p>
                            </MyContext>
                        </ContentButtonDiv>
                    </ContentGrayBoxDiv>
                </ContentButtonDiv>

                <ContextServiceDiv>
                    <h3>서비스 특징</h3>
                    <HexagonWrapDiv>
                        <HexagonDiv>클라우드(Cloud) 보안 인증 서비스</HexagonDiv>
                        <HexagonDiv>3無 서비스</HexagonDiv>
                        <HexagonDiv>클라우드(Cloud) 녹취 무료제공</HexagonDiv>
                        <HexagonDiv>음원 생성 및 등록 무제한 제공</HexagonDiv>
                        <HexagonDiv>RestFul API 전용 특화기능 제공</HexagonDiv>
                    </HexagonWrapDiv>
                </ContextServiceDiv>

                <ContextFooterDiv>
                    <ContentTitle>WEB 서비스 기능 예시</ContentTitle>
                    <div className="ContentDiv">
                        <div className="ContentImageDiv">
                            <img src="./resources/img/050_biz_ex.jpg" alt="사진" />
                        </div>
                    </div>
                </ContextFooterDiv>
            </Content>
        </div>
    );
}

export default React.memo(BizContent);
