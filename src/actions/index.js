export const addItems = (item) => ({
  type: "ADD_ITEM",
  payload: item
});

export const toggleShow = (show) =>({
  type: "TOGGLE_STATE",
  payload: show
})

export const deleteItem = (delete_item) => ({
  type: "DELETE_ITEM",
  payload: delete_item
})

export const editItem = (edit_item) => ({
  type: "EDIT_ITEM",
  payload: edit_item
})