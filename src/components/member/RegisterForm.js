import styled, { css } from "styled-components";
import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { asyncUserInsert, logout } from "../../modules/ibizReducer";
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
    ${(props) => {
        if (props.size === "small")
            return css`
                padding: 50px 50px;
            `;
    }}
    width: 100%;
    box-sizing: border-box;
    position: relative;
    text-align: center;
`;

export default function RegisterForm({ history, location }) {
    const dispatch = useDispatch();
    const state = useSelector((state) => {
        return state.ibizReducer;
    });

    const onClickRegister = async (e) => {
        e.preventDefault();
        const userId = $("#userId").val();
        const userPwd = $("#userPwd").val();
        const pwdCheck = $("#pwdCheck").val();
        const clientCode = $("#clientCode").val();
        const userName = $("#userName").val();
        const userPhone = $("#userPhone").val();

        if (userId === "" || userPwd === "" || pwdCheck === "" || clientCode === "" || userName === "" || userPhone === "") {
            return alert("입력 값을 확인해주세요.");
        }

        if (userPwd !== pwdCheck) {
            return alert("비밀번호를 확인해주세요.");
        }

        dispatch(asyncUserInsert(userId, userPwd, clientCode, userName, userPhone));
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
                <LoginContentDiv color="#FF760D" endColor="#9933FF">
                    <img src="./resources/img/h_logo.png" alt="사진" />
                    <h3>Please register in to iBiz</h3>
                    <h3> </h3>
                    <p>In computer security, logging in is the process by which an individual gains access to a computer system by identifying and authenticating themselves.</p>
                </LoginContentDiv>
                <LoginContentDiv color="white" endColor="white">
                    <LoginInput size={"small"}>
                        <MyInput>
                            <input type={"text"} placeholder="ID" id="userId"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"password"} placeholder="Password" id="userPwd"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"password"} placeholder="Password Check" id="pwdCheck"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="Client Code" id="clientCode"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="Name" id="userName"></input>
                        </MyInput>
                        <MyInput>
                            <input type={"text"} placeholder="Phone Number" id="userPhone"></input>
                        </MyInput>
                        <MyButton onClick={onClickRegister} color={"#69a4ff"} marginTop={50}>
                            Register
                        </MyButton>
                    </LoginInput>
                </LoginContentDiv>
            </LoginContentWrap>
            <FooterComponent />
        </BackgroundGrayWrap>
    );
}
