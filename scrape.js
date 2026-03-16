import puppeteer from 'puppeteer-extra'
import StealthPlugin from 'puppeteer-extra-plugin-stealth'
puppeteer.use(StealthPlugin())
import {writeFile} from 'fs'
const searchTermCLI = process.argv.length >=3 ? process.argv[2] : '';
(async()=>{
try {
    const browser  =  await puppeteer.launch({headless:false,defaultViewport:null})
    const page = await browser.newPage()
    await page.goto(`https://algonquincollege.com`)
    await page.waitForSelector("button.programSearchButton")
    await page.type('input#programSearch',searchTermCLI,{delay:100})
    await page.click(".programSearchButton")
    await page.waitForNavigation({waitUntil:"load"})
    await browser.close()
} catch (error) {
    console.log(error.message)
}

})()