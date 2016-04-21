import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ResourcesCollection extends Mongo.Collection {

}

/*      isBook: Boolean,
      isGame: Boolean,
      isWebsite: Boolean,
      isClassActivity: Boolean
      isMath: Boolean,
      isScience: Boolean,
      isHistory: Boolean,
      isHealth: Boolean*/

export const Resources = new ResourcesCollection('Resources');


Resources.schema = new SimpleSchema({
  _id:  {type: Number},
  name: {type: String},
  description: {type: String},
  type: {type:[Boolean]},
  subject: {type: [Boolean]}
});
