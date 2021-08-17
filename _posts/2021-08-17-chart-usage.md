---
title: "Apply Chart.js for Jekyll Blog"
tagline: "Chart.js의 설치와 Jekyll 블로그에 적용하기"
categories:
  - Jekyll Blog
tags:
  - Blog
  - Chart.js
  - Jekyll
header:
  teaser: /assets/img/img-posts/chart.js.jpg
  overlay_image: /assets/img/img-posts/chart.js.jpg
  overlay_filter: 0.3
date: 2021-08-17T17:46
last_modified_at: 2021-08-17T19:36
---


[![Thumbnail](/assets/img/img-posts/chart.js.jpg)](https://www.chartjs.org/){:target="_blank"}

## Chart.js?

[**Chart.js**](https://chartjs.org){:target="_blank"}는 `<canvas>` 태그를 사용하는 간단한 HTML5 차트이다. 기본적인 차트 모형인 Line, Bar, Radar, Bubble 뿐만 아니라 Stacked bar/line, Polar area, Floating Bars 등과 같은 응용 차트까지도 생성 가능하다. 해당 사이트에 들어가면 더 자세한 예시들과 사용법을 확인할 수 있다.


## Chart.js 적용

**Chart.js**는 JavaScript로 작동하며, 사이트에서 제시하는 방법은 `npm`, `CDN`, `jsDelivr`, `GitHub Download` 등의 방법이 있으며 여기에서는 `.tar.gz` 파일을 직접 설치하는 방법을 선택했다. 해당 글에서는 Jekyll 블로그에 적용하는 방법을 중심으로 설명한다.

### 1. File Download & Copy

[chart.js-3.5.0.tgz](https://github.com/chartjs/Chart.js/releases/download/v3.5.0/chart.js-3.5.0.tgz){:target="_blank"}를 클릭하면 해당 버전의 `.tgz` 파일을 바로 받을 수 있다. 파일을 열어 `chart.js-3.5.0/package/dist`로 들어가면 `chart.min.js` 파일이 있다. 이 파일을 Jekyll 프로젝트에서 `assets/js/`로 옮긴다. 자기만의 경로 설정이 가능하지만 `plugins`에 추가를 하게 된다면 `uglify`의 업데이트 및 `npm run`을 따로 해줘야하기 때문에 추천하지 않는다.

### 2. Customizing & Import

스크립트 파일을 직접 옮겼다면, `_config.yml`에 다음을 추가해야한다.

```
head_scripts:

  # 파일을 직접 넣었을 때
  - /asstet/js/chart.min.js

  # CDN을 적용할 때
  - https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.0/chart.min.js
```


## Chart Usage & Example

차트 생성은 위에서 얘기한 것처럼 `<canvas>` 태그를 사용한다. 아래의 코드는 사이트의 [Example](https://www.chartjs.org/docs/latest/getting-started/usage.html){:target="_blank"}를 가져왔다.

```html
<div>
  <canvas id="myChart"></canvas>
</div>
<script>
/* include 'setup' then 'config' above */
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
    label: 'My First Dataset',
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
/* config:0 */
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
/* Create Chart */
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
</script>
```


## Result

<div>
  <canvas id="myChart"></canvas>
</div>
<script>
/* include 'setup' then 'config' above */
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
    label: 'My First Dataset',
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
/* config:0 */
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
/* Create Chart */
var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
</script>


## References

- [Chart.js](https://www.chartjs.org/){:target="_blank"}
- [Jekyll 블로그 - 가로 bar chart 그리기](https://inasie.github.io/it%EC%9D%BC%EB%B0%98/jekyll-%EA%B0%80%EB%A1%9C-bar-chart/){:target="_blank"}
- [The Beginner's Guide to Chart.js](https://www.stanleyulili.com/javascript/beginner-guide-to-chartjs/){:target="_blank"}
- [Minimal Mistakes Javascript](https://mmistakes.github.io/minimal-mistakes/docs/javascript/){:target="_blank"}
