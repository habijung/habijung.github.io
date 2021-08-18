---
title: "Dividend Portfolio :: July 2021 ::"
tagline: ""
header:
  teaser: /assets/img/img-posts/blank-1600x900.jpg
  overlay_image: /assets/img/img-posts/blank-1600x900.jpg
  overlay_filter: 0.3
date: 2021-08-18T19:57
last_modified_at: 2021-08-19T00:39
---


![Thumnail](/assets/img/img-posts/blank-1600x900.jpg)

## Dividend Portfolio :: July 2021 ::

<div>
  <canvas id="myChart" height="300"></canvas>
</div>

<!-- chart script -->
<script>
/* setup:1 */
const labels = ['VOO','NVDA','MSFT','AAPL','TSM','KO','O','MCD','WMT','FTS','AWK','PG','TGT','COST','SRVR','GILD','SBUX','QQQ','JNJ','INTC','CSCO','NKE','PFE','AMZN','TSLA','GOOGL','U','ABNB','SNOW','PINS','DIS','PYPL','ADBE','AMD','SPOT','Z','F','BA','MRNA','RBLX','DAL'];
const data = {
  labels: labels,
  datasets: [{
    label: ':: July 2021 ::',
    axis: 'y',
    fill: false,
    data: [3708.00,2180.23,2123.47,2009.15,1261.04,844.47,797.65,662.17,583.12,456.80,429.34,413.39,393.76,369.44,366.96,346.79,337.22,304.11,300.33,285.43,223.25,136.96,124.17,15497.92,15410.65,4820.65,1722.82,1453.55,594.68,470.71,462.25,448.27,431.68,385.84,328.39,201.94,183.05,138.54,117.79,84.04,83.40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
/* block:config:0 */
const config = {
  type: 'bar',
  data: data,
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
          stepSize: 2000
        }
      }
    },
    /* options > plugins */
    plugins: {
      /* options > plugins > title */
      title: {
        display: true,
        text: ':: July 2021 ::',
        font: {
          size: 24
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
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value;
          },
          afterLabel: function(context) {
            const reducer = (accumulator, curr) => accumulator + curr;
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            var sum = context.dataset.data.reduce(reducer);
            var percent = (value/sum*100).toFixed(2)+'%';
            return percent;
          }
        } /* callbacks close */
      } /* tooltip close */
    } /* plugins close */
  } /* options close */
};
/* create chart */
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
</script>
