---
title: "[HackerRank] Day 2: Operators"
tagline: "30 Days of Code"
categories:
  - HackerRank
tags:
  - Algorithm
  - HackerRank
header:
  teaser: /assets/img/img-posts/img-hackerrank/hackerrank-logo.jpg
  overlay_image: /assets/img/img-posts/img-hackerrank/hackerrank.png
  overlay_filter: 0.3
toc: true
toc_label: "Contents"
toc_sticky: true
date: 2021-09-10T00:10
last_modified_at: 2021-09-10T01:10
---


<div align="center">
  <a href="https://hackerrank.com" target="_blank">
    <img src="/assets/img/img-posts/img-hackerrank/hackerrank-logo.jpg">
  </a>
</div>


## [HackerRank] Day 2: Operators

**Problem** [&#x1F517;](https://www.hackerrank.com/challenges/30-operators/problem){: target="_blank"}

**Sample Input**

```
12.00
20
8
```

**Sample Output**

```
15
```

**Explanation**

Given:

**_meal_cost_ = 12**, **_tip_percent_ = 20**, **_tax_percent_ = 8**

Calculations:

**_tip_ = 12 * (20 / 100) = 2.4**

**_tax_ = 12 * (8 / 100) = 0.96**

**_total_cost_ = _meal_cost_ + _tip_ + _tax_ = 12 + 2.4 + 0.96 = 15.36**

**_round(total_cost)_ = 15**

We round **_total_cost_** to the nearest integer and print the result, **15**.


## Solution

```cpp
void solve(double meal_cost, int tip_percent, int tax_percent) {
    double tip = meal_cost * tip_percent / 100;
    double tax = meal_cost * tax_percent / 100;
    double total_cost = meal_cost + tip + tax;
    
    cout << (int)round(total_cost) << endl;
}
```

`round(total_cost)`로 round 조건을 해결하면서 `(int)`를 사용해서 double을 int로 변환한다.
