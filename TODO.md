# Project To-Do List

## High Priority
- [ ] **Migrate Legacy Blog Posts**: There are 6 remaining older blog posts (from August/October/November) in `app/blog/[id]/blogEntries.ts` that need to be converted to Markdown files.
- [ ] **Verify SEO**: Ensure all new markdown blog posts have proper metadata (title, description, open graph tags).

## Maintenance
- [ ] **Review Tags**: Ensure all blog posts have relevant tags for the "Related Posts" feature.
- [ ] **Image Optimization**: Check if blog images are optimized for web (Next.js Image component handles this, but source files should be reasonable size).

## Future Ideas
- [ ] **Blog Search**: Add a search bar to filter blogs by title or content.
- [ ] **Tag Filter**: Allow clicking on a tag (e.g., "roofing") to see all posts with that tag.
- [ ] **Pagination**: If the blog grows large, add pagination to the main blog page.

## Blog Creation Checklist (Per Post)
- [ ] Draft content in `content/blogs/new-post-name.md` using the template.
- [ ] Add a relevant image to `public/images/`.
- [ ] Set `date` (YYYY-MM-DD).
- [ ] Add 3-5 relevant `tags`.
- [ ] Preview locally (`npm run dev`) to check formatting.
