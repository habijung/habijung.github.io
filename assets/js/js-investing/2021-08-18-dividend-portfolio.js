/* data */
const holdingsType = ['Dividends', 'Others'];
const holdingsValue = [18657.25, 42876.94];
const holdingsPercent = [30.34, 69.66];
const tickers = ['VOO','NVDA','MSFT','AAPL','TSM','KO','O','MCD','WMT','FTS','AWK','PG','TGT','COST','SRVR','GILD','SBUX','QQQ','JNJ','INTC','CSCO','NKE','PFE'];
const tickersValue = [3708.00,2180.23,2123.47,2009.15,1261.04,844.47,797.65,662.17,583.12,456.80,429.34,413.39,393.76,369.44,366.96,346.79,337.22,304.11,300.33,285.43,223.25,136.96,124.17];

/* chart : holdingsRatio */
/* setup */
const data1 = {
    labels: holdingsType,
    datasets: [{
        axis: 'y',
        fill: false,
        data: holdingsPercent,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // red
            'rgba(54, 162, 235, 0.2)', // blue
        ],
        borderColor: [
            'rgb(255, 99, 132)', // red
            'rgb(54, 162, 235)', // blue
        ],
        borderWidth: 1
    }]
};

/* config */
const config1 = {
    type: 'bar',
    data: data1,
    options: {
        indexAxis: 'y',
        scales: {           
            xAxes: {
                title: {
                    display: true,
                    text: 'Percent (%)',
                    align: 'end',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                position: 'top',
                suggestedMax: 100,
                ticks: {
                    beginAtZero: true,
                    stepSize: 20
                }
            }
        },
        plugins: {
            title: {
                display: true,
                text: ':: Holdings Ratio ::',
                font: {
                    size: 24,
                    weight: 'bold'
                }
            },
            legend: {
                display: false
            },
            tooltip: {
                enabled: true,
                displayColors: false,
                titleAlign: 'center',
                bodyAlign: 'right',
                callbacks: {
                    label: function(context) {
                        var value = holdingsValue[context.dataIndex];
                        var result = '$ ' + numberWithCommas(value.toFixed(2));
                        return result;
                    },
                    afterLabel: function(context) {
                        var value = context.dataset.data[context.dataIndex];
                        var percent = value.toFixed(2) + ' %';
                        return percent;
                    }
                }
            }
        }
    }
};

/* create chart */
var myChart1 = new Chart(
    document.getElementById('holdingsRatio'),
    config1
);


/* chart : dividendsJuly2021 */
/* setup */
const data2 = {
    labels: tickers,
    datasets: [{
        axis: 'y',
        fill: false,
        data: tickersValue,
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // red
            'rgba(255, 159, 64, 0.2)', // orange
            'rgba(255, 205, 86, 0.2)', // yellow
            'rgba(75, 192, 192, 0.2)', // green
            'rgba(54, 162, 235, 0.2)', // blue
            'rgba(153, 102, 255, 0.2)', // violet
            'rgba(201, 203, 207, 0.2)' // gray
        ],
        borderColor: [
            'rgb(255, 99, 132)', // red
            'rgb(255, 159, 64)', // orange
            'rgb(255, 205, 86)', // yellow
            'rgb(75, 192, 192)', // green
            'rgb(54, 162, 235)', // blue
            'rgb(153, 102, 255)', // violet
            'rgb(201, 203, 207)' // gray
        ],
        borderWidth: 1
    }]
};

/* config */
const config2 = {
    type: 'bar',
    data: data2,
    options: {
        indexAxis: 'y',
        /* options > scales */
        scales: {
            xAxes: {
                title: {
                    display: true,
                    text: 'USD ($)',
                    align: 'end',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                },
                position: 'top',
                ticks: {
                    beginAtZero: true,
                    stepSize: 500
                }
            }
        },
        /* options > plugins */
        plugins: {
            /* options > plugins > title */
            title: {
                display: true,
                text: ':: Dividends July 2021 ::',
                font: {
                    size: 24,
                    weight: 'bold'
                }
            },
            /* options > plugins > legend */
            legend: {
                display: false,
            },
            /* options > plugins > tooltip */
            tooltip: {
                enabled: true,
                displayColors: false,
                titleAlign: 'center',
                bodyAlign: 'right',
                /* options > plugins > tooltip > callbacks */
                callbacks: {
                    label: function(context) {
                        var value = context.dataset.data[context.dataIndex];
                        var result = '$ ' + numberWithCommas(value.toFixed(2));
                        return result;
                    },
                    afterLabel: function(context) {
                        const reducer = (accumulator, curr) => accumulator + curr;
                        var value = context.dataset.data[context.dataIndex];
                        var sum = holdingsValue.reduce(reducer);
                        var percent = (value/sum*100).toFixed(2)+' %';
                        return percent;
                    }
                } /* callbacks close */
            } /* tooltip close */
        } /* plugins close */
    } /* options close */
};

/* create chart */
var myChart2 = new Chart(
    document.getElementById('dividendsJuly2021'),
    config2
);


/* A number with commas as thousands separators
   https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
