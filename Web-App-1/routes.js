'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();

// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const performers = require('./controllers/performers.js');
const compilation = require('./controllers/compilation.js');
const about = require('./controllers/about.js');

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/performers', performers.index);
router.get('/about', about.index);

router.get('/compilation/:id', compilation.index);

router.get('/compilation/:id/deleteMovie/:movieid', compilation.deleteMovie);
router.get('/dashboard/deleteCompilation/:id', dashboard.deleteCompilation);




// export router module


module.exports = router;
router.post('/compilation/:id/addmovie', compilation.addMovie);
router.post('/dashboard/addcompilation', dashboard.addCompilation);