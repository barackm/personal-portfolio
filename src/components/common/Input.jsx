import React from "react";

export default function Input({ placeholder = "Email", error }) {
  return (
    <>
      <div className="input-main-container">
        <div className="input-wrapper">
          <div className="input">
            <input type="text" placeholder={placeholder} />
          </div>
          {error && <span className="input-error-massage">{error}</span>}
        </div>
      </div>
    </>
  );
}
