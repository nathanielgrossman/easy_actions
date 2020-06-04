import React, { useState, useMemo } from "react";
import styled from "styled-components";

import EmailLink from "./EmailLink";
import { links } from "../links";
import UserInfoForm from "./UserInfoForm";

const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.p`
  margin-top: 1.5em;
  font-size: 1.5em;
`;

const Title = styled.p`
  font-size: 1.5em;
`;

const Text = styled.p`
  margin: 1.5em;
  font-size: 0.75em;
  text-align: center;
`;

const App = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const emailLinks = useMemo(
    () =>
      links.map((linkInfo) => (
        <EmailLink
          key={linkInfo.title}
          linkInfo={linkInfo}
          name={name}
          location={city}
        />
      )),
    [name, city]
  );

  return (
    <Main>
      <MainTitle>easy actions</MainTitle>
      <Text>
        This is a collection of form letters addressed to local governments
        demanding justice for Black lives and the defunding of police.
        <br />
        <br />
        Fill in your first name, last name, and location in the fields below and
        then click on the email you would like to send. It will open a
        pre-composed message in your default mail client.
        <br />
        <br />
        These letters have been collected from various sources and were not
        written by the author of this site.
        <br />
        <br />
        This site does not save or transmit any data, all provided information
        is stored directly on your device.
      </Text>
      <Title>your info</Title>
      <UserInfoForm setName={setName} city={city} setCity={setCity} />
      <Title>emails</Title>
      {emailLinks}
      <Text>
        If you have a letter you would like added to this site or a general
        suggestion please contact{" "}
        <a href="mailto:admin@easyactions.site">admin@easyactions.site</a>
        <br />
        <br />
        #BlackLivesMatter
        <br />
        #DefundThePolice
        <br />
        #InvestInCommunities
      </Text>
    </Main>
  );
};

export default App;
