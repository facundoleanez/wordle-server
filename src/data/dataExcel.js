const XLSX = require("xlsx");
const axios = require("axios");

const workbook = XLSX.readFile("libro.xlsx");
const workbookSheets = workbook.SheetNames;

const sheet = workbookSheets[0];

const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);

data.forEach(async (item) => {
  try {
    const res = await axios.get(
      `https://owlbot.info/api/v4/dictionary/${item.hola}`,
      {
        headers: {
          Authorization: "Token e5150ccd369ec7a59ffe470c7106c3c7b2c8d645",
        },
      }
    );
    console.log(res.status, item.hola);
  } catch (error) {
    console.log(error.response.status, item.hola);
  }
});
