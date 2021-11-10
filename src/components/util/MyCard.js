import styled, { css } from "styled-components";

export const ContentWrap = styled.div`
    width: calc(100% - 280px);
    height: fit-content;
    background-color: #f5f8fa;

    position: relative;
    box-sizing: border-box;
`;

export const ContentHeaderDivTitle = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 35px;
    background-color: white;
    box-sizing: border-box;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 100px;
`;

export const ContentBodyDiv = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
`;

export const DashBoardContentBodyDiv = styled.div`
    width: 100%;
    height: fit-content;
    padding: 0 120px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    box-sizing: border-box;
`;

export const ContentCardDiv = styled.div`
    ${(props) => {
        return props.big
            ? css`
                  width: 1200px;
                  height: calc(fit-content + 850px); ;
              `
            : css`
                  width: 800px;
                  height: calc(fit-content + 5px); ;
              `;
    }}

    ${(props) => {
        return props.small
            ? css`
                  width: 350px;
                  height: fit-content;
              `
            : "";
    }}

    box-sizing: border-box;
    background-color: white;
    padding: 30px 26px;
    font-weight: 600;
    font-size: 18px;

    margin-right: 30px;
    margin-left: 30px;
    margin-bottom: 80px;

    border-radius: 15px;
    box-shadow: 2px 2px 2px 2px gray;

    h3 {
        margin: 15px 0;
        width: 100%;
        text-align: center;
        font-size: 25px;
        margin-bottom: 35px;
    }

    .fileUpload {
        display: none;
    }

    .DragDrop {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        &-File {
            width: 500px;
            height: 270px;
            border: 1px dotted gray;
            border-radius: 10px;
            display: flex;
            display: -webkit-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #f5f8fa;
            font-size: 15px;
        }
    }

    .FormData {
        padding: 25px 100px;
        text-align: center;
    }

    .active {
        color: blue;
        cursor: inherit;
        font-size: 13px;
        margin: 5px;
    }

    .notActive {
        cursor: pointer;
        font-size: 13px;
        margin: 5px;
    }

    .someMore {
        cursor: inherit;
        font-size: 10px;
        margin: 0;
    }
`;
