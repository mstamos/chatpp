import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';

const Messages = new Mongo.Collection("messages");


// Meteor.methods({
//     insertMessage(message) {
//         return Messages.insert({
//             message: message
//         })
//     }
// })

export default Messages;
