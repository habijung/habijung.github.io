---
title: "Post Format Manual"
categories:
  - Rest
tags:
  - Rest
date: 2021-08-08T23:05:18+09:00
---

# Post format **.md** by creating

```
---
title: "Example Title"
categoris:
  - category 1
  - category 2
  - ...
tags:
  - tag 1
  - tag 2
  - ...
date: %Y-%m-%dT%H:%M:%S+09:00
---
```

**Note :**

1. About date, `+09:00` meaning is converting **UTC** to **KST (Korea Standard Time, UTC+09:00)**.
2. If you want to show creation and updated time, modify `./_includes/page__meta.html` and `./_includes/page__date.html`.

---

[Reference date format](https://blog.yena.io/studynote/2017/11/06/Date-Formatting.html)
