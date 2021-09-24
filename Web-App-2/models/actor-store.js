'use strict';

const actorStore = {

  actors: require('./actor-store.json').actors,

  getAllActors() {
    return this.actors;
  },

};

module.exports = actorStore;