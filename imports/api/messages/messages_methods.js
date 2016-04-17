import { Meteor } from 'meteor/meteor';
import Messages from './messages';

Meteor.methods({
    insertMessage(message) {
        return Messages.insert({
            message: message
        })
    },
    deleteMessage(id) {
        return Messages.remove(id);
    }
})
