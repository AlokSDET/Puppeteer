const puppeteer = require('puppeteer');

(async () => {

    console.log("hi guys");

  const browser = await puppeteer.launch({
      "headless" : false// we making headless false so that it will open chromium browser.

  });// launch method is asynchrnous method and it returns promise so it has to be resolved.
  // this will launch browser.

  const page = await browser.newPage();// this will launch a new page
  await page.goto('https://example.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

(async () => {
    const browser = await puppeteer.launch({
        "headless" : false
    });
    const page = await browser.newPage();
    await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
    await page.pdf({path: 'hn.pdf', format: 'A4'});
  
    await browser.close();
  })();