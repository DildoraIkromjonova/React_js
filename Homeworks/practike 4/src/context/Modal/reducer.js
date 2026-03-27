export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "close": return { ...state, type: false, payload };
    case "open": return { ...state, type: true, payload };
    default: return { ...state };
  }
}