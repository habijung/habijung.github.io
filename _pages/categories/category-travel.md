---
title: "&#x1F4C1; Travel"
permalink: /categories/travel/
layout: archive
author_profile: true
sidebar_category: true
---

{% assign posts = site.categories.travel %}
{% for post in posts %}
  {% include archive-single-category.html type=page.entries_layout %}
{% endfor %}
