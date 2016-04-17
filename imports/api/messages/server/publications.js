import { Meteor } from 'meteor/meteor';
import Messages from '../messages';

Meteor.publish('allMessages', () => {
    return Messages.find();
})
