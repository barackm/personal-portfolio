import React from "react";

export default function Input({ placeholder = "Email", error, name }) {
  return (
    <>
      <div className="input-main-container">
        <div className="input-wrapper">
          <div className="input">
            <input
              type="text"
              id={name}
              name={name}
              placeholder={placeholder}
            />
          </div>
          {error && (
            <span className="input-error-massage">{error.message}</span>
          )}
        </div>
      </div>
    </>
  );
}
