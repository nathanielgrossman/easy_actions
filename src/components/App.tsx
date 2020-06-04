import React, { useState } from "react";
import EmailLink from "./EmailLink";

import { links } from "../links";
import UserInfoForm from "./UserInfoForm";

const App = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');

  return (
    <div>
      EASY ACTIONS
      <UserInfoForm setName={setName} city={city} setCity={setCity} />
      {links.map((linkInfo) => (
        <EmailLink
          key={linkInfo.title}
          linkInfo={linkInfo}
          name={name}
          location={city}
        />
      ))}
    </div>
  );
};

export default App;
