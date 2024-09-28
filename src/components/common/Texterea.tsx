import { Control, useController } from "react-hook-form";

type TextereaProps = {
  name: string;
  placeholder: string;
  error: string | undefined;
  control: Control<any>;
};

export default function Texterea({ name, placeholder, error, control }: TextereaProps) {
  const {
    field: { onChange, onBlur, value, ref },
  } = useController({
    name,
    control,
  });

  return (
    <div className='textarea-input-main-container'>
      <div className='input-wrapper'>
        <div className='textarea'>
          <textarea
            name={name}
            id={name}
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
