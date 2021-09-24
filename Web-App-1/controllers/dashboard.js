'use strict';

// import all required modules
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const compilationStore = require('../models/compilation-store.js');
const uuid = require('uuid');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    logger.info('dashboard rendering');
    const loggedInUser = accounts.getCurrentUser(request);
    if (loggedInUser) {
    const viewData = {
      title: 'Movie Dashboard',
      compilations: compilationStore.getUserCompilations(loggedInUser.id),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture,
    };
    logger.info('about to render' + viewData.compilations);
    response.render('dashboard', viewData);
    }
    else response.redirect('/');
  },
  
  deleteCompilation(request, response) {
    const compilationId = request.params.id;
    logger.debug(`Deleting Compilation ${compilationId}`);
    compilationStore.removeCompilation(compilationId);
    response.redirect('/dashboard');
  },
   addCompilation(request, response) {
    const date = new Date();
    const loggedInUser = accounts.getCurrentUser(request);
    const newCompilation = {
      id: uuid(),
      userid: loggedInUser.id,
      title: request.body.title,
      picture: request.files.picture,
      date: date,
      movies: []
    };
    logger.debug("Creating a new Compilation" + newCompilation);
    compilationStore.addCompilation(newCompilation, function() {
      response.redirect("/dashboard");
    });
  } 
};

// export the dashboard module
module.exports = dashboard;