const express = require('express');
const routes = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.static('public'));

app.use('/', routes);

app.listen(PORT, () => console.log(`Application listening http://localhost:${PORT}`));