import { chromium, Browser, Page } from 'playwright';

type Url = string;

export default async function Scrape (url: Url): Promise<string> {
  const browser: Browser = await chromium.launch();
  const page: Page = await browser.newPage();
  await page.goto(url);

  const concatenatedText: string = await page.evaluate(() => {
    const pTags = document.querySelectorAll('p');
    let textString = '';
    pTags.forEach((pTag) => {
      textString += pTag.textContent?.trim() + ' ';
    });
    return textString.trim();
  });

  await browser.close();

  return concatenatedText;
}
