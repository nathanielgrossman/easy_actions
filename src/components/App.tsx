import React from "react";
import EmailLink from "./EmailLink";

import { links } from "../links";

const App = () => {
  return (
    <div>
      EASY ACTIONS
      {links.map((linkInfo) => (
        <EmailLink
          key={linkInfo.title}
          linkInfo={linkInfo}
          name="nathaniel grossman"
          location="la, ca"
        />
      ))}
    </div>
  );
};

export default App;
