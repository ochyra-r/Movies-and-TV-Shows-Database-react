import React from "react";
import Error from "./Error";

import Result from "./Result";

function Results({ results, openPopup }) {
  return (
    <section className="results">
      {results.map((result) => {
        if (result.Title === "No matching results") {
          return <Error key={result.Title} />;
        } else {
          return (
            <Result key={result.imdbID} result={result} openPopup={openPopup} />
          );
        }
      })}
    </section>
  );
}

export default Results;
