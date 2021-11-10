import { select, line, curveBasis, scaleLinear, axisBottom } from "d3";
import React, { useEffect, useRef, useState } from "react";

export default function MyChartGraph() {
    const [data, setData] = useState([24, 30, 45, 70, 26, 65, 93]);
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = select(svgRef.current); // selection 객체

        /* 스케일링 */
        // 0이면 0, 6이면 300에 대응되게 scale 설정. 가독성 좋게 scaling 한다고 보면 된다.
        // 여기선 x축을 스케일링하려고 한다.
        const xScale = scaleLinear()
            .domain([0, data.length - 1])
            .range([0, 300]);

        // 웹에서 y는 반전이기 때문에 0을 src viewBox의 세로축 끝으로 지정하고, 가장 큰 값은 0으로 스케일링
        const yScale = scaleLinear().domain([0, 93]).range([300, 0]);

        // xAxis 설정. x축 스케일에 대응하게 해주자
        const xAxis = axisBottom(xScale);

        // axis를 그려주기 위해 설정한 g 태그를 선택하여 xAxis를 붙여주자
        // 그리고 맨 위에 축이 붙기 때문에 style로 아래로 내려주자.
        svg.select(".x-axis").style("transform", "translateY(280px)").call(xAxis);

        // line 객체를 만들자
        const myLine = line()
            .x((value, index) => xScale(index)) // x축을 스케일링
            .y((value) => yScale(value)) // 300 - value 라고 직접 값을 변경하는 대신 Scale 활용
            .curve(curveBasis);

        svg.selectAll(".line")
            .data([data])
            .join((enter) => enter.append("path"))
            .attr("class", "line")
            .attr("d", (value) => myLine(value))
            .attr("fill", "none")
            .attr("stroke", "red");
    }, [data]);

    return (
        <>
            <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300" version="1.1">
                <g className="x-axis"></g>
            </svg>
        </>
    );
}
