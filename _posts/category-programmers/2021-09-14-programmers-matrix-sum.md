---
title: "[프로그래머스] 행렬의 덧셈 (Scala)"
tagline: "[programmers] Matrix Sum (Scala)"
classes: wide
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
last_modified_at: 2021-09-16T00:50
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


# Solution

```scala
object Solution {
    def solution(arr1: Vector[Vector[Int]], arr2: Vector[Vector[Int]]): Vector[Vector[Int]] = {
        var vecSol: Vector[Vector[Int]] = scala.collection.immutable.Vector.empty
                
        for (i <- 0 until arr1.length) {
            var vecTemp: Vector[Int] = scala.collection.immutable.Vector.empty
            
            for (j <- 0 until arr1(i).length)
                vecTemp = vecTemp :+ (arr1(i)(j) + arr2(i)(j))
            
            vecSol = vecSol :+ vecTemp
        }
        
        return vecSol
    }
}
```

최근에 **Scala** 언어를 익힐 일이 있어서 기초부터 익힐 겸 아주 간단한 문제를 풀어보려고 했다. 문제는 Level 1 딱 그 수준인데, 이게 새로운 언어로 풀려다보니 하루종일 걸리게 된게 문제다.

기본 개념은 정답에 쓸 vector를 담을 vector, 그러니까 **2D vector**를 만들고 여기에 각 matrix의 합을 구한 vector를 넣어주기만 하면 끝이다. 너무나도 간단한 문제지만.. 하루종일 시간을 잡아먹은 부분이 바로 vector 값의 업데이트 부분이다.

처음에는

```scala
vector(x)(y) = arr1(0)(0) + arr2(0)(0)
```

이런 식으로 대입해주면 바로 바뀌는줄 알았더니, 계속 update를 의미하는 것 같다고 **updated()**를 사용하라는 안내가 나왔는데, 그래서

```scala
val x = Vector(1, 2, 1, 2)
val y = x.updated(0, 100)    # Vector(100, 2, 1, 2)
```

이걸 찾아서 적용하니 실제 문제 테스트에서는 계속 값이 바뀌지 않았다. 그리고 이 문제는 updated()를 해주면 기존 vector 정보가 날아가고, updated() 해줄 때마다 y를 새로 정의해야 해서 문제의 array의 길이를 모를 때는 사용하기 힘들다고 판단하였다.

이런 문제들을 잘 종합해서 간단하게라도 설명하자면,

```scala
        ...
        var vecSol: Vector[Vector[Int]] = scala.collection.immutable.Vector.empty
        ...
```

**return** 형식이 **`Vector[Vector[Int]]`**이고, vector 초기화를 위해서 **`scala.collection.immutable.Vector.empty`**를 사용했다. 이 초기화 방법은 정해진 타입에 따라 empty vector를 만들어 준다. 빈 vector를 따로 만들어주면 뒤에 다른 vector를 추가할 때 앞에 빈 vector는 그래도 정보가 남아있으니 empty를 사용해서 빈 공간만 만들어준 것이다.

```scala
        ...
        for (i <- 0 until arr1.length) {
            var vecTemp: Vector[Int] = scala.collection.immutable.Vector.empty
            
            for (j <- 0 until arr1(i).length)
                vecTemp = vecTemp :+ (arr1(i)(j) + arr2(i)(j))
            
            vecSol = vecSol :+ vecTemp
        }
        ...
```

그 다음은 첫번째로 **arr1**이 가지고 있는 vector 수만큼 반복하면서 arr1 내부 각각의 vector와 arr2 각각의 vector의 같은 요소끼리 더해주기만 하면 된다. `vecTemp`를 새로 만들어주는 이유는, matrix 합의 vector를 여기에 받고, 이걸 vecSol에 계속 붙여주기 위해서이다.

정말 이렇게 설명할 필요도 없는 문제인데, **Scala**라는 아예 구조가 다른 언어의 사용법 때문에 풀이 자체가 길어졌다. 이렇게라도 해놔야 계속 Scala 언어를 사용할 때 조금이라도 덜 헤매지 않을까 싶다.
