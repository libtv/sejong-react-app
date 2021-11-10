import React from "react";
import styled, { css } from "styled-components";

const ConsultingDiv = styled.div`
    margin-top: -150px;
    width: 100%;
    text-align: center;
    height: 300px;
    position: relative;
    display: flex;
    justify-content: center;
`;

const ConsultingContentDiv = styled.div`
    width: 65%;
    height: 100%;
    background-color: rgb(239, 239, 239);
    border-radius: 15px;

    display: flex;
`;

const ConsultingContentApp = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    ${(props) => {
        const width = props.width;
        const paddingLeft = props.padding;
        return css`
            width: ${width}%;
            padding: 40px ${paddingLeft}px;
        `;
    }}
    position: relative;
    box-sizing: border-box;

    .ContentTitle {
        font-family: "NotoSansKR-Bold";
        font-size: 35px;
        font-weight: 100;
        color: #272727;
    }

    .ContentDivisionDiv {
        width: 100%;
        height: 100%;

        display: flex;

        margin-top: 20px;
        padding: 30px 20px;
        box-sizing: border-box;
        position: relative;
        text-align: left;
        ${(props) => {
            return props.color
                ? css`
                      background-color: ${props.color};
                  `
                : "";
        }}
    }

    .ContentH2Text {
        font-family: "NotoSansKR-Regular";
        font-size: 35px;
        font-weight: 600;
        color: #272727;
        margin-bottom: 25px;
    }

    .ContentPText {
        font-family: "NotoSansKR-Regular";
        font-size: 18px;
        color: #272727;
    }

    .ContentDivLeft {
        width: 75%;
        height: 100%;
        box-sizing: border-box;
    }

    .ContentDivRight {
        width: 25%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export default function ConsultingComponent() {
    return (
        <div className="Consulting">
            <ConsultingDiv>
                <ConsultingContentDiv>
                    <ConsultingContentApp width="35" color="#ffffff" padding={40}>
                        <h2 className="ContentTitle">전화상담</h2>
                        <div className="ContentDivisionDiv">
                            <div className="ContentDivLeft">
                                <h2 className="ContentH2Text">1688.1000</h2>
                                <p className="ContentPText">상담시간 09:00~18:00</p>
                                <p className="ContentPText">(월~금 / 공휴일 제외)</p>
                            </div>
                            <div className="ContentDivRight">
                                <img src="./resources/img/ico-headset.png" alt="사진"></img>
                            </div>
                        </div>
                    </ConsultingContentApp>
                    <ConsultingContentApp width="65" color="#ffffff" padding={40}>
                        <h2 className="ContentTitle">1:1 상담신청</h2>
                        <div className="ContentDivisionDiv">
                            <div className="ContentDivLeft">
                                <h2 className="ContentH2Text">Test Beta Server</h2>
                                <p className="ContentPText">상담시간 09:00~18:00</p>
                                <p className="ContentPText">(월~금 / 공휴일 제외)</p>
                            </div>
                            <div className="ContentDivRight">
                                <img src="./resources/img/ico-headset.png" alt="사진"></img>
                            </div>
                        </div>
                    </ConsultingContentApp>
                </ConsultingContentDiv>
            </ConsultingDiv>
        </div>
    );
}
