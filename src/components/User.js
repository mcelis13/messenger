import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipientState } from '../actions/actions';
import {Link} from 'react-router-dom';
import { newConversation } from '../actions/actions';
import { withRouter } from 'react-router-dom';
import socket from '../sockets';


class User extends Component {
  //This component will render the user name and the user last Name
  //This component set the recipient state in the store
  //This component will need to dispatch a newConversation action
  //This component will need to link to a conversation component
    handleRecipientPicked = (event) => {
      //this is not redering ever time that i reload the page need to see if I can set it in App.js
      this.props.setRecipientState(this.props.user)
      //need to post a conversation on the back end
      //link user to the conversation component using Link
      //with router part of react router dom
      const currentUser = localStorage.token;
      const recipientId = this.props.user._id;
      const capitalizedFirstName = `${this.props.user.profile.firstName[0].toUpperCase()}${this.props.user.profile.firstName.slice(1)}`;
      const capitalizedLastName = `${this.props.user.profile.lastName[0].toUpperCase()}${this.props.user.profile.lastName.slice(1)}`;
      const fullName = `${capitalizedFirstName} ${capitalizedLastName}`;
      const message = `Welcome you have started a conversation with ${fullName}.`;
      this.props.newConversation(currentUser, recipientId, message)
      .then(resp => socket.emit('enter conversation', resp.conversationId));

      //.then((resp) => this.props.history.push(`/conversations/${resp.conversationId}`))
      //once I have the new conversationId make it the selected conversation id in the redux store
      //withRouter re-route to conversation component
    }

    render(){
      console.log(this.props.recipient, 'currently console.logging the recipient as a prop')
      return (
        <div>
          <h1 onMouseDown={this.handleRecipientPicked}>{this.props.user.profile.firstName} {this.props.user.profile.lastName}
          </h1>
        </div>
      )
    }
}
const mapStateToProps = (state) =>{
  return state
}


const dispatchStateToProps = (dispatch) => {
  return {
     setRecipientState: (recipient) => dispatch(setRecipientState(recipient)),
     newConversation: (user, recipientId, message) => dispatch(newConversation(user, recipientId, message))
   }
}

export default withRouter(connect(mapStateToProps,{ setRecipientState,newConversation })(User));
