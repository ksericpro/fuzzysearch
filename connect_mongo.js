var _config = require('./config');

process.env.APP_NAME = _config.APP_NAME;
process.env.MAX_FILE_SIZE = _config.MAX_FILE_SIZE;
process.env.LOG_FOLDER = _config.LOG_FOLDER;
process.env.API_VERSION = _config.API_VERSION;
process.env.PORT = _config.PORT;
process.env.MONGO_URI = _config.MONGO_URI;
process.env.MONGO_DB = _config.MONGO_DB;

//check and create folder
const fs_extra = require('fs-extra');
console.log(`Checking/Create on folder ${process.env.LOG_FOLDER}`);
fs_extra.ensureDirSync(process.env.LOG_FOLDER);

//logger & db
var LOGGER = require( './custom_modules/logger/loggerutils' );
var logger = LOGGER.getLogger();
var DB = require( './custom_modules/utils/db' );

var fs = require('fs');

writeToFile = async function(outputFilename, data){
  fs.writeFile(outputFilename, JSON.stringify(data, null, 4), function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log("JSON saved to " + outputFilename);
      }
  })
}

async function main() {
    //mongo
    console.log("[Mongo]::init");
    await DB.connect(() => {
      console.log("[Mongo]::Mongo Connection Success.");
    });

    const result = await DB.get().collection("person").find({}).toArray();
    console.log(result);
    writeToFile("data.json", result);

    process.on('SIGINT', function() {
        console.log('Ctrl C detected');
        DB.close();
        process.exit();
    });

    DB.close();

}

main().then(() => console.log('Fuzzy API Server Started successfully')).catch((ex) => console.log(ex.message));