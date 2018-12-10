import React, { Component } from 'react';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Nav  from './Nav';
import Footer  from './Footer';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage';
import Register from './auth/Register';
import Login from './auth/Login';
import Dashboard from './Dashboard';
import SearchUser from './SearchUser';
import Conversation from './Conversation';
import ConversationList from './ConversationList';
import { getUserAgain } from '../actions/actions';
import { getUsers } from '../actions/actions';
import { getConversations } from '../actions/actions';
import { getMessages } from '../actions/actions';


class App extends Component {
  componentDidMount(){
    //re-setting the currentUser
    const token = localStorage.getItem("token");
      if (token) {
        this.props.getUserAgain(token)
      }

      //go get all users
      this.props.getUsers();

      //go get all user conversations
      this.props.getConversations(localStorage.token);

      //go get all messages
      this.props.getMessages();
  }

  render() {
    return (
      <Router>
          <div className="App">
          <Nav/>
          {/* < SearchUser />*/}
          < Switch >
            // <Route exact path='/conversations/:conversationId' component={Conversation} />
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register} />
            <Route exact path='/dashboard' component={Dashboard}/>
            <Route exact path='/' component={Homepage} />
            <Route component={NotFoundPage}/>
          < /Switch >
          </div>
      </Router>
    );
  }
}

//<Footer />/


const mapStateToProps = (state) => {
  return {
    currentUser:state.currentUser
  }
}

const dispatchStateToProps = (dispatch) => {
  return {
    getUserAgain: (token) => dispatch(getUserAgain(token)),
    getUsers: () => dispatch(getUsers()),
    getConversations: (token) => dispatch(getConversations(token)),
    getMessages: () => dispatch(getMessages())
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
