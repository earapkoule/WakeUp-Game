import React, { useState, Fragment } from "react";
import styles from "./CalculationPage.module.css";

const ANSWERS = ["1", "2", "3"];

const CalculationPage = () => {
  const [result, setResult] = useState("");
  const showResult = (answer) => {
    setResult(answer === "2" ? "Σωστά!" : "Λάθος:( Δεν έχεις ξυπνήσει ακόμη!");
  };

  const showNextQuestion = () => {
    setResult("");
  };

  return (
    <div className="container">
      <h2 className={`text-center ${styles.calculationTitle}`}>Καλημέρα!</h2>
      {!result ? (
        <Fragment>
          <div className="row">
            <div className="col text-center">Question</div>
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
