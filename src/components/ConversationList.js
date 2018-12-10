import React, { Component } from 'react';
import ConversationTile from './ConversationTile';
import {connect} from 'react-redux';
import {singleConversation} from '../actions/actions';
import Message from './Message';
import Conversation from './Conversation';



class ConversationList extends Component {

  render(){
    console.log(this.props.recipient)
    let conversationComponents;
    if (this.props.conversations[0]) {
      conversationComponents = this.props.conversations[0].map((conversation) => <ConversationTile key={conversation._id} conversation={conversation} recipient={this.props.recipient}/>)
    }
    return(
      <div>
      <br></br>
      {conversationComponents}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

const dispatchStateToProps = (dispatch) => {
  return {singleConversation: (conversationId) => dispatch(singleConversation(conversationId))}
}

export default connect(mapStateToProps)(ConversationList);
