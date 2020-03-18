require('dotenv').config();
const express = require('express');
const app = express();

const noteRoute = require('./note-route');

app.use(express.json());
app.use((req, res, next) => {
  console.info(`${req.method} ${req.path} ${new Date().toLocaleString()}`);
  next();
});

app.use('/notes', noteRoute);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`server listening on http://${process.env.HOST}:${process.env.PORT}`);
});
