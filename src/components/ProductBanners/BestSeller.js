import React from "react";
import "./BestSeller.css";

function BestSeller(props) {
    const classes = "best-seller-banner " + props.className;
    return <div className={classes}><p>Best seller</p></div>;
}

export default BestSeller;