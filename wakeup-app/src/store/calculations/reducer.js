const initialState = {
  simpleCalculations: [],
};

const calculationsReducer = (state = initialState, action) => {
  if (action.type === "Set simple calculations and answers") {
    return {
      ...state,
      simpleCalculations: action.simpleCalculations,
    };
  }
  return state;
};

export default calculationsReducer;
