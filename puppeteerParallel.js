const puppeteerChrome = require('puppeteer');
const puppeteerFireFox = require('puppeteer-firefox');

(async () => {


    const test = async puppeteerChrome => {


    console.log("hi guys");

     puppeteerChrome = await puppeteer.launch({
        "headless": false,
        // we making headless false so that it will open chromium browser.
        "slowMo": 50

    });// launch method is asynchrnous method and it returns promise so it has to be resolved.
    // this will launch browser.

    const page = await puppeteerChrome.newPage();// this will launch a new page

    }
    await page.goto('https://example.com');
    await page.screenshot({ path: 'example.png' });

    await puppeteerChrome.close();
})().catch({

});


