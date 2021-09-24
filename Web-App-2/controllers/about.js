'use strict';

// import all required modules
const accounts = require ('./accounts.js');
const logger = require('../utils/logger');
const developerStore = require('../models/developer-store.js');
const generalStore = require('../models/general-store.js');
const uuid = require('uuid');

// create about object
const about = {
  
  // index method - responsible for creating and rendering the view
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request); 
    logger.info('about rendering',);
    if (loggedInUser) {
      const viewData = {
        title: 'About the Movie App',
        developers: developerStore.getAllDevelopers(),
        generals: generalStore.getAllGenerals(),
        fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
        picture: loggedInUser.picture,
      };
      logger.info('about to render', viewData.generals);
      response.render('about', viewData);
    }
    else response.redirect('/');    
  },
  
  
};

// export the about module
module.exports = about;