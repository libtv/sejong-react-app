import styled, { css, keyframes } from "styled-components";
import React, { useCallback } from "react";
import CDBizContentComponent, { CDBizContentInsertComponent, CDBizContentDeleteComponent } from "./content/CDBizContentComponent";
import { useDispatch, useSelector } from "react-redux";
import { resetSelector } from "../../modules/bizUrlSelector";
import IBizContentComponent from "./content/IBizContentComponent";
import MyClose from "../util/MyClose";

const WrapAnimation = keyframes`
    from {
        width: 0%;
    } 
    to {
        width: 100%;
    }
`;

const WrapActionContent = styled.div`
    position: absolute;
    width: 100%;
    height: 3150px;

    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: none;

    ${(props) => {
        if (props.setVisible === true) {
            return css`
                border-radius: 0;
                animation-duration: 1s;
                animation-timing-function: ease-out;
                animation-name: ${WrapAnimation};
                animation-fill-mode: forwards;

                display: flex;
                justify-content: center;
                align-items: center;
            `;
        } else {
            return css`
                display: none;
            `;
        }
    }}
`;

const WhiteWrapActionContent = styled.div`
    width: 45%;
    height: 300px;
    background-color: rgba(255, 255, 255, 1);
    z-index: 1000;
    border-radius: 15px;

    ${(props) => {
        if (props.setWidth) {
            return css`
                height: 750px;
            `;
        }
    }}
`;

const BizSendWrapContent = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`;

function WrapActionContentComponent({ state, setState, bizName }) {
    const myState = useSelector((state) => {
        return state.bizUrlSelector;
    });

    const dispatch = useDispatch();

    const onClickClose = useCallback(
        (e) => {
            e.preventDefault();
            setState(!state);
            dispatch(resetSelector());
        },
        [state]
    );

    const setWidthTrueFalse = myState.url ? true : false;

    return (
        <div className="WrapActionContentComponent">
            <WrapActionContent setVisible={state}>
                <WhiteWrapActionContent setWidth={setWidthTrueFalse}>
                    <MyClose onClickClose={onClickClose}></MyClose>
                    <BizSendWrapContent id="BizSendWrapContent">
                        {bizName.includes("CD BIZ") && setWidthTrueFalse === false && <CDBizContentComponent></CDBizContentComponent>}
                        {bizName.includes("CD BIZ") && myState.url.includes("cd") && myState.url.includes("insert") && <CDBizContentInsertComponent></CDBizContentInsertComponent>}
                        {bizName.includes("CD BIZ") && myState.url.includes("cd") && myState.url.includes("delete") && <CDBizContentDeleteComponent></CDBizContentDeleteComponent>}
                        {bizName.includes("I BIZ") && setWidthTrueFalse === false && <IBizContentComponent></IBizContentComponent>}
                    </BizSendWrapContent>
                </WhiteWrapActionContent>
            </WrapActionContent>
        </div>
    );
}

export default React.memo(WrapActionContentComponent);
