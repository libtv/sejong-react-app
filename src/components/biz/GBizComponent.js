import React from "react";

import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
import BizHeader from "./BizHeader";
import styled from "styled-components";
import BizContent from "./BizContent";

export default function GBizComponent({ children, location, match }) {
    const contentIntro1st = "G BIZ는 VNS BIZ 서비스의 일종으로 개별 번호 단위로 ‘연결중멘트’를 설정할 수 있는 서비스입니다.";
    return (
        <div className="Gbiz">
            <HeaderComponent />
            <BizHeader url={"https://www.sejongtelecom.net/resources/img/sub/sub_visual_internet_2.jpg"}>부가서비스</BizHeader>
            <BizContent contents={[contentIntro1st, " "]}>G BIZ</BizContent>
            <FooterComponent />
        </div>
    );
}
