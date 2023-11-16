/**
 * client side constants
 *
 * @author  Eric See Kian Seng
 * @version 1.10, 11/06/23
 */

var Core_Constants = {}

//Version
Core_Constants.APPLICATION = "Fuzzy Search Application";
Core_Constants.VERSION = "1.0.0";
Core_Constants.LAST_MODIFIED_DATE="2023";
Core_Constants.AUTHOR = "Eric See"
Core_Constants.ISSUER = "fuzzy-search";
Core_Constants.APPLICATION_META = Core_Constants.APPLICATION + " v"+Core_Constants.VERSION + " " +Core_Constants.LAST_MODIFIED_DATE + " Author:" + Core_Constants.AUTHOR;

//Constants
Core_Constants.COUNTDOWN_TIMEOUT = 20; //20s countdown
Core_Constants.INACTIVITY_TIMEOUT = 600; //600 of idleing
Core_Constants.PASSWORD_MIN_LENGTH = 8;

Core_Constants.DATA_PERIOD_AGO = 30; //30 days
Core_Constants.DATE_END_GRACE_MINS = 5;
Core_Constants.MODE_NEW = 0;
Core_Constants.MODE_EDIT = 1;

Core_Constants.DATE_FORMAT = 'DD/MM/YYYY hh:mm:ss a';