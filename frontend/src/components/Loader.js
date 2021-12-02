import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    /*<Spinner
      animation="border"
      role="status"
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
    >
        <span className='sr-only'>Loading...</span>
    </Spinner>*/
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
