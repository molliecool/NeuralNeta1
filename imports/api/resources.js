import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

class ResourcesCollection extends Mongo.Collection {

}


export const Resources = new ResourcesCollection('Resources');


Resources.schema = new SimpleSchema({
  name:         {
    type: String
  },
  description:  {
    type: String
  },
  type:         {
    type: String
  },
  subject:      {
    type: String
  }
});
