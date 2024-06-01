const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

const connect = require('./connect')

const MenRoute = require('./routes/Men')

app.use(cors())

app.use(express.json())

app.use('/api/products',MenRoute)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`)
})