---
title: "[GitHub Blog] Jekyll Permalink Custom with Placeholders"
tagline: "Custom post permalink by _config.yml"
classes: # wide
categories:
  - GitHub Blog
tags:
  - Blog
  - GitHub
  - Jekyll
header:
  teaser: /assets/img/img-posts/blank-1600x900.jpg
  overlay_image: /assets/img/img-posts/blank-1600x900.jpg
  overlay_filter: 0.3
toc: true
toc_label: "Contents"
toc_sticky: true
date: 2021-08-23T16:47
last_modified_at: 2021-08-23T18:09
---


[![Thumbnail](/assets/img/img-posts/blank-1600x900.jpg)](https://habijung.github.io/){: target="_blank"}


※ 해당 글의 방법을 적용하기 위해서는 `jekyll --version >= 4.1`만 가능합니다. 현재 github.io의 `jekyll --version == 3.9`이기 때문에 해당 방법을 적용할 수 없습니다. `git commit`을 하고 나서 알았기 때문에 업데이트를 기다릴 수 밖에 없을 것 같습니다..
{: .notice--danger}


## Jekyll Permalink Custom

결론부터 말하자면, **space 공백**이 포함된 category의 URL 표현은 의미 파악도 힘들고 깔끔하지 않으며 가독성도 별로기 때문에 이를 수정하고 싶었다.

Space 공백이 포함된 category는 URL encoding을 거치게 되면 `%20`으로 대체되는 것이 보통이다. 이는 **URL이 space 공백을 포함할 수 없기** 때문이다. 이것을 %가 포함된다고 하여 **percent encoding**이라고 부른다.

이를 해결하기 위해서 몇 시간이 넘도록 찾아보고 테스트하고 했었는데, 들인 시간이 너무 아까울 정도로 해결 방법은 너무나도 쉬웠다.


## Jekyll Category Process

블로그 글에서 category를 수집할 때 `string`으로 수집하여 `page.categories`에 저장이 된다. 이 categories가 모여서 `site.categories`를 형성하고 for loop를 통해 각각의 `category` 정보를 가져와 사용하게 된다.

`_layouts/categories.hhtml` 파일을 확인해보면 `category[0]`은 각 category의 이름 정보, `category[1]`은 해당 category에 속한 글의 수라는 것을 알 수 있다.

결국, 나는 `category[0]`에 해당하는 부분이 URL로 표현될 때, percent encoding이 되지 않고 공백을 제거하고 다른 기호 hyphen으로 대체하고 싶었다.


## Custom Goal & Result

이 글을 예시로 들겠다. 이 글의 `category`는 `GitHub Blog`이며, post setting은 다음과 같다.

```
...
title: "title"
categories:
  - GitHub Blog
...
```

그럼 Jekyll 설정에 의해서 이 글의 URL은 다음과 같이 정의된다.

```
http://127.0.0.1:4000/github%20blog/title/
```

나는 여기에서 space 공백을 없애고 hyphen 기호를 넣고 싶었다. 그럼 결과는 다음과 같다.

```
http://127.0.0.1:4000/github-blog/title/
```


## How to custom the permalink?

블로그의 전반적인 global permalink 수정은 `_config.yml`에서 할 수 있다. `_config.yml` 파일 아래쪽을 확인하면 다음과 같은 부분이 있다.

```
...
# Outputting
permalink: /:categories/:title/
...
```

이것을

```
...
# Outputting
permalink: /:slugified_categories/:title/
...
```

이렇게 바꿔주기만 하면 끝이다. 이러면 sidebar에 사용되는 category 설정에도 영향이 없다. 너무나도 쉽고 간단하게 공백 문제를 해결할 수 있다.


## Why did it take so long?

처음에는 Jekyll Docs에서 확인을 했었지만 문제는 한국어 페이지는 아직 `Version 4.1`에 대해서 업데이트를 하지 않았다는 것이다. 이 하나 때문에 `_config.yml`에서 수정하는건 힘들고 다른 방법을 찾아야 한다고 생각했던 것이 제일 큰 문제였다.

그래서 `_includes`나 `_layouts`에 답이 있을거라 생각하고 있지도 않은 `site.categories`나 URL tag를 열심히 찾아다닌 것이다.

초반에 참고했던 글은 다음과 같다.

- [category with 2 words url problems](https://github.com/jekyll/jekyll-help/issues/129){: target="_blank"}
- [permalink generation removing special characters and spaces](https://github.com/jekyll/jekyll/issues/782){: target="_blank"}

내가 제대로 적용하는 방법을 모르는건지, `_plugins`가 제대로 적용이 안되는건지 쉬운 방법은 아니라는걸 알았다. 결국은 Jekyll Docs 원본 문서로 모든걸 해결했다..


## Different Placeholders

[Jekyll Docs Permalinks](https://jekyllrb.com/docs/permalinks/){: target="_blank"}

다른 placeholders에 관해서는 Jekyll Docs에서 확인할 수 있다.
