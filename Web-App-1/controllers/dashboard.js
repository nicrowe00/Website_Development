'use strict';

// import all required modules
const logger = require('../utils/logger');
const compilationStore = require('../models/compilation-store.js');
const uuid = require('uuid');

// create dashboard object
const dashboard = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('dashboard rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Movie App Dashboard',
      compilations: compilationStore.getAllCompilations(),
    };
    
    // render the dashboard view and pass through the data
    logger.info('about to render', viewData.compilations);
    response.render('dashboard', viewData);
  },
  
  deleteCompilation(request, response) {
    const compilationId = request.params.id;
    logger.debug(`Deleting Compilation ${compilationId}`);
    compilationStore.removeCompilation(compilationId);
    response.redirect('/dashboard');
  },
   addCompilation(request, response) {
    const newCompilation = {
      id: uuid(),
      title: request.body.title,
      movies: [],
    };
    compilationStore.addCompilation(newCompilation);
    response.redirect('/dashboard');
  },
};

// export the dashboard module
module.exports = dashboard;