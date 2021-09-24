---
title: "[HackerRank] Day 0: Hello, World."
tagline: "30 Days of Code"
classes: wide
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
date: 2021-09-10T00:23
last_modified_at: 2021-09-10T00:47
---


<div align="center">
  <a href="https://hackerrank.com" target="_blank">
    <img src="/assets/img/img-posts/img-hackerrank/hackerrank-logo.jpg">
  </a>
</div>


## [HackerRank] Day 0: Hello, World.

**Problem** [&#x1F517;](https://www.hackerrank.com/challenges/30-hello-world/problem){: target="_blank"}

**Sample Input**

```
Welcome to 30 Days of Code!
```

**Sample Output**

```
Hello, World.
Welcome to 30 Days of Code!
```

**Explanation**

On the first line, we print the string literal `Hello, World.`. On the second line, we print the contents of the **_inputString_** variable which, for this sample case, happens to be Welcome to `30 Days of Code!`. If you do not print the variable's contents to stdout, you will not pass the hidden test case.


## Solution

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    ...
    cout << "Hello, World." << endl;
    cout << input_string << endl;

    return 0;
}
```
