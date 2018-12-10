import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../../actions/actions.js';
import {withRouter} from 'react-router-dom';

class Register extends Component {
  constructor(){
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    }
  }

  handleUserInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event, state) => {
    event.preventDefault();
    this.props.registerUser(state)
    .then((resp) => this.props.history.push('/dashboard'))

  }

  render(){
    return (
      <div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="clipboard list icon"></i>
             Register
        </div>
        <div className="ui green inverted inline segment">
          <div className="ui inverted form">
            <div className="two fields">
              <div className="field">
                <label>First Name</label>
                <input onChange={this.handleUserInput} placeholder="First Name" type="text" name='firstName' value={this.state.firstName} />
              </div>
              <div className="field">
                <label>Last Name</label>
                <input onChange={this.handleUserInput} placeholder="Last Name" type="text" name="lastName" value={this.state.lastName}/>
              </div>
              <div className="field">
                <label>E-mail</label>
                <input onChange={this.handleUserInput} placeholder="E-mail" type="text" name="email" value={this.state.eMail}/>
              </div>
              <div className="field">
                <label>Password</label>
                <input onChange={this.handleUserInput} placeholder="password" type="text" name='password' value={this.state.password}/>
              </div>
            </div>
            <div onClick={(event) => this.handleSubmit(event, this.state)} className="ui submit button">Submit</div>
          </div>
        </div>
      </div>
    );
  }
}


// <div className="ui green inverted segment">
//   <div className="ui inverted form">
//     <div className="two fields">
//       <div className="field">
//         <label>First Name</label>
//         <input onChange={this.handleUserInput} placeholder="First Name" type="text" name='firstName' value={this.state.firstName} />
//       </div>
//       <div className="field">
//         <label>Last Name</label>
//         <input onChange={this.handleUserInput} placeholder="Last Name" type="text" name="lastName" value={this.state.lastName}/>
//       </div>
//       <div className="field">
//         <label>E-mail</label>
//         <input onChange={this.handleUserInput} placeholder="E-mail" type="text" name="email" value={this.state.eMail}/>
//       </div>
//       <div className="field">
//         <label>Password</label>
//         <input onChange={this.handleUserInput} placeholder="password" type="text" name='password' value={this.state.password}/>
//       </div>
//     </div>
//     <div onClick={(event) => this.handleSubmit(event, this.state)} className="ui submit button">Submit</div>
//   </div>
// </div>

// <div class="ui placeholder segment">
//   <div class="ui icon header">
//     <i class="clipboard list icon"></i>
//        Login
//   </div>
//   <div className="ui blue inverted inline segment">
//     <div className="ui inverted form">
//       <div className="two fields">
  //       <div className="field">
  //         <label>First Name</label>
  //         <input onChange={this.handleUserInput} placeholder="First Name" type="text" name='firstName' value={this.state.firstName} />
  //       </div>
  //       <div className="field">
  //         <label>Last Name</label>
  //         <input onChange={this.handleUserInput} placeholder="Last Name" type="text" name="lastName" value={this.state.lastName}/>
  //       </div>
  //       <div className="field">
  //         <label>E-mail</label>
  //         <input onChange={this.handleUserInput} placeholder="E-mail" type="text" name="email" value={this.state.eMail}/>
  //       </div>
  //       <div className="field">
  //         <label>Password</label>
  //         <input onChange={this.handleUserInput} placeholder="password" type="text" name='password' value={this.state.password}/>
  //       </div>
//       </div>
//       <div onClick={(event) => this.handleSubmit(event, this.state)} className="ui submit button">Submit</div>
//     </div>
//   </div>
// </div>


const mapStateToProps = (state) => {
  return state;
}

const dispatchStateToProps = (dispatch) => {
  return {registerUser: (state) => dispatch(registerUser(state))}
}


export default withRouter(connect(mapStateToProps, dispatchStateToProps)(Register));
