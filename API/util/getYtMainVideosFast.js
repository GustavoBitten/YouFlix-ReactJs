
import axios from 'axios'
import cherrio from 'cheerio'


export default async function(){


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


    const htmlGoogle = await axios.get('https://www.youtube.com')
    const $ = cherrio.load(htmlGoogle.data)
    
    const listMainVideos = []
    
    
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
    return filterListMainVideos
} 