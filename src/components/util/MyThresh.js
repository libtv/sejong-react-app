import styled, { keyframes } from "styled-components";

const BallAnimation = keyframes`
    to {
        top: 0px;
    }
    from {
        top: 300px;
    }
`;

const ThreshDiv = styled.div`
    width: 100%;
    height: 350px;
    padding: 20px 30px;

    display: flex;
    justify-content: center;
    position: relative;

    box-sizing: border-box;

    img {
        width: 100%;
        height: 500px;
    }
`;

const BallDiv = styled.div`
    width: 200px;
    height: 200px;
    background-color: tomato;
    border-radius: 100px;
    position: absolute;

    animation-name: ${BallAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
`;

export default function MyThresh({ children }) {
    return <ThreshDiv>{children}</ThreshDiv>;
}
