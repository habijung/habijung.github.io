---
title: "[HackerRank] Day 1: Data Types"
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
date: 2021-09-10T00:52
last_modified_at: 2021-09-10T00:52
---


<div align="center">
  <a href="https://hackerrank.com" target="_blank">
    <img src="/assets/img/img-posts/img-hackerrank/hackerrank-logo.jpg">
  </a>
</div>


## [HackerRank] Day 1: Data Types

**Problem** [&#x1F517;](https://www.hackerrank.com/challenges/30-data-types/problem){: target="_blank"}

**Sample Input**

```
12
4.0
is the best place to learn and practice coding!
```

**Sample Output**

```
16
8.0
HackerRank is the best place to learn and practice coding!
```

**Explanation**

When we sum the integers **4** and **12**, we get the integer **16**.
When we sum the floating-point numbers **4.0** and **4.0**, we get **8.0**.
When we concatenate HackerRank with `is the best place to learn and practice coding!`, we get `HackerRank is the best place to learn and practice coding!`.


## Solution

```cpp
int main() {
    ...    
    int i2;
    double d2;
    string s2, tmp;

    // Get line and convert each data type
    getline(cin, tmp);
    i2 = stoi(tmp);
    
    getline(cin, tmp);
    d2 = stod(tmp);
    
    getline(cin, s2);
    
    // output 1
    cout << i + i2 << endl;

    // output 2
    cout << fixed;
    cout.precision(1);
    cout << d + d2 << endl;
    
    // output 3
    cout << s + s2 << endl;

    return 0;
}
```

`stoi(s)`과 `stod(s)`를 사용해서 `string`을 `int`와 `double`로 각각 변환하였다.

`cout << fixed;`와 `cout.precision(x);`를 사용해서 소수점을 고정하고 1자리로 표기하였다.
