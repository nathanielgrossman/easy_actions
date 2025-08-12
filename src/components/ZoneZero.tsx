import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import EmailLink from "./EmailLink";
import { zoneZeroLinks } from "../links";
import UserInfoForm, { RESIDENT_TYPES } from "./UserInfoForm";
import Copy from "./Copy";

const Main = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.p`
  margin-top: 1.5em;
  font-size: 1.5em;
  text-align: center;
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

const NavLink = styled(Link)`
  color: #007bff;
  text-decoration: none;
  margin: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em 0;
`;

const ZoneZero = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [residentType, setResidentType] = useState(RESIDENT_TYPES[0]);

  const emailLinks = useMemo(
    () =>
      zoneZeroLinks
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
      <MainTitle>Zone Zero Public Comment Generator</MainTitle>

      <Text>
        The Board of Forestry is currently fleshing out the rules for the new
        'Zone Zero' policy that was rushed through legislation in the wake of
        our devastating January fires. It affects all of California, and
        anywhere that has be districted as a a high or very high fire risk
        severity zone will be affected. This includes many highly urbanized
        areas such as: the Sunset Strip, Hollywood Hills, Chinatown,
        Sunland-Tujunga, and nearly all of Northeast LA.
        <br></br>
        <br></br>
        This policy will dictate what can be in area 0-5 feet from any structure
        including your house. The rules currently forbid:
        <br />
        - All shrubs, plants, and trees except for one 'specimen' tree that must
        be 5 ft from the structure and 10 ft from the chimney
        <br />
        - No more than 10 potted plants are allowed, they must be 5gal or less
        and no more than 18 inches tall
        <br />
        - Umbrellas and shade sails
        <br />
        <br />
        In other words, if you have 3 trees around your house, you can only keep
        one. No groupings of plants or hedges are allowed.
        <br />
        <br />
        As Californians, we all know fire safety/fuel mitigation is of utmost
        importance, however: there is not evidence that removing vegetation
        saves structures in a wind-driven urban fire, in fact, scientific study
        of urban conflagrations similar to those in The Palisades and Altadena
        often show the opposite. Removing vegetation opens up more space for
        flying embers to contact the primary fuel source in fires like these,
        which is our homes. Healthy, hydrated tree canopy and shrubs have
        actually been shown to operate like nets, catching and extinguishing
        embers before they can reach combustible structures.
        <br />
        <br />
        In many cases, mandating the removal of all plants in this zone will
        amount to all the vegetation around a house, in some of our
        neighborhoods where the houses are close together. This will:
        <br />
        - Have a detrimental effects on aesthetics and privacy <br />
        - Devastate our urban tree canopy, which as our weather warms will make
        our streets even hotter and our soil drier.
        <br />
        - Destroy habitat that our non-human neighbors rely on. <br />
        - Place the burden of enforcement on local municipalities, and the
        burden of compliance costs on individuals.
        <br />
        <br />
        Blanket, one-size-fits-all restrictions like these don’t make sense for
        a state as ecologically variable as California. Please write to the
        Board of Forestry using the form below to advocate for changes to these
        rules.
        <Title>Directions:</Title>
        <br />
        <strong>
          Fill in your first name, and last name, and then click the generate
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
      </Text>
      <Title>your info</Title>
      <UserInfoForm
        setName={setName}
        residentType={residentType}
        setResidentType={setResidentType}
        showResidentType={false}
      />
      {emailLinks}
      <Text>
        If you have a general suggestion or concern please contact{" "}
        <a href="mailto:admin@easyactions.site">admin@easyactions.site</a>
        <br />
      </Text>
    </Main>
  );
};

export default ZoneZero;
