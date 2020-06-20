import React, { Fragment } from "react";
import spinner from "./infinity-spinner.gif";

export const Spinner = () => (
    <Fragment>
        <img
            src={spinner}
            alt='loading...'
            style={{ width: "200px", margin: "auto", display: "block" }}
        />
    </Fragment>
);

export default Spinner;
