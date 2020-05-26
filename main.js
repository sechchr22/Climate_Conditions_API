#!/usr/bin/node
// Getting climate conditions from a indexed City

const GetIp = require('./get_ip').GetIp;
const GetCoordinates = require('./coordinates').coordinates;
const ClimateConditions = require('./climate_conditions').ClimateConditions;
var mongoose = require('mongoose');

if (!process.argv[2]) {
  console.log('Please enter a city');
  return;
};

mongoose.connect("mongodb://localhost:27017/climatedb",
                 {useUnifiedTopology: true, useNewUrlParser: true});

var LogSchema = mongoose.Schema({
  ip: String,
  city: String,
  response: Object
});

var Log = mongoose.model('Log', LogSchema, 'Logs');

GetCoordinates(process.argv[2]).then(LatLong => {
  lat = LatLong[0].toString()
  long = LatLong[1].toString()
  ClimateConditions(lat, long).then(climateconditions => {
    GetIp().then(ip => {
      NewLog = new Log ({ ip: ip,
                          city: process.argv[2],
                          response: climateconditions
                       });
      NewLog.save(function (err, city) {
        if (err) return console.error(err);
        console.log('Log saved succesfully');
        mongoose.connection.close();
      });
    }).catch(err => {
        console.log(err);
    });
  }).catch(err => {
     console.log(err);
  });
}).catch(err => {
    console.log(err);
});
