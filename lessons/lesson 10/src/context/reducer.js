 export const InitialState=0
 
 
 export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "+":
      return state + payload;
    case "-":
      return state - payload;
    case "+5":
      return state + payload;
    case "-5":
      return state - payload;
    default:
      return state;
  }

 };