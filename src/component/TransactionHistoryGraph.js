import React from 'react';
import ReactApexChart from 'react-apexcharts';

const TransactionHistoryGraph = () => {
    const state = {
        series: [
            {
                name: 'Inflow',
                data: [
                    [new Date('2022-11-04T21:24:00').getTime(), 1000],
                    [new Date('2022-11-04T21:26:00').getTime(), 31100],
                    [new Date('2022-11-04T21:27:00').getTime(), 20000],
                    [new Date('2022-11-05T08:06:00').getTime(), 30000],
                    [new Date('2022-11-05T08:07:00').getTime(), 20000],
                    [new Date('2022-11-05T08:13:00').getTime(), 25000],
                    [new Date('2022-11-05T08:28:00').getTime(), 5900],
                    [new Date('2022-11-05T11:22:00').getTime(), 200],
                    [new Date('2022-11-05T11:23:00').getTime(), 200],
                    [new Date('2022-11-06T06:56:00').getTime(), 100],
                    [new Date('2022-11-06T08:26:00').getTime(), 50000],
                    [new Date('2022-11-06T09:43:00').getTime(), 50000],
                    [new Date('2022-11-06T09:44:00').getTime(), 50000],
                    [new Date('2022-11-06T10:51:00').getTime(), 30000],
                    [new Date('2022-11-06T10:52:00').getTime(), 50000],
                    [new Date('2022-11-06T10:52:00').getTime(), 50000],
                    [new Date('2022-11-06T12:21:00').getTime(), 10000],
                    [new Date('2022-11-06T12:22:00').getTime(), 50000],
                    [new Date('2022-11-06T13:39:00').getTime(), 5000],
                    [new Date('2022-11-06T13:40:00').getTime(), 13960],
                    [new Date('2022-11-06T14:51:00').getTime(), 5000],
                    [new Date('2022-11-06T17:10:00').getTime(), 14000],
                    [new Date('2022-11-07T08:09:00').getTime(), 50000],
                    [new Date('2022-11-07T08:10:00').getTime(), 40000],
                    [new Date('2022-11-07T11:26:00').getTime(), 10000],
                    [new Date('2022-11-07T11:29:00').getTime(), 30000],
                    [new Date('2022-11-07T13:01:00').getTime(), 30000],
                    [new Date('2022-11-07T14:36:00').getTime(), 25000],
                    [new Date('2022-11-07T17:22:00').getTime(), 50000],
                    [new Date('2022-11-07T17:34:00').getTime(), 5000],
                    [new Date('2022-11-07T17:40:00').getTime(), 14000],
                    [new Date('2022-11-08T05:57:00').getTime(), 50000],
                    [new Date('2022-11-08T08:30:00').getTime(), 40000],
                    [new Date('2022-11-08T08:31:00').getTime(), 5000],
                    [new Date('2022-11-08T08:35:00').getTime(), 14000],
                ],
            },
            {
                name: 'Outflow',
                data: [
                    [new Date('2022-11-04T21:24:00').getTime(), 50000],
                    [new Date('2022-11-04T21:26:00').getTime(), 10],
                    [new Date('2022-11-04T21:27:00').getTime(), 50000],
                    [new Date('2022-11-05T08:06:00').getTime(), 10],
                    [new Date('2022-11-05T08:07:00').getTime(), 32000],
                    [new Date('2022-11-05T08:13:00').getTime(), 10],
                    [new Date('2022-11-05T08:28:00').getTime(), 600],
                    [new Date('2022-11-05T11:22:00').getTime(), 10],
                    [new Date('2022-11-05T11:23:00').getTime(), 200],
                    [new Date('2022-11-06T06:56:00').getTime(), 200],
                    [new Date('2022-11-06T08:26:00').getTime(), 50],
                    [new Date('2022-11-06T09:43:00').getTime(), 10],
                    [new Date('2022-11-06T09:44:00').getTime(), 100],
                    [new Date('2022-11-06T10:51:00').getTime(), 100],
                    [new Date('2022-11-06T10:52:00').getTime(), 10],
                    [new Date('2022-11-06T10:52:00').getTime(), 50],
                    [new Date('2022-11-06T12:21:00').getTime(), 50000],
                    [new Date('2022-11-06T12:22:00').getTime(), 50000],
                    [new Date('2022-11-06T13:39:00').getTime(), 50000],
                    [new Date('2022-11-06T13:40:00').getTime(), 10],
                    [new Date('2022-11-06T14:51:00').getTime(), 50000],
                    [new Date('2022-11-06T17:10:00').getTime(), 15000],
                    [new Date('2022-11-07T08:09:00').getTime(), 10],
                    [new Date('2022-11-07T08:10:00').getTime(), 20000],
                    [new Date('2022-11-07T11:26:00').getTime(), 10],
                    [new Date('2022-11-07T11:29:00').getTime(), 50000],
                    [new Date('2022-11-07T13:01:00').getTime(), 10],
                    [new Date('2022-11-07T14:36:00').getTime(), 5000],
                    [new Date('2022-11-07T17:22:00').getTime(), 50000],
                    [new Date('2022-11-07T17:34:00').getTime(), 10],
                    [new Date('2022-11-07T17:40:00').getTime(), 2700],
                    [new Date('2022-11-08T05:57:00').getTime(), 5000],
                    [new Date('2022-11-08T08:30:00').getTime(), 11200],
                    [new Date('2022-11-08T08:31:00').getTime(), 16000],
                    [new Date('2022-11-08T08:35:00').getTime(), 50000],
                ],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
            },
            plotOptions: {
                bar: {
                    borderRadius: 2,
                    horizontal: false,
                    columnWidth:'80%',
                    endingShape: 'rounded',
                    // barWidth: '480%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                type: 'datetime',
                title: {
                    text: 'Transactions Date & Time',
                },
                labels: {
                    datetimeUTC: false,
                    formatter: function (value, timestamp) {
                        const date = new Date(timestamp);
                        const monthName = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
                        const day = date.getDate();
                        const hour = date.getHours();
                        const amPm = hour < 12 ? 'AM' : 'PM';
                        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
                        return `${monthName} ${day}, ${formattedHour} ${amPm}`;
                    },
                },
                min: new Date('2022-11-04T00:00:00').getTime(), // Start date: Nov 4, 12 AM
                max: new Date('2022-11-08T12:00:00').getTime(), // End date: Nov 8, 12 PM
                tickAmount: 7,
            },
            yaxis: {
                title: {
                    text: 'Transaction Amount',
                },
                min: 0, // Set a custom minimum value for the y-axis
                max: 60000, // Set a custom maximum value for the y-axis
                tickAmount: 3,
                labels: {
                    formatter: function (val) {
                        return val / 1000 + ' K'; // Format values in millions (M)
                    },
                },
            },
            fill: {
                opacity: 1,
            },
            colors: ['#748BC166', '#004BFF4D'],
            tooltip: {

                x: {
                    // show: false,
                    format: 'MMM dd, HH:mm', // Customize the tooltip format
                },
                y: {
                    formatter: function (val) {
                        return val + 'K, PHP';
                    },
                },
            },
        },
    };

    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
        </div>
    );
};

export default TransactionHistoryGraph;
