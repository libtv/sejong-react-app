import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUserSelect, asyncUserUpdate } from "../../../modules/ibizReducer";
import { ContentWrap, ContentHeaderDivTitle, DashBoardContentBodyDiv } from "../../util/MyCard";
import styled from "styled-components";
import $ from "jquery";

const MyAccountDiv = styled.div`
    margin-top: 20px;
    width: 100%;
    height: fit-content;
    padding-left: 5px;
    display: flex;
    align-items: center;

    h4 {
        font-size: 14px;
        width: 200px;
        padding: 5px 10px;
    }

    h5 {
        width: 100px;
    }

    h5::after {
        content: " ";
        position: absolute;
        width: 1px;
        height: 33px;
        background-color: gray;

        margin-top: -15px;
        margin-left: 10px;
    }

    input {
        width: 200px;
        padding: 10px 20px;
        border: none;
        border-bottom: 1px solid black;
        background-color: inherit;
    }
`;

const AccountDiv = styled.div`
    width: 100%;
    height: 90vh;

    h3 {
        font-size: 45px;
        color: cornflowerblue;
        font-weight: 600;
        margin-bottom: 15px;
    }

    p {
        font-size: 15px;
        font-weight: 300;
        padding: 5px 0px;
    }

    h2 {
        margin-top: 40px;
        font-size: 21px;
        font-weight: 600;
        padding-bottom: 15px;
        color: #000;
        border-bottom: 1px solid gray;
    }

    button {
        border: none;
        background-color: inherit;
        font-family: "NotoSansKR-Regular";
        font-weight: 600;
        font-size: 13px;
        cursor: pointer;
        border-bottom: 1px solid brown;
        margin-top: 20px;

        &:hover {
            color: tomato;
        }
    }
`;

export default function IBizAccoutContent() {
    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncUserSelect(loginstate.id, loginstate.loginmarker, loginstate.clientcode));
    }, []);

    const userList = loginstate.userlist;

    const [state, setState] = useState(false);

    const onClick = useCallback(() => {
        setState(!state);
    });

    const onSubmit = useCallback(() => {
        const userName = $("#userName");
        const userPhone = $("#userPhone");
        const passWord = $("#passWord");
        const passWordCheck = $("#passWordCheck");

        if (userName.val() === "" || userPhone.val() === "" || passWord.val() === "" || passWordCheck.val() === "") {
            return alert("입력칸을 확인해주시기 바랍니다.");
        }

        if (passWord.val() !== passWordCheck.val()) {
            return alert("패스워드가 다릅니다. 패스워드를 다시 확인해주세요.");
        }

        dispatch(asyncUserUpdate(loginstate.id, loginstate.loginmarker, loginstate.clientcode, userName.val(), userPhone.val(), passWord.val()));
    });

    return (
        <ContentWrap>
            <ContentHeaderDivTitle>Account</ContentHeaderDivTitle>

            <DashBoardContentBodyDiv>
                <AccountDiv>
                    <h3>나의 정보</h3>
                    <p>고객께서 가입하신 IBiz 회원정보 입니다.</p>
                    <p>안전한 배송 안내를 위해 핸드폰 번호와 이메일 주소를 필히 확인 부탁드립니다.</p>
                    <h2>필수 회원 정보</h2>
                    <MyAccountDiv>
                        <h4>ibizName</h4>
                        <h5></h5>
                        <input type={"text"} disabled={true} defaultValue={userList.ibizName}></input>
                    </MyAccountDiv>
                    {state === false && (
                        <>
                            <MyAccountDiv>
                                <h4>userName</h4>
                                <h5></h5>
                                <input type={"text"} disabled={true} defaultValue={userList.userName}></input>
                            </MyAccountDiv>
                            <MyAccountDiv>
                                <h4>userPhone</h4>
                                <h5></h5>
                                <input type={"text"} disabled={true} defaultValue={userList.userPhone}></input>
                            </MyAccountDiv>

                            <MyAccountDiv>
                                <h4>failCount</h4>
                                <h5></h5>
                                <input type={"text"} disabled={true} defaultValue={userList.failCount}></input>
                            </MyAccountDiv>
                            <MyAccountDiv>
                                <h4>useYn</h4>
                                <h5></h5>
                                <input type={"text"} disabled={true} defaultValue={userList.useYn}></input>
                            </MyAccountDiv>
                            <MyAccountDiv>
                                <h4>userId</h4>
                                <h5></h5>
                                <input type={"text"} disabled={true} defaultValue={userList.ibizName}></input>
                            </MyAccountDiv>

                            <MyAccountDiv>
                                <h4>ibizCode</h4>
                                <h5></h5>
                                <input type={"text"} disabled={true} defaultValue={userList.ibizCode}></input>
                            </MyAccountDiv>
                        </>
                    )}
                    {state === true && (
                        <>
                            <MyAccountDiv>
                                <h4>userName</h4>
                                <h5></h5>
                                <input type={"text"} defaultValue={userList.userName} id="userName"></input>
                            </MyAccountDiv>
                            <MyAccountDiv>
                                <h4>userPhone</h4>
                                <h5></h5>
                                <input type={"text"} defaultValue={userList.userPhone} id="userPhone"></input>
                            </MyAccountDiv>
                            <MyAccountDiv>
                                <h4>PassWord</h4>
                                <h5></h5>
                                <input type={"password"} id="passWord"></input>
                            </MyAccountDiv>
                            <MyAccountDiv>
                                <h4>PassWord 확인</h4>
                                <h5></h5>
                                <input type={"password"} id="passWordCheck"></input>
                            </MyAccountDiv>
                        </>
                    )}

                    {state === false && (
                        <MyAccountDiv>
                            <button onClick={onClick}>수정하기</button>
                        </MyAccountDiv>
                    )}
                    {state === true && (
                        <MyAccountDiv>
                            <button onClick={onSubmit}>수정완료</button>
                            <button onClick={onClick}>취소하기</button>
                        </MyAccountDiv>
                    )}
                </AccountDiv>
            </DashBoardContentBodyDiv>
        </ContentWrap>
    );
}
