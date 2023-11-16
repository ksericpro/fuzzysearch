const express = require('express');
const bodyParser = require('body-parser');
var _config = require('./config');

process.env.APP_NAME = _config.APP_NAME;
process.env.MAX_FILE_SIZE = _config.MAX_FILE_SIZE;
process.env.LOG_FOLDER = _config.LOG_FOLDER;
process.env.API_VERSION = _config.API_VERSION;
process.env.PORT = _config.PORT;
process.env.MONGO_URI = _config.MONGO_URI;
process.env.MONGO_DB = _config.MONGO_DB;

const app = express();
const prefix = `${process.env.APP_NAME}${process.env.API_VERSION}`;

//check and create folder
const fs_extra = require('fs-extra');
console.log(`Checking/Create on folder ${process.env.LOG_FOLDER}`);
fs_extra.ensureDirSync(process.env.LOG_FOLDER);

//logger & db
var LOGGER = require( './custom_modules/logger/loggerutils' );
var logger = LOGGER.getLogger();
var DB = require( './custom_modules/utils/db' );

app.use(bodyParser.json({limit: process.env.MAX_FILE_SIZE}));
app.use(bodyParser.urlencoded({limit: process.env.MAX_FILE_SIZE, extended: true}));

app.use(express.json());

app.use(process.env.APP_NAME + '/node_modules', express.static('node_modules'));
app.use(process.env.APP_NAME + '/public', express.static('public'));

// middleware to use for all requests
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, x-access-token, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Credentials', true);
    next(); // make sure we go to the next routes and don't stop here
  });

app.get(prefix + '/', (req, res) => {
    res.send('Welcome to the best API in the world');
});

app.get(process.env.APP_NAME + '/', (req, res) => {
    res.redirect(process.env.APP_NAME + '/public/');
});


// API ROUTES -------------------
var apiRoutes = express.Router();

app.use(prefix, apiRoutes);

var personRoutes = require('./api/routes/person');
apiRoutes.use("/person", personRoutes);

async function main() {
    //mongo
    console.log("[Mongo]::init");
    await DB.connect(() => {
      logger.info("[Mongo]::Mongo Connection Success.");
    });

    process.on('SIGINT', function() {
        console.log('Ctrl C detected');
        DB.close();
        process.exit();
    });

    app.listen(process.env.PORT, () => console.log(`Express Api listening on port ${process.env.PORT}${prefix}!`));
    logger.info('Magic happens at http://localhost:' +process.env.PORT + process.env.APP_NAME);
}

main().then(() => console.log('Fuzzy API Server Started successfully')).catch((ex) => console.log(ex.message));