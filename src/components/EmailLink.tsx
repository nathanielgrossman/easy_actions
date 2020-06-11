import React, { useMemo, useState, useCallback } from "react";
import styled from "styled-components";

import Copy from "./Copy";

import { generateLink, generateCopyableEmail } from "../utils";
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
  margin-right: 1em;
`;

const CopyButton = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background-color: black;
  color: yellow;
`;

const EmailLink: React.FC<EmailLinkProps> = ({ linkInfo, name, location }) => {
  const [status, setStatus] = useState<string | undefined>();

  const link = useMemo(() => generateLink(linkInfo, name, location), [
    linkInfo,
    name,
    location,
  ]);

  const setSuccess = useCallback(() => {
    setStatus("green");
    alert(`"${linkInfo.title}" was successfully copied.`);
    setTimeout(() => {
      setStatus(undefined);
    }, 1000);
  }, [linkInfo]);

  const setError = useCallback(() => {
    setStatus("red");
    alert("There was an error while copying this email. Sorry!");
    setTimeout(() => {
      setStatus(undefined);
    }, 1000);
  }, []);

  const copyAction = useCallback(
    () => generateCopyableEmail(linkInfo, name, location, setSuccess, setError),
    [linkInfo, name, location, setSuccess, setError]
  );

  return (
    <div style={{ alignItems: "center" }}>
      <Link href={link}>{linkInfo.title}</Link>
      <CopyButton onClick={copyAction}>
        <Copy color={status} />
      </CopyButton>
    </div>
  );
};

export default EmailLink;
