const express = require('express')
const app = express()
const port = 4000

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server Open at http://localhost:${port}`)
})