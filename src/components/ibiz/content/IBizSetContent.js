import React, { useEffect, useState } from "react";
import { ContentWrap, ContentBodyDiv, ContentCardDiv, ContentHeaderDivTitle } from "../../util/MyCard";

import MyButton from "../../util/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetSelect } from "../../../modules/ibizReducer";
import IBizSetTable from "./IBizSetTable";
import styled from "styled-components";

const Separator = styled.div`
    border-bottom: 2px solid rgba(24, 24, 24, 0.5);
`;

export default function IBizSetContent() {
    const dispatch = useDispatch();
    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const [state, setState] = useState(null);

    useEffect(() => {
        dispatch(asyncSetSelect(loginstate.id, loginstate.loginmarker, loginstate.clientcode));
    }, []);

    const setList = loginstate.setlist;

    const onClick = (idx) => {
        console.log(idx);
        setState(idx);
    };

    return (
        <ContentWrap>
            <ContentHeaderDivTitle>Scheduel</ContentHeaderDivTitle>

            <ContentBodyDiv>
                <ContentCardDiv>
                    <h3>Insert iBiz</h3>
                    <div className="FormData">
                        <MyButton>Insert</MyButton>
                    </div>
                </ContentCardDiv>

                <ContentCardDiv big={true}>
                    <h3>iBiz Settings List</h3>
                    {Array.isArray(setList)
                        ? setList.map((set) => (
                              <Separator>
                                  <IBizSetTable set={set} onClick={onClick} state={state}></IBizSetTable>
                              </Separator>
                          ))
                        : ""}
                </ContentCardDiv>
            </ContentBodyDiv>
        </ContentWrap>
    );
}
