const express = require('express');
   const { register, login, getCurrent } = require('../controllers/authController.ts');
   const { authenticateToken } = require('../../middleware/authMiddleware.ts');

   const router = express.Router();

   router.post('/register', register);
   router.post('/login', login);
   router.get('/me', authenticateToken, getCurrent);

   module.exports = router;