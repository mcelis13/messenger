import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singleConversation } from '../actions/actions';
import { getMessages } from '../actions/actions';
import { sendMessage } from '../actions/actions';
import socket from '../sockets';
import Message from './Message';
import scrollToComponent from 'react-scroll-to-component';


class Conversation extends  Component {

  constructor(){
    super()
    this.state = {
      newMessage: ''
    }
  }
  //
  // componentDidMount(){
  //   if(this.props.history && this.props.history.location.pathname.slice(15) != undefined){
  //     let conversationId = this.props.history.location.pathname.slice(15);
  //     this.props.getMessages()
  //     // this.props.singleConversation(conversationId)
  //     //debugger
  //     this.findMessages(conversationId)
  //     socket.emit('enter conversation', conversationId);
  //   }else{
  //     let conversationId = this.props.conversation._id;
  //     this.props.getMessages()
  //     this.props.singleConversation(conversationId)
  //     this.findMessages(conversationId)
  //     socket.emit('enter conversation', conversationId);
  //   }
  //
  // }
  //
  // getConversationId = () => {
  //
  //   if(this.props.history.location.pathname.slice(15) === true){
  //     let conversationId = this.props.history.location.pathname.slice(15);
  //     return conversationId;
  //
  //   }else if(this.props.history.location.pathname.slice(15) === false){
  //     let conversationId = this.props.conversation._id;
  //     return conversationId;
  //   }
  // }
  //
  // fullName = () => {
  //   if(!this.props.currentUser){
  //     let firstName = this.props.currentUser.profile.firstName;
  //     let lastName = this.props.currentUser.profile.lastName;
  //     let fullName = `${firstName} ${lastName}`
  //     return fullName;
  //   }
  // }
  //
  // findMessages = (currentConversationId) => {
  //   let conversationMessages = this.props.messages.filter(message => message.conversationId === currentConversationId)
  //   let copyOfMessages = [...conversationMessages];
  //   this.setState({conversationMessages: copyOfMessages})
  // }
  //
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }
  //
  sendNewMessage = (event) => {
    event.preventDefault();
    let conversationId = this.props.currentConversation.conversationId;
    let token = localStorage.token;
    let message = this.state.newMessage
    //needs conversationId, user token, message
    this.props.sendMessage(conversationId, token, message)
      .then(resp => socket.emit('enter conversation', conversationId));
    this.setState({newMessage: ''})
  }


  render(){
    //console.log(this.props.recipient, 'consoling recipient in conversation')
    return(
      <div>
        <div style={{width: '100%', height: '150px', overflow: 'scroll'}}className="ui large card">
          {this.props.currentConversation.messages ? (<div>
          <div className='left floated meta'>{this.props.currentConversation.messages.map((message) => <Message key={message._id} message={message}/>)}</div>
          </div>): <div style={{height: '100%', 'padding-top': '32px'}}onClick={this.handleClick} className="ui small card">
            <div className="content">
              <div className="right floated meta">SELECT THE CONVERSATION YOU WOULD LIKE TO VIEW</div>
            </div>
          </div>}
        </div>

        {this.props.currentConversation.messages ? <div><div className="ui form">
          <div className="field">
            <input type='text' onChange={this.handleChange} name='newMessage' value={this.state.newMessage} />
          </div>
        </div><button className='ui green basic button'onClick={this.sendNewMessage}>Send</button></div> : null}
      </div>
  )
  }
}

const mapStateToProps = (state) => {
  return state
}

const dispatchStateToProps = (dispatch) => {
  return {
    singleConversation: (conversationId) => dispatch(singleConversation(conversationId)),
    getMessages: () => dispatch(getMessages()),
    sendMessage: (conversationId, token, message) => dispatch(sendMessage(conversationId, token, message))
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(Conversation);
