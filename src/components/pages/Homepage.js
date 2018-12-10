import React, {Component} from 'react';
import Login from '../auth/Login';
import Register from '../auth/Register';
import {connect} from 'react-redux';
import {getUserAgain} from '../../actions/actions'

class Homepage extends Component {
  // componentDidMount (){
  //   const token = localStorage.getItem("token");
  //     if (token) {
  //       this.props.getUserAgain(token)
  //     }
  // }

  render(){

    return(
      <div class="ui placeholder segment">
        <div class="ui two column stackable center aligned grid">
          <div class="ui vertical divider">Or</div>
          <div class="middle aligned row">
            <div class="column">
              <div class="ui green inverted segment">
                <Register/>
              </div>
            </div>
            <div class="column">
              <div class="ui blue inverted segment">
                <Login />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

// <div>
//   <Login/>
//   <Register/>
// </div>


// <div class="ui placeholder segment">
//   <div class="ui two column stackable center aligned grid">
//     <div class="ui vertical divider">Or</div>
//     <div class="middle aligned row">
//       <div class="column">
//         <div class="ui icon header">
//           <i class="search icon"></i>
//           Find Country
//         </div>
//         <div class="field">
//           <div class="ui search">
//             <div class="ui icon input">
//               <input class="prompt" type="text" placeholder="Search countries...">
//               <i class="search icon"></i>
//             </div>
//             <div class="results"></div>
//           </div>
//         </div>
//       </div>
//       <div class="column">
//         <div class="ui icon header">
//           <i class="world icon"></i>
//           Add New Country
//         </div>
//         <div class="ui primary button">
//           Create
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


// const mapStateToProps = (state) => {
//   return state;
// }
//
// const dispatchStateToProps = (dispatch) => {
//   return { getUserAgain: (token) => dispatch(getUserAgain(token))}
// }

export default Homepage;

//if the user is already logged in or registered this should display just an image or something else
