const cheerio = require('cheerio');
const fetch = require('cross-fetch');

const url = 'https://covid19.sidoarjokab.go.id/';


module.exports = async function (context) {
    return fetch(url)
      .then(response => {
        return response.text();
      })
      .then(html => {
        const $ = cheerio.load(html);
        const data = [];

        $('.angka-kejadian').each(function () {
          data.push($(this).find('.text-white b')[0].children[0].data);
        });

        const output = {
          lastUpdate: new Date(),
          positif: data[0],
          sembuh: data[1],
          meninggal: data[2],
        }; 
        context.res = {
            body:output
        }
      });
}