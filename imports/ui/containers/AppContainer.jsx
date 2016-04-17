import React from 'react';
import { Meteor } from 'meteor/meteor';
import Messages from '../../api/messages/messages';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../components/App';

export default createContainer(() => {
    const allMessages = Meteor.subscribe('allMessages');
    return {
        loading: allMessages.ready(),
        messages: Messages.find().fetch()
    }

}, App);
