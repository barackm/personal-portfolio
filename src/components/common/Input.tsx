import React from "react";
import { Control, useController } from "react-hook-form";

type InputProps = {
  placeholder?: string;
  error?: string;
  name: string;
  control: Control<any>;
};

export default function Input({ placeholder = "Email", error, name, control }: InputProps) {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
  });

  return (
    <div className='input-main-container'>
      <div className='input-wrapper'>
        <div className='input'>
          <input
            type='text'
            id={name}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
          />
        </div>
        {error && <span className='input-error-message'>{error}</span>}
      </div>
    </div>
  );
}
