---
title: "&#x1F4C1; Investing Log"
permalink: /categories/investing-log/
layout: archive
author_profile: true
sidebar_category: true
---

<!--
  category without space : site.categories.example
  category with space    : site.categories['example category']
-->
{% assign posts = site.categories['Investing Log'] %}
{% for post in posts %}
  {% include archive-single-category.html type=page.entries_layout %}
{% endfor %}
