require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.use("/gender", require("./routes/gender"));
app.use((req, res) => {
  res.status(404).send(`<h1>找不到頁面</h1>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(new Date().toLocaleString());
  console.log(`Port is ${port}`);
});
