// Import the required modules from Playwright
import { chromium, Browser, Page } from 'playwright';

// Define the type for the URL parameter
type Url = string;

// Define the scraper function
export default async function ScrapePage (url: Url): Promise<string> {
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

// Export the function
//  default ScrapePage;
