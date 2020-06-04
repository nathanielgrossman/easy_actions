export type LinkInfo = {
  title: string;
  to: string;
  cc?: Array<string>;
  bcc?: Array<string>;
  subject: string;
  getBody: (name: string, location: string) => string;
};

export const links: Array<LinkInfo> = [
         {
           title: "Defund LAPD",
           to: "mayor.garcetti@lacity.org",
           cc: [
             "controller.galperin@lacity.org",
             "councilmember.cedillo@lacity.org",
             "councilmember.Krekorian@lacity.org",
             "councilmember.blumenfield@lacity.org",
             "david.ryu@lacity.org",
             "paul.koretz@lacity.org",
             "councilmember.martinez@lacity.org",
             "councilmember.rodriguez@lacity.org",
             "councilmember.harris-dawson@lacity.org",
             "councilmember.price@lacity.org",
             "councilmember.wesson@lacity.org",
           ],
           bcc: ["mayor.garcetti@lacity.org", "CityClerk@lacity.org"],
           subject: "Restructure%20Budget%20and%20DEFUND%20POLICE",
           getBody: (name: string, location: string) =>
             `Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}%20and%20I%20am%20emailing%20to%20demand%20the%20restructuring%20of%20the%20Los%20Angeles%20city%20budget%2C%20so%20as%20to%20prioritize%20more%20social%20services%20for%20communities%2C%20and%20to%20drastically%20minimize%20spending%20on%20Police.%0D%0A%0D%0AI%20demand%20of%20the%20mayor%2C%20controller%2C%20and%20all%20city%20council%20members%20to%20prove%20their%20love%20and%20dedication%20to%20the%20people%20of%20their%20city%20and%20reallocate%20funds%20to%20directly%20benefit%20those%20in%20need.%0D%0A%0D%0AIt%20is%20absolutely%20absurd%20that%20at%20%241%2C857%2C330%2C549%2C%20the%20police%20budget%20is%20larger%20than%20the%20allocations%20to%20the%20fire%20department%2C%20Office%20of%20Emergency%20Management%2C%20Department%20of%20Transportation%2C%20Bureau%20of%20Street%20Services%2C%20and%20the%20Housing%20and%20Community%20Investment%20Agency%20combined.%0D%0A%0D%0AThere%20are%2058%2C936%20DOCUMENTED%20houseless%20people%20in%20Los%20Angeles.%20There%20are%20healthcare%20workers%20without%20proper%20equipment.%20More%20than%2030%25%20of%20Los%20Angeles%20County%20residents%20have%20filed%20for%20unemployment.%20Defunding%20the%20police%20and%20restructuring%20the%20budget%20is%20an%20absolute%20necessity%20now%20more%20than%20ever.%0D%0A%0D%0A%0D%0AWhile%20LAPD%20has%20more%20funding%20than%20it%20knows%20what%20to%20do%20with%2C%20there%20are%20communities%20who%20desperately%20need%20funding%20and%20every%20day%20they%20don't%20receive%20it%20their%20quality%20of%20life%20worsens.%20Thousands%20have%20died%20who%20did%20not%20need%20to.%20You%20have%20the%20ability%20to%20change%20this%2C%20so%20do%20it.%0D%0A%0D%0ASincerely%2C%0D%0A${name}%0D%0A`,
         },
         {
           title: "Email for George Floyd",
           to: "police@minneapolismn.gov",
           bcc: [
             "minneapolis311@minneapolismn.gov",
             "citizeninfo@hennepin.us",
             "info@mpdfederation.com",
           ],
           subject: "Justice%20for%20the%20Murder%20of%20George%20Floyd",
           getBody: (name: string, location: string) =>
             `Hello,%0A%0AMy name is ${name}. I am a resident of ${location} and I am emailing today to demand accountability for the racist murder of George Floyd.%0A%0AI demand that charges be pressed against all officers involved in this heinous racist murder, including specifically Derek Chauvin and Tou Thao. They should not be allowed to keep their jobs and should be charged and prosecuted to the fullest extent of the law for manslaughter.%0A%0AGeorge Floyd should be alive today if it was not for the gross abuse of power and white supremacy exhibited by the Minneapolis Police Department, all officers involved must face consequences for this murder in order to provide his family with justice and prevent further cops from committing brutal acts of violence against our communities.%0A%0AIn addition, I demand that we start providing more support towards community efforts and organizations outside of the police forces in order to prevent police brutality and violence in the future. %0A%0ASincerely,%0A${name}`,
         },
       ];
