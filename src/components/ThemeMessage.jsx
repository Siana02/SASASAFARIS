import React from "react";

const ThemeMessage = () => (
  <div className="theme-message" id="theme-message" style={{ display: "none" }}>
    <span id="theme-message-text"></span>
    <button id="theme-yes" className="theme-msg-btn">Yes</button>
    <button id="theme-no" className="theme-msg-btn">No</button>
  </div>
);

export default ThemeMessage;
