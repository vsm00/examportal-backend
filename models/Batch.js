const mongoose = require('mongoose')
const Schema = mongoose.Schema



const batchSchema = new Schema({
    batch_name: { type: String }
    
  });
  module.exports = mongoose.model('batch', batchSchema)