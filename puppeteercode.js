const puppeteer = require('puppeteer');

(async () => {

    console.log("hi guys");

  const browser = await puppeteer.launch();// launch method is asynchrnous method and it returns promise so it has to be resolved.
  // this will launch browser.

  const page = await browser.newPage();// this will launch a new page
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();