---
title: "Welcome Blog"
permalink: /home/
layout: splash
# redirect_from: /
date: 2021-08-10T13:58
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/gallery-main-1600x600.jpg
  actions:
    - label: "[ Blog ]"
      url: "https://github.com/habijung"
  caption: "Photo description"
excerpt: "**Hello?** Thanks for visiting here."
intro: 
  - excerpt: 'This part is intro description. And if you want to align text, then you can apply centered with `type="center"`'

feature_row:
  - image_path: assets/images/gallery-1-600x400.jpg
    alt: "placeholder image 1"
    title: "Placeholder 1"
    excerpt: "Imgae gallery **1**"

  - image_path: /assets/images/gallery-2-600x400.jpg
    image_caption: "Image caption"
    alt: "placeholder image 2"
    title: "Placeholder 2"
    excerpt: "Imgae gallery **2**"

  - image_path: /assets/images/gallery-3-600x400.jpg
    alt: "placeholder image 3"
    title: "Placeholder 3"
    excerpt: "Imgae gallery **3**"

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
