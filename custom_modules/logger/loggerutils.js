/**
 * Implement Logger for whole application
 *
 * @author  Eric See Kian Seng
 * @version 1.1.0, 16/11/23
 */

'use strict';

var loggerutils = loggerutils || {};

var loggerutils = module.exports = {
    module: { 'version': '1.0.0' }
};

//logger
const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
loggerutils.tsFormat = () => (new Date()).toLocaleTimeString();
loggerutils.logDir = process.env.LOG_FOLDER;
loggerutils.logger;
loggerutils._init = false;

console.log("[loggerutils]::LogDir="+process.env.LOG_FOLDER);
console.log("[loggerutils]::Env="+env);

loggerutils.init = function()
{
	//console.log("init");
	if (!fs.existsSync(loggerutils.logDir)) {
		fs.mkdirSync(loggerutils.logDir);
	}

  loggerutils.logger = winston.createLogger({
	//loggerutils.logger = new (winston.Logger)({
	transports: [
    // colorize the output to the console
		new (winston.transports.Console)({
			timestamp: loggerutils.tsFormat,
			colorize: true,
			level: 'info',
      handleExceptions: true
		}),

		new (require('winston-daily-rotate-file'))({
			filename: loggerutils.logDir+process.env.APP_NAME,
			timestamp: loggerutils.tsFormat,
			datePattern: 'yyyy-MM-DD',
      zippedArchive: true,
      maxSize: '40m',
      maxFiles: '7d',
			//prepend: true,
			level: env === 'development' ? 'verbose' : 'info',
      handleExceptions: true
		})
		]
	});

	loggerutils._init = true;
}

loggerutils.ping = function() {
    return "pong";
};

loggerutils.getLogger = function()
{
	if (!loggerutils._init) loggerutils.init();
	return loggerutils.logger;
}
