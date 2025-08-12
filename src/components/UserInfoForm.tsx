import React, { useState, useEffect } from "react";
import styled from "styled-components";

import InputField from "./InputField";

export const RESIDENT_TYPES = [
  "resident",
  "environmentalist",
  "student",
  "community member",
];

type UserInfoFormProps = {
  setName: (name: string) => void;
  residentType: string;
  setResidentType: (residentType: string) => void;
  showResidentType?: boolean;
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  margin-bottom: 1.5em;
  font-size: 1em;
  text-align: center;
`;

const UserInfoForm: React.FC<UserInfoFormProps> = ({
  setName,
  residentType,
  setResidentType,
  showResidentType = true,
}: UserInfoFormProps) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    if (!firstName.length || !lastName.length) return;
    const fullName = `${firstName} ${lastName}`;
    setName(fullName);
  }, [firstName, lastName]);

  return (
    <Form>
      <InputField
        label="First name"
        value={firstName}
        setValue={setFirstName}
      />
      <InputField label="Last name" value={lastName} setValue={setLastName} />
      {showResidentType && (
        <select
          value={residentType}
          onChange={(e) => setResidentType(e.target.value)}
        >
          {RESIDENT_TYPES.map((residentType) => (
            <option key={residentType} value={residentType}>
              {residentType}
            </option>
          ))}
        </select>
      )}
    </Form>
  );
};

export default UserInfoForm;
