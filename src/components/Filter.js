import React from "react";

import "./Filter.css";

function Filter(props) {
    const classes = "filter " + props.className;
    return (
        <div className={classes}>
            <h2> Filter by:</h2>
        </div>
    );
}

export default Filter;
