---
title: "&#x1F4C1; Blog"
permalink: /categories/blog/
layout: archive
author_profile: true
sidebar_category: true
---

<!--
  category without space : site.categories.example
  category with space    : site.categories['example']
-->
{% assign posts = site.categories.Blog %}
{% for post in posts %}
  {% include archive-single-custom.html type=page.entries_layout %}
{% endfor %}
