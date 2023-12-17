import Chart from "./Chart";
import { EChartOption } from "echarts";
import React, { useContext } from 'react'
import { StockChartDataContext } from "../../context/StockChartDataContext";

const StockChart = () => {

    const { data } = useContext(StockChartDataContext);

    const dateOnly:string[] = data.map(item => item.date);

    const price:[number,number,number,number][] = data.map(item => {
        return [
            item.open,
            item.close,
            item.low,
            item.high,
        ]
    })

    const option: EChartOption = {
        xAxis: {
            data: dateOnly,
        },
        yAxis: {
            min:function(value){
                return value.min - 500
            }
        },
        series: [
            {
                type: 'candlestick',
                data: price
            }
        ]
    }
    return (
        <div>
            <Chart height="500px" className="Chart" option={option} />
        </div>
    )
}

export default StockChart;