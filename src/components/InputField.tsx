import React, { useCallback } from "react";
import styled from 'styled-components';

type InputFieldProps = {
  label: string;
  value: string;
  setValue: (value: string) => void;
};

const Field = styled.input`
  margin-bottom: 0.25em;
  margin-top: 0.25em;
  font-size: 16px;
`;

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
    <Field
      type="text"
      placeholder={label}
      name={label}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputField;
