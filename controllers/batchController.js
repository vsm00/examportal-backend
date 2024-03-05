const Batch = require('../models/Batch')
const Student = require('../models/Student')

const getAllBatches = async (req, res) => {
    try {
        const batches = await Batch.find();
        if(!batches) return res.status(204).json({'message': 'No batches found'});
        res.json(batches.map(batch=>batch.batch_name));
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
const createNewBatch = async (req, res) => {
   
    try {
        const result = await Batch.create({
            
             batch_name: req.body.batch_name
             
        });
        res.json(result)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


const getStudent = async (req,res) =>{
    try {
        const batchName = req.query.batch
        const students = await Student.find({batch_name: batchName})
        res.json(students)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }

}



module.exports={
    getAllBatches,
    createNewBatch,
    getStudent
}