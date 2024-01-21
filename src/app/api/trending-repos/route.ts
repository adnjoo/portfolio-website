import puppeteer, { PuppeteerLaunchOptions } from 'puppeteer-core';
import chromium from '@sparticuz/chromium';

export type TrendingRepos = {
  name: string;
  description: string;
  url: string;
};

export async function GET(request: Request) {
  const options: PuppeteerLaunchOptions = {
    args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(
      `https://github.com/Sparticuz/chromium/releases/download/v116.0.0/chromium-v116.0.0-pack.tar`
    ),
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
  };

  const browser = await puppeteer.launch(options);

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
