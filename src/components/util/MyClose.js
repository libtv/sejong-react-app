import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const CancelWrapContent = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    padding: 15px 10px;
    box-sizing: border-box;
`;

const ProxyAiOutlineClose = styled(AiOutlineClose)`
    display: block;
    color: black;
    font-size: 40px;

    &:hover {
        color: red;
    }
`;

export default function MyClose({ onClickClose }) {
    return (
        <CancelWrapContent>
            <ProxyAiOutlineClose onClick={onClickClose}></ProxyAiOutlineClose>
        </CancelWrapContent>
    );
}
