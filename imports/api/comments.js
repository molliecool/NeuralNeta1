import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Accounts } from 'meteor/accounts-base';
import { Resources } from './resources.js'


export const Comments = new Mongo.Collection('Comments');
