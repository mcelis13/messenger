import io from 'socket.io-client';
import {sendMessage} from './actions/actions';
import store from './index.js';
//looking to the url that is going to need the socket
const socket = io('http://localhost:3000', {transports: ['websocket']});

socket.on('connect', () => {
  console.log('---------------- CONNECTED TO SOCKET --------------------');

  socket.on('new message', (message) => {
    console.log(message, 'this is the message from the socket front end')
    store.dispatch({type:'SEND_MESSAGE', payload: message})
  });
});

export default socket;
