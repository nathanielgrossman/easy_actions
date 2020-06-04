import React, { useState, useEffect } from "react";
import styled from "styled-components";

import InputField from "./InputField";

type UserInfoFormProps = {
  city: string;
  setCity: (city: string) => void;
  setName: (name: string) => void;
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5em;
  margin-bottom: 2.5em;
  font-size: 1em;
  text-align: center;
`;

const UserInfoForm: React.FC<UserInfoFormProps> = ({
  city,
  setCity,
  setName,
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
      <InputField label="City" value={city} setValue={setCity} />
    </Form>
  );
};

export default UserInfoForm;
