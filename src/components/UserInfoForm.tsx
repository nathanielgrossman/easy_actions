import React, { useState, useEffect } from "react";
import InputField from "./InputField";

type UserInfoFormProps = {
  city: string;
  setCity: (city: string) => void;
  setName: (name: string) => void;
};

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
    <div>
      <InputField
        label="First name"
        value={firstName}
        setValue={setFirstName}
      />
      <InputField label="Last name" value={lastName} setValue={setLastName} />
      <InputField label="City" value={city} setValue={setCity} />
    </div>
  );
};

export default UserInfoForm;
