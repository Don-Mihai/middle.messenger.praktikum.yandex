const express = require('express')

const app = express()

const PORT = process.env.PORT || 3001;

app.use('/', express.static('./static'));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});