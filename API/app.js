import express, {
    json,
    request,
    response
} from 'express'
import axios from 'axios'
import cherrio from 'cheerio'
import fs from 'fs'
import cors from 'cors'
const puppeteer = require('puppeteer');
//import html from './googleHtml.html'

const app = express()

app.use(cors())
app.use(json())


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







app.get('/main-videos', async (req, res) => {

    const browser = await puppeteer.launch({
        //headless:false,
        defaultViewport: null

    });
    const page = await browser.newPage();
    await page.goto('https://www.youtube.com');
    //await page.screenshot({path: 'hnw.png',fullPage: 'true'});
    //await page.content;
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

    const filterResult = result.filter(video => {
        return video.thumbnail != null
    })

    await res.json(filterResult)

})





app.get('/fast-main-videos', async (req, res) => {


    const htmlGoogle = await axios.get('https://www.youtube.com')
    const $ = cherrio.load(htmlGoogle.data)

    const listMainVideos = []

    class Video {

        constructor({
            title,
            urlVideo,
            thumbnail
        }) {
            this.title = title
            this.urlVideo = urlVideo
            this.thumbnail = thumbnail
        }
    }



    $('*').find('.yt-lockup-dismissable').each(function (i, elem) {

        const title = $(elem).find('h3>a').text()
        const urlVideo = $(elem).find('h3>a').attr('href')
        const fullUrlVideo = "https://www.youtube.com" + urlVideo
        const thumbnail = $(elem).find('img').attr('src')

        const [thumbhd] = thumbnail.split('?')

        const video = new Video({
            title,
            urlVideo: fullUrlVideo,
            thumbnail: thumbhd
        })
        return listMainVideos.push(video)
    })

    const filterListMainVideos = listMainVideos.filter(video =>{
        return video.thumbnail !=  "/yts/img/pixel-vfl3z5WfW.gif"
    })

    console.log(htmlGoogle.status)

    

    if (listMainVideos != '') {
     return res.json(filterListMainVideos)

    } else {
        return res.status(500).json({
            mensage: 'Please try again'
        })
    }



})

app.get('/search', async (req, res) => {

    const {
        name
    } = req.query

    const browser = await puppeteer.launch({
        //headless:false,
        defaultViewport: null

    });
    const page = await browser.newPage();
    await page.goto(`https://www.youtube.com/results?search_query=${name}`);

    await autoScroll(page)
    await page.waitFor(1000)

    const result = await page.$$eval('.ytd-item-section-renderer', box => {
        return box.map(row => {
            var content = {}
            const titleAndUrl = row.querySelector('h3>a')
            content.title = titleAndUrl ? titleAndUrl.getAttribute('title') : 'Without title'

            const urlVideo = titleAndUrl ? titleAndUrl.getAttribute('href') : 'Without img src'

            content.fullUrlVideo = "https://www.youtube.com" + urlVideo

            const thumbnail = row.querySelector('img')
            content.thumbnail = thumbnail ? thumbnail.getAttribute('src') : 'Without img src'
            return content

        })
    })

    const filterResult = result.filter(video => {
        return video.thumbnail != null && video.title != 'Without title'
    })
    filterResult.shift()

    await res.json(filterResult)




})

app.get('/fast-search', async (req, res) => {


    const {
        name
    } = req.query

    const htmlGoogle = await axios.get(`https://www.youtube.com/results?search_query=${name}`)
    const $ = cherrio.load(htmlGoogle.data)

    const listMainVideos = []

    class Video {

        constructor({
            title,
            urlVideo,
            thumbnail
        }) {
            this.title = title
            this.urlVideo = urlVideo
            this.thumbnail = thumbnail
        }
    }

    

    $('*').find('.yt-lockup-video').each(function (i, elem) {

        const title = $(elem).find('h3 a').text()
        const urlVideo = $(elem).find('h3 a').attr('href')
        const fullUrlVideo = "https://www.youtube.com" + urlVideo
        const thumbnail = $(elem).find('img').attr('src')

        const video = new Video({
            title,
            urlVideo: fullUrlVideo,
            thumbnail
        })
        return listMainVideos.push(video)
    })

    const filterListMainVideos = listMainVideos.filter(video =>{
        return video.thumbnail !=  "/yts/img/pixel-vfl3z5WfW.gif"
    })

    console.log(htmlGoogle.status)

    return res.json(filterListMainVideos)

})




async function testArea() {



    ;;

    //   const result3 = result.map(lem =>{
    //       const tilte = lem.querySelector('.result-title')
    //       const text = tilte.innerHTML
    //       console.log(text)
    //   })
    //await browser.close();
}

testArea()

app.listen(3333, () => console.log('Api online'))