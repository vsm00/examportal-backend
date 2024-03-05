const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    phone_number: { type: Number, required: true },
    email:{type:String,required:true},
    dob: { type: String, required: true },
    batch_name:{type:String},
    gender: { type: String },
    exit_test_confirmation: { type: Boolean, default: false },
  });

  module.exports= mongoose.model('Student', studentSchema);