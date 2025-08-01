import React, { useState, useMemo } from "react";
import styled from "styled-components";

import EmailLink from "./EmailLink";
import { links } from "../links";
import UserInfoForm, { RESIDENT_TYPES } from "./UserInfoForm";
import Copy from "./Copy";
import canyonHillsPDF from "../Notice of Preparation - Canyon Hills Project.pdf";

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

const PdfViewer = styled.iframe`
  width: 50vw;
  height: calc(50vw * 11 / 8.5);
  border: 1px solid #ccc;
`;

const App = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [residentType, setResidentType] = useState(RESIDENT_TYPES[0]);

  const emailLinks = useMemo(
    () =>
      links
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((linkInfo) => (
          <EmailLink
            key={linkInfo.title}
            linkInfo={linkInfo}
            name={name}
            location={city}
            residentType={residentType}
          />
        )),
    [name, city, residentType]
  );

  return (
    <Main>
      <MainTitle>Canyon Hills Project Public Comment Generator</MainTitle>
      <Text>
        After years of hard work, we are finally getting an updated
        Environmental Impact Report (EIR) for the Canyon Hills project. Thanks
        to public support (you!), the California Department of Fish and Wildlife
        is opening the door. Now we have to crank that door wide open.
        <br />
        <br />
        Yesterday, CDFW announced they would prepare a Supplemental
        Environmental Impact Report (SEIR) - A BIG WIN for transparency,
        ecological review, and this community of folks who care about the earth.
        BUT there's a catch... CDFW says it will ONLY analyze impacts to
        Crotch's Bumble Bee, because that's the part of the project they've been
        tasked with overseeing for an ITP. That means no analysis of:
        <br />
        <br />
        - Wildlife corridors <br />
        - Cougar Habitat <br />
        - Riparian ecology <br />
        - Fire risk <br />
        - Energy emissions <br />
        - Climate impact <br />
        <br />
        Unless we continue to speak up!!! We've made it super easy to write in.
        <br />
        <br />
        <h2>Directions:</h2>
        <br />
        <strong>
          Fill in your first name, last name, and choose the resident type that
          best describes you in the fields below and then click the generate
          email button. It will open a pre-composed message in your default mail
          client.
        </strong>
        <br />
        <br />
        If you'd prefer to copy the text of the email and it's recipients, click
        the <Copy /> icon.
        <br />
        <br />
        This site does not save or transmit any data, all provided information
        is stored directly on your device.
        <br />
        <br />
        Share this with friends. Let's make sure this SEIR means something!
      </Text>
      <Title>your info</Title>
      <UserInfoForm
        setName={setName}
        residentType={residentType}
        setResidentType={setResidentType}
      />
      {emailLinks}
      <PdfViewer
        src={canyonHillsPDF}
        title="Notice of Preparation - Canyon Hills Project"
      />
      <Text>
        If you have a general suggestion or concern please contact{" "}
        <a href="mailto:admin@easyactions.site">admin@easyactions.site</a>
        <br />
      </Text>
    </Main>
  );
};

export default App;
