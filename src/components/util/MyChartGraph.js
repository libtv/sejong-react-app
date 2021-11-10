import { select, axisBottom, axisRight, scaleLinear, scaleBand } from "d3";
import React, { useEffect, useRef, useState } from "react";
const colorScale = scaleLinear().domain([30, 50, 150]).range(["green", "orange", "red"]).clamp(true);

export default function MyLineGraph() {
    const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
    const svgRef = useRef();

    useEffect(() => {
        const svg = select(svgRef.current);

        // scale
        const xScale = scaleBand()
            .domain(data.map((value, index) => index))
            .range([0, 300])
            .padding(0.5);

        const yScale = scaleLinear().domain([0, 150]).range([150, 0]);

        // axis
        const xAxis = axisBottom(xScale).ticks(data.length);
        svg.select(".x-axis").style("transform", "translateY(150px)").call(xAxis);

        const yAxis = axisRight(yScale);
        svg.select(".y-axis").style("transform", "translateX(300px)").call(yAxis);

        svg.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("x", (value, index) => xScale(index))
            .attr("y", -150)
            .attr("width", xScale.bandwidth())
            .style("transform", "scale(1, -1)")
            .transition()
            .duration(500)
            .delay(function (d, i) {
                return i * 1000;
            }) //멋있는 css
            .attr("fill", colorScale) // color 더해줌
            .attr("height", (value, index) => 150 - yScale(value));
    }, [data]);
    return (
        <>
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
        </>
    );
}
