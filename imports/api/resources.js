import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Accounts } from 'meteor/accounts-base';

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
  }
});

/*      isBook: Boolean,
      isGame: Boolean,
      isWebsite: Boolean,
      isClassActivity: Boolean
      isMath: Boolean,
      isScience: Boolean,
      isHistory: Boolean,
      isHealth: Boolean*/



/*
Resources.schema = new SimpleSchema({
  _id:  {type: Number},
  name: {type: String},
  description: {type: String},
  type: {type:[Boolean]},
  subject: {type: [Boolean]}
});
*/
