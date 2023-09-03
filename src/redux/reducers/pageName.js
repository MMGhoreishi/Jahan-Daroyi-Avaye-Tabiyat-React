export const pageName = (state = "", action) => {
  switch (action.type) {
    case "PAGE_NAME":
      state = action.payload;
      console.log(state, "is pageName");
      return state;
    default:
      return state;
  }
};
