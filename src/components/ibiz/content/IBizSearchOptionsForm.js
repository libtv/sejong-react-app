import { useCallback } from "react";
import styled from "styled-components";
import $ from "jquery";

const MyDiv = styled.div`
    margin-top: 30px;
`;

const MyKey = styled.div`
    display: flex;
    color: white;
    font-size: 10px;

    h3 {
        font-size: 10px;
    }
`;

const MyValue = styled.div`
    display: flex;
    color: white;
    font-size: 10px;
    align-items: center;

    h3 {
        font-size: 10px;
    }
`;

export default function IBizSearchOptionsForm({ data, multiCheckTrueFalse, idx, checkSetValidIdx }) {
    let realIdx = "";

    const onClick = useCallback((target) => {
        const checkBox = $(`#checkbox_${idx}`);
        if (multiCheckTrueFalse === false) {
            document.getElementsByName("checkboxOnlyOne").forEach((el) => {
                return (el.checked = false);
            });
            checkBox.prop("checked", true);
        }
        checkSetValidIdx(realIdx, checkBox.prop("checked"));
    }, []);

    return (
        <MyDiv>
            <MyKey>
                <h3></h3>
                {Object.entries(data).map(([key, value]) => {
                    if (idx === 0) {
                        return <h3>{key}</h3>;
                    }
                })}
            </MyKey>
            <MyValue>
                <h3>
                    <input type="checkbox" id={`checkbox_${idx}`} name="checkboxOnlyOne" value="music" onClick={(e) => onClick(e)} />
                </h3>
                {Object.entries(data).map(([key, value], index) => {
                    if (index === 0) {
                        realIdx = value;
                    }
                    return <h3>{value}</h3>;
                })}
            </MyValue>
        </MyDiv>
    );
}
