/**
 * client side API functions
 * 
 * @author  Eric See Kian Seng
 * @version 1.1.0, 16/11/23
 */

var Api_Utils = {}
Api_Utils.PERSON_URI = "/fuzzy/api/v1/person";

/* start generic promise api*/
Api_Utils.post = function(url, jsonlist, headers){
    var h = headers? headers:{ "Content-type": "application/json" };
    return new Promise(function(resolve, reject) {
      axios.post(url, jsonlist,
          {headers: h })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(JSON.stringify(error.response.data.message));
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
}

Api_Utils.get = function(url, headers){
    var h = headers? headers:{ "Content-type": "application/json"};
  	return new Promise(function(resolve, reject) {
  		axios.get(url,
  				{headers: h })
  		  .then(function (response) {
  				resolve(response.data);
  		  })
  		  .catch(function (error) {
          if (error.response) {
            console.log(JSON.stringify(error.response.data.message));
            reject(error.response.data.message);
          } else {
            reject(error);
          }
  		  });
  	});
}

Api_Utils.delete = function(url, jsonlist, headers){
    var h = headers? headers:{ "Content-type": "application/json"};
    var d = jsonlist? jsonlist:{};
    return new Promise(function(resolve, reject) {
      axios.delete(url,
          { data:d, headers: h })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (error) {
          if (error.response) {
            console.log(JSON.stringify(error.response.data.message));
            reject(error.response.data.message);
          } else {
            reject(error);
          }
        });
    });
}

Api_Utils.put = function(url, jsonlist, headers){
    var h = headers? headers:{ "Content-type": "application/json"};
  	return new Promise(function(resolve, reject) {
  		axios.put(url, jsonlist,
  				{headers: h })
  		  .then(function (response) {
  				resolve(response.data);
  		  })
  		  .catch(function (error) {
          if (error.response) {
            console.log(JSON.stringify(error.response.data.message));
            reject(error.response.data.message);
          } else {
            reject(error);
          }
  		  });
  	});
}
/* end generic promise api*/

/* start person */
Api_Utils.searchPerson = function(jsonlist){
    return Api_Utils.post(Api_Utils.PERSON_URI +"/search", jsonlist);
}
/* stop person */
