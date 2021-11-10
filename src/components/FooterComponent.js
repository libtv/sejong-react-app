import React from "react";
import styled, { css } from "styled-components";

const FooterDiv = styled.div`
    width: 100%;
    height: 200px;

    background-color: #2d2929;
`;

const FooterContentDiv = styled.div`
    margin: 0 auto;
    width: 1250px;
    height: 130px;
    padding: 50px 0px 20px 0px;
`;

const NbspDiv = styled.div`
    margin-top: 40px;
`;

const FooterH2 = styled.h3`
    font-family: "NotoSansKR-Bold";
    font-size: 16px;
    display: inline-block;
    margin-left: 25px;
    position: relative;

    ${(props) => {
        return props.color
            ? css`
                  color: ${props.color};
              `
            : css`
                  color: white;
              `;
    }}

    ${(props) => {
        return props.line
            ? css`
                  ::after {
                      content: " ";
                      width: 3px;
                      height: 19px;
                      position: absolute;
                      background-color: gray;
                      margin-left: 7px;
                  }
              `
            : css``;
    }}

    ${(props) => {
        return props.weight
            ? css`
                  font-family: "NotoSansKR-Regular";
              `
            : "";
    }}
`;

export default function FooterComponent() {
    return (
        <div className="Footer">
            <FooterDiv>
                <FooterContentDiv>
                    <FooterH2 color="#e60012" line={true}>
                        개인정보 처리방침
                    </FooterH2>
                    <FooterH2 line={true}>서비스 이용 약관</FooterH2>
                    <FooterH2 line={true}>이메일 무단 수집거부</FooterH2>
                    <FooterH2 line={true}>이용약관</FooterH2>
                    <FooterH2>명의도용방지서비스</FooterH2>
                    <NbspDiv className="nbspP">
                        <FooterH2 color="#abbec7" weight="small">
                            서울시 강동구 상일로 10길 36 (상일동) · 고객만족센터 1688.1000(유료), 080.889.1000(무료)
                        </FooterH2>
                    </NbspDiv>
                    <FooterH2 color="#abbec7" weight="small">
                        COPYRIGHT(C) 2021 SEJONG Telecom Inc. ALL RIGHTS RESERVED
                    </FooterH2>
                </FooterContentDiv>
            </FooterDiv>
        </div>
    );
}
