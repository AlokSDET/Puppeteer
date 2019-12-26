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



(async () => {

    const test = puppeteerFirefox => {


     puppeteerFirefox = await puppeteer.launch({
        "headless": false,
        "slowMo": 50
    });
    const page = await puppeteerFirefox.newPage();
    await page.setViewPort({
        "width" : 1440,
        "hieght" : 10000
    });
}
    await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'hn.pdf', format: 'A4' });

    await puppeteerFirefox.close();
})().catch({

});

/// working with xpath 


/*

await page.type('[name = UserName]', 'Alok Shrivastava');

const [userName] = await page.$x("//input[@name = 'UserName']");

await userName.type("ALOK");














*/
