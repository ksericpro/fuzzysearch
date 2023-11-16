/**
 * DB Instance
 *
 * @author  Eric See Kian Seng
 * @version 1.1.0, 16/11/23
 */

const LOGGER = require('../logger/loggerutils.js');
const logger = LOGGER.getLogger();

const { MongoClient } = require('mongodb');
const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB = process.env.MONGO_DB;

let db;
let client

async function connect(callback){
    console.log("Attempting to connect.."+MONGO_URI);
    client = new MongoClient(MONGO_URI);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connecting to ", MONGO_DB);
        db = client.db(MONGO_DB);
        callback();

    } catch(e) {
        logger.error("Fail to connect to Mongo.", e);
    }
}

function getClient(){
    return client;
}

function get(){
    return db;
}

function close(){
    logger.info("Disconnect MongoClient.");
    if (client){
        client.close();
    }
}

module.exports = {
    connect,
    get,
    close,
    getClient
};
