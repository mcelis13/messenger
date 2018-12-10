import React, { Component } from 'react';
import {connect} from 'react-redux';
import {logoutUser} from '../actions/actions';
import {Link} from 'react-router-dom';

class Nav extends Component {

  logOut = () =>{
    this.props.logoutUser();
  }

  render(){
    return (
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <Link to={'/'}className="active item">
            Home
          </Link>
          <Link to={"/dashboard"} className="item">
            Dashboard
          </Link>
          <Link to={"/login"} className="item">
            Login
          </Link>
          <Link onClick={this.logOut} to={"/login"} className="item">
            Logout
          </Link>
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) =>{
  return state
}

const dispatchStateToProps = (dispatch) =>{
  return{logoutUser: () => dispatch(logoutUser())}
}

export default connect(mapStateToProps, dispatchStateToProps)(Nav);
