---
title: "[프로그래머스] 직사각형 별찍기"
tagline: "[programmers] Rectangle Star"
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
date: 2021-09-01T20:43
last_modified_at: 2021-09-01T20:43
---


<div align="center">
  <a href="https://programmers.co.kr" target="_blank">
    <img src="/assets/img/img-posts/img-programmers/programmers-logo.png">
  </a>
</div>


※ 코딩테스트 연습 문제의 지문, 테스트케이스, 풀이 등과 같은 정보는 비상업적, 비영리적 용도로 게시할 수 있습니다. [&#x1F517;](https://programmers.zendesk.com/hc/ko/articles/360034546572-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4%EC%9D%98-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C-%ED%92%80%EC%9D%B4%EB%A5%BC-%EA%B0%9C%EC%9D%B8-%EB%B8%94%EB%A1%9C%EA%B7%B8-GitHub-%EA%B8%B0%ED%83%80-%EC%82%AC%EC%9D%B4%ED%8A%B8%EC%97%90-%EC%98%AC%EB%A0%A4%EB%8F%84-%EB%90%98%EB%82%98%EC%9A%94-){: target="_blank"}
{: .notice--info}


## [프로그래머스] 직사각형 별찍기 [&#x1F517;](https://programmers.co.kr/learn/courses/30/lessons/12969){: target="_blank"}

**문제 설명**

이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.

별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

> **제한 조건**
> - n과 m은 각각 1000 이하인 자연수입니다.

**예시**

입력

```
`5 3`
```

출력

```
*****
*****
*****
```


## Solution

```cpp
#include <iostream>
using namespace std;

int main(void) {
    int a;
    int b;
    cin >> a >> b;
    
    for (int i = 0; i < b; i++) {
        for (int j = 0; j < a; j++)
            cout << "*";
        
        cout << endl;    
    }
    
    return 0;
}
```

`for loop`를 두 번 연속으로 돌리는게 마음에 들지 않아서 다른 분의 풀이를 살짝 찾아봤다.

```cpp
#include <string>
...

int main(void) {
    ...
    string s;

    s.append(a, '*');

    for (int i = 0; i < b; ++i)
        cout << s << endl;

    return 0;
}
```

`append()` 사용을 위해서 `#include <string>`을 해주고 `for loop` 사용을 줄였다. 아주 간단한 문제지만 훨씬 간결하다. 이런 사소한 차이가 큰 프로젝트에서 많은 차이를 만들겠지.

오랜만에 `C++`을 사용하다보니 까먹은 함수가 너무 많다. 지금부터라도 하나씩 익히면서 빠르게 익숙해져야겠다.
