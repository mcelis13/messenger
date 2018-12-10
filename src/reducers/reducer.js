const initialState = {
  currentUser: {},
  recipient: {},
  conversations: [],
  selectedConversationId: '',
  currentConversation: {},
  allUsers: [],
  messages: [],
  conversationMessages: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case("LOGIN_USER"):
    console.log(action.payload, 'hitting login user case')
      return {...state, currentUser: action.payload}
    case("REGISTER_USER"):
      return {...state, currentUser: action.payload}
    case('GET_CONVERSATIONS'):
      return {...state, conversations: [action.payload]}
    case('LOGOUT_USER'):
      return{...state, currentUser: {}}
    case('SEND_MESSAGE'):
    console.log(action.payload, 'this is inside SEND_MESSAGE')
      return{...state, currentConversation: {...state.currentConversation, messages: [...state.currentConversation.messages, action.payload]}}
    case('GET_USERS'):
      return {...state, allUsers: action.payload}
    case('SET_RECIPIENT'):
    console.log(action.payload, 'this is inside of set_recipient')
      return {...state, recipient: action.payload}
    case('GET_USER_AGAIN'):
      return {...state, currentUser: action.payload}
    case('SELECTED_CONVERSATION'):
        return {...state, selectedConversationId: action.payload}
    case('GET_MESSAGES'):
        return {...state, messages: action.payload}
    case('CURRENT_CONVERSATION'):
        return {...state, currentConversation: action.payload}
    default:
    return state
  }
}

export default reducer;
