import styled, { css, keyframes } from "styled-components";

const ButtonAnimation = keyframes`
    from {
        background-color: red;
        color: white;
        width: 230px;
        
    }
    to {
        background-color: red;
        color: white;
        width: 250px;
        border-bottom: 2px solid black
    }
`;

const ContentButton = styled.button`
    font-family: "NotoSansKR-Bold";
    background-color: red;
    width: 230px;
    height: 60px;
    padding: 15px 70px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    color: white;
    cursor: pointer;

    ${(props) => {
        return css`
            margin-top: ${props.marginTop}px;
        `;
    }}

    &:hover {
        border-radius: 0;
        animation-duration: 0.25s;
        animation-timing-function: ease-out;
        animation-name: ${ButtonAnimation};
        animation-fill-mode: forwards;
    }

    ${(props) => {
        return css`
            background-color: ${props.color};
        `;
    }}

    ${(props) => {
        return props.size === "small"
            ? css`
                  width: 100px;
                  height: 10px;
                  font-size: 15px;
              `
            : "";
    }}
`;

export default function MyButton({ children, color, onClick, marginTop, size }) {
    return (
        <>
            <ContentButton color={color} onClick={onClick} marginTop={marginTop} size={size}>
                {children}
            </ContentButton>
        </>
    );
}
