/* data */
const days = ['09/01(Wed)', '09/02(Thu)', '09/03(Fri)', '09/06(Mon)', '09/07(Tue)', '09/08(Wed)', '09/09(Thu)', '09/10(Fri)', '09/13(Mon)', '09/14(Tue)', '09/15(Wed)', '09/16(Thu)', '09/17(Fri)', '09/20(Mon)', '09/21(Tue)', '09/22(Wed)', '09/23(Thu)', '09/24(Fri)', '09/27(Mon)', '09/28(Tue)', '09/29(Wed)'];
const retValue = [0.19, -0.07, 0.36, 0.0, 1.04, -0.09, -0.32, -1.23, 0.09, 0.02, 0.97, 0.09, -0.68, -2.78, 0.51, 1.27, 0.88, 0.69, -0.05, -2.63, -0.1];


/* chart : dailyReturn */
/* setup */
const data = {
    labels: days,
    datasets: [{
        data: retValue,
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
const config = {
    type: 'line',
    data: data,
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
                text: ':: Daily Return Sep 2021 ::',
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
                        var value = retValue[context.dataIndex];

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
var myChart = new Chart(
    document.getElementById('dailyReturn'),
    config
);
