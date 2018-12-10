import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from './User';
import {getUsers} from '../actions/actions'

//on click will show the component with all users
  //will need to create a dispatch action that will fetch for all users
  // will need to create mapStateToProps to access the all users from state
  // will need to map through all the users recieved through props and turned
  //them into user components
  //this list will need a search feature to look for users in the application

class SearchUser extends Component {

  constructor(){
    super()
    this.state = {
      searchInput:'',
      filteredUsers: []
    }
  }

  componentDidMount(){
    this.props.getUsers();
  }

  handleChange = (event)  => {
    if (event.target.value === ''){
      let copyArray = [...this.props.allUsers]
      let withOutUser = copyArray.filter((user) => user._id !== this.props.currentUser._id)
      this.setState({filteredUsers: withOutUser})
    }else{
      const newFilterTerm = event.target.value;
      let copyArray = [...this.props.allUsers]
      let withOutUser = copyArray.filter((user) => user._id !== this.props.currentUser._id)
      const filtered = withOutUser.filter((user) => user.profile.firstName.toLowerCase().includes(newFilterTerm.toLowerCase()) || user.profile.lastName.toLowerCase().includes(newFilterTerm.toLowerCase()))
      this.setState({filteredUsers: filtered})
    }
  }

  returnFilteredUsers = () => {
    let userComponents = this.state.filteredUsers.map((user) => <User key={user._id} user={user}/>)
    return userComponents;
  }

  handleMouseDown = (event) => {
    this.setState({filteredUsers: []})
  }

  render(){
    return (
      <div onMouseDown={this.handleMouseDown} className="ui search">
        <input onChange={this.handleChange} className="prompt" type="text" placeholder="Find a friend and Chat" name={this.state.searchInput}/>
        <div className="results"></div>
          {this.returnFilteredUsers()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const dispatchStateToProps = (dispatch) => {
  return { getUsers: (state) => dispatch(getUsers(state))}
}

export default connect(mapStateToProps, dispatchStateToProps)(SearchUser);
