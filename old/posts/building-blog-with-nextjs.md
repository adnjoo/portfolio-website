---
title: 'Building a blog with Next.js 🖥️'
date: '2023-02-13'
---

This website was created using Next.js and Material UI, with the blog posts being generated programmatically from markdown files.

The use of Material UI provided pre-built UI components that made it simpler to iterate quickly. Additionally, deployment on Vercel was straightforward.

The project structure is organized as follows:

- src: includes the source code
- src/pages: houses the pages
- public: stores static files
- posts: contains the blog posts

Within the src folder, there are several files, including:

- [id].tsx: a dynamic route for blog posts
- index.tsx: the home page
- _app.tsx: a root component that wraps all pages
- _document.tsx: utilized to add custom HTML tags to the page

Overall, using Next.js and Material UI streamlined the creation of this website. I am excited to continue exploring the advantages of server-side rendering and static site generation while building more websites using these tools.