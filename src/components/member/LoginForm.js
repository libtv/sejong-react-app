import styled, { css } from "styled-components";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { asyncLogin, logout } from "../../modules/ibizReducer";
import Loading from "../util/Loading";
import MyInput from "../util/MyInput";
import MyButton from "../util/MyButton";
import $ from "jquery";

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

export default function LoginForm({ history, location }) {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return state.ibizReducer;
    });

    const onClickLogin = (e) => {
        e.preventDefault();
        const id = $("#id").val();
        const pwd = $("#password").val();
        const vnsNumber = $("#vnsnumber").val();

        if (id === null || id === "") {
            alert("아이디를 입력해주세요.");
        } else if (pwd === null || pwd === "") {
            alert("비밀번호를 입력해주세요.");
        } else if (vnsNumber === null || vnsNumber === "") {
            alert("VnsNumber를 입력해주세요.");
        } else {
            dispatch(asyncLogin(id, pwd, vnsNumber));
        }
    };

    if (state.loginmarker) {
        return <Redirect to={"/main"} />;
    }

    if (state.failed) {
        alert("아이디 혹은 비밀번호를 확인해주세요.");
        dispatch(logout());
    }

    return (
        <BackgroundGrayWrap>
            <HeaderComponent />
            {state.loading && <Loading></Loading>}

            <LoginContentWrap>
                <LoginContentDiv color="#3684ff" endColor="#69a4ff">
                    <img src="./resources/img/h_logo.png" alt="사진" />
                    <h3>Please log in to the iBiz</h3>
                    <h3>get access control</h3>
                    <p>In computer security, logging in is the process by which an individual gains access to a computer system by identifying and authenticating themselves.</p>
                </LoginContentDiv>
                <LoginContentDiv color="white" endColor="white">
                    <LoginInput>
                        <MyInput>
                            <input type={"text"} placeholder="ID" id="id" defaultValue={"naver_t"}></input>
                        </MyInput>
                        <MyInput>
                            <input type={"password"} placeholder="PassWord" id="password" defaultValue={"qnrlqnrk123"}></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="VNS Number" id="vnsnumber" defaultValue={"402"}></input>
                        </MyInput>
                        <MyButton onClick={onClickLogin} color={"#69a4ff"} marginTop={50}>
                            Login
                        </MyButton>
                    </LoginInput>
                </LoginContentDiv>
            </LoginContentWrap>
            <FooterComponent />
        </BackgroundGrayWrap>
    );
}
