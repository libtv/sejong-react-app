import React from "react";
import Slider from "react-slick";
import styled, { css, keyframes } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/font.css";

const SlickDivAnimation = keyframes`
  from {
    background-size: 120% auto;
    
  }
  to {
    background-size: 100% auto;
  }
`;

const SlickDiv = styled.div`
    width: 50%;
    height: 650px;
    box-sizing: border-box;
    ${(props) => {
        const img = props.img;
        return css`
            background-image: url(${img});
            background-size: cover;
        `;
    }}

    animation-duration: 10s;
    animation-timing-function: ease-out;
    animation-name: ${SlickDivAnimation};
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const SlickTitle = styled.h3`
    position: absolute;
    left: 20%;
    top: 25%;
    margin: 0 auto;
    font-size: 20px;
    color: white;
    font-size: 55px;
    font-weight: 100;
    font-family: "NotoSansKR-Light";
    ${(props) => {}}
`;

const SlickText = styled.h3`
    position: absolute;
    left: 20%;
    top: 35%;
    margin: 0 auto;
    font-size: 20px;
    color: white;
    font-size: 55px;
    font-weight: 600;
    font-family: "NotoSansKR-Light";
    ${(props) => {}}
`;

const SlickBottom = styled.h3`
    position: absolute;
    left: 20%;
    top: 65%;
    margin: 0 auto;
    font-size: 20px;
    color: white;
    font-size: 30px;
    font-weight: 100;
    font-family: "NotoSansKR-Light";
    ${(props) => {}}
`;

const StyledSlider = styled(Slider)`
    .slick-list {
        width: 100%;
    }

    .slick-slide div {
        /* cursor: pointer; */
    }

    .slick-dots {
        bottom: -50px;
        margin-top: 200px;
    }

    .slick-track {
        overflow-x: hidden;
    }
`;

export default function SlickComponent() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
    };

    return (
        <div className="SlickComponent">
            <StyledSlider {...settings}>
                <SlickDiv img={"https://www.sejongtelecom.net/resources/img/main/main_img_1.jpg"}>
                    <SlickTitle>비대면 서비스 바우처 지원사업</SlickTitle>
                    <SlickText>서비스 공급 기업 선정</SlickText>
                    <SlickBottom>세종텔레콤 솔루션 서비스팀</SlickBottom>
                </SlickDiv>
                <SlickDiv img={"https://www.sejongtelecom.net/resources/img/main/main_img_2.jpg"}>
                    <SlickTitle>비대면 서비스 바우처 지원사업</SlickTitle>
                    <SlickText>서비스 공급 기업 선정</SlickText>
                    <SlickBottom>세종텔레콤 솔루션 서비스팀</SlickBottom>
                </SlickDiv>
                <SlickDiv img={"https://www.sejongtelecom.net/resources/img/main/main_img_3.jpg"}>
                    <SlickTitle>비대면 서비스 바우처 지원사업</SlickTitle>
                    <SlickText>서비스 공급 기업 선정</SlickText>
                    <SlickBottom>세종텔레콤 솔루션 서비스팀</SlickBottom>
                </SlickDiv>
                <SlickDiv img={"https://www.sejongtelecom.net/resources/img/main/main_img_4.jpg"}>
                    <SlickTitle>비대면 서비스 바우처 지원사업</SlickTitle>
                    <SlickText>서비스 공급 기업 선정</SlickText>
                    <SlickBottom>세종텔레콤 솔루션 서비스팀</SlickBottom>
                </SlickDiv>
            </StyledSlider>
        </div>
    );
}
