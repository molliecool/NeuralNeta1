import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Accounts } from 'meteor/accounts-base';

/*class ResourcesCollection extends Mongo.Collection {

}*/

export const Resources = new Mongo.Collection('Resources');


Meteor.methods({
  'addResource': function(test) {
    console.log(test);
    var currentUserId = Meteor.userId();
    //Resources.update({_id: })
    console.log(currentUserId);
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
