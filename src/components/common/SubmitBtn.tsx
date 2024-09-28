import React from "react";

type SubmitBtnProps = {
  message: string;
};

export default function SubmitBtn({ message }: SubmitBtnProps) {
  return (
    <button type='submit' className='submit-bnt'>
      {message}
    </button>
  );
}
