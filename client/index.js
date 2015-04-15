'use strict';

$(document).ready(init);

function init(){
  $('#get-quote').click(getQuote);
}

function getQuote(){
  var symbol = $('#symbol').val().toUpperCase();
  var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + '&callback=?';
  $.getJSON(url, function(response){
    $('#quote').text(JSON.stringify(response));
    console.log(response);
  })
}
