---
title: "[GitHub Blog] 깃허브 블로그 도메인 설정 (호스팅케이알) (2021)"
tagline: "GitHub Pages domain setting (hosting.kr)"
classes: wide
categories:
  - GitHub Blog
tags:
  - Blog
  - Domain
  - GitHub
header:
  teaser: /assets/img/img-config/blank-1600x900.jpg
  overlay_image: /assets/img/img-config/blank-1600x900.jpg
  overlay_filter: 0.3
toc: true
toc_label: "Contents"
toc_sticky: true
date: 2021-09-18T09:09
last_modified_at: 2021-09-19T10:41
---


[![Thumbnail](/assets/img/img-config/blank-1600x900.jpg)](https://habijung.github.io/){: target="_blank"}


※ 호스팅케이알(hosting.kr) 사이트를 기준으로 설명하고 있습니다.
{: .notice--info}


## GitHub Pages Domain Setting

깃허브 블로그 개설부터 블로그 기본 설정까지는 자료가 워낙 많아서 도메인 설정만 간단하게 보겠습니다.

호스팅케이알([hosting.kr](https://www.hosting.kr/){: target="_blank"}) 사이트가 리뉴얼이 좀 된 것 같습니다. 찾아보면 리뉴얼 전 메뉴를 다루는 경우가 많아서 2021년 기준 현재 메뉴로 간단하게나마 설정 방법을 적어두고 싶었습니다. 


## 도메인 구매

![img1](/assets/img/img-posts/img-github-blog/img-blog-custom-domain/img1.jpg)

홈에 가면 위와 같은 화면을 확인할 수 있는데, 검색할 도메인에 원하는 URL을 넣고 검색을 해주시면 됩니다.

이 블로그를 예시로 들자면, GitHub 블로그 원래 주소는 `habijung.github.io`이고, `.github.io`가 깃허브에서 제공하는 도메인이기 때문에 `habijung`만 검색해준 것입니다.

![img2](/assets/img/img-posts/img-github-blog/img-blog-custom-domain/img2.jpg)

여기서 원하는 도메인을 체크하고 **바로 등록**을 통해서 구매를 진행하시면 됩니다.

구매를 진행하실 때, 아래 부분에 **네임서버 정보 (DNS)** 부분이 있는데 기본으로 두시면 됩니다. 도메인을 구매하지만 결국 대여해서 사용해서, 서비스 제공자가 정보를 제공한다고 생각하시면 될 것 같습니다.


## 도메인 설정

GitHub 블로그에서 제공하는 기본 네임서버는 아래와 같고, 네임서버 확인을 위해서는 `nslookup`으로 확인할 수 있습니다.

```
$ nslookup habijung.github.io

Non-authoritative answer:
Name:   habijung.github.io
Address: 185.199.109.153
Name:   habijung.github.io
Address: 185.199.108.153
Name:   habijung.github.io
Address: 185.199.111.153
Name:   habijung.github.io
Address: 185.199.110.153
```

여기서 4개의 주소를 호스팅케이알 설정에 추가해주면 됩니다.

`사용자 → 도메인 관리 → 도메인 → DNS 설정 → DNS 레코드 관리`로 가셔서 `+`로 추가를 해주면 다음과 같은 창을 확인할 수 있습니다.


![img3](/assets/img/img-posts/img-github-blog/img-blog-custom-domain/img3.jpg)

![img4](/assets/img/img-posts/img-github-blog/img-blog-custom-domain/img4.jpg)

먼저 `> DNS 레코드 설정 추가`란게 위에서 찾은 4개의 IP주소를 차례대로 넣어줍니다.

예를 들어, `Address: 185.199.109.153`같은 경우에는

| 서브도메인 | 도메인명          | 레코드 타입   | IP주소 / 레코드 값 | 우선순위 |
| :-------: | :-----:          | :--------:   | :---------------: | :-----: |
|           | **habijung.xyz** | 서브도메인(A) | 185.199.109.153   |         |

로 입력해서 추가를 해주시면 됩니다.

우선순위는 크게 중요하지는 않아서 그냥 입력 순서대로 우선순위 두시면 될 것 같습니다. 만약에 비워두면 우선순위가 10으로 고정되는 것 같습니다.

IP주소 4개를 모두 입력했다면 이제 **CNAME**(구매한 도메인)을 입력할 차례입니다. 여기에서 중요한 것은 IP주소 / 레코드 값에 깃허브 블로그의 원래 주소를 입력해줘야 합니다.

| 서브도메인 | 도메인명          | 레코드 타입   | IP주소 / 레코드 값      | 우선순위 |
| :-------: | :-----:          | :--------:   | :---------------:      | :-----: |
| www       | **habijung.xyz** | 별칭(CNAME)  | **habijung.github.io** |         |

이렇게 DNS 설정은 기본적으로 다 끝났고, 마지막으로 GitHub Pages에서 **Custom domain**을 연결해주는 일만 남았습니다.

`GitHub Repository → Settings → Pages`로 이동하셔서 `Custom domain`에 원하는 도메인을 넣어주고 `Save` 하면 끝입니다. 추가로 **Enforce HTTPS**를 체크해주면 `https://` 주소를 사용할 수 있습니다.

![img5](/assets/img/img-posts/img-github-blog/img-blog-custom-domain/img5.jpg)

이렇게 해서 도메인 기본 세팅이 끝이 났습니다.

다만, 호스팅케이알에서 DNS 세팅을 완료하는 데 시간이 걸릴 수 있어서 블로그 저장소 Pages 설정에서 바로 적용이 되지 않을 수도 있습니다. 이때는 구매한 도메인을 계속 들어가보면서 호스팅케이알 DNS 세팅이 다 끝날 때까지 기다리시고 Pages 세팅을 완료하면 될 것 같습니다. 아무리 길어도 30분 내로 완료가 되었던 것 같습니다.

그리고 Pages에서 **&#x2714; Your site is publishged at https://{도메인}/**를 확인 할 수 있다면 도메인 세팅은 모두 끝났습니다.

**이제 도메인으로 접속하기만 끝!**
