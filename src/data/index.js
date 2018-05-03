//const request = require('request');
const cheerio = require('cheerio')
const request = require('request')

let data = {}

request('https://coinmarketcap.com/', function(err, resp, html) {
  if (!err) {
    const $ = cheerio.load(html)
    $('tr')
      .slice(1, 11)
      .each(function() {
        let row = $(this)
        let name = row.find($('a.currency-name-container')).text()
        let price = row.find($('a.price')).text()
        //console.log(`${name} ${price}`)
        data[name] = [name, price];
      })
    console.log(data)
  }
})
