---
title: "Post Format Manual"
tagline: "Description blog post format"
classes: # wide
categories:
  - Jekyll Blog
tags:
  - Blog
  - Jekyll
header:
  teaser: /assets/img/img-posts/blank-1600x900.jpg
  overlay_image: /assets/img/img-posts/blank-1600x900.jpg
  overlay_filter: 0.3
  caption: "[&#x1F517;](https://habijung.github.io)"
toc: true
toc_label: "Contents"
toc_sticky: true
date: 2021-08-08T23:05
last_modified_at: 2021-08-17T19:43
---


![Thumbnail](/assets/img/img-posts/blank-1600x900.jpg)

## Creat blog post with theme **Markdown(.md)** format

```
---
# Common parameters
title: "Title"
tagline: "Tagline"
classes: # wide
categories:
  - category 1
  - category 2
  - ...
tags:
  - tag 1
  - tag 2
  - ...

# Header parameters
header:
  teaser: %PATH%
  overlay_image: %PATH%
  overlay_filter: 0.3
  caption: "[&#x1F517;](#)"

# Table parameters
toc: true / false
toc_label: "Contents"
toc_sticky: true / false

# Date parameters
date: %Y-%m-%dT%H:%M
last_modified_at: %Y-%m-%dT%H:%M
---

Contents
```

## Common parameters

| Parameter | Description |
| :-------: | ----------- |
| title | Post title. |
| tagline | Overrides page excerpt. |
| classes | To expand the main content to the right. |
| categories | Post categories. |
| tags | Post tags. |


## Header parameters

| Parameter | Description |
| :-------: | ----------- |
| teaser | To assign a teaser image each post. |
| overlay_image | Header image you’d like to overlay. |
| overlay_filter | Color/opacity to overlay on top of the header image. |
| caption | Copyright link. |


## Table parameters

| Parameter | Description |
| :-------: | ----------- |
| toc | Show table of contents. |
| toc_label | Table of contents title. |
| toc_sticky | Stick table of contents to top of screen. |


## Date parameters

| Parameter | Description |
| :-------: | ----------- |
| date | Post creation time. In localhost, add `+09:00` which meaning is converting **UTC** to **KST (Korea Standard Time, UTC+09:00)**. |
| last_modified_at | Post updated time. Also, it can be applied converting **UTC**. |

If you want to show creation and updated time, modify `/_includes/page__meta.html` and `/_includes/page__date.html` as page setting files.

### Date formatting table

| Placeholder | Format | Example |
| :---------: | :----: | :-----: |
| %Y | Year with a century | 2021 |
| %m | Month of the year | 08 |
| %d | Day of the month, zero-padded | 09 |
| %H | Hour of the day, 24-hour clock | 22 |
| %M | Minute of the hour | 17 |

[&#x1F517; Date format reference](https://blog.yena.io/studynote/2017/11/06/Date-Formatting.html){:target="_blank"}
