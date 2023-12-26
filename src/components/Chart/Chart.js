import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValues=props.dataPoints.map(dataPoint => dataPoint.value); //this will change the object into array
    const totalMaximum=Math.max(...dataPointValues);  //spread operator ... will take all the values from the array individually

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => {
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.value} 
                />
            })}
        </div>
    );
};

export default Chart;