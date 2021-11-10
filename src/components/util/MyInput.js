import styled from "styled-components";
import { MdPassword } from "react-icons/md";

const MyInputDiv = styled.div`
    position: relative;
    color: #69a4ff;

    input {
        width: 100%;
        padding: 10px 30px;
        border: none;
        border-bottom: 2px solid #69a4ff;
        margin-bottom: 30px;
        box-sizing: border-box;
    }

    input:focus {
        border-bottom: 4px solid #3684ff;
    }
`;

const MyPassword = styled(MdPassword)`
    position: absolute;
    top: 10px;
`;

export default function MyInput({ children }) {
    return (
        <MyInputDiv>
            <MyPassword></MyPassword>
            {children}
        </MyInputDiv>
    );
}
