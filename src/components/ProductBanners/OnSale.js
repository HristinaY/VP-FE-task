import React from "react";
import "./OnSale.css";

function OnSale(props) {
    const classes = "on-sale-banner " + props.className;
    return <div className={classes}><p>sale</p></div>;
}

export default OnSale;