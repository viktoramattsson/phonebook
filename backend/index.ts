import cors from 'cors';
import * as dotenv from 'dotenv';
import { Client } from 'pg';
import express from 'express';
import bodyParser from 'body-parser';

dotenv.config();

const client = new Client({
  connectionString: process.env.PGURI,
});

client.connect();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', async (_request, response) => {
  const { rows } = await client.query('SELECT * FROM numbers');

  response.send(rows);
});

app.post('/add', async (request, response) => {
  try {
    const { name, number } = request.body as { name: string; number: string };

    await client.query('INSERT INTO numbers (name, number) VALUES ($1, $2)', [
      name,
      number,
    ]);

    response.status(201).send({ message: 'Contact added' });
  } catch (error) {
    console.error('Error adding data to database:', error);
    response.status(500).send({ error: 'Internal Server Error' });
  }
});

app.delete('/delete', async (request, response) => {
  try {
    const { name } = request.body as { name: string };

    await client.query('DELETE from numbers Where name =$1', [name]);

    response.status(200).send({ message: 'Contact deleted' });
  } catch (error) {
    console.error('Error adding data to database:', error);
    response.status(500).send({ error: 'Internal Server Error' });
  }
});

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.');
});
