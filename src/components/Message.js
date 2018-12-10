import React from 'react';
import {connect} from 'react-redux';


const Message = (props) =>{
  console.log(props.message)
  return(
    <div className="ui list">
      <div className="item">
        <div className="content">
          <p className="header">{props.message.author.profile.firstName}</p>
          <div className="description">{props.message.body}</div>
        </div>
      </div>
    </div>
  )
}
// <div>
//   <li>{props.message.author.profile.firstName} {props.message.body}</li>
// </div>

// <div className="ui list">
//   <div className="item">
//     <div className="content">
//       <p className="header">{props.message.author.profile.firstName}</p>
//       <div className="description">{props.message.body}</div>
//     </div>
//   </div>
// </div>


const mapStateToProps = (state) =>{
  return state
}

export default connect(mapStateToProps)(Message);
