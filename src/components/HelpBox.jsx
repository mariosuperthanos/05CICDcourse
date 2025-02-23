import { string } from "prop-types";

import "./HelpBox.css";
import React from "react";

function HelpBox({ title, text }) {
    return (
        <article className="help-box">
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    );
}

HelpBox.propTypes = {
    title: string,
    text: string
};

export default HelpBox;
