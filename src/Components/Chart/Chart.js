import "./Chart.css"
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map((dataPoint)=>dataPoint.value)
    const maxValue = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map ((dataPoints)=> (
                <ChartBar
                    key = {dataPoints.label}
                    value={dataPoints.value}
                    maxValue = {maxValue}
                    label = {dataPoints.label}
                />
            ))}
        </div>
    );
}

export default Chart;