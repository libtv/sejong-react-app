import styled, { css } from "styled-components";

const MyTableDiv = styled.div`
    margin-bottom: 50px;

    table {
        margin-top: 15px;
        width: 100%;
        border: none;
        border-collapse: collapse;
        box-shadow: 2px 2px 10px 3px gray;
    }
    td {
        border: 1px solid gray;
        padding: 13px 20px;
        text-align: center;
        font-family: "NotoSansKR-Regular";
        font-size: 15px;
    }

    .StateChange {
        cursor: pointer;
        &:hover {
            color: red;
        }

        ${(props) => {
            return props.state === props.imstate
                ? css`
                      background-color: red;
                      color: white;
                  `
                : "";
        }}
    }

    .tableColor {
        background-color: #eff2f7;
    }

    input[type="file"] {
        display: block;
    }

    button {
        border: none;
        background-color: inherit;
        font-family: "NotoSansKR-Regular";
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        border-bottom: 1px solid brown;

        &:hover {
            color: tomato;
        }
    }
`;

export default function MyTable({ children, state, imstate }) {
    return (
        <MyTableDiv state={state} imstate={imstate}>
            <table>
                <tbody>{children}</tbody>
            </table>
        </MyTableDiv>
    );
}
