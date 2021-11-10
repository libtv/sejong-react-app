import styled, { keyframes } from "styled-components";

const Spin = keyframes`
  from   {  -webkit-transform: rotate(0deg); }
  to   {  -webkit-transform: rotate(360deg); }
`;

const MyLoading = styled.div`
    position: absolute;
    width: 100%;
    height: calc(100% + 130px);
    top: 0;
    left: 0;
    z-index: 10000;
    background: rgba(51, 51, 51, 0.6);

    display: flex;
    justify-content: center;
    align-items: center;

    .spin {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        border: dashed 5px white;
        -webkit-animation-name: ${Spin};
        -webkit-animation-duration: 5s;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: ubic-bezier(0.2, -2, 0.8, 2);
    }
`;

export default function Loading() {
    return (
        <MyLoading>
            <div className="spin"></div>
        </MyLoading>
    );
}
