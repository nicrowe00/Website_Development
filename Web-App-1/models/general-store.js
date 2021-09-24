'use strict';

const _ = require('lodash');
const JsonStore = require('./json-store');

const generalStore = {

  store: new JsonStore('./models/general-store.json', { generalCollection: [] }),
  collection: 'generalCollection',

  getAllGenerals() {
    return this.store.findAll(this.collection);
  },

  getGeneral(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  addComment(id, comment) {
    const general = this.getGeneral(id);
    general.comments.push(comment);
  },

  removeComment(id, commentId) {
    const general = this.getGeneral(id);
    const comments = general.comments;
    _.remove(comments, { id: commentId});
  },
};

module.exports = generalStore;