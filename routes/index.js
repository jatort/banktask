const express = require('express');
const router = express.Router();
const axios = require('axios');
var cron = require('node-cron');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'BankTask' });
});


cron.schedule('0 0 */3 * * *', async () => {
  console.log('running a task three hours');
  axios
    .get('http://localhost:3000/prices/randomise')
    .catch(error => {
      console.error(error)
    });
});





module.exports = router;
