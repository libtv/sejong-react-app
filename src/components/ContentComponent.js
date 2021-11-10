import React from "react";
import styled from "styled-components";
import ADComponent from "./ADComponent";

const MyContent = styled.div`
    width: 1600px;
    height: fit-content;
    margin: 0 auto;
    padding: 100px 130px 0px 130px;
    box-sizing: border-box;
`;

export default function ContentComponent() {
    return (
        <div className="Content">
            <MyContent>
                <ADComponent></ADComponent>
            </MyContent>
        </div>
    );
}
