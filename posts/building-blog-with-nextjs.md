---
title: 'Building a blog with Next.js 🖥️'
date: '2023-02-13'
---

This site was built with Next.js and Material UI; the blog posts are programmatically generated from markdown files.

Material UI makes it easier to iterate quickly as the UI components are pre-built. It's also easy to deploy on Vercel.

The project structure is as follows:
- `src`: contains the source code
- `src/pages`: contains the pages
- `public`: contains the static files
- `posts`: contains the blog posts

Inside the `src` folder, we have the following files:
- `[id].tsx`: dynamic route for the blog posts
- `index.tsx`: home page
- `_app.tsx`: root component that wraps all the pages
- `_document.tsx`: used to add custom HTML tags to the page

Overall using Next.js and Material UI made it easier to build this site. I'm looking forward to building more sites with these tools, and exploring the benefits of server side rendering and static site generation.