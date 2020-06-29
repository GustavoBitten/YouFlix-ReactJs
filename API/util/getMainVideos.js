import axios from 'axios'
import cherrio from 'cheerio'
const puppeteer = require('puppeteer');

async function autoScroll(page) {
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 10000;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if (totalHeight >= scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}

export default async function(){

    const browser = await puppeteer.launch({
        //headless:false,
        defaultViewport: null

    });

const page = await browser.newPage();
await page.goto('https://www.youtube.com');
await page.waitFor(1000)
await autoScroll(page)
await page.waitFor(1000)


await page.waitFor('ytd-rich-item-renderer')

const result = await page.$$eval('ytd-rich-item-renderer', box => {
    return box.map(row => {
        var content = {}
        const titleAndUrl = row.querySelector('h3>a')
        content.title = titleAndUrl ? titleAndUrl.innerText : 'Without img src'
        
        const urlVideo = titleAndUrl ? titleAndUrl.getAttribute('href') : 'Without img src'
        
        content.fullUrlVideo = "https://www.youtube.com" + urlVideo
        
        const thumbnail = row.querySelector('img')
        content.thumbnail = thumbnail ? thumbnail.getAttribute('src') : 'Without img src'
        return content
        
    })
})

await browser.close()

const filterResult = result.filter(video => {
    return video.thumbnail != null
})

return filterResult

}