'use strict';

// import all required modules
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const actorStore = require('../models/actor-store.js');

// create about object
const performers = {
 
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request); 
    logger.info('about rendering');
    if (loggedInUser) {
      const viewData = {
        title: 'Best Actors',
        actors: actorStore.getAllActors(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture,
      };
      response.render('performers', viewData);
    }
    else response.redirect('/');    
  },
};

// export the about module
module.exports = performers;