import React from 'react';
import { Meteor } from 'meteor/meteor';
import Messages from '../../api/messages/messages';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../components/App';

// export default createContainer(() => {
//   const publicHandle = Meteor.subscribe('lists.public');
//   const privateHandle = Meteor.subscribe('lists.private');
//   return {
//     user: Meteor.user(),
//     loading: !(publicHandle.ready() && privateHandle.ready()),
//     connected: Meteor.status().connected,
//     menuOpen: Session.get('menuOpen'),
//     lists: Lists.find({ $or: [
//       { userId: { $exists: false } },
//       { userId: Meteor.userId() },
//     ] }).fetch(),
//   };
// }, App);

export default createContainer(() => {
    const allMessages = Meteor.subscribe('allMessages');
    return {
        loading: allMessages.ready(),
        messages: Messages.find().fetch()
    }

}, App);
