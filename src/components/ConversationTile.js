import React, { Component } from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../actions/actions';
import Message from './Message.js';
import {singleConversation} from '../actions/actions';

//conversation tile
class ConversationTile extends Component {

//IN HERE I NEED THE CONVERSATION RECIPIENT AND THE FIRST MESSAGE TO display
//THIS COMPONENT ALSO NEEDS A ONCLICK FUNCTION THAT WILL DISPLAY THE FULL
//CONVERSATION ON THE SIDE

//This no longer goes in this component this will go in the component that makes new messages
//that would be the conversation component
    // handleMessageInput = (event) =>{
    //   this.setState({[event.target.name]: event.target.value})
    // }
    //
    handleClick = (event, state) => {
      event.preventDefault()
      this.props.singleConversation(this.props.conversation._id)
    }

  render(){
    let user = this.props.currentUser;
    //need to set recipient new recipient when we get here! so I need to look at the getConversationId
    //and go find the recipient based on their id in the conversation
    console.log(this.props.recipient, 'my messages in conversationTile')
    return (
      <div>
      {user.profile ?
      (<div onClick={this.handleClick} className="ui small card">
        <div className="content">
          <div className="right floated meta">{this.props.currentUser.profile.firstName} {this.props.currentUser.profile.lastName} CLICK TO SEE MESSAGES</div>
        </div>
      </div>) : <button class="ui secondary loading button">Loading</button>}
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state
}

const dispatchStateToProps = (dispatch) => {
  return {singleConversation: (conversationId) => dispatch(singleConversation(conversationId))}
}

//needs to go above were recipient name belongs
//<div className="right floated meta">{this.props.recipient.profile.firstName} {this.props.recipient.profile.lastName}</div>
// <div className="content">
// Click to see messages
// {/*this.props.currentConversation.messages && this.props.currentConversation.messages.length > 0 ? <div className='description'>{this.props.currentConversation.messages[this.props.currentConversation.messages.length -1].body}</div><div>Click to see messages</div>*/}
// </div>


export default connect(mapStateToProps, dispatchStateToProps)(ConversationTile);
