export function getSimpleCalculations() {
  return async (dispatch) => {
    const urlSafe = new URL("http://localhost:443/calculations");
    const response = await fetch(urlSafe);
    const responseJson = await response.json();
    dispatch(setSimpleCalculations(responseJson));
  };
}

export function setSimpleCalculations(simpleCalculations) {
  return { type: "Set simple calculations and answers", simpleCalculations };
}
