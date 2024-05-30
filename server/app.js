
const express = require('express')
const app = express()
const port = 3000
require('dotenv/config');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mainRoute = require("./routes/main.route");
app.use(morgan('dev'));

app.use(bodyParser.json({ limit: '100mb', type: 'application/json' }));
app.use("/", mainRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})