/* data */
const daysUS = ['10/01(Fri)', '10/04(Mon)', '10/05(Tue)', '10/06(Wed)', '10/07(Thu)', '10/08(Fri)'];
const retValueUS = [0.48, -1.44, 0.92, 0.76, 1.28, -0.52];

const daysKR = ['10/01(Fri)', '10/05(Tue)', '10/06(Wed)', '10/07(Thu)', '10/08(Fri)'];
const retValueKR = [-1.36, -3.53, 0.35, 4.01, -0.73];



/*******************************
 *     chart : returnOctUS     *
 *******************************/
/* setup */
const dataUS = {
    labels: daysUS,
    datasets: [{
        data: retValueUS,
        fill: {
            target: 'origin',
            above: 'rgba(255, 99, 132, 0.7)',
            below: 'rgba(54, 162, 235, 0.7)'
        },
        borderColor: 'rgb(75, 192, 192)',
        hoverBackgroundColor: "rgba(0, 0, 0, 0.5)",
        tension: 0.3
    }]
};


/* config */
const configUS = {
    type: 'line',
    data: dataUS,
    options: {
        scales: {
            yAxes: {
                suggestedMax: 3,
                suggestedMin: -3,
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }
        },

        plugins: {
            title: {
                display: true,
                text: ':: [US] Daily Return Oct. 2021 ::',
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
                        var value = retValueUS[context.dataIndex];

                        if (value > 0)
                            return '▲ ' + value.toFixed(2) + ' %';

                        else if (value < 0)
                            return '▼ ' + Math.abs(value).toFixed(2) + ' %';

                        else
                            return '0.00 %';
                    }
                }
            }
        }
    }
};


/*******************************
 *     chart : returnOctKR     *
 *******************************/
/* setup */
const dataKR = {
    labels: daysKR,
    datasets: [{
        data: retValueKR,
        fill: {
            target: 'origin',
            above: 'rgba(255, 99, 132, 0.7)',
            below: 'rgba(54, 162, 235, 0.7)'
        },
        borderColor: 'rgb(75, 192, 192)',
        hoverBackgroundColor: "rgba(0, 0, 0, 0.5)",
        tension: 0.3
    }]
};


/* config */
const configKR = {
    type: 'line',
    data: dataKR,
    options: {
        scales: {
            yAxes: {
                suggestedMax: 4,
                suggestedMin: -4,
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }
        },

        plugins: {
            title: {
                display: true,
                text: ':: [KR] Daily Return Oct. 2021 ::',
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
                        var value = retValueKR[context.dataIndex];

                        if (value > 0)
                            return '▲ ' + value.toFixed(2) + ' %';

                        else if (value < 0)
                            return '▼ ' + Math.abs(value).toFixed(2) + ' %';

                        else
                            return '0.00 %';
                    }
                }
            }
        }
    }
};


/* create chart */
var myChartUS = new Chart(
    document.getElementById('returnOctUS'),
    configUS
);

var myChartKR = new Chart(
    document.getElementById('returnOctKR'),
    configKR
);
