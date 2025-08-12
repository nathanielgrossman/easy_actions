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

export const zoneZeroLinks: Array<LinkInfo> = [
  {
    title: "Zone Zero Regulatory Advisory Committee",
    to: "publiccomments@bof.ca.gov ",
    subject: "Re: Opposition to Complete Vegetation Removal in Zone 0",
    getBody: (name: string, _: string) =>
      `Dear%20Committee%20Members%2C%0A%0AAs%20a%20resident%20of%20California%20who%20understands%20the%20critical%20importance%20of%20wildfire%20safety%2C%20I%20am%20deeply%20concerned%20about%20the%20proposed%20Zone%200%20regulations%20that%20would%20mandate%20the%20removal%20of%20practically%20all%20vegetation%20within%205%20feet%20of%20homes.%0A%0AThe%20science%20does%20not%20support%20the%20idea%20that%20removing%20all%20plants%20around%20homes%20prevents%20structure%20loss%20in%20wind-driven%20urban%20fires.%20In%20fact%2C%20multiple%20studies%E2%80%94including%20those%20of%20recent%20fires%20in%20Altadena%2C%20The%20Palisades%2C%20and%20the%20Woolsey%20Fire%E2%80%94show%20that%20vegetation%20near%20homes%20is%20often%20not%20the%20source%20of%20ignition.%20Instead%2C%20flying%20embers%20causing%20structure-to-structure%20ignition%2C%20flammable%20building%20materials%20(like%20wooden%20fences)%2C%20and%20difficult-to-control-for%20conditions%20such%20as%20slope%20and%20aspect%20are%20far%20greater%20risks.%0AHealthy%2C%20well-maintained%20trees%20and%20shrubs%20can%20actually%20help%20protect%20homes%20by%20intercepting%20embers%20and%20reducing%20wind%20flow.%20Eliminating%20this%20vegetation%20makes%20it%20easier%20for%20embers%20to%20reach%20vulnerable%20buildings%20and%20may%20increase%20fire%20risk%2C%20not%20reduce%20it.%0A%0ABeyond%20the%20fire%20safety%20concerns%2C%20these%20proposed%20rules%20would%20have%20serious%20environmental%2C%20financial%2C%20and%20quality-of-life%20impacts%3A%0A*%20Loss%20of%20shade%2C%20privacy%2C%20and%20the%20cooling%20effects%20of%20the%20urban%20tree%20canopy%2C%20which%20is%20especially%20critical%20as%20temperatures%20rise.%0A*%20Destruction%20of%20habitat%20for%20birds%20and%20other%20wildlife.%0A*%20Increased%20property%20maintenance%20costs%20and%20enforcement%20burdens%20on%20homeowners.%0A*%20Disproportionate%20effects%20on%20lower-income%20homeowners%20and%20dense%20urban%20neighborhoods.%0A%0AAll-in-all%2C%20the%20current%20approach%20seems%20more%20aligned%20with%20reducing%20insurance%20liability%20than%20genuinely%20protecting%20homes%20and%20communities.%0A%0AThe%20law%20(AB%203074)%20never%20called%20for%20complete%20vegetation%20removal.%20It%20asked%20for%20zones%20that%20are%20%E2%80%9Cember-resistant%E2%80%9D%E2%80%94not%20vegetation-free.%20It%20also%20encouraged%20balance%3A%20preserving%20native%2C%20drought-tolerant%20plants%2C%20supporting%20biodiversity%2C%20and%20respecting%20local%20conditions.%20That%20flexibility%20should%20be%20reflected%20in%20the%20new%20rules.%0A%0APlease%20revise%20the%20proposed%20Zone%200%20regulations%20to%3A%0A*%20Allow%20healthy%2C%20well-maintained%20trees%20and%20shrubs%20near%20structures.%0A*%20Prohibit%20only%20truly%20hazardous%20plants%20(like%20dry%20ornamental%20grasses%2C%20juniper%2C%20or%20cypress%20trees).%0A*%20Focus%20on%20proven%20risk%20factors%E2%80%94like%20roof%20debris%2C%20flammable%20fencing%2C%20and%20building%20materials%E2%80%94not%20blanket%20vegetation%20bans.%0A%0ARather%20than%20destructive%2C%20one-size-fits-all%20solutions%2C%20let%E2%80%99s%20adopt%20fire%20safety%20regulations%20that%20are%20rooted%20in%20scientific%20study%2C%20more%20likely%20to%20be%20effective%2C%20and%20more%20equitable%20for%20all.%0A%0ASincerely%2C%20%0A${name}`,
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
