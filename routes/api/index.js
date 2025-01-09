const router = require('express').Router();
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Add user routes
router.use('/users', userRoutes);

// Add thought routes
router.use('/thoughts', thoughtRoutes);

module.exports = router;
