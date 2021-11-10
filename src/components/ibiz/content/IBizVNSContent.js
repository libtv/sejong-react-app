import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentWrap, ContentBodyDiv, ContentCardDiv, ContentHeaderDivTitle } from "../../util/MyCard";
import MyInput from "../../util/MyInput";
import MyButton from "../../util/MyButton";
import $ from "jquery";
import { asyncVnsInsert, asyncVnsSelect, asyncVnsTableSelect } from "../../../modules/ibizReducer";
import IBizVNSTableList from "./IBizVNSTableList";

export default function IBizVNSContent() {
    const dispatch = useDispatch();
    const loginstate = useSelector((state) => {
        return state.ibizReducer;
    });

    const [page, setPage] = useState(Number(1));

    useEffect(() => {
        dispatch(asyncVnsSelect(loginstate.id, loginstate.loginmarker, loginstate.clientcode));
    }, []);

    const vnsList = loginstate.vnslist;

    const pageCount = 10;
    const maxPage = parseInt(vnsList.length / pageCount, 10);

    const onChangePage = useCallback(
        (nextPage) => {
            setPage(nextPage);
            let list = [];
            if (Array.isArray(vnsList)) {
                vnsList.map((vns, idx) => {
                    if (idx > (page - 1) * pageCount && idx < page * pageCount) {
                        list.push(vns);
                    }
                });
                dispatch(asyncVnsTableSelect(list));
            }
        },
        [page]
    );

    const insertVns = useCallback(() => {
        const vnsNumber = $("#vnsNumber");

        if (vnsNumber.val() === null || vnsNumber.val() === "") {
            return alert("vnsNumber 를 확인해주세요.");
        }

        dispatch(asyncVnsInsert(loginstate.id, loginstate.loginmarker, loginstate.clientcode, vnsNumber.val()));

        vnsNumber.val("");
    });

    return (
        <ContentWrap>
            <ContentHeaderDivTitle>VNS</ContentHeaderDivTitle>

            <ContentBodyDiv>
                <ContentCardDiv>
                    <h3>Insert VNS</h3>
                    <div className="FormData">
                        <MyInput>
                            <input type={"text"} placeholder="vnsNumber" id="vnsNumber" title="등록하고자 하는 착신 번호"></input>
                        </MyInput>
                        <MyButton onClick={insertVns}>Insert</MyButton>
                    </div>
                </ContentCardDiv>

                <ContentCardDiv big={true}>
                    <h3>VNS List</h3>
                    <IBizVNSTableList key={"idx123"}></IBizVNSTableList>
                    <div className="FormData">
                        {Number(page) > 4 && page !== 1 ? (
                            <span className="notActive" onClick={(e) => onChangePage(1)}>
                                1
                            </span>
                        ) : (
                            ""
                        )}
                        {Number(page) > 4 && page !== 1 ? <span className="someMore">...</span> : ""}

                        {Number(page) - 3 > 0 ? (
                            <span className="notActive" onClick={(e) => onChangePage(page - 3)}>
                                {Number(page - 3)}
                            </span>
                        ) : (
                            ""
                        )}
                        {Number(page) - 2 > 0 ? (
                            <span className="notActive" onClick={(e) => onChangePage(page - 2)}>
                                {Number(page - 2)}
                            </span>
                        ) : (
                            ""
                        )}
                        {Number(page) - 1 > 0 ? (
                            <span className="notActive" onClick={(e) => onChangePage(page - 1)}>
                                {Number(page - 1)}
                            </span>
                        ) : (
                            ""
                        )}
                        <span className="active">{page}</span>
                        {Number(page) + 1 < maxPage ? (
                            <span className="notActive" onClick={(e) => onChangePage(page + 1)}>
                                {Number(page + 1)}
                            </span>
                        ) : (
                            ""
                        )}
                        {Number(page) + 2 < maxPage ? (
                            <span className="notActive" onClick={(e) => onChangePage(page + 2)}>
                                {Number(page + 2)}
                            </span>
                        ) : (
                            ""
                        )}
                        {Number(page + 3) < maxPage ? (
                            <span className="notActive" onClick={(e) => onChangePage(page + 3)}>
                                {Number(page + 3)}
                            </span>
                        ) : (
                            ""
                        )}
                        {page < Number(maxPage - 4) && page !== maxPage ? <span className="someMore">...</span> : ""}
                        {page < Number(maxPage - 4) && page !== maxPage ? (
                            <span className="notActive" onClick={(e) => onChangePage(maxPage)}>
                                {maxPage}
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                </ContentCardDiv>
            </ContentBodyDiv>
        </ContentWrap>
    );
}
