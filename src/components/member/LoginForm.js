import styled, { css } from "styled-components";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
import { MdPassword } from "react-icons/md";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { asyncLogin } from "../../modules/ibizReducer";

const BackgroundGrayWrap = styled.div`
    width: 100%;
    height: fit-content;
    background-color: whitesmoke;
`;

const LoginContentWrap = styled.div`
    margin: 100px auto;
    width: 1000px;
    height: 625px;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px 2px gray;
    display: flex;
`;

const LoginContentDiv = styled.div`
    width: 50%;
    height: 100%;
    ${(props) => {
        return css`
            background: linear-gradient(to left top, ${props.color}, ${props.endColor});
        `;
    }}

    padding: 50px 60px;
    box-sizing: border-box;

    img {
        margin-bottom: 100px;
    }

    h3 {
        color: white;
        font-size: 30px;
        text-align: end;
        font-weight: 500;
        margin-bottom: 15px;
    }
    p {
        margin-top: 60px;
        text-align: end;
        font-size: 15px;
        color: white;
    }
`;

const LoginInput = styled.form`
    padding: 150px 50px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    text-align: center;
`;

const ContentButton = styled.button`
    background-color: #69a4ff;
    width: 230px;
    height: 60px;
    padding: 15px 70px;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    color: white;
    cursor: pointer;
    margin-top: 50px;
    font-weight: 600;
`;

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

export default function LoginForm({ history, location }) {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return state.ibizReducer;
    });

    const onClickLogin = (e) => {
        e.preventDefault();
        dispatch(asyncLogin());
    };

    if (state.loading) {
        return <div>로딩중입니다.</div>;
    }

    if (state.loginmarker) {
        return <Redirect to={"/main"} />;
    }

    return (
        <BackgroundGrayWrap>
            <HeaderComponent />

            <LoginContentWrap>
                <LoginContentDiv color="#3684ff" endColor="#69a4ff">
                    <img src="./resources/img/h_logo.png" />
                    <h3>Please log in to the iBiz</h3>
                    <h3>get access control</h3>
                    <p>In computer security, logging in is the process by which an individual gains access to a computer system by identifying and authenticating themselves.</p>
                </LoginContentDiv>
                <LoginContentDiv color="white" endColor="white">
                    <LoginInput>
                        <MyInputDiv>
                            <MyPassword></MyPassword>
                            <input type={"text"} placeholder="ID"></input>
                        </MyInputDiv>
                        <MyInputDiv>
                            <MyPassword></MyPassword>
                            <input type={"text"} placeholder="PassWord"></input>
                        </MyInputDiv>
                        <MyInputDiv>
                            <MyPassword></MyPassword>
                            <input type={"text"} placeholder="VNS Number"></input>
                        </MyInputDiv>
                        <ContentButton onClick={onClickLogin}>Login</ContentButton>
                    </LoginInput>
                </LoginContentDiv>
            </LoginContentWrap>
            <FooterComponent />
        </BackgroundGrayWrap>
    );
}
