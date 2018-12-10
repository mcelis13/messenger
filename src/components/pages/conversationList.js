import React, {Component} from 'react';
import {connect} from 'react-redux';

class ConversationList extends Component{
  render(){
    return(<div>Conversation component as of right now</div>)
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(ConversationList)
