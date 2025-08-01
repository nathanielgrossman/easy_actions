import { getSalutation } from "./utils";

export type LinkInfo = {
  title: string;
  to: string;
  cc?: Array<string>;
  bcc?: Array<string>;
  subject: string;
  getBody: (name: string, location: string, residentType?: string) => string;
};

export const links: Array<LinkInfo> = [
  {
    title: "Canyon Hills ITP – NOP Scoping Comments",
    to: "R5CEQA@wildlife.ca.gov",
    subject: "Canyon Hills ITP – NOP Scoping Comments",
    getBody: (name: string, _: string, residentType?: string) =>
      `Dear%20California%20Department%20of%20Fish%20and%20Wildlife%2C%0A%0AMy%20name%20is%20${name}%2C%20and%20I%20am%20writing%20as%20a%20concerned%20${residentType}%20regarding%20the%20Notice%20of%20Preparation%20(NOP)%20for%20the%20Draft%20Supplemental%20Environmental%20Impact%20Report%20(SEIR)%20related%20to%20the%20Canyon%20Hills%20Project%20and%20the%20proposed%20Incidental%20Take%20Permit%20(ITP)%20for%20Crotch%E2%80%99s%20Bumble%20Bee.%0A%0AFirst%2C%20I%20want%20to%20thank%20CDFW%20for%20moving%20forward%20with%20a%20Supplemental%20EIR%E2%80%94this%20is%20an%20essential%20step%20toward%20addressing%20the%20outdated%20and%20incomplete%20environmental%20analysis%20of%20a%20project%20first%20approved%20over%2020%20years%20ago.%20This%20SEIR%20offers%20a%20long-overdue%20opportunity%20to%20reassess%20the%20full%20environmental%20impact%20of%20development%20in%20one%20of%20Los%20Angeles%E2%80%99s%20most%20fire-prone%2C%20biodiverse%2C%20and%20ecologically%20sensitive%20wildland-urban%20interface%20zones.%20However%2C%20I%20am%20deeply%20concerned%20that%20the%20current%20scope%20of%20the%20SEIR%20as%20outlined%20in%20your%20NOP%20is%20limited%20solely%20to%20evaluating%20impacts%20on%20Bombus%20crotchii%2C%20despite%20the%20fact%20that%20the%20project%20footprint%20spans%20over%20300%20acres%20of%20critical%20wildland%2C%20including%20160%20acres%20of%20potentially%20occupied%20bumblebee%20habitat.%0A%0AWhile%20the%20role%20of%20a%20%E2%80%9Cresponsible%E2%80%9D%20versus%20%E2%80%9Clead%E2%80%9D%20agency%20affords%20varying%20levels%20of%20control%2C%20I%20urge%20CDFW%20to%20expand%20the%20scope%20of%20this%20SEIR%20to%20include%20broader%20environmental%20considerations%20in%20line%20with%20CEQA%E2%80%99s%20intent%2C%20especially%20given%20the%20significant%20changes%20in%20environmental%20conditions%20and%20public%20understanding%20since%20the%20original%20EIR%20was%20drafted%20(2003).%20These%20include%3A%0A%0A-%20Wildfire%20risk%20and%20evacuation%20limitations%20in%20a%20Very%20High%20Fire%20Hazard%20Severity%20Zone%20(VHFHSZ)%0A%0A-%20Presence%20of%20CESA-listed%20California%20mountain%20lions%20(Puma%20concolor)%0A%0A-%20Disruption%20of%20critical%20wildlife%20corridor%20(I-210%20Freeway%20crossing)%0A%0A-%20Cumulative%20impacts%20on%20Threatened%20and%20Endangered%20Species%2C%20including%20indirect%20impacts%20from%20habitat%20fragmentation%20and%20development%0A%0A-%20Tribal%20Cultural%20Resources%0A%0A-%20Utilities%2C%20energy%2C%20and%20greenhouse%20gas%20emissions%0A%0A-%20Climate%20resilience%20and%20long-term%20ecological%20sustainability%0A%0AThank%20you%20for%20the%20opportunity%20to%20comment.%20I%20hope%20CDFW%20will%20stand%20firm%20in%20its%20role%20as%20steward%20of%20California%E2%80%99s%20precious%20biodiversity%20and%20fully%20evaluate%20the%20ecological%20consequences%20of%20the%20Canyon%20Hills%20Project.%0A%0ASincerely%2C%0A${name}`,
  },
];

// TEMPLATE
// {
//     title: "title",
//     to: "email",
//     cc: [
//       "email",
//     ],
//     subject: "subject",
//     getBody: (name: string, location: string) => `body`,
//   },
