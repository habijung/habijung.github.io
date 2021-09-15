---
title: "[프로그래머스] 행렬의 덧셈 (Scala)"
tagline: "[programmers] Matrix Sum (Scala)"
categories:
  - programmers
tags:
  - Algorithm
  - programmers
header:
  teaser: /assets/img/img-posts/img-programmers/programmers-logo.png
  overlay_image: /assets/img/img-posts/img-programmers/programmers.png
  overlay_filter: 0.3
toc: true
toc_label: "Contents"
toc_sticky: true
date: 2021-09-14T23:13
last_modified_at: 2021-09-14T23:13
---


<div align="center">
  <a href="https://programmers.co.kr" target="_blank">
    <img src="/assets/img/img-posts/img-programmers/programmers-logo.png">
  </a>
</div>


※ 코딩테스트 연습 문제의 지문, 테스트케이스, 풀이 등과 같은 정보는 비상업적, 비영리적 용도로 게시할 수 있습니다. [&#x1F517;](https://programmers.zendesk.com/hc/ko/articles/360034546572-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%EC%9D%98-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4%EB%A5%BC-%EA%B0%9C%EC%9D%B8-%EB%B8%94%EB%A1%9C%EA%B7%B8-GitHub-%EA%B8%B0%ED%83%80-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90-%EC%98%AC%EB%A0%A4%EB%8F%84-%EB%90%98%EB%82%98%EC%9A%94-){: target="_blank"}
{: .notice--info}


## [프로그래머스] 행렬의 덧셈 (Scala)

**문제 설명** [&#x1F517;](https://programmers.co.kr/learn/courses/30/lessons/12950){: target="_blank"}

행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

> **제한 조건**
> 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

**입출력 예**

| arr1          | arr2          | return        |
| :---          | :---          | :-----        |
| [[1,2],[2,3]] | [[3,4],[5,6]] | [[4,6],[7,9]] |
| [[1],[2]]     | [[3],[4]]     | [[4],[6]]     |
