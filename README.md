# Sidoarjo UntukKita API

![GitHub package.json version](https://img.shields.io/github/package-json/v/untukkita-id/api-sda.untukkita?style=for-the-badge)

Serverless API to Fetch data from database or Google Spreadsheet about Sidoarjo City.

## Consuming Api

This api Hosted on

```url
https://api.sda.untukkita.my.id/
```

### Public Endpoints

| Route                     | Method | Desc                                                |
| ------------------------- | ------ | --------------------------------------------------- |
| /                         | GET    | [Get API Status](#status)                           |
| /covid/fasilitaskesehatan | GET    | [COVID-19 Healtcare facility](#fasilitas-kesehatan) |
| /covid/statistik          | GET    | [Sidoarjo COVID-19 Cases (Cummulative)](#statistik) |
| /covid/vaksinasi          | GET    | [Sidoarjo COVIC-19 vaccination data](#vaksinasi)    |

### Schemas

#### Fasilitas Kesehatan

| Key         | Data Type       |
| ----------- | --------------- |
| id          | integer($int64) |
| nama_faskes | string          |
| jenis       | string          |
| kontak      | string          |
| alamat      | string          |
| sosialmedia | string          |
| verifikasi  | string          |
| sumberdata  | string          |

#### Statistik

| Ket           | Data Type       |
| ------------- | --------------- |
| id            | integer($int64) |
| penyelenggara | string          |
| kuota         | integer         |
| jenis         | string          |
| cakupan       | string          |
| lokasi        | string          |
| sosialmedia   | string          |
| narahubung    | string          |
| pelaksanaan   | string($date)   |
| verifikasi    | boolean         |

#### Vaksinasi

| Ket            | Data Type       |
| -------------- | --------------- |
| positif        | integer($int64) |
| sembuh         | integer($int64) |
| meninggal      | integer($int64) |
| updateTerakhir | string($date)   |

## Technical Details

The project is built with [Azure Functions](https://azure.microsoft.com/en-us/services/functions/) and [Tailwind CSS](https://tailwindcss.com/).

Project Dependencies and Environment:

- [Node.js v14.x](https://nodejs.org/)
- [Azure Functions](https://azure.microsoft.com/en-us/services/functions/)
