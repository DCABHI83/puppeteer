import puppeteer from "puppeteer";
const searchTermCLI = process.argv.length >= 3 ? process.argv[2] : "lenovo legion";


(async()=>{
   try {
     const browser = await puppeteer.launch({headless:false,defaultViewport:false})
     const page = await browser.newPage()
     await page.goto("https://amazon.in")
     const url = page.url()
     console.log(url)
     const content =await page.content()
     console.log(content)
     await page.waitForSelector("#twotabsearchtextbox")
     await page.type("#twotabsearchtextbox",searchTermCLI,{delay:100})
     await page.screenshot({path:"./screens/new.png"})
     await browser.close()
   } catch (error) {
    console.log(error.message)
   }
})()