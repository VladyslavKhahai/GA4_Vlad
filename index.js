const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (_req, res) => {
  res.sendFile('index.html', { root: __dirname + '/src' });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app;