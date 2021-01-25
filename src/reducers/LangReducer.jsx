const LangReducer = (state='ru', action) => {
  switch(action.type) {
    case 'SET_LANG':
      return action.payload
    default: 
      return state
  }
}

export default LangReducer