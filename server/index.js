import express from 'express';
import puppeteer from 'puppeteer';

const app = express();
const PORT = process.env.PORT || 4001;

app.get('/', async (req, res) => {
  try {
    const trendingRepos = await scrapeGitHubTrendingRepos();
    res.json(trendingRepos);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function scrapeGitHubTrendingRepos() {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage();
  
  try {
    await page.goto('https://github.com/trending');

    const trendingRepos = await page.evaluate(() => {
      const repos = [];
      const repoElements = document.querySelectorAll('.Box-row');

      repoElements.forEach((repoElement) => {
        const repoNameElement = repoElement.querySelector('h1,h2,h3,h4,h5,h6');
        const repoLink = repoElement.querySelector('a');
        const repoDescriptionElement = repoElement.querySelector('p');

        if (!repoNameElement || !repoLink || !repoDescriptionElement) {
          return;
        }
        
        const repoName = repoNameElement.innerText.trim();
        const repoDescription = repoDescriptionElement.innerText.trim();
        const repoUrl = repoLink.href;

        repos.push({
          name: repoName,
          description: repoDescription,
          url: repoUrl,
        });
      });

      return repos;
    });

    return trendingRepos;
  } finally {
    await browser.close();
  }
}

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
