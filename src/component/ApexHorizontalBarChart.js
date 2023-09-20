import React from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexHorizontalBarChart = () => {
    const seriesData = [
        {
            name: 'Open - In Process',
            data: [20, 17, 19, 18, 25],
        },
        {
            name: 'Open - Escalated',
            data: [18,20,19,21,16],
        },
        {
            name: 'Closed - NFA',
            data: [10,9,8,9,7],
        },
        {
            name: 'Closed - Escalated',
            data: [14,11,9,15,10],
        }
    ];

    const chartOptions = {
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            // background: '#7D7D7D',
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0,
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 4,
                dataLabels: {

                    style: {
                        fontSize: '50px',
                        fontWeight: 'bold',
                    },
                    background: {
                        enabled: true,
                        foreColor: '#fff',
                        borderRadius: 2,
                        padding: 4,
                        opacity: 0.9,
                        borderWidth: 1,
                        borderColor: '#fff'
                    },
                },
            },


        },
        hover: {
            // Customize the hover color here
            fill: {
                type: 'solid',
                color: '#FF5733', // Change to your desired hover color
            },
        },
        stroke: {
            width: 0,
            colors: ['#fff'],
        },

        xaxis: {
            categories: ['Ray Lapid', 'Maria Santos', 'Elena Navarro', 'Teresa Gomez', 'Sofia Reyes'],
            labels: {
                formatter: function (val) {
                    return '';

                },
                style: {
                    fontSize: '10px',
                    // fontWeight: 900,
                },
            },
        },
        yaxis: {
            title: {
                text: undefined,
            },
        },

        fill: {
            opacity: 1,
        },
        colors: ['#FF8717', '#FFC330','#00A71B','#B60202'],
        legend: {
            position: 'bottom',
            horizontalAlign: 'center',
            offsetX: 40,

        },
    };

    return (
        <div id="chart" className="horizontalBarChart">
            <h1 id='apex'>apexChart</h1>
            <ReactApexChart options={chartOptions} series={seriesData} type="bar" height={350} width={653} />

        </div>
    );
};

export default ApexHorizontalBarChart;
