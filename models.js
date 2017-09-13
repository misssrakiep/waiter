const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = function(mongoUrl) {
  mongoose.Promise = global.Promise;

  //mongoose connection startup
  mongoose.connect(mongoUrl, {
    useMongoClient: true
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('We are connected to: ' + mongoUrl);
    }
  });

  //models to save shifts to the database of waiters

  var waiterSchema = new Schema({
    username: String,
    days: [String]
  });

  const waiterShifts = mongoose.model('waiterShifts', waiterSchema);

  return {
    waiterShifts
  }
}
