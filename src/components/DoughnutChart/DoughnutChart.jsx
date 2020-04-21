import React, { Component } from 'react'
import { Chart } from "react-chartjs-2";

export class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidUpdate() {
        this.myChart.data.labels = this.props.data.map(d => d.name);
        this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
        this.myChart.update();
    }

    componentDidMount() {
        this.myChart = new Chart(this.chartRef.current, {
            type: 'doughnut',
            data: {
                labels: this.props.data.map(d => d.name),
                datasets: [{
                    data: this.props.data.map(d => d.value),
                    backgroundColor: this.props.colors
                }]
            }
        });
    }

    render() {
        return <canvas ref={this.chartRef} />
    }
}

export default DoughnutChart
