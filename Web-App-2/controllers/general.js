'use strict';

const logger = require('../utils/logger');
const generalStore= require('../models/general-store.js');
const uuid = require('uuid');
const accounts = require ('./accounts.js');

const general = {
  index(request, response) {
     const loggedInUser = accounts.getCurrentUser(request);
    const generalId = request.params.id;
    logger.debug('General id = ' + generalId);
    const viewData = {
      title: 'General',
      general: generalStore.getGeneral(generalId),
      fullname: loggedInUser.firstName + ' ' + loggedInUser.lastName,
      picture: loggedInUser.picture,
    };
    response.render('general', viewData);
  },
  deleteComment(request, response){
    const generalId = request.params.id;
    const commentId = request.params.commentid;
    logger.debug('Deleting Comment ${commentId} from General ${generalId}');
    generalStore.removeComment(generalId, commentId);
    response.redirect('/general/' + generalId);
  },
   addComment(request, response) {
    const generalId = request.params.id;
    const general = generalStore.getGeneral(generalId);
    const newComment = {
    id: uuid(),
    username: request.body.username,
    comment: request.body.comment,
  };
    generalStore.addComment(generalId, newComment);
    response.redirect('/general/' + generalId);
  }
}

module.exports = general;