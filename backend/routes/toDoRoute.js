const express = require('express');
const { get, post, put } = require('../controller/TodoControl');
const router =express.Router()


router.route('/').get(get)
router.route('/:id').delete(put)
router.route('/create').post(post)

module.exports = router