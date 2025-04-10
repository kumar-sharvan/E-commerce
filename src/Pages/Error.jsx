import React from "react";

const Error = () => {
  return (
    <>
      <div></div>
      <div class="alert alert-warning text-center fw-bold fs-4" role="alert">
        Please{" "}
        <a href="/" class="alert-link">
          Login
        </a>
        ! Provided Credentials.
      </div>
    </>
  );
};

export default Error;
