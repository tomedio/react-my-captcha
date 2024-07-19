import React from "react";

import arrowClockwise from "./arrow-clockwise.svg";
import DefaultButtonProps from "./DefaultButton.types";
import "./DefaultButton.css";

export const DefaultButton: React.FC<DefaultButtonProps> = (props) => {
    const className = `captcha-reload-button ${props.className || ""}`;
    return (
        <button {...props} className={className} type="button">
            <img className="captcha-reload-arrow" src={arrowClockwise} alt="" />
        </button>
    );
};
