const { response } = require('express')
const Student = require('../models/Student')




// CRUD Operations

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        if(!students) return res.status(204).json({'message': 'No students found'});
        res.json(students);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createNewStudent = async (req, res) => {
    if(!req?.body?.name){
        return res.status(400).json({'message': 'name is required'});
    }
    console.log(req.body)
    try {
        const result = await Student.create({
            id:req.body.id,
             name: req.body.name,
            phone_number: req.body.phone_number,
            email:req.body.email,
            dob: req.body.dob,
             batch_name: req.body.batch_name,
             gender: req.body.gender

        });
        res.status(200).json({'message': 'Student profile created successfully'})
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateStudent = async (req, res) => {
    if(!req?.params?.id){
        return res.status(400).json({'message': 'ID parameter is required'});
    }
    try {
        const id = req.params.id;
        const student = await Student.findById(id);
        if(!student){
            return res.status(204).json({'message': `No student matches ID ${req.params.id}`});
        }
        const updatedData = await Student.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json({'message': 'Student updated successfully'})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteStudent = async (req, res) => {
    if(!req?.params?.id){
        return res.status(400).json({'message': 'Student ID required'});
    }
    try {
        const id = req.params.id;
        const student = await Student.findById(id);
        if(!student){
            return res.status(204).json({'message': `No student matches ID ${req.body.id}`});
        }
        const result = await Student.findByIdAndDelete(id);
        res.status(200).json({'message': 'Student deleted successfully'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getStudent = async (req, res) => {
    if(!req?.params?.id){
        return res.status(400).json({'message': 'Student ID required'});
    }
    try {
        const student = await Student.findOne({_id: req.params.id}).exec();
        if(!student){
            return res.status(204).json({'message': `No student matches ID ${req.params.id}`});
        }
        res.json(student);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllStudents,
    createNewStudent,
    updateStudent,
    deleteStudent,
    getStudent
}