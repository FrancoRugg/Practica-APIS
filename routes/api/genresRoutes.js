const express = require('express');
const router = express.Router();
const genresController = require('../../controllers/api/genresController');

router.get('/api/genres', genresController.list);
router.get('/api/genres/detail/:id', genresController.detail);
router.post("/api/genres/post", genresController.post);
router.delete("/api/genres/:id", genresController.delete);



module.exports = router;