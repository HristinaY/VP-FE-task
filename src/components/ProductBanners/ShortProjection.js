import React from "react";
import "./ShortProjection.css";

function ShortProjection(props) {
    const classes = "short-projection-banner " + props.className;
    return <div className={classes}><p>space saver</p></div>;
}

export default ShortProjection;