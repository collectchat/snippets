// Prerequisite : jQuery
// For two letter country codes, use  ISO-2 country codes or see http://country.io/names.json

$.get("https://ipinfo.io", function(response) {
    if(response.country === 'us') {
      //Collect.chat snippet code for us audience here
    }
}, "jsonp");
