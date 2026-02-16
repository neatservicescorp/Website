# How to Add a New Blog Post

Adding a new blog post is easy! Follow these steps:

## 1. Prepare Your Image
- Save your main blog image in the `public/images` folder.
- **Tip**: Naming it something related to your post (e.g., `roof-repair-spring-2026.jpg`) makes it easier to find.

## 2. Create the Markdown File
- Go to `content/blogs`.
- Create a new file ending in `.md`.
- **Naming Convention**: Use all lowercase letters and hyphens instead of spaces (e.g., `spring-roof-repair-tips.md`).

## 3. Add the Content
Copy and paste the template below into your new file, then fill in the details.

### Template
```markdown
---
title: "Your Blog Post Title Here"
date: "YYYY-MM-DD"
author: "Neat Services Corp"
imageUrl: "/images/your-image-name.jpg"
description: "A short summary of your post that appears on the homepage and blog list (1-2 sentences)."
tags: ["roofing", "maintenance", "spring"]
---

Write your blog post content here!

## Subtitles Look Like This (Use ##)

You can write normal paragraphs like this.

*   This is a list item
*   This is another list item

1.  This is a numbered list
2.  Item two
```

## 4. Save and Check
- Save the file.
- The new post will automatically appear on the website!
- It will be sorted by date (newest first).
- Related posts will be suggested based on the `tags` you chose.
