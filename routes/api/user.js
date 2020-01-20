const express = require('express');
const ExportExcel = require('../../controllers/exportExcel');
const router = express.Router();
router.get('/export', ExportExcel.userList);
module.exports = router;

