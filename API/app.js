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
    
    return res.json(listMainVideos)



})



app.listen(3333,()=>console.log('Api online'))