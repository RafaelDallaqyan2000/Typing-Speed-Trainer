import { HANDLE_REDUX_CHANGE } from "./types";

const initialState = {
  textInput: "",
};

type HandleChangeType = {
  type: string;
  payload: {
    key: string;
    value: any;
  };
};

const reducer = (state = initialState, action: HandleChangeType) => {
  switch (action.type) {
    case HANDLE_REDUX_CHANGE:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    default:
      return state;
  }
};

export default reducer;
