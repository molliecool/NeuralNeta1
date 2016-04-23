import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Images = new Mongo.Collection('images');
export const Thumbs = new Mongo.Collection('thumbs');
