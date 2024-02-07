const express = require('express')
const app = express.Router()
const controller = require('../controllers/TextoController')

app.post('/concatWords', controller.concatWords);
app.get('/showText', controller.showText);
app.post('/showTextByFilter', controller.showTextByFilter);

module.exports = app