
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "start":
      return { ...state, loading: true, type };
    case "success":
      return { ...state, loading: false, list: payload, type };
    case "error":
      return { ...state, loading: false, type };
    default:
      return { ...state }
  }
};

export default reducer;


// 1. hecch qachon fetch ishlamasligi kerak;
// 2. setTimeout(), setInterval()
// 3. async await ishlatish mumkin emas;