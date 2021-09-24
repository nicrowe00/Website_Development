'use strict';

// import all required modules
const logger = require('../utils/logger');
const actorStore = require('../models/actor-store.js');

// create about object
const performers = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    
    // display confirmation message in log
    logger.info('performers rendering');
    
    // create view data object (contains data to be sent to the view e.g. page title)
    const viewData = {
      title: 'Best Actors',
      actors: actorStore.getAllActors(),
    };
    
    // render the about view and pass through the data
    response.render('performers', viewData);
  },
};

// export the about module
module.exports = performers;