import React from "react";

function AppFailed() {
  return (
    <div align="center">
      <p style={{ fontSize: "24px" }}>
        You do not have WebRTC available in this browser.
      </p>
      <p style={{ fontSize: "24px" }}>
        This app does not work without WebRTC. Use a better browser. I suggest
        Firefox from the Mozilla foundation.
      </p>
      <a href="https://www.mozilla.org/en-US/firefox/new/">Get Firefox Here</a>
    </div>
  );
}

export default AppFailed;
