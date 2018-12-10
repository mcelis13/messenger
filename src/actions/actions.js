import { browserHistory } from 'react-router';
import jwt_decode from 'jwt-decode';
import socket from '../sockets.js';


const API = 'http://localhost:3000/api';


export const errorHandler = (dispatch, error, type) => {
  let errorMessage = '';

  if(error.data.error){
    errorMessage = error.data.error;
  }else if(error.data){
    errorMessage = error.data;
  }else{
    errorMessage = error;
  }

  if(error.status === 401){
    dispatch({
      type : type,
      payload: 'You are not authorized to do this. Please login and try again.'
    });
    logoutUser();
  }else{
    dispatch({
      type: type,
      payload: errorMessage
    })
  }
}


export const loginUser = (data) => {
  return (dispatch) => {
    return fetch(`${API}/auth/login`,{
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data)

    })
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp, 'from actions.js')
        localStorage.setItem('token', resp.token);
        dispatch({type: 'LOGIN_USER', payload: resp.user});
    })
  };
};

export const registerUser = (data) => {
  return (dispatch) => {
    return fetch(`${API}/auth/register`, {
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(data)

    })
    .then(resp => resp.json())
    .then(resp => {
      const user = jwt_decode(resp.token)

      console.log(user, 'I am inside of register user')
        localStorage.setItem('token', resp.token);

        dispatch({type: 'REGISTER_USER', payload: resp.user});
    })
  }
}

export const logoutUser = () => {
  return (dispatch) => {
    dispatch({type: 'LOGOUT_USER'});
    localStorage.removeItem('token', {path: '/'})
    socket.emit('disconnect')
  }
}

export const getConversations = (token) => {
  return (dispatch) => {
    return fetch(`${API}/chat/conversations`,{
      method:'GET',
      headers: {
        "Authorization": token,
        "Content-Type": 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => {
      dispatch({type:'GET_CONVERSATIONS', payload: resp})
      return resp
    })
    .catch(console.error)
  }
}

export const getMessages = () => {
  return (dispatch) => {
    return fetch(`${API}/chat/messages`)
    .then(resp => resp.json())
    .then(resp => {
      dispatch({type:'GET_MESSAGES', payload: resp})
      return resp
    })
    .catch(console.error)
  }

}

export const sendMessage = (conversationId, token, state) => {
  return (dispatch) => {
    return fetch(`${API}/chat/conversations/${conversationId}`, {
      method: 'POST',
      headers: {
        "Authorization": token,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({'composedMessage': state})
    })
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp, 'this is inside sendMessage')
      dispatch({type:'SEND_MESSAGE', payload: resp})
      socket.emit('new message', resp)
      return resp
    })
    .catch(console.error)
  }
}

export const singleConversation = (conversationId) => {
  return (dispatch) => {
    return fetch(`${API}/chat/conversations/${conversationId}`)
    .then(resp => resp.json())
    .then(resp => {
      dispatch({type:'CURRENT_CONVERSATION', payload: resp})
      return resp
    })
    .catch(console.error)
  }
}

export const getUsers = () => {
  return (dispatch) => {
    fetch(`${API}/chat/users`)
    .then(resp => resp.json())
    .then(resp => {
      dispatch({type:'GET_USERS', payload: resp})
    })
    .catch(console.error)
  }
}

export const newConversation = (token, recipientId, message) => {
  return (dispatch) => {
    return fetch(`${API}/chat/new/${recipientId}`, {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'Authorization': token
      },
      body: JSON.stringify({'composedMessage': message})
    })
    .then(resp => resp.json())
    .then(resp => {
        dispatch({type:'CURRENT_CONVERSATION', payload: resp})
        return resp
    })
    .catch(console.error)
  }
}

//action creator which returns an action
export const setRecipientState = (recipient) => {
  return {type: 'SET_RECIPIENT', payload: recipient}
}

export const getUserAgain = (token) => {
  const user = jwt_decode(token)
  const id = user._id
  return (dispatch) => {
    fetch(`${API}/chat/users/${id}`)
    .then(resp => resp.json())
    .then(resp => {
      dispatch({type:'GET_USER_AGAIN', payload: resp})
    })
    .catch(console.error)
  }
}
