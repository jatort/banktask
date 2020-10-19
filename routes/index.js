const express = require('express');
const router = express.Router();
const axios = require('axios');
var cron = require('node-cron');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'BankTask' });
});

 
cron.schedule('* * * * * *', async () => {
  console.log('running a task every hour');
  axios
  .post('http://localhost:3000/tasks')
  .catch(error => {
    console.error(error)
  });
});





module.exports = router;
