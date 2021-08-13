---
title: "Post Format Manual"
categories:
  - Rest
tags:
  - Rest
header:
  teaser: /assets/images/img-pages/gallery-1-600x400.jpg
date: 2021-08-08T23:05
last_modified_at: 2021-08-09T10:04
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
header:
  teaser: Image Path
date: %Y-%m-%dT%H:%M
last_modified_at: %Y-%m-%dT%H:%M
---
```

**Note :**

1. title : Post title
2. categoris : Post categories
3. tags : Post tags
4. header > teaser : To assign a teaser image each post. Set the image path `/assets/images/...` as all posts files.
5. date : Post creation date. If you want to test localhost, add +09:00. About date, `+09:00` meaning is converting **UTC** to **KST (Korea Standard Time, UTC+09:00)**.\
6. last_modified_at : Post updated date. Also, it can be applied converting UTC.
7. If you want to show creation and updated time, modify `/_includes/page__meta.html` and `/_includes/page__date.html` as page setting files.
8. Date formatting table

| Placeholder | Format | Exmaple |
| :---------: | :----: | :-----: |
| %Y | Year with a century | 2021 |
| %m | Month of the year | 08 |
| %d | Day of the month, zero-padded | 09 |
| %H | Hour of the day, 24-hour clock | 22 |
| %M | Minute of the hour | 17 |

---

[Reference date format](https://blog.yena.io/studynote/2017/11/06/Date-Formatting.html)
