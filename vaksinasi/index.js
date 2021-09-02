const fetch = require('cross-fetch');

require('dotenv').config();

const SHEETS_ENDPOINT = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/informasi-vaksinasi?key=${process.env.GOOGLE_SHEET_API_KEY}&majorDimension=COLUMNS`;


module.exports = async function (context) {
    context.log("Hello, it triggered")
    return fetch(SHEETS_ENDPOINT)
      .then(response => response.json())
      .then(json => {
        const data = json.values;
        const output = [];
        const peyelengara = data[0];
        const pelaksanaan = data[1];
        const kuota = data[2];
        const jenis_vaksin = data[3];
        const cakupan = data[4];
        const tempat_peyelengaraan = data[5];
        const kecamatan = data[6];
        const desa = data[7];
        const link_pendaftaraan = data[8];
        const narahubung = data[9];
        const sosialmedia_peyelenggara = data[9];

        for (let i = 1; i < data[0].length; i += 1) {
          const item = {
            peyelengara: peyelengara[i],
            pelaksanaan: pelaksanaan[i],
            kuota: kuota[i],
            jenis_vaksin: jenis_vaksin[i],
            cakupan: cakupan[i],
            tempat_peyelengaraan: tempat_peyelengaraan[i],
            kecamatan: kecamatan[i],
            desa: desa[i],
            link_pendaftaraan: link_pendaftaraan[i],
            narahubung: narahubung[i],
            sosialmedia_peyelenggara: sosialmedia_peyelenggara[i],
          };
          output.push(item);
        }
        context.res = {
            body:output
        }
      })
}
