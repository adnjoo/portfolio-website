import puppeteer from 'puppeteer';

export type TrendingRepos = {
    name: string;
    description: string;
    url: string;
};

export async function GET(request: Request) {
  // should allow Puppeteer to run without the sandbox in a more permissive mode.
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

  const page = await browser.newPage();
  await page.goto('https://github.com/trending');

  const trendingRepos = await page.evaluate(() => {
    const repos: any = [];
    const repoElements = document.querySelectorAll('.Box-row');

    repoElements.forEach((repoElement) => {
      const repoNameElement = repoElement.querySelector('h2');
      const repoLink = repoElement.querySelector('a');
      const repoDescriptionElement = repoElement.querySelector('p');

      if (!repoNameElement || !repoLink || !repoDescriptionElement) {
        return;
      }
      const repoName = repoNameElement?.innerText.trim();
      const repoDescription = repoDescriptionElement?.innerText.trim();
      const repoUrl = repoLink?.href;
      repos.push({
        name: repoName,
        description: repoDescription,
        url: repoUrl,
      });
    });

    return repos;
  });

  await browser.close();

  return new Response(JSON.stringify(trendingRepos), {
    headers: { 'Content-Type': 'application/json' },
  });
}
