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
    await page.screenshot({path: 'img/maisdoquepalmas.png'})
    await browser.close()
}

maisdoquepalmas()
console.log(`Carregando o site '${url}' para fazer o screenshot`)
