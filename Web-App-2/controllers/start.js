'use strict';

// import all required modules
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const compilationStore = require('../models/compilation-store.js');

// create start object
const start = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {

    const loggedInUser = accounts.getCurrentUser(request);
    logger.info('start rendering');

    if(loggedInUser){

      const compilations = compilationStore.getAllCompilations();
      let numCompilations = compilations.length;
      let numMovies = 0;
      for (let i in compilations) {
        numMovies = numMovies + compilations[i].movies.length;
      }

      const viewData = {
        title: 'Welcome to the Movie App!',
        totalCompilations: numCompilations,
        totalMovies: numMovies,
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture,
      };

      response.render('start', viewData);
    }
    else response.redirect('/');
  },
};

// export the start module
module.exports = start;