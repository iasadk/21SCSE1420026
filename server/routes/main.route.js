const { Router } = require('express');
const controller = require('../controllers/main.controller');
const router = Router({ mergeParams: true });


router.get("/categories/:categoryName/products", controller.list)

module.exports = router