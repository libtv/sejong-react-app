import React from "react";

import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
import BizHeader from "./BizHeader";
import styled from "styled-components";
import BizContent from "./BizContent";

export default function CDBizComponent({ children, location, match }) {
    const contentIntro1st = "C BIZ 서비스는 사기 전화로 의심 되는 발신번호를 등록하여 해당 번호로부터 전화 수신 시 적절한 멘트를 플레이 할 수 있게 하는 서비스입니다.";
    const contentIntro2nd = "D BIZ 서비스는 050 별 착신 시 플레이되는 안내 멘트를 지정해 주는 서비스입니다.";
    return (
        <div className="CDbiz">
            <HeaderComponent />
            <BizHeader url={"https://www.sejongtelecom.net/resources/img/sub/sub_visual_line_other.jpg"}>부가서비스</BizHeader>
            <BizContent contents={[contentIntro1st, contentIntro2nd]} buttonAciton={"cdbiz"}>
                CD BIZ
            </BizContent>
            <FooterComponent />
        </div>
    );
}
