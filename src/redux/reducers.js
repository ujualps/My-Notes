import { ADD_NOTES, DELETE_NOTE, MY_NOTE_LOCALSTORAGE } from "../constants";
import ls from "local-storage";

const note = (action) => {
  // let { head, des } = action.text.heading;
  var today = new Date();
  var d =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  var t =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const n = {
    id: Math.random(),
    heading: action.text.heading,
    desc: action.text.desc,
    time: t,
    date: d,
  };
  // console.log(store.getState())
  return n;
};

const reducers = (state = [], action) => {
  let notes = null;
  let localstorage = ls.get(MY_NOTE_LOCALSTORAGE);
  if (localstorage != null) state = localstorage;

  switch (action.type) {
    case ADD_NOTES:
      notes = [...state, note(action)];
      ls.set(MY_NOTE_LOCALSTORAGE, notes);
      return notes;

    case DELETE_NOTE:
      notes = state.filter((notes) => notes.id !== action.id);
      ls.set(MY_NOTE_LOCALSTORAGE, notes);
      return notes;
    default:
      return state;
  }
};

export default reducers;
