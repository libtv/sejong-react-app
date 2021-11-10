import { ContentWrap, ContentCardDiv, ContentHeaderDivTitle, DashBoardContentBodyDiv } from "../../util/MyCard";
import MyLineGraph from "../../util/MyLineGraph";
import MyThresh from "../../util/MyThresh";
import MyChartGraph from "../../util/MyChartGraph";

export default function IBizDashBoardContent() {
    return (
        <ContentWrap>
            <ContentHeaderDivTitle>DashBoard</ContentHeaderDivTitle>

            <DashBoardContentBodyDiv>
                <ContentCardDiv small={true}>
                    서버 상황
                    <MyThresh>
                        <MyLineGraph></MyLineGraph>
                    </MyThresh>
                </ContentCardDiv>
                <ContentCardDiv small={true}>
                    Sales Stastics
                    <MyThresh>
                        <MyChartGraph></MyChartGraph>
                    </MyThresh>
                </ContentCardDiv>
                <ContentCardDiv small={true}>
                    Sales Stastics
                    <MyThresh>
                        <MyChartGraph></MyChartGraph>
                    </MyThresh>
                </ContentCardDiv>
                <ContentCardDiv big={true}>
                    <img
                        src="./resources/img/welcome.jpg"
                        alt="사진"
                        style={{
                            display: "inline-block",
                            width: "100%",
                            height: "100%",
                        }}
                    ></img>
                </ContentCardDiv>
            </DashBoardContentBodyDiv>
        </ContentWrap>
    );
}
