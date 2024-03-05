const mongoose = require('mongoose')



const testAdminSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    
  });

  module.exports =mongoose.model('Testadmin', testAdminSchema)