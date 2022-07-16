var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const result = await axios.get('http://13.229.57.126:3000/users');

  console.log(434343, result.data.data);
  
  res.render('index', { data: result.data.data });
});

module.exports = router;
