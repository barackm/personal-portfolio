import React from "react";

export default function SubmitBtn({ message }) {
  return (
    <button type="submit" className="submit-bnt">
      {message}
    </button>
  );
}
