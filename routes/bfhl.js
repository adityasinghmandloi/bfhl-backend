const express = require('express');
const { handleGetRequest, handlePostRequest } = require('../controllers/bfhlController');
const router = express.Router();

router.get('/', handleGetRequest);
router.post('/', handlePostRequest);

module.exports = router;
