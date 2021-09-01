---
title: "&#x1F4C1; programmers"
permalink: /categories/programmers/
layout: archive
author_profile: true
sidebar_category: true
---

{% assign posts = site.categories.programmers %}
{% for post in posts %}
  {% include archive-single-custom.html type=page.entries_layout %}
{% endfor %}
