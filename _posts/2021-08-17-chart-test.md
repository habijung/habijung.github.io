---
title: "Chart Test"
tagline: "Use Chart.js plug-in & Horizontal Bar Chart"
categories:
  - Jekyll Usage
tags:
  - Blog
  - Jekyll
  - Chart.js
header:
  teaset: /assets/images/img-posts/blank-1600x900.jpg
  overlay_image: /assets/images/img-posts/blank-1600x900.jpg
  overlay_filter: 0.3
  caption: "[&#x1F517;](https://habijung.github.io)"
date: 2021-08-17T15:54
last_modified_at: 2021-08-17T15:56
---


![Thumbnail](/assets/images/img-posts/blank-1600x900.jpg)

## Chart Test


<div style="width:100%;">
<canvas id="canvas" height="300"></canvas>
</div>

<script>

new Chart(document.getElementById("canvas"), {
    type: 'horizontalBar',
    data: {
        labels: ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타', '파', '하'],
        datasets: [{
            label: '테스트 데이터셋',
            data: [10, 3, 30, 23, 10, 5, 15, 25, 2, 4, 1, 13, 52, 23],
            borderColor: "rgba(255, 201, 14, 1)",
            backgroundColor: "rgba(255, 201, 14, 0.5)",
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: '막대 차트 테스트'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'x축'
                },
            }],
            yAxes: [{
                display: true,
                ticks: {
                    autoSkip: false,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'y축'
                }
            }]
        }
    }
});

</script>
