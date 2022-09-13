var express = require('express');
var router = express.Router();
const axios = require('axios');
const os = require('os');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await axios.get('https://zipcloud.ibsnet.co.jp/api/search?zipcode=2700014');

  // console.log(434343, os.hostname());
  res.json(result.data)
  // res.render('index', { data: result.data });
});

module.exports = router;
