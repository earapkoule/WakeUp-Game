import React, { useState, Fragment, useEffect } from "react";
import styles from "./CalculationPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getSimpleCalculations } from "./store/calculations/actions";

const ANSWERS = ["1", "2", "3"];

const CalculationPage = () => {
  const [index, setIndex] = useState(0);
  const [moreCalculations, setMoreCalculations] = useState(true);
  const dispatch = useDispatch();
  const [result, setResult] = useState("");
  useEffect(() => {
    dispatch(getSimpleCalculations());
  }, [dispatch]);
  const simpleCalculations = useSelector(
    (state) => state.calculations.simpleCalculations
  );

  const showResult = (answer) => {
    setResult(answer === "2" ? "Σωστά!" : "Λάθος:( Δεν έχεις ξυπνήσει ακόμη!");
  };

  const showNextQuestion = () => {
    setResult("");
    if (index + 1 < simpleCalculations.calculations.length)
      setIndex((prevIndex) => prevIndex + 1);
    else setMoreCalculations(false);
  };

  return (
    <div className="container">
      <h2 className={`text-center ${styles.calculationTitle}`}>Καλημέρα!</h2>
      {!result ? (
        moreCalculations ? (
          <Fragment>
            <div className="row">
              <div className="col text-center">
                {simpleCalculations.calculations
                  ? simpleCalculations.calculations[index]
                  : "Question"}
              </div>
            </div>
            {ANSWERS.map((answer) => (
              <div className="row" key={answer}>
                <button
                  className="col text-center"
                  onClick={() => showResult(answer)}
                >
                  Answer {answer}
                </button>
              </div>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            <div className="row">
              <div className="col text-center">
                Ξύπνησες!! Να έχεις μια υπέροχη μέρα!
              </div>
            </div>
          </Fragment>
        )
      ) : (
        <Fragment>
          <div className="row">
            <div className="col text-center">{result}</div>
          </div>
          <div className="row">
            <button className="col text-center" onClick={showNextQuestion}>
              Επόμενη Ερώτηση
            </button>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default CalculationPage;
