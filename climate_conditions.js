#!/usr/bin/node
// Function to get climate conditions from DarkSky API

const request = require('request-promise');
const DarkSkyKey = '88030114c5e47763a011a75e7a10c633';

exports.ClimateConditions = function (lat, long) {
  const url = `https://api.darksky.net/forecast/${DarkSkyKey}/${lat},${long}`;
  return request(url).then(body => {
    const climateconditions = JSON.parse(body);
    return (climateconditions);
  });
};
