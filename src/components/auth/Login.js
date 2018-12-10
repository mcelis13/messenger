import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/actions.js';
import {withRouter} from 'react-router-dom';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleUserInput = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }



  handleSubmit = (event, state) => {
    event.preventDefault();
    this.props.loginUser(state)
    .then((resp) => this.props.history.push('/dashboard'))
  }

  render(){
    return (
      <div class="ui placeholder segment">
        <div class="ui icon header">
          <i class="user circle icon"></i>
             Login
        </div>
        <div className="ui blue inverted inline segment">
          <div className="ui inverted form">
            <div className="two fields">
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

// <div class="ui placeholder segment">
//   <div class="ui icon header">
//     <i class="user circle icon"></i>
//        Login
//   </div>
//   <div class="inline">
//     <div class="ui primary button">Clear Query</div>
//     <div class="ui button">Add Document</div>
//   </div>
// </div>


// <div className="ui blue inverted segment">
//   <div className="ui inverted form">
//     <div className="two fields">
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



const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = (dispatch) =>{
  return {loginUser: (state) => dispatch(loginUser(state))}
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
