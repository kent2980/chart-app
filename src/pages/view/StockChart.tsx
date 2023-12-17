import Chart, { IChartProps } from "../../components/Chart";
import { EChartOption } from "echarts";
import React from 'react'


type Props = {
    chartProps:IChartProps;
}

const StockChart = (props: Props) => {
    return (
        <div>
            <Chart height="240px" />
        </div>
    )
}

export default StockChart