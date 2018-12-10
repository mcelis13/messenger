import React, {Component} from 'react';
import {connect} from 'react-redux';
import { getUserAgain} from '../actions/actions';
import { getConversations } from '../actions/actions';
import { singleConversation } from '../actions/actions';
import ConversationList from './ConversationList';
import Conversation from './Conversation';
import SearchUser from './SearchUser';



class Dashboard extends Component {
  render(){
    return (
      <div className='ui green inverted'>
      {this.props.currentUser.profile ? (<div className="ui four column center aligned grid">
        <div className="ui two column centered grid">
        <h1>{`Welcome ${this.props.currentUser.profile.firstName}`}</h1>
            <SearchUser />
        </div>
        <br></br>
        <div className="center aligned two column row">
          <div className="right floated left aligned six wide column">
            <Conversation />
          </div>
          <div className="left floated right aligned six wide column">
            <ConversationList />
          </div>
        </div>
      </div>) : (<div style={{'background-color': '#A4DCD1'}}>Loading</div>)
      }
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(Dashboard);
