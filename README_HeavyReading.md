<!-- 팀명 -->
# 진중한 문고 &#128218; Heavy Reading &#128218;

<img src="./project_docs/rok-logo.png" width="500" height="300" />


<!-- 팀 소개 -->
# &#128218; Team Rainy
## Team Members
- 오재엽 (ohbcj0831@gmail.com), [Github](https://github.com/Ohjaeyeop)
- 정하빈 (ororaskyx@gmail.com), [Github](https://github.com/habijung)

## About Rainy
Rainy (Reading Assistance IN militarY) 팀은 독서를 좋아하는 구성원들이 모여 국군 장병들을 위해 독서를 장려하는 서비스를 만들고자 하였습니다. 국군 장병들을 위해 주기적으로 들어오는 진중문고가 엄격한 기준을 거쳐 통과된 책들임을 알고 많은 장병들의 독서 능력을 향상시키기 위해 노력하고자 하였습니다. 그래서 장병을 위한 독서 보조 도우미 서비스 **진중한 문고** &#128218; **Heavy Reading** &#128218;을 개발하게 되었습니다. 


<!-- 프로젝트 설명 -->
# Project Abstract
**진중한 문고** &#128218; **Heavy Reading** &#128218; 서비스는 DB를 통해 국군으로 입고되는 진중문고를 관리하고 **평점**, **독후감**, **메모** 등을 공유할 수 있는 서비스 입니다. 국가에서 엄격한 기준을 거친 진중문고는 매 분기별로 각 부대의 장병 도서관에 입고되는데, 장병들은 독서를 하고 **진중한 문고** &#128218; **Heavy Reading** &#128218; 사이트에 등록된 진중문고를 확인할 수 있습니다. 도서에 대한 평점을 주고, 독후감 및 명언과 같은 메모를 도서별로 작성할 수 있습니다. 평점 시스템을 통해 도서에 대한 관심을 증진시키고, 독후감 공유를 통해 사고 및 시야를 더욱 넓힐 수 있는 최고의 서비스 입니다.


<!-- 프로젝트 시연 동영상 -->
# Prototype Video
[![Video](https://img.youtube.com/vi/UDZAzGPSY3U/0.jpg)](https://youtu.be/UDZAzGPSY3U)


<!-- 컴퓨터 구성 / 필수 조건 안내 -->
# Prerequisites
Name | Version (or Higher)
---- | -------
Python | 3.5.3
pip3 | 20.2.4
Django | 2.2.16
Html | 5
Chrome | 86 (64-bit)


<!-- 설치 안내 -->
# Installation Process
- **Create Codespace**로 **new codespace**를 생성하고 해당 PC에서 설치 및 실행
```bash
$ git clone https://github.com/osamhack2020/WEB_HeavyReading_Rainy.git
$ cd WEB_HeavyReading_Rainy/rainy_project
$ python3 --version
$ python3 -m pip install --upgrade pip
$ sudo apt-get install python3-setuptools
$ pip3 install -r requirements.txt
$ pip3 list
$ sudo pkill -f runserver
$ python3 manage.py runserver
```


<!-- 프로젝트 사용법 -->
# Getting Started
## Home
- 서비스 시작 페이지  
<img src="./project_docs/img/0_home.png" width="600" height="300" />  

## Sign-Up & Sign-In
- 회원가입 및 로그인  
<img src="./project_docs/img/1_signup.png" width="600" height="300" />  

## Book Detail
- 책 정보 및 독후감 & 메모 작성  
<img src="./project_docs/img/3_book_detail.png" width="600" height="300" />  
<img src="./project_docs/img/4_create_report.png" width="600" height="300" />  
<img src="./project_docs/img/6_create_memo.png" width="600" height="300" />  

## My Page
- 마이페이지에서 평점 / 독후감 / 메모 확인  
<img src="./project_docs/img/7_mypage.png" width="600" height="300" />  
<img src="./project_docs/img/8_view_myrating_list.png" width="600" height="300" />  
<img src="./project_docs/img/9_view_myreport_list.png" width="600" height="300" />  
<img src="./project_docs/img/10_view_mymemo_list.png" width="600" height="300" />  


<!-- 기술 스택 -->
# Technique Used
<img src="./project_docs/img/11_languages.png" />

## front-end
- Html
- CSS
- JavaScript
 
## back-end
 -  Django
 -  Python


<!-- 파일 구성 -->
# File Tree
```bash
WEB_HeavyReading_Rainy
    ├── project_docs                // project description files
    ├── rainy_project
    │   ├── accounts                // [Django App] accounts
    │   │   ├── migrations
    │   │   └── templates/accounts  // accounts page html templates
    │   ├── mainpage                // [Django App] mainpage
    │   │   ├── migrations
    │   │   └── templates           // mainpage page html templates
    │   ├── media                   // img data of db
    │   │   ├── CACHE
    │   │   └── images
    │   ├── mypage                  // [Django App] mypage
    │   │   ├── migrations
    │   │   └── templates           // mypage page html templates
    │   ├── notice                  // notice django app
    │   │   ├── migrations
    │   │   └── templates           // notice page html templates
    │   ├── rainy                   // [Django Project]
    │   │   ├── settings.py         // project setting file
    │   │   └── urls.py             // url patterns file
    │   ├── static                  // static loading files
    │   │   ├── accounts/css        // accounts stylesheet
    │   │   ├── admin               // admin manage files
    │   │   ├── css                 // common and mainpage stylesheet
    │   │   ├── img                 // static image files
    │   │   ├── js                  // script files
    │   │   ├── mypage/css          // mypage stylesheet
    │   │   ├── notice/css          // notice stylesheet
    │   │   └── survey/css          // survey form stylesheet
    │   ├── staticfiles
    │   ├── db.sqlite3              // database
    │   └── manage.py               // Django manage file
    ├── .gitignore
    ├── LICENSE.md
    └── README.md
```


<!-- 저작권 및 사용권 정보 -->
# License
[MIT License](./LICENSE.md)
