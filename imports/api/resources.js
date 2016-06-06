import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Accounts } from 'meteor/accounts-base';

/*class ResourcesCollection extends Mongo.Collection {

}*/

export const Resources = new Mongo.Collection('Resources');


Meteor.methods({
  //add resource id to users list of favorited Resources
  'addResource': function(resourceID) {
    var currentUserId = Meteor.userId();
    Meteor.users.update({_id: currentUserId},{$push: { favoritedResources: resourceID }});
  }

  'isFavorite': function(resourceID) {

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
