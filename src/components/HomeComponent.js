import React from "react";
import styled, { css, keyframes } from "styled-components";
import ConsultingComponent from "./ConsultingComponent";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import SlickComponent from "./SlickComponent";

export default function HomeComponent({ children, location, match }) {
    return (
        <div className="Home">
            <HeaderComponent></HeaderComponent>
            <SlickComponent />
            <ConsultingComponent />
            <ContentComponent />
            <FooterComponent />
        </div>
    );
}
