---
title: "[프로그래머스] Level 1 문제 모음"
tagline: "[programmers] Level 1 Problem Collection"
classes: # wide
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
date: 2021-09-08T00:07
last_modified_at: 2021-09-08T00:32
---


<div align="center">
  <a href="https://programmers.co.kr" target="_blank">
    <img src="/assets/img/img-posts/img-programmers/programmers-logo.png">
  </a>
</div>


※ 코딩테스트 연습 문제의 지문, 테스트케이스, 풀이 등과 같은 정보는 비상업적, 비영리적 용도로 게시할 수 있습니다. [&#x1F517;](https://programmers.zendesk.com/hc/ko/articles/360034546572-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%EC%9D%98-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4%EB%A5%BC-%EA%B0%9C%EC%9D%B8-%EB%B8%94%EB%A1%9C%EA%B7%B8-GitHub-%EA%B8%B0%ED%83%80-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90-%EC%98%AC%EB%A0%A4%EB%8F%84-%EB%90%98%EB%82%98%EC%9A%94-){: target="_blank"}
{: .notice--info}


## [프로그래머스] Level 1 문제 모음

따로 게시글을 쓰고 싶은 문제를 제외하고 풀이가 간단한 문제들만 모았습니다.

[**Only Solution Code (Level 1)** &#x1F517;](https://github.com/habijung/coding-test/tree/main/programmers/Level-1){: target="_blank"}


## x만큼 간격이 있는 n개의 숫자

**문제 설명** [&#x1F517;](https://programmers.co.kr/learn/courses/30/lessons/12954){: target="_blank"}

함수 solution은 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다. 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

> **제한 조건**
> - x는 -10000000 이상, 10000000 이하인 정수입니다.
> - n은 1000 이하인 자연수입니다.

**입출력 예**

| x  | n | answer       |
| -  | - | ------       |
| 2  | 5 | [2,4,6,8,10] |
| 4	 | 3 | [4,8,12]     |
| -4 | 2 | [-4, -8]     |


## Solution

```cpp
vector<long long> solution(int x, int n) {
    ... 
    for (int i = 0; i < n; i++)
        answer.push_back(x * (i + 1));
    ...
}
```

그런데 **x부터 시작해 x씩 증가**하는게 문제의 실질적인 의도이기 때문에 아래와 같이 수정하는게 더 좋을 것 같다.

```cpp
    for (int i = 0; i < n; i++)
        answer.push_back(x + (x * i));
```
