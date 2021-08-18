---
title: "Dividend Portfolio :: July 2021 ::"
tagline: ""
header:
  teaser: /assets/img/img-posts/blank-1600x900.jpg
  overlay_image: /assets/img/img-posts/blank-1600x900.jpg
  overlay_filter: 0.3
date: 2021-08-18T19:57
last_modified_at: 2021-08-18T22:52
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
    axis: 'y',
    label: ':: July 2021 ::',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
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
    scales: {
      xAxes: {
        position: 'top',
        ticks: {
          min: 0,
          max: 100,
          stepSize: 20,
          callback: function(value){
            return (value/this.max*100).toFixed(0)+'%';
          }
        }
      }
    },
    plugins: {
        title: {
          display: true,
          text: ':: July 2021 ::',
          font: {
            size: 24
          }
        },
        legend: {
          display: false,
        },
        tooltip: {
          mode: 'index',
          enabled: true,
          callbacks: {
            label: function(context) {
              // var label = context.dataset.label || '';
              var label = '';

              if (label) {
                label += ': ';
              }
              if (context.parsed.y !== null) {
                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
              }
              return label;
            },
            afterLabel: function(context) {
              return (context.parsed.y/100*100).toFixed(2)+'%';
            }
          }
        }
    }
  }
};
/* create chart */
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
</script>
