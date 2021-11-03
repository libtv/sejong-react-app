import React from "react";
import styled, { css, keyframes } from "styled-components";

const ADTitle = styled.div`
    width: 600px;
    position: relative;

    &::before {
        content: " ";
        width: 5px;
        height: 40px;
        position: absolute;
        left: 0%;
        top: 0%;
        background-color: red;
    }
    h3 {
        font-family: "NotoSansKR-Regular";
        font-size: 35px;
        font-weight: 600;
        margin-left: 25px;
    }
    h6 {
        font-family: "NotoSansKR-Regular";
        font-size: 18px;
        font-weight: 100;
        margin-top: 20px;
        display: block;
    }
`;

const ADContent = styled.div`
    display: flex;
    width: 100%;
    height: 650px;
`;

const ADButtonContent = styled.div`
    width: 20%;
    height: 500px;
    margin-top: 65px;
`;

const ADButton = styled.div`
    width: 150px;
    height: 15px;
    padding: 15px 35px;
    font-family: "NotoSansKR-Regular";
    font-size: 18px;
    font-weight: 600;
    background-color: white;
    display: flex;
    align-items: center;
    color: black;
    justify-content: center;
    text-align: center;
    border-radius: 15px;
    margin-bottom: 20px;
    ${(props) => {
        return props.check === true
            ? css`
                  background-color: #e60012;
                  color: white;
              `
            : "";
    }}
    cursor: pointer;

    &:hover {
        ${(props) => {
            return props.check === true
                ? css`
                      background-color: white;
                      color: black;
                  `
                : css`
                      background-color: #e60012;
                      color: white;
                  `;
        }}
    }
`;

const ADBizContent = styled.div`
    width: 680px;
    height: 500px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const ADBizContentBox = styled.div`
    width: 270px;
    height: 190px;
    border: 2px solid gray;
    border-radius: 30px;
    background-color: white;
    box-shadow: 2px 2px 2px gray;
    margin-bottom: 10px;
    cursor: pointer;
    margin-right: 5px;

    padding: 35px 30px;

    h2 {
        margin-top: 20px;
        font-family: "NotoSansKR-Bold";
        font-size: 25px;
        font-weight: 100;
        color: #272727;
    }

    p {
        margin-top: 10px;
        font-family: "NotoSansKR-Regular";
        font-size: 15px;
    }

    .ADConetxtImg {
        position: relative;
        display: flex;
        align-items: center;
        margin-top: 20px;
        font-family: "NotoSansKR-Regular";
        color: red;
        font-weight: 600;

        &::before {
            position: absolute;
            top: 0;
            left: 0;
            content: " ";
            width: 20px;
            height: 20px;
            background: url("./resources/img/pd_more_arr.png") no-repeat center center;
            background-size: 100% 100%;
        }
        span {
            display: flex;
            align-items: center;
            margin-left: 25px;
        }
    }

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
`;

const ADImageContent = styled.div`
    height: 100%;
    position: relative;

    .ADImageDiv {
        position: absolute;
        left: -70px;
        z-index: -1;
    }
`;

const BlockDiv = styled.div`
    width: 100%;
    height: 150px;
`;

const RefContent = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    padding: 70px 0;
`;

export default function ADComponent() {
    return (
        <div className="AD">
            <ADTitle>
                <h3>추천상품</h3>
                <h6>원하는 서비스를 선택하세요.</h6>
            </ADTitle>
            <ADContent>
                <ADButtonContent>
                    <ADButton check={true}>전화/부가서비스</ADButton>
                    <ADButton>전화/부가서비스</ADButton>
                    <ADButton>전화/부가서비스</ADButton>
                </ADButtonContent>
                <ADBizContent>
                    <ADBizContentBox>
                        <img src="./resources/img/ico-pro_05.png"></img>
                        <h2>CDBIZ</h2>
                        <p>가상의 개인번호를 부여하여 통화연결</p>
                        <span className="ADConetxtImg">
                            <span>자세히보기</span>
                        </span>
                    </ADBizContentBox>
                    <ADBizContentBox>
                        <img src="./resources/img/ico-pro_06.png"></img>
                        <h2>GBIZ</h2>
                        <p>가상의 개인번호를 부여하여 통화연결</p>
                        <span className="ADConetxtImg">
                            <span>자세히보기</span>
                        </span>
                    </ADBizContentBox>
                    <ADBizContentBox>
                        <img src="./resources/img/ico-pro_07.png"></img>
                        <h2>IBIZ</h2>
                        <p>가상의 개인번호를 부여하여 통화연결</p>
                        <span className="ADConetxtImg">
                            <span>자세히보기</span>
                        </span>
                    </ADBizContentBox>
                    <ADBizContentBox>
                        <img src="./resources/img/ico-pro_08.png"></img>
                        <h2>고객센터</h2>
                        <p>가상의 개인번호를 부여하여 통화연결</p>
                        <span className="ADConetxtImg">
                            <span>자세히보기</span>
                        </span>
                    </ADBizContentBox>
                </ADBizContent>
                <ADImageContent>
                    <div className="ADImageDiv">
                        <img src="./resources/img/pro-bg-01.png" alt="전용회선/데이터센터" />
                    </div>
                </ADImageContent>
            </ADContent>

            <BlockDiv />
            <ADTitle>
                <h3>이런 서비스는 어때요?</h3>
                <h6>고객님의 여건을 생각한 서비스입니다.</h6>
            </ADTitle>
            <RefContent>
                <ADBizContentBox>
                    <img src="./resources/img/ico-pro_05.png"></img>
                    <h2>CDBIZ</h2>
                    <p>가상의 개인번호를 부여하여 통화연결</p>
                    <span className="ADConetxtImg">
                        <span>자세히보기</span>
                    </span>
                </ADBizContentBox>
                <ADBizContentBox>
                    <img src="./resources/img/ico-pro_05.png"></img>
                    <h2>CDBIZ</h2>
                    <p>가상의 개인번호를 부여하여 통화연결</p>
                    <span className="ADConetxtImg">
                        <span>자세히보기</span>
                    </span>
                </ADBizContentBox>
                <ADBizContentBox>
                    <img src="./resources/img/ico-pro_05.png"></img>
                    <h2>CDBIZ</h2>
                    <p>가상의 개인번호를 부여하여 통화연결</p>
                    <span className="ADConetxtImg">
                        <span>자세히보기</span>
                    </span>
                </ADBizContentBox>
                <ADBizContentBox>
                    <img src="./resources/img/ico-pro_05.png"></img>
                    <h2>CDBIZ</h2>
                    <p>가상의 개인번호를 부여하여 통화연결</p>
                    <span className="ADConetxtImg">
                        <span>자세히보기</span>
                    </span>
                </ADBizContentBox>
            </RefContent>
        </div>
    );
}
