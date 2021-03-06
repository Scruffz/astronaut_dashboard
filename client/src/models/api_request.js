var ApiRequest = function() {
}

ApiRequest.prototype.makeRequest = function(url, callback) {
  var request = new XMLHttpRequest()
  request.open("GET", url);
  request.onload = callback;
  request.send();
}

ApiRequest.prototype.makePostRequest = function(url, jsonObject, callback){
  var jsonString = JSON.stringify(jsonObject);
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = callback;
  request.send(jsonString);
}


module.exports = ApiRequest;