#! /usr/bin/env node

const puppeteer = require('puppeteer')

const url =  'https://www.maisdoquepalmas.com.br/'

const email = 'regiefe@gmail.com' // <-Coloque o seu Email
const nome = 'Reginaldo'  // <-Coloque o seu primeiro nome 
const lastname = 'Silva' // <-Coloque o seu segundo nome


const maisdoquepalmas = async()=> {
  const browser = await puppeteer.launch({
    headless: false, 
  })
    const page = await browser.newPage()
    await page.goto(url)
    await page.type('#pressure-sender-email-id', email, {delay:100}) 
    await page.type('#pressure-sender-firstname-id', nome, {delay:100}) 
    await page.type('#pressure-sender-lastname-id', lastname, {delay:100}) 
    
    await page.click('button[type=submit]')
    await browser.close()
}

maisdoquepalmas()
