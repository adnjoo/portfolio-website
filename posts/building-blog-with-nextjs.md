---
title: 'Building a blog with Next.js'
date: '2023-02-13'
---

This site was built with Next.js and Material UI; the blog posts are programmatically generated from markdown files.

Material UI makes it easier to iterate quickly as the UI components are pre-built. It's also easy to deploy on Vercel.

If you look at the project structure most of the files are in the `/src` folder. The pages folder contains the pages that are rendered by Next.js. The posts folder contains the markdown files that are used to generate the blog posts. The public folder contains static assets like images.

Inside the src folder we have files like `[id].tsx` which is the dynamic route for the blog posts. The `index.tsx` file is the home page. The `_app.tsx` file is the root component that wraps all the pages. The `_document.tsx` file is used to add custom html tags to the page.

Overall using Next.js and Material UI made it easier to build this site. I'm looking forward to building more sites with these tools, and exploring the benefits of server side rendering and static site generation.