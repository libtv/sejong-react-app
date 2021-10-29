import React from "react";

import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
import BizHeader from "./BizHeader";
import styled from "styled-components";
import BizContent from "./BizContent";

export default function IBizComponent({ children, location, match }) {
    const contentIntro1st = "I BIZ 서비스는 VNS BIZ의 음원을 번호별로 설정할 수 있도록 하는 서비스입니다.";
    const contentIntro2nd = "VNS 번호에 대해 일정을 등록하여 일정에 따라 착신 번호를 지정할 수 있으며, 일정에 따라 안내 멘트만 재생하고 호를 종료할 수 있습니다.";
    return (
        <div className="Ibiz">
            <HeaderComponent />
            <BizHeader url={"https://www.sejongtelecom.net/resources/img/sub/sub_visual_line.jpg"}>부가서비스</BizHeader>
            <BizContent contents={[contentIntro1st, contentIntro2nd]}>I BIZ</BizContent>
            <FooterComponent />
        </div>
    );
}
