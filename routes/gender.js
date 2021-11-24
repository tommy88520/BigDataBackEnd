const express = require("express");
const router = express.Router();
const axios = require("axios");
router.get('/',async(req,res)=>{
  const result = await axios
    .get("https://od.moi.gov.tw/api/v1/rest/datastore/301000000A-000082-045")
    .then((res) => {
      return res.data.result.records;
    });
  res.json(result)
})
module.exports = router;