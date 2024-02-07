const express = require('express');
const app = express();
app.use(express.json());

const textRouter = require('./src/routes/textRouter')

app.use("/text", textRouter);

app.listen(3000)