import React from "react";

export default function Texterea({ name, placeholder, error }) {
  return (
    <div className="textarea-input-main-container">
      <div className="input-wrapper">
        <div className="textarea">
          <textarea
            name={name}
            id="textarea"
            placeholder={placeholder}
          ></textarea>
        </div>
        {error && <span className="input-error-massage">{error}</span>}
      </div>
    </div>
  );
}
