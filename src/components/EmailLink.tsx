import React, { useMemo, useState, useCallback } from "react";
import styled from "styled-components";

import CopyToClipboard from "react-copy-to-clipboard";

import Copy from "./Copy";

import { generateLink, generateCopyableEmail } from "../utils";
import { LinkInfo } from "../links";

export type EmailLinkProps = {
  linkInfo: LinkInfo;
  name: string;
  location: string;
  residentType: string;
};

const Link = styled.a`
  display: inline-block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  font-size: 1.2em;
  text-align: center;
  background-color: yellow;
  color: black;
  padding: 0.5em 1.5em;
  margin-right: 1em;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
`;

const CopyButton = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background-color: tan;
  color: yellow;
`;

const EmailLink: React.FC<EmailLinkProps> = ({
  linkInfo,
  name,
  location,
  residentType,
}) => {
  const [status, setStatus] = useState<string | undefined>();

  const link = useMemo(
    () => generateLink(linkInfo, name, location, residentType),
    [linkInfo, name, location, residentType]
  );

  const setSuccess = useCallback(() => {
    setStatus("green");
    alert(`"${linkInfo.title}" was successfully copied.`);
    setTimeout(() => {
      setStatus(undefined);
    }, 1000);
  }, [linkInfo]);

  const copyableEmail = useMemo(
    () => generateCopyableEmail(linkInfo, name, location, residentType),
    [linkInfo, name, location, residentType]
  );

  return (
    <div style={{ textAlign: "center", marginBottom: "1em" }}>
      <Link href={link}>Generate Email</Link>
      <CopyToClipboard text={copyableEmail} onCopy={setSuccess}>
        <CopyButton>
          <Copy color={status} />
        </CopyButton>
      </CopyToClipboard>
    </div>
  );
};

export default EmailLink;
