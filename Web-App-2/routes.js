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
const accounts = require ('./controllers/accounts.js');
const general = require('./controllers/general.js');


// connect routes to controllers
router.get('/start', start.index);
router.get('/dashboard', dashboard.index);
router.get('/performers', performers.index);
router.get('/about', about.index);
router.get('/general/:id', general.index);

router.get('/compilation/:id', compilation.index);

router.get('/compilation/:id/deleteMovie/:movieid', compilation.deleteMovie);
router.get('/dashboard/deleteCompilation/:id', dashboard.deleteCompilation);
router.get('/general/:id/deleteComment/:commentid', general.deleteComment);
router.post('/compilation/:id/updateMovie/:movieid', compilation.updateMovie);
router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);
router.post('/compilation/:id/addmovie', compilation.addMovie);
router.post('/dashboard/addcompilation', dashboard.addCompilation);
router.post('/general/:id/addcomment', general.addComment);


// export router module


module.exports = router;
