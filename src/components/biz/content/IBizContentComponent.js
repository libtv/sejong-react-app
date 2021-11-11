import styled, { css } from "styled-components";
import React from "react";
import MyLink from "../../util/MyLink";

const IBizWrapContent = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0px 40px;

    box-sizing: border-box;
`;

const IBizTitleContent = styled.div`
    width: 100%;
    font-family: "NotoSansKR-Regular";
    font-size: 35px;
    font-weight: 100;
    color: black;
    padding-bottom: 10px;
    border-bottom: 5px solid red;
`;

const IBizFormContent = styled.div`
    padding: 10px;
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 15px;

    h2 {
        width: 20%;
        font-family: "NotoSansKR-Regular";
        font-size: 23px;
        font-weight: 100;
        margin-left: 20px;
        margin-right: 15px;
        box-sizing: border-box;
    }

    select {
        font-family: "NotoSansKR-Regular";
        width: 60%;
        padding: 20px;
        margin-right: 10px;
        box-sizing: border-box;
    }

    table {
        margin-top: 15px;
        width: 100%;
        border: 1px solid gray;
        border-collapse: collapse;
    }
    td {
        border: 1px solid gray;
        padding: 13px 20px;
        text-align: center;
        font-family: "NotoSansKR-Regular";
        font-size: 15px;
    }

    input {
        width: 100%;
        padding: 8px 3px;
    }

    .tableColor {
        background-color: #eff2f7;
    }

    li {
        list-style: none;
        font-family: "NotoSansKR-Regular";
        font-size: 15px;
    }

    .chkAll {
        width: 20px;
    }

    box-sizing: border-box;
`;

const MyButton = styled.button`
    font-family: "NotoSansKR-Bold";
    width: 100%;
    height: 60px;
    padding: 15px 70px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    background-position: 0;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;

    ${(props) => {
        return css`
            background-color: ${props.mColor};
        `;
    }}
`;

function IBizContentComponent() {
    return (
        <div className="CDbizContent">
            <IBizWrapContent>
                <IBizTitleContent>I Biz</IBizTitleContent>
                <IBizFormContent>
                    <MyButton mColor="#ffdc00">
                        <MyLink to="/register" color={"black"}>
                            회원가입
                        </MyLink>
                    </MyButton>

                    <MyButton mColor="#1d74e5">
                        <MyLink to="/member" color={"white"}>
                            로그인
                        </MyLink>
                    </MyButton>
                </IBizFormContent>
            </IBizWrapContent>
        </div>
    );
}

export default React.memo(IBizContentComponent);
