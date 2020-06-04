import React, { useMemo } from "react";
import styled from 'styled-components'

import { generateLink } from "../utils";
import { LinkInfo } from "../links";

export type EmailLinkProps = {
  linkInfo: LinkInfo;
  name: string;
  location: string;
};

const Link = styled.a`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 0.75em;
  text-align: center;
  background-color: yellow;
  color: black;
  padding-left: 1em;
  padding-right: 1em;
`;

const EmailLink: React.FC<EmailLinkProps> = ({ linkInfo, name, location }) => {
  const link = useMemo(() => generateLink(linkInfo, name, location), [
    linkInfo,
    name,
    location,
  ]);

  return <Link href={link}>{linkInfo.title}</Link>;
};

export default EmailLink;
