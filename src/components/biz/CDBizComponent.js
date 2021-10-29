import React from "react";

import FooterComponent from "../FooterComponent";
import HeaderComponent from "../HeaderComponent";
import BizHeader from "./BizHeader";
import styled from "styled-components";
import BizContent from "./BizContent";

export default function CDBizComponent({ children, location, match }) {
    return (
        <div className="CDbiz">
            <HeaderComponent />
            <BizHeader url={"https://www.sejongtelecom.net/resources/img/sub/sub_visual_line_other.jpg"}>부가서비스</BizHeader>
            <BizContent>CD BIZ</BizContent>
            <FooterComponent />
        </div>
    );
}
