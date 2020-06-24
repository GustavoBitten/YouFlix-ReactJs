import express, { json, request, response } from 'express'
import axios from 'axios'
import cherrio from 'cheerio'
import fs from 'fs'
//import html from './googleHtml.html'


const app = express()

app.use(json())


app.get('/main-videos', async (req,res)=>{

    
    const htmlGoogle =  await axios.get('https://www.youtube.com')
    const $ = cherrio.load(htmlGoogle.data)

    const listMainVideos = []
    
    class Video {

        constructor({title,urlVideo,thumbnail}){
            this.title = title
            this.urlVideo = urlVideo
            this.thumbnail = thumbnail
        }
    }
    

    
    $('*').find('.yt-lockup-dismissable').each(function(i,elem) {
        
        const title = $(elem).find('h3>a').text()
        const urlVideo = $(elem).find('h3>a').attr('href')
        const fullUrlVideo = "https://www.youtube.com" + urlVideo
        const thumbnail = $(elem).find('img').attr('src')

        const video = new Video({title,urlVideo: fullUrlVideo ,thumbnail})
        return listMainVideos.push(video)
    })
    

    if(listMainVideos != ''){
        return res.json(listMainVideos)

    }else{
        return res.status(500).json({mensage: 'Please try again'})
    }



})



async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 10000;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}


const puppeteer = require('puppeteer');
async function testArea() {

    
      const browser = await puppeteer.launch({
          headless:false,
          defaultViewport:null

      });
      const page = await browser.newPage();
      await page.goto('https://www.youtube.com');
      //await page.screenshot({path: 'hnw.png',fullPage: 'true'});
      //await page.content;
      await autoScroll(page)
      await page.waitFor(1000)
      await autoScroll(page)
      await page.waitFor(1000)
      await autoScroll(page)
      await page.waitFor(1000)
      await autoScroll(page)
      await page.waitFor(1000)
      await autoScroll(page)
      await page.waitFor(1000)
      await autoScroll(page)
      await page.waitFor(1000)
      await page.waitFor('ytd-rich-item-renderer')

      const result = await page.$$eval('ytd-rich-item-renderer', box=>{
          return box.map(row =>{
              var content = {}
              const title = row.querySelector('img')
              try {
                  content = title.getAttribute('src')
                  return content
                  
              } catch (error) {
                  content = ''
                    return content
              }
          })
      })
      ;;
      
    //   const result3 = result.map(lem =>{
    //       const tilte = lem.querySelector('.result-title')
    //       const text = tilte.innerHTML
    //       console.log(text)
    //   })
      //await browser.close();
    await console.log(result);
}

testArea()

app.listen(3333,()=>console.log('Api online'))