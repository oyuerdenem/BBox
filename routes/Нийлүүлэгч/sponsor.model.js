const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const sponsorSchema = Schema({
    name: {
      type: String,
      required : true
    },
    location: {
      type: String,
      required: true

    }
  });

module.exports = mongoose.model('Sponsor', sponsorSchema);