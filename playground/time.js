// Timestamps are relative to a specific time in history called the Unix Epic and that moment starts us off on Jan 1st 1970 00:00:00 am
// negative values will be in the past relative to that point in time and the same goes for positive values (values are in millisecond)
var moment = require('moment');

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('MMM Do YYYY'));
console.log(date.format('h:mm A'));
