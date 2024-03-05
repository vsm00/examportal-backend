const express = require('express')
const router = express.Router()
const batchController = require('../controllers/batchController')




router.route('/batches')
    .get(batchController.getAllBatches)
    .post(batchController.createNewBatch)


router.route('/students')
    .get(batchController.getStudent)
    
module.exports = router;