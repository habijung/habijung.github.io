---
title: "Splash Page"
layout: splash
permalink: /main/
# redirect_from: /
date: 2016-03-23T11:48:41-04:00
# date: 2021-07-26 23:09:29
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/gallery-main-1600x600.jpg
  actions:
    - label: "[ Blog ]"
      url: "https://github.com/habijung"
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "Bacon ipsum dolor sit amet salami ham hock ham, hamburger corned beef short ribs kielbasa biltong t-bone drumstick tri-tip tail sirloin pork chop."
intro: 
  - excerpt: 'Nullam suscipit et nam, tellus velit pellentesque at malesuada, enim eaque. Quis nulla, netus tempor in diam gravida tincidunt, *proin faucibus* voluptate felis id sollicitudin. Centered with `type="center"`'

feature_row:
  - image_path: assets/images/gallery-1-600x400.jpg
    alt: "placeholder image 1"
    title: "Placeholder 1"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
  - image_path: /assets/images/gallery-2-600x400.jpg
    image_caption: "Image courtesy of [Unsplash](https://unsplash.com/)"
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."
    url: "/about/"
    btn_label: "[ About ]"
    btn_class: "btn--primary"
  - image_path: /assets/images/gallery-3-600x400.jpg
    title: "Placeholder 3"
    excerpt: "This is some sample content that goes here with **Markdown** formatting."

feature_row2:
  - image_path: /assets/images/gallery-2-600x400.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Left Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "/year-archive/"
    btn_label: "[ Posts ]"
    btn_class: "btn--primary"

feature_row3:
  - image_path: /assets/images/gallery-2-600x400.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "/categories/"
    btn_label: "[ Categories ]"
    btn_class: "btn--primary"

feature_row4:
  - image_path: /assets/images/gallery-2-600x400.jpg
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "/tags/"
    btn_label: "[ Tags ]"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}