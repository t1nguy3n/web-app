require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();
const router = express.Router();
const routes = require('./app/controllers/routes');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

router.use('/api', routes);
app.use(router);

app.listen(process.env.PORT || 8080);