require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routes = require('./routes')
const errorHandling = require('./middlewares/errorHandling');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/', routes)
app.use(errorHandling);

app.listen(port, () => {
    console.log(`Server is listening in port ${port}`);
})