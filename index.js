import puppeteer from "puppeteer";

(async()=>{
try {
  const browser = await puppeteer.launch({headless:false,defaultViewport:false})
  const page = await browser.newPage()
  await page.goto("https://neatnclean.net")
  const url = page.url()
  console.log(url)
  const content = await page.content()
  console.log(content)
  await page.screenshot({path:"./screens/insta.png",fullPage:true,encoding:"binary",type:"png"})
  await page.close()
} catch (error) {
  console.log(error.message)
}
})()