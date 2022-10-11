import React from "react";
export default function Instructions({ instruction }) {
  return (
    <div className="Instructions">
      <h3>Steps:</h3>
      {instruction.steps.map(function (step, index) {
        return (
          <div key={index} className="step">
            {step.number}: {step.step}
          </div>
        );
      })}{" "}
      ;
    </div>
  );
}
