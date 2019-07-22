const mongoose = require('mongoose');

// schema
const rapperSchema = new mongoose.Schema({
  name: String,
  from: String,
  message: [String]
});

//.model() is a method it returns a model object
// first arguemnt is the name of the collection
// we are adding documents too, in mongodb it will be authors
// second argument is what the documents in the collection
// should look like
const Rapper = mongoose.model('Rapper', rapperSchema);

module.exports = Rapper;