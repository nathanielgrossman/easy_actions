import React, { useCallback } from "react";

type InputFieldProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  setValue,
}: InputFieldProps) => {
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      setValue(event.target.value),
    []
  );
  return (
    <div>
      <span>{label}</span>
      <input type="text" name={label} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
