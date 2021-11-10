import React from "react";
import styled, { css } from "styled-components";

const Content = styled.div`
    width: 100%;
    height: 330px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${(props) => {
        return css`
            background-image: url(${props.url});
        `;
    }}

    font-family: "NotoSansKR-Regular";
    font-size: 45px;
    font-weight: 100;
    color: white;
`;

export default function BizHeader({ children, url }) {
    return (
        <div className="BizHeader">
            <Content url={url}>{children}</Content>
        </div>
    );
}
