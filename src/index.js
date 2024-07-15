// const express = require('express')
// const paths = require('path');
// import express from 'express';
// import { engine } from 'express-handlebars'
// const nodemailer = require("nodemailer");
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes/index');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}/`);
})
