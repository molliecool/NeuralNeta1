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
  'isFavorite': function(resourceID) {
    //check if a resource is in the favorite list
    var currentUserId = Meteor.userId();
    if(Meteor.users.find({ favoritedResources: resourceID })) {
      console.log("is favorite");
    }
    else {
      console.log("is not favorite");
    }
  },
*/
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
