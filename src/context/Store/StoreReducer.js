// ./client/src/context/StoreReducer.js

const StoreReducer = (globalState, action) => {
  switch (action.type) {
    case "CHANGE_TEXT":
      return {
        ...globalState,
        hola: action.payload,
      };

    default:
      return globalState;
  }
};

export default StoreReducer;
