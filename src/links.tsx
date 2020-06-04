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
    title: "Defund the LAPD",
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
    title: "Defund the NYPD",
    to: "dromm@council.nyc.gov",
    cc: [
      "action@comptroller.nyc.gov",
      "drichards@council.nyc.gov",
      "KPowers@council.nyc.gov",
      "yrodriguez@council.nyc.gov",
      "District11@council.nyc.gov",
      "fcabrera@council.nyc.gov",
      "District16Bronx@council.nyc.gov",
      "district19@council.nyc.gov",
      "RLancman@council.nyc.gov",
      "Adams@council.nyc.gov",
      "info38@council.nyc.gov",
      "AskJB@council.nyc.gov",
      "cdeutsch@council.nyc.gov",
    ],
    subject: "URGENT%3A%20Call%20a%20Meeting%2C%20Defund%20NYPD",
    getBody: (name: string, location: string) =>
      `Hello%2C%0A%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${location}.%20Last%20April%2C%20NYC%20Mayor%20de%20Blasio%20proposed%20major%20budget%20cuts%20for%20the%20Fiscal%20Year%202021%2C%20especially%20to%20education%20and%20youth%20programs%2C%20while%20refusing%20to%20slash%20the%20NYPD%20budget%20by%20any%20significant%20margin.%20I%20urge%20you%20to%20consider%20pressuring%20the%20office%20of%20the%20mayor%20towards%20an%20ethical%20and%20equal%20allocation%20of%20the%20NYC%20expense%20budget%2C%20away%20from%20NYPD%2C%20and%20towards%20social%20services%20and%20education%20programs%2C%20effective%20at%20the%20beginning%20of%20FY%2021%2C%20July%2021st.%20I%20am%20emailing%20to%20ask%20for%20an%20emergency%20council%20meeting%20among%20city%20officials%20regarding%20this%20matter.%20I%20am%20asking%20that%20city%20officials%20lobby%20the%20same%20amount%20of%20attention%20and%20effort%20towards%20finding%20funding%20for%20our%20education%20programs.%0A%0AThank%20you%2C%0A${name}%0A%20`,
  },
  {
    title: "Defund the NYPD 2",
    to: "action@comptroller.nyc.gov",
    subject: "NYC%20Expense%20Budget%20Reform",
    getBody: (name: string, location: string) =>
      `Dear%20Scott%20Stringer%2C%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${location}.%20Last%20April%2C%20NYC%20Mayor%20Bill%20De%20Blasio%20proposed%20major%20budget%20cuts%20for%20the%20fiscal%20year%202021%2C%20especially%20to%20education%20and%20youth%20programs%2C%20while%20refusing%20to%20slash%20the%20NYPD%20budget%20by%20any%20significant%20margin.%20I%20urge%20you%20to%20consider%20pressuring%20the%20office%20of%20the%20mayor%20towards%20an%20ethical%20and%20equal%20reallocation%20of%20the%20NYC%20Expense%20Budget%2C%20away%20from%20NYPD%2C%20and%20towards%20social%20services%20and%20education%20programs%2C%20effective%20at%20the%20beginning%20of%20FY%2021%2C%20July%201st.%0A%0AIt%20is%20time%20to%20defund%20the%20harmful%20expansion%20of%20the%20NYPD%20into%20homeless%20services%2C%20schools%2C%20youth%20services%2C%20mental%20health%2C%20and%20other%20social%20services%20where%20police%20do%20not%20belong.%20It%20is%20time%20to%20protect%20investments%20in%20human%20services%2C%20the%20social%20safety%20net%2C%20racial%20and%20economic%20justice%2C%20and%20the%20vision%20that%20all%20New%20Yorkers%20deserve%20to%20thrive.%20Historically%2C%20the%20city%20government%20has%20spent%20far%20more%20on%20police%20than%20on%20public%20health%2C%20homeless%20services%2C%20youth%20services%2C%20and%20other%20vital%20agencies.%20That%20disturbing%20disparity%20has%20continued%20under%20the%20tenure%20of%20Mayor%20de%20Blasio.%0A%0AI%20am%20writing%20to%20ask%20for%20an%20emergency%20council%20meeting%20among%20city%20officials%20regarding%20this%20matter.%20Governor%20Cuomo%20has%20doubled%20NYPD%20presence%20effective%20tonight.%20I%20am%20asking%20that%20city%20officials%20lobby%20the%20same%20amount%20of%20attention%20and%20effort%20towards%20finding%20sustainable%2C%20longterm%20change.%0A%0AThank%20you%2C%0A${name}`,
  },
  {
    title: "Justice for Breonna Taylor",
    to: "robert.schroeder@louisvilleky.gov",
    bcc: ["tbwine@louisvilleprosecutor.com"],
    subject: "Justice%20for%20the%20murder%20of%20Breonna%20Taylor",
    getBody: (name: string, location: string) =>
      `Hello,%0A%0A%20My%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}%20and%20I%20am%20emailing%20today%20to%20demand%20accountability%20for%20the%20racist%20murder%20of%20Breonna%20Taylor.%0A%0AI%20demand%20that%20charges%20be%20pressed%20against%20all%20officers%20involved%20in%20this%20heinous%20killing,%20including%20Sgt.%20Jonathan%20Mattingly%20and%20officers%20Brett%20Hankison%20and%20Myles%20Cosgrove.%20They%20should%20all%20be%20fired,%20and%20should%20be%20charged%20and%20prosecuted%20to%20the%20fullest%20extent%20of%20the%20law%20for%20murder.%0A%0ABreonna%20Taylor%20was%20an%20ER%20technician,%20working%20tirelessly%20to%20help%20others%20during%20this%20global%20pandemic.%20She%20should%20be%20alive%20today.%20She%20would%20be%20alive%20today%20if%20it%20were%20not%20for%20the%20gross%20abuse%20of%20power%20and%20white%20supremacy%20exhibited%20by%20the%20Louisville%20Police%20Department.%20All%20officers%20involved%20must%20face%20consequences%20for%20this%20murder%20in%20order%20to%20provide%20her%20family%20with%20justice%20and%20to%20deter%20law%20enforcement%20from%20committing%20racist%20and%20brutal%20acts%20of%20violence%20against%20communities%20of%20color.%0A%0AIn%20addition,%20I%20demand%20that%20we%20provide%20more%20support%20for%20community%20efforts%20and%20organizations%20that%20work%20to%20prevent%20police%20brutality%20and%20violence.%0A%0ASincerely,%0A${name}`,
  },
  {
    title: "Justice for Breonna Taylor 2",
    to: "greg.fischer@louisvilleky.gov",
    subject: "JUSTICE%20FOR%20BREONNA%20TAYLOR",
    getBody: (name: string, location: string) =>
      `Hello%20Mayor%20Greg%20Fischer%2C%20%0A%0AMy%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}.%20I%E2%80%99m%20emailing%20today%20on%20behalf%20of%20the%20Breonna%20Taylor%20case.%20I%E2%80%99m%20calling%20for%20the%20prosecution%20of%20Sergeant%20Jonathan%20Mattingly%2C%20Brett%20Hankison%20and%20Myles%20Cosgrove%20to%20the%20fullest%20extent%20of%20the%20law-%20we%20will%20not%20stop%20until%20that%20happens.%20The%20man%20the%20officers%20were%20looking%20for%20didn%27t%20even%20live%20in%20the%20same%20building%20and%20was%20already%20in%20custody.%20Kenneth%20Walker%20acted%20in%20self%20defense%2C%20and%20for%20this%20he%20should%20not%20be%20prosecuted.%20The%20approach%20that%20the%20officers%20chose%20to%20take%20in%20arriving%20in%20plain%20clothes%2C%20unmarked%20cars%20and%20not%20announcing%20themselves%20was%20one%20that%20resulted%20in%20murder%20and%20must%20not%20be%20taken%20lightly.%0A%0ABlack%20Lives%20Matter.%0A%0ARegards%2C%0A%0A${name}`,
  },
  {
    title: "Justice for George Floyd",
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
  {
    title: "New York: Please Repeal 50-A",
    to: "weinsth@nyassembly.gov",
    bcc: [
      "bichotter@nyassembly.gov",
      "district43@nyassembly.gov",
      "carrollr@nyassembly.gov",
      "cymbros@nyassembly.gov",
      "FrontusM@nyassembly.gov",
      "ColtonW@nyassembly.gov",
      "EichensteinS@nyassembly.gov",
      "abbatep@nyassembly.gov",
      "LentolJ@nyassembly.gov",
      "OrtizF@nyassembly.gov",
      "simonj@nyassembly.gov",
      "DavilaM@nyassembly.gov",
      "DilanE@nyassembly.gov",
      "WalkerL@nyassembly.gov",
      "wrightt@nyassembly.gov",
      "MosleyW@nyassembly.gov",
      "PerryN@nyassembly.gov",
      "williamsja@nyassembly.gov",
      "barronc@nyassembly.gov",
      "malliotakisn@nyassembly.gov",
    ],
    subject: "Please%20Repeal%2050-A",
    getBody: (name: string, location: string) =>
      `Hello,%0A%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${location}.%20I’m%20writing%20to%20urge%20you%20to%20advocate%20for%20the%20legislature%20to%20convene,%20discuss,%20and%20pass%20Senator%20Bailey%20and%20Assemblyman%20O'Donnell's%20bill%20to%20repeal%20section%2050-A%20(A2513/S3695).%20In%20light%20of%20police%20violence%20against%20peaceful%20protestors%20and%20our%20Black%20community%20while%20concealing%20badge%20numbers%20that%20prevent%20them%20from%20being%20held%20accountable%20for%20their%20wrong%20doings.%2050-A%20must%20be%20fully%20repealed,%20with%20no%20modifications%20or%20amendments.%20Can%20I%20count%20on%20you%20to%20support%20the%20bill%20to%20fully%20repeal%2050-A%20and%20ask%20leadership%20to%20bring%20this%20Bailey/O'Donnell%20bill%20to%20the%20floor%20and%20vote%20YES%20to%20fully%20repeal%20it?%0A%0APlease%20do%20not%20take%20a%20break,%20do%20not%20disappear,%20and%20be%20accessible.%20We%20need%20hearings%20to%20be%20held%20and%20action%20to%20be%20taken%20on%20this%20brutal%20policing,%20how%20to%20stop%20it%20and%20how%20to%20move%20funding%20AWAY%20from%20police%20and%20TOWARD%20education,%20public%20housing,%20and%20youth%20and%20community%20development.%20Deferring%20to%20Cuomo%20during%20this%20Pandemic%20is%20not%20what%20you%20were%20voted%20into%20office%20to%20do.%20Do%20the%20right%20thing.%20Help%20seek%20justice%20for%20the%20Black%20community,%20for%20New%20Yorkers,%20and%20the%20people%20you%20claim%20to%20serve.%0A%0ARegards,%0A${name}`,
  },
  {
    title: "New York: Stop Qualified Immunity",
    to: "senator@schumer.senate.gov",
    cc: [
      "salazar@nysenate.gov",
      "Rep.Maloney@housemail.house.gov",
      "senator@gillibrand.senate.gov",
      "us@ocasiocortez.com",
    ],
    subject: "New%20York%20-%20Stop%20Qualified%20Immunity",
    getBody: (name: string, location: string) =>
      `Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20live%20in%20${location}.%20I%20am%20writing%20to%20strongly%20urge%20you%20to%20support%20legislation%20to%20reform%20the%20Qualified%20Immunity%20doctrine.%20Police%20officers%20and%20government%20officials%20have%20proven%20time%20and%20again%20they%20are%20not%20responsible%20enough%20to%20be%20granted%20this%20much%20power.%20They%20abuse%20it%2C%20and%20are%20rarely%20ever%20held%20accountable%20for%20their%20actions.%20Why%20are%20we%20protecting%20people%20who%20do%20not%20protect%20the%20citizens%20they%20allegedly%20signed%20up%20to%20work%20for%3F%20Victims%20are%20already%20getting%20infringed%20upon%20on%20a%20daily%20basis%20by%20police%20brutality%20and%20misconduct%2C%20and%20they%20can't%20even%20seek%20vindication%20in%20a%20court%20of%20law.%20This%20goes%20against%20everything%20the%20justice%20system%20is%20supposed%20to%20stand%20for%20and%20protect.%20Can%20we%20count%20on%20you%20to%20help%3F%0D%0A%0D%0A%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0A%0D%0A${name}%0D%0A`,
  },
];
