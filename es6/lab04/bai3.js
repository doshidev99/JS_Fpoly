const fs = require("fs");
const axios = require("axios");

fs.readFile("data.json", { encoding: "utf8" }, async (err, data) => {
  console.log("Data loaded from disk", data);
  await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    console.log("Data downloaded from url", res.data);
  });
});
