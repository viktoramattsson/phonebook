import cors from 'cors'
import * as dotenv from 'dotenv'
import { Client } from 'pg'
import express from 'express'

dotenv.config()

const client = new Client({
  connectionString: process.env.PGURI
})

client.connect()

const app = express()

app.use(cors())

app.get('/', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM numbers')

  response.send(rows)
})

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.')
})


// import cors from 'cors'
// import express from 'express'

// const app = express()

// app.use(cors())

// app.get('/', (request, response) => {
//   response.send('Här kommer nummer visas')
// })

// app.listen(3000, () => {
//   console.log('Webbtjänsten kan nu ta emot anrop.')
// })
