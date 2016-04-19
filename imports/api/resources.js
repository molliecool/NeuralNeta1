import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ResourcesCollection extends Mongo.Collection {

}


export const Resources = new ResourcesCollection('Resources');

/*
Resources.schema = new SimpleSchema({
  name:         {type: String},
  description:  {type: Number, defaultValue: 0},
  type:         {type: String, regEx: SimpleSchema.RegEx.Id, optional: true},
  subject:      {type: String}
});

Resources.attachSchema(Resources.schema);
*/
