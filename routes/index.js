const router = require('express').Router();
const apiRoutes = require('./api'); // Ensure this points to your API routes

// Use the API routes
router.use('/api', apiRoutes);

// Fallback for unmatched routes
router.use((req, res) => {
  res.status(404).send('Wrong route!');
});

module.exports = router;
