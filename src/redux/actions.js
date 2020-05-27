import { ADD_NOTES, DELETE_NOTE } from "../constants";

export const addNote = (text) => {
  const action = {
    type: ADD_NOTES,
    text,
  };
  console.log("add note", action.text);
  return action;
};

export const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    id,
  };
};
