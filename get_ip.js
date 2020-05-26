#!/usr/bin/node
// Get IP with help of ipinfo.io

const request = require('request-promise');

exports.GetIp = function () {
  const url = 'http://ipinfo.io';
  return request(url).then(body => {
    const response = JSON.parse(body);
    return (response.ip);
  });
};
