export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.payload;
    case "subtract":
      return state - action.payload;
    case "multiply":
      return state * action.payload;
    case "divide":
      return state / action.payload;

    default:
      return state;
  }
};
