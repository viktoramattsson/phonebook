import cors from 'cors'
import express from 'express'

const app = express()

app.use(cors())

app.get('/', (request, response) => {
  response.send('Här kommer nummer visas')
})

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.')
})
