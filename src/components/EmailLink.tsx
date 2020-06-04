import React, { useMemo } from "react";

import { generateLink } from "../utils";
import { LinkInfo } from "../links";

export type EmailLinkProps = {
  linkInfo: LinkInfo;
  name: string;
  location: string;
};

const EmailLink: React.FC<EmailLinkProps> = ({ linkInfo, name, location }) => {
  const link = useMemo(() => generateLink(linkInfo, name, location), [
    linkInfo,
    name,
    location,
  ]);

  return (
    <div>
      <a href={link}>{linkInfo.title}</a>
    </div>
  );
};

export default EmailLink;
