/**
 * Main Controller for Person API requeest
 *
 * @author  Eric See Kian Seng
 * @version 1.1.0, 16/11/23
 */

var express = require('express');
var router = express.Router();

const DB = require( '../../custom_modules/utils/db' );
const logger = require( '../../custom_modules/logger/loggerutils' ).getLogger();
const PERSON_COLLECTION = "person";

// GET
router.get("/ping" , (req, res) => {
    res.send("pong");
});

// POST
router.post("/search", async (req, res) => {
   // console.log(req.body);
    var name = req.body.name;
    logger.info(`[Person]:fuzzy search on name=${name}`);
    if (!name){
        return res.status(400).send({ message: 'Parameters not found'});
    }
    var list = await findPerson(DB.getClient(), name.trim());
    return res.json({ message: 'ok', result: list, count: list.length});
});

/* 
 * Custom Start
 */
var elapsed_time = function(note, start){
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    logger.info(elapsed.toFixed(precision) + " ms - " + note); // print message + time
}

async function findPerson(client, name) {
  var list=[];
  try {
      var start = process.hrtime();
      const pipeline = [
          {
          '$search': {
              'index': 'fuzzy_person_searchindex', 
              'text': {
              'query': name, 
              'path': 'primary_name', 
              'fuzzy': {}
              }
          }
          }, {
          '$limit': 5000
          }, {
          '$project': {
              '_id': 0, 
              'primary_name': 1, 
              'gender': 1, 
              'score': {
              '$meta': 'searchScore'
              }
          }
          }
      ];
      const aggCursor = client.db(process.env.MONGO_DB)
                      .collection(PERSON_COLLECTION)
                      .aggregate(pipeline);
      
  
      await aggCursor.forEach(personListing => {
          console.log(`${personListing.primary_name} : ${personListing.gender}" : ${personListing.type} : ${personListing.score}`);
          list.push(personListing);
      });

      logger.info("[Person]:"+list.length +" record(s)");
      elapsed_time("[Person]:DB Query", start);
  } catch(e) {
       logger.errof(e);
  } finally {
      return list;
  }
}
/* 
 * Custom End
 */

module.exports = router;