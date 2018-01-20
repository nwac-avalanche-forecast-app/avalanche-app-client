'use strict';

var app = app || {};

(module => {

  const __API_URL__ = 'http://www.nwac.us/api/v2/';

  function avalancheForecast() {}

  avalancheForecast.getForecast = avalancheRegion => {
    $.getJSON(`${__API_URL__}avalanche-region-forecast/?format=json&zone=${avalancheRegion}`)
      .then(avalancheRegion => console.log(avalancheRegion))
      .catch(error => console.log('error tell us', error));
  };

  avalancheForecast.getForecast('olympics');

  module.avalancheForecast = avalancheForecast;

})(app);