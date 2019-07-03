let data = {
  modalShow: false,
  items: []
};
const todos = (state = data, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
         ...state,
         items: [...state.items, action.payload]
      };
    case "TOGGLE_STATE":
      return {
        ...state,
        modalShow: !action.payload
      }
    case "DELETE_ITEM":
      let oldState = state.items
      let newState = oldState.filter(singleitem => singleitem.id !== action.payload.id);
      for (let count = 0; count < newState.length; count++) { 
        newState[count].id = count+1;
      }
      return {
        ...state,
        items: newState
      }
    case "EDIT_ITEM":
      return {
        
      }
    
    default:
      return state;
  }
};

export default todos;
