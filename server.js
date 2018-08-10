require('dotenv').config();
const express = require('express');
const path = require('path');
const ejs = require('ejs');


const app = express();

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'views')));
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});


app.listen(Number(process.env.PORT), () => {
  console.log(`Website started on port ${Number(process.env.PORT)}`);
});
