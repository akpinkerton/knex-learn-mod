const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
// changed process.env.NODE_ENV to 'development'
const knex = require('knex')(require('./knexfile.js')['development']);

// changed bodyparser to express bc now you dont have to npm i bodyparser bc express houses it now
app.use(express.json());

app.get('/movies', function(req, res) {
  knex
    .select('*')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.get('/movies/titles', function(req, res) {
  knex
    knex
    .select('title')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.post('/movies/', function(req, res) {
  knex
    knex
    .select('title')
    .from('movies')
    .then(data => res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
});

app.listen(PORT, () => {
  console.log(`The server is running on ${PORT}`);
});