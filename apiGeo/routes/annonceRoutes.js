const express = require('express');
const router = express.Router();
const annonceController = require('../controllers/annonceController');

router.post('/annonces', annonceController.createAnnonce);
router.get('/annonces', annonceController.getAnnonces);
router.delete('/:id', annonceController.deleteAnnonce);
router.put('/:id', annonceController.putAnnonce);




module.exports = router;
