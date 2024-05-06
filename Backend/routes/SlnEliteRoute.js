const express = require('express');
const SlnEliteList = require('../middleware/SlnEliteMiddleware.js');

const router = express();

router.route('/').get(SlnEliteList);

module.exports=router;