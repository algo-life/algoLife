const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

const app = express();
const authRouter = require('./routes/auth');
const algoRouter = require('./routes/algos');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/auth', authRouter);
app.use('/algos', algoRouter);

app.use('/build', express.static(path.join(__dirname, '../build/')));

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.all('*', (req, res) => {
  res.status(404).send('Endpoint not found');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Global error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };

  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log('Server is listening on port 3000'));

module.exports = app;
