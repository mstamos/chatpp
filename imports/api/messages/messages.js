import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Messages = new Mongo.Collection("messages");

export default Messages;
