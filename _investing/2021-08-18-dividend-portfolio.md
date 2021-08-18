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
  <canvas id="myChart"></canvas>
</div>

<!-- chart script -->
<script>
/* setup:1 */
const labels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
];
const data = {
  labels: labels,
  datasets: [{
    label: ':: July 2021 ::',
    axis: 'y',
    fill: false,
    data: [65, 59, 80, 81, 56, 55, 40],
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
        position: 'top',
        ticks: {
          stepSize: 20
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
