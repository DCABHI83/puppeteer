import puppeteer from "puppeteer";
const searchTermCLI = process.argv.length >= 3 ? process.argv[2] : "lenovo legion";


(async()=>{
   try {
     const browser = await puppeteer.launch({headless:false,defaultViewport:false})
     const page = await browser.newPage()
     await page.goto("https://youtube.com")
     const url = page.url()
     console.log(url)
     await page.waitForSelector(".ytSearchboxComponentSearchForm .ytSearchboxComponentInput")
     await page.type(".ytSearchboxComponentSearchForm .ytSearchboxComponentInput",searchTermCLI,{delay:100})
     await page.screenshot('./screens/youtube.png')
     await Promise.all([
      page.waitForNavigation(),
      page.click('.ytSearchboxComponentSearchButton')
     ])
    

  await page.waitForSelector("ytd-video-renderer h3 a#video-title")
   await Promise.all([
    page.waitForNavigation(),
    page.click("ytd-video-renderer h3 a#video-title")
   ])
     await browser.close()
   } catch (error) {
    console.log(error.message)
   }
})()