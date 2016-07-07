import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Accounts } from 'meteor/accounts-base';
import { Comments } from './comments.js';

/*class ResourcesCollection extends Mongo.Collection {

}*/

export const Resources = new Mongo.Collection('Resources');


Meteor.methods({
  //add resource id to users list of favorited Resources
  'addFavorite': function(resourceID) {
    var currentUserId = Meteor.userId();
    Meteor.users.update({_id: currentUserId},{$push: { favoritedResources: resourceID }});
  },
/*
  'getFavorites': function() {
    //check if a resource is in the favorite list
    var currentUserId = Meteor.userId();
    return Meteor.users.find({ favoritedResources: resourceID });
  },*/

  'removeFavorite': function(resourceID) {
    //removes ID from favorited list - mollie put checks in here
    var currentUserId = Meteor.userId();
    Meteor.users.update({_id: currentUserId},{$pull: { favoritedResources: resourceID }})
  },

  'getResource': function(resourceID) {
    // console.log(Resources.find({_id: resourceID}).fetch());
    return Resources.find({_id: resourceID}).fetch();
  },

  'getFavorites': function(resourceIDs) {
    if(!this.userId) return null;
    var favorites = [];

    for(i in resourceIDs) {
      var obj = Resources.find({_id: resourceIDs[i]}).fetch();
      //console.log("resourceID " + resourceIDs[i]);
      //console.log(obj[0]);
      favorites.push(obj[0]);
    }

    //console.log(favorites);
    return favorites;
  },
});
