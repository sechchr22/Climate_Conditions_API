#!/usr/bin/node
// Function to get coordinates from Mapbox API

const request = require('request-promise');
const AccessToken = 'pk.eyJ1IjoidmFsbnRpbmEyMjA1IiwiYSI6ImNrYWxxczJoMzE0eXIzMHF1djF5Z2E5NDkifQ.7NtYT6UVvs2I3MplmchpLA';

exports.coordinates = function (city) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${AccessToken}`;
  return request(url).then(body => {
    const LatLong = JSON.parse(body).features[0].center.reverse();
    return (LatLong);
  });
};
