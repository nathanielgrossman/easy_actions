import { getSalutation } from "./utils";

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
             `Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}%20and%20I%20am%20emailing%20to%20demand%20the%20restructuring%20of%20the%20Los%20Angeles%20city%20budget%2C%20so%20as%20to%20prioritize%20more%20social%20services%20for%20communities%2C%20and%20to%20drastically%20minimize%20spending%20on%20Police.%0D%0A%0D%0AI%20demand%20of%20the%20mayor%2C%20controller%2C%20and%20all%20city%20council%20members%20to%20prove%20their%20love%20and%20dedication%20to%20the%20people%20of%20their%20city%20and%20reallocate%20funds%20to%20directly%20benefit%20those%20in%20need.%0D%0A%0D%0AIt%20is%20absolutely%20absurd%20that%20at%20%241%2C857%2C330%2C549%2C%20the%20police%20budget%20is%20larger%20than%20the%20allocations%20to%20the%20fire%20department%2C%20Office%20of%20Emergency%20Management%2C%20Department%20of%20Transportation%2C%20Bureau%20of%20Street%20Services%2C%20and%20the%20Housing%20and%20Community%20Investment%20Agency%20combined.%0D%0A%0D%0AThere%20are%2058%2C936%20DOCUMENTED%20houseless%20people%20in%20Los%20Angeles.%20There%20are%20healthcare%20workers%20without%20proper%20equipment.%20More%20than%2030%25%20of%20Los%20Angeles%20County%20residents%20have%20filed%20for%20unemployment.%20Defunding%20the%20police%20and%20restructuring%20the%20budget%20is%20an%20absolute%20necessity%20now%20more%20than%20ever.%0D%0A%0D%0A%0D%0AWhile%20LAPD%20has%20more%20funding%20than%20it%20knows%20what%20to%20do%20with%2C%20there%20are%20communities%20who%20desperately%20need%20funding%20and%20every%20day%20they%20don't%20receive%20it%20their%20quality%20of%20life%20worsens.%20Thousands%20have%20died%20who%20did%20not%20need%20to.%20You%20have%20the%20ability%20to%20change%20this%2C%20so%20do%20it.%0D%0A%0D%0A${getSalutation()}%2C%0D%0A${name}%0D%0A`,
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
             `Hello%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${location}.%20Last%20April%2C%20NYC%20Mayor%20de%20Blasio%20proposed%20major%20budget%20cuts%20for%20the%20Fiscal%20Year%202021%2C%20especially%20to%20education%20and%20youth%20programs%2C%20while%20refusing%20to%20slash%20the%20NYPD%20budget%20by%20any%20significant%20margin.%20I%20urge%20you%20to%20consider%20pressuring%20the%20office%20of%20the%20mayor%20towards%20an%20ethical%20and%20equal%20allocation%20of%20the%20NYC%20expense%20budget%2C%20away%20from%20NYPD%2C%20and%20towards%20social%20services%20and%20education%20programs%2C%20effective%20at%20the%20beginning%20of%20FY%2021%2C%20July%201st.%20I%20am%20emailing%20to%20ask%20for%20an%20emergency%20council%20meeting%20among%20city%20officials%20regarding%20this%20matter.%20I%20am%20asking%20that%20city%20officials%20lobby%20the%20same%20amount%20of%20attention%20and%20effort%20towards%20finding%20funding%20for%20our%20education%20programs.%0D%0A%0D%0AThank%20you%2C%0A${name}%0A%20`,
         },
         {
           title: "Defund the NYPD 2",
           to: "action@comptroller.nyc.gov",
           subject: "NYC%20Expense%20Budget%20Reform",
           getBody: (name: string, location: string) =>
             `Dear%20Scott%20Stringer%2C%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${location}.%20Last%20April%2C%20NYC%20Mayor%20Bill%20De%20Blasio%20proposed%20major%20budget%20cuts%20for%20the%20fiscal%20year%202021%2C%20especially%20to%20education%20and%20youth%20programs%2C%20while%20refusing%20to%20slash%20the%20NYPD%20budget%20by%20any%20significant%20margin.%20I%20urge%20you%20to%20consider%20pressuring%20the%20office%20of%20the%20mayor%20towards%20an%20ethical%20and%20equal%20reallocation%20of%20the%20NYC%20Expense%20Budget%2C%20away%20from%20NYPD%2C%20and%20towards%20social%20services%20and%20education%20programs%2C%20effective%20at%20the%20beginning%20of%20FY%2021%2C%20July%201st.%0D%0A%0D%0AIt%20is%20time%20to%20defund%20the%20harmful%20expansion%20of%20the%20NYPD%20into%20homeless%20services%2C%20schools%2C%20youth%20services%2C%20mental%20health%2C%20and%20other%20social%20services%20where%20police%20do%20not%20belong.%20It%20is%20time%20to%20protect%20investments%20in%20human%20services%2C%20the%20social%20safety%20net%2C%20racial%20and%20economic%20justice%2C%20and%20the%20vision%20that%20all%20New%20Yorkers%20deserve%20to%20thrive.%20Historically%2C%20the%20city%20government%20has%20spent%20far%20more%20on%20police%20than%20on%20public%20health%2C%20homeless%20services%2C%20youth%20services%2C%20and%20other%20vital%20agencies.%20That%20disturbing%20disparity%20has%20continued%20under%20the%20tenure%20of%20Mayor%20de%20Blasio.%0D%0A%0D%0AI%20am%20writing%20to%20ask%20for%20an%20emergency%20council%20meeting%20among%20city%20officials%20regarding%20this%20matter.%20Governor%20Cuomo%20has%20doubled%20NYPD%20presence%20effective%20tonight.%20I%20am%20asking%20that%20city%20officials%20lobby%20the%20same%20amount%20of%20attention%20and%20effort%20towards%20finding%20sustainable%2C%20longterm%20change.%0D%0A%0D%0AThank%20you%2C%0A${name}`,
         },
         {
           title: "Justice for Breonna Taylor",
           to: "robert.schroeder@louisvilleky.gov",
           bcc: ["tbwine@louisvilleprosecutor.com"],
           subject: "Justice%20for%20the%20murder%20of%20Breonna%20Taylor",
           getBody: (name: string, location: string) =>
             `Hello,%0D%0A%0D%0A%20My%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}%20and%20I%20am%20emailing%20today%20to%20demand%20accountability%20for%20the%20racist%20murder%20of%20Breonna%20Taylor.%0D%0A%0D%0AI%20demand%20that%20charges%20be%20pressed%20against%20all%20officers%20involved%20in%20this%20heinous%20killing,%20including%20Sgt.%20Jonathan%20Mattingly%20and%20officers%20Brett%20Hankison%20and%20Myles%20Cosgrove.%20They%20should%20all%20be%20fired,%20and%20should%20be%20charged%20and%20prosecuted%20to%20the%20fullest%20extent%20of%20the%20law%20for%20murder.%0D%0A%0D%0ABreonna%20Taylor%20was%20an%20ER%20technician,%20working%20tirelessly%20to%20help%20others%20during%20this%20global%20pandemic.%20She%20should%20be%20alive%20today.%20She%20would%20be%20alive%20today%20if%20it%20were%20not%20for%20the%20gross%20abuse%20of%20power%20and%20white%20supremacy%20exhibited%20by%20the%20Louisville%20Police%20Department.%20All%20officers%20involved%20must%20face%20consequences%20for%20this%20murder%20in%20order%20to%20provide%20her%20family%20with%20justice%20and%20to%20deter%20law%20enforcement%20from%20committing%20racist%20and%20brutal%20acts%20of%20violence%20against%20communities%20of%20color.%0D%0A%0D%0AIn%20addition,%20I%20demand%20that%20we%20provide%20more%20support%20for%20community%20efforts%20and%20organizations%20that%20work%20to%20prevent%20police%20brutality%20and%20violence.%0D%0A%0D%0A${getSalutation()},%0A${name}`,
         },
         {
           title: "Justice for Breonna Taylor 2",
           to: "greg.fischer@louisvilleky.gov",
           subject: "JUSTICE%20FOR%20BREONNA%20TAYLOR",
           getBody: (name: string, location: string) =>
             `Hello%20Mayor%20Greg%20Fischer%2C%20%0D%0A%0D%0AMy%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}.%20I%E2%80%99m%20emailing%20today%20on%20behalf%20of%20the%20Breonna%20Taylor%20case.%20I%E2%80%99m%20calling%20for%20the%20prosecution%20of%20Sergeant%20Jonathan%20Mattingly%2C%20Brett%20Hankison%20and%20Myles%20Cosgrove%20to%20the%20fullest%20extent%20of%20the%20law-%20we%20will%20not%20stop%20until%20that%20happens.%20The%20man%20the%20officers%20were%20looking%20for%20didn%27t%20even%20live%20in%20the%20same%20building%20and%20was%20already%20in%20custody.%20Kenneth%20Walker%20acted%20in%20self%20defense%2C%20and%20for%20this%20he%20should%20not%20be%20prosecuted.%20The%20approach%20that%20the%20officers%20chose%20to%20take%20in%20arriving%20in%20plain%20clothes%2C%20unmarked%20cars%20and%20not%20announcing%20themselves%20was%20one%20that%20resulted%20in%20murder%20and%20must%20not%20be%20taken%20lightly.%0D%0A%0D%0ABlack%20Lives%20Matter.%0D%0A%0D%0ARegards%2C%0D%0A%0D%0A${name}`,
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
             `Hello,%0D%0A%0D%0AMy name is ${name}. I am a resident of ${location} and I am emailing today to demand accountability for the racist murder of George Floyd.%0D%0A%0D%0AI demand that charges be pressed against all officers involved in this heinous racist murder, including specifically Derek Chauvin and Tou Thao. They should not be allowed to keep their jobs and should be charged and prosecuted to the fullest extent of the law for manslaughter.%0D%0A%0D%0AGeorge Floyd should be alive today if it was not for the gross abuse of power and white supremacy exhibited by the Minneapolis Police Department, all officers involved must face consequences for this murder in order to provide his family with justice and prevent further cops from committing brutal acts of violence against our communities.%0D%0A%0D%0AIn addition, I demand that we start providing more support towards community efforts and organizations outside of the police forces in order to prevent police brutality and violence in the future. %0D%0A%0D%0A${getSalutation()},%0A${name}`,
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
             `Hello,%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${location}.%20I’m%20writing%20to%20urge%20you%20to%20advocate%20for%20the%20legislature%20to%20convene,%20discuss,%20and%20pass%20Senator%20Bailey%20and%20Assemblyman%20O'Donnell's%20bill%20to%20repeal%20section%2050-A%20(A2513/S3695).%20In%20light%20of%20police%20violence%20against%20peaceful%20protestors%20and%20our%20Black%20community%20while%20concealing%20badge%20numbers%20that%20prevent%20them%20from%20being%20held%20accountable%20for%20their%20wrong%20doings.%2050-A%20must%20be%20fully%20repealed,%20with%20no%20modifications%20or%20amendments.%20Can%20I%20count%20on%20you%20to%20support%20the%20bill%20to%20fully%20repeal%2050-A%20and%20ask%20leadership%20to%20bring%20this%20Bailey/O'Donnell%20bill%20to%20the%20floor%20and%20vote%20YES%20to%20fully%20repeal%20it?%0D%0A%0D%0APlease%20do%20not%20take%20a%20break,%20do%20not%20disappear,%20and%20be%20accessible.%20We%20need%20hearings%20to%20be%20held%20and%20action%20to%20be%20taken%20on%20this%20brutal%20policing,%20how%20to%20stop%20it%20and%20how%20to%20move%20funding%20AWAY%20from%20police%20and%20TOWARD%20education,%20public%20housing,%20and%20youth%20and%20community%20development.%20Deferring%20to%20Cuomo%20during%20this%20Pandemic%20is%20not%20what%20you%20were%20voted%20into%20office%20to%20do.%20Do%20the%20right%20thing.%20Help%20seek%20justice%20for%20the%20Black%20community,%20for%20New%20Yorkers,%20and%20the%20people%20you%20claim%20to%20serve.%0D%0A%0D%0ARegards,%0A${name}`,
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
         {
           title: "Defund12: Orlando, FL",
           to: "buddy.dyer@orlando.gov",
           cc: [
             "tony.ortiz@orlando.gov",
             "jim.gray@orlando.gov",
             "robert.stuart@orlando.gov",
             "regina.hill@orlando.gov",
             "patty.sheehan@orlando.gov",
             "bakari.burns@orlando.gov",
           ],
           subject: "Reject%20Mayor%27s%20Budget%2C%20Defund%20OPD",
           getBody: (name: string, location: string) =>
             `Dear%20Orlando%20City%20Council%20Members%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${location}.%20This%20year%2C%20Mayor%20Dyer%20expressed%20that%20community%20safety%20was%20his%20top%20priority%2C%20yet%20only%20allocated%2010%2C841%2C328%20(0.8%25%20of%20total%20budget)%20toward%20affordable%20housing%20and%20community%20development.%20Rather%20than%20prioritize%20quality%20of%20life%20for%20all%20of%20Orlando%20with%20a%20proportional%20housing%20and%20development%20budget%2C%20Mayor%20Dyer%20chose%20to%20prioritize%20OPD%20with%20a%20budget%20of%20187%2C104%2C901%20(13.7%25%20of%20total%20budget)%20with%20an%20additional%20%244%2C432%2C857%20for%20non-departmental%20costs.%0D%0A%0D%0AI%20am%20emailing%20today%20to%20demand%20that%20you%20vote%20against%20the%20Mayor%27s%202020-2021%20proposed%20budget.%20Furthermore%2C%20I%20urge%20you%20to%20pressure%20the%20office%20of%20the%20mayor%20towards%20an%20ethical%20and%20equal%20reallocation%20of%20the%20budget%20away%20from%20OPD%20and%20towards%20safe%20housing%2C%20social%20services%2C%20and%20education%20programs%2C%20effective%20at%20the%20beginning%20of%20FY%202020-2021.%20Mayor%20Dyer%20has%20become%20complicit%20in%20his%20tenure%20as%20mayor%20with%20police%20brutality%20and%20I%20am%20asking%20that%20city%20officials%20lobby%20the%20same%20amount%20of%20attention%20and%20effort%20towards%20finding%20sustainable%2C%20longterm%20change%20for%20our%20entire%20community.%20Research%20shows%20that%20a%20living%20wage%2C%20access%20to%20holistic%20health%20services%20and%20treatment%2C%20educational%20opportunity%2C%20and%20stable%20housing%20are%20far%20more%20successful%20at%20reducing%20crime%20than%20police%20or%20prisons%20(Source%3A%20Popular%20Democracy).%0D%0A%0D%0ATo%20the%20commissioners%20that%20represent%20statistically%20wealthy%2C%20white%20neighborhoods%2C%20do%20not%20forget%20our%20poor%20communities%20and%20BIPOC%20communities%20who%20are%20disproportionate%20targets%20of%20police%20violence.%20Justice%20will%20only%20be%20served%20when%20OPD%20is%20reformed%2C%20and%20this%20will%20not%20be%20possible%20until%20we%20defund%20them.%0D%0A%0D%0ACan%20I%20count%20on%20you%20to%20pass%20an%20alternative%20budget%20that%20puts%20a%20focus%20on%20social%20service%20programs%3F%20If%20not%2C%20you%20can%20count%20on%20me%20to%20help%20ensure%20you%20are%20voted%20out%20of%20office.%0D%0A%0D%0AThank%20you%2C%0A${name}`,
         },
         {
           title: "Defund12: Los Angeles, CA",
           to: "mayor.helpdesk@lacity.org",
           cc: [
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
             "councilmember.bonin@lacity.org",
             "councilmember.englander@lacity.org",
             "councilmember.ofarrell@lacity.org",
             "councilmember.huizar@lacity.org",
             "councilmember.buscaino@lacity.org",
           ],
           subject: "We%20demand%20a%20People%27s%20Budget",
           getBody: (name: string, location: string) =>
             `I%20am%20a%20resident%20of%20${location}.%20I%20am%20writing%20to%20demand%20that%20the%20City%20Council%20adopt%20a%20People%E2%80%99s%20Budget%20that%20prioritizes%20community%20wellbeing%20and%20redirects%20funding%20away%20from%20the%20police.%0D%0A%0D%0AWe%20are%20in%20the%20midst%20of%20widespread%20upheaval%20over%20the%20systemic%20violence%20of%20policing%2C%20embodied%20by%20the%20LAPD%E2%80%99s%20well%20documented%20history%20of%20murdering%20Black%20people.%20We%20will%20no%20longer%20accept%20empty%20gestures%20and%20suggestions%20of%20%E2%80%9Creform.%E2%80%9D%20We%20are%20demanding%20that%20our%20voices%20be%20heard%20now%2C%20and%20that%20real%20change%20be%20made%20to%20the%20way%20this%20city%20allocates%20its%20resources.%0D%0A%0D%0AWe%20are%20in%20the%20midst%20of%20a%20pandemic%20with%20severe%20economic%20consequences.%20Over%2050%25%20of%20Angelenos%20are%20unemployed%2C%20and%20we%20can%20expect%2042%25%20lasting%20unemployment.%20Over%2050%25%20of%20those%20in%20this%20city%20are%20renters.%20When%20people%20are%20unemployed%2C%20they%20cannot%20pay%20rent.%20Prior%20to%20the%20pandemic%2C%2060k%20people%20were%20unhoused%3B%20the%20evictions%20and%20economic%20insecurity%20caused%20by%20COVID-19%20will%20bring%20that%20number%20even%20higher.%0D%0A%0D%0ASupport%20for%20communities%20in%20need%20is%20necessary%20now%2C%20more%20than%20ever.%20But%20instead%2C%20the%20Mayor%20has%20proposed%20an%20increase%20in%20funding%20to%20the%20LAPD%2C%20despite%20the%20fact%20that%20crime%20has%20fallen%20considerably%20during%20the%20past%20few%20months.%20The%20LAPD%20has%20seen%20a%20rise%20in%20overtime%20pay%20which%2C%20more%20often%20than%20not%2C%20is%20paid%20out%20to%20officers%20responsible%20for%20harassing%20the%20unhoused%2C%20and%20Black%2C%20Indigenous%2C%20people%20of%20color.%0D%0A%0D%0AWe%20demand%20that%20the%20City%20Council%20defund%20the%20LAPD.%20We%20join%20the%20calls%20of%20those%20across%20the%20country%20to%20%23DefundThePolice.%20We%20demand%20a%20budget%20that%20adequately%20and%20effectively%20meets%20the%20needs%20of%20at-risk%20Angelenos%20during%20this%20trying%20and%20uncertain%20time%2C%20when%20livelihoods%20are%20on%20the%20line.%20We%20demand%20a%20budget%20that%20supports%20community%20wellbeing%2C%20rather%20than%20empowers%20the%20police%20forces%20that%20tear%20them%20apart.%0D%0A%0D%0AAlthough%20City%20Council%20has%20avoided%20voting%20or%20revising%20Mayor%20Garcetti%27s%20draconian%20budget%20proposal%2C%20the%20document%20is%20back%20in%20your%20hands.%20It%20is%20your%20duty%20to%20represent%20your%20constituents.%20I%20am%20urging%20you%20to%20completely%20revise%20the%20LA%20budget%20for%202020-2021%20fiscal%20year%2C%20and%20to%20fund%20%23CareNotCops.%20You%20need%20to%20adopt%20a%20People%E2%80%99s%20Budget.%20Public%20opinion%20is%20with%20me.%0D%0A%0D%0AThank%20you%20for%20your%20time%2C%0D%0A%0D%0A${name}`,
         },
         {
           title: "Defund12: Boston, MA City Council",
           to: "andrea.campbell@boston.gov",
           cc: ["ccc.ps@boston.gov"],
           subject: "Reduce%20the%20Boston%20Police%20Department%20budget",
           getBody: (name: string, location: string) =>
             `Dear%20City%20Councilors%2C%0D%0A%0D%0AThe%20City%20of%20Boston%20must%20reduce%20the%20Boston%20Police%20Department%20budget.%20The%20City%20Council%20needs%20to%20address%20a%20lack%20of%20investment%20in%20predominantly%20Black%20and%20Brown%20communities%20and%20an%20over-investment%20in%20their%20criminalization%20and%20surveillance%20including%20spending%20on%20the%20Boston%20Regional%20Intelligence%20Center%20(BRIC).%0D%0A%0D%0AThe%20City%20Council%20is%20considering%20a%20grant%20of%20%24850%2C000%20from%20the%20Executive%20of%20Public%20Safety%20to%20spend%20on%20the%20BRIC%2C%20in%20addition%20to%20%244%20million%20in%20the%20City%20Budget%20and%20other%20federal%20funding%20from%20Trump%E2%80%99s%20Department%20of%20Homeland%20Security.%20The%20City%20Council%20should%20not%20authorize%20the%20grant%20and%20should%20cut%20the%20BRIC%20line%20item%20from%20our%20city%20budget.%20BRIC%20manages%20the%20racist%20gang%20database%20and%20invasive%20surveillance%20that%20disproportionately%20targets%20Black%20and%20Brown%20residents.%0AWith%20the%20overall%20police%20budget%2C%20the%20City%20Council%20has%20the%20power%20to%20cut%20line%20items%20in%20the%20City%20budget.%20The%20police%20budget%20and%20overtime%20budget%20should%20be%20cut%2C%20with%20funds%20reinvested%20in%20Black%20and%20POC%20communities%20including%20%2415%20million%20this%20year%20for%20youth%20jobs.%0D%0A%0D%0ANow%20especially%2C%20the%20City%20Council%20can%20take%20a%20stand%20for%20racial%20justice%20by%20significantly%20defunding%20policing%20and%20investing%20in%20Black%20and%20Brown%20communities%20-%20starting%20with%20cutting%20the%20least%20transparent%20and%20most%20harmful%20parts%20of%20the%20BPD%20budget.%0D%0A%0D%0ARacist%20police%20violence%20doesn%E2%80%99t%20just%20happen%20in%20other%20cities%20-%20it%20happens%20here%20in%20Boston%20too.%20%20The%20City%20Council%20must%20stop%20investing%20in%20targeted%20criminalization%20and%20surveillance%2C%20and%20fund%20what%20Black%20and%20Brown%20communities%20need%20to%20be%20safe%20and%20healthy%3A%20COVID19%20relief%2C%20housing%2C%20healthcare%2C%20treatment%2C%20healing%2C%20cooperative%20businesses%2C%20community%20centers%2C%20community-led%20organizations%20and%20projects.%20%0D%0A%0D%0AThank%20you%2C%0A${name}%20/%20${location}`,
         },
         {
           title: "Defund12: Boston, MA Mayor",
           to: "MAYOR@boston.gov",
           cc: ["asdf"],
           subject:
             "Demanding%20support%20for%20unbiased%20law%20enforcement%20policies",
           getBody: (name: string, location: string) =>
             `Hello%2C%20%0D%0A%0D%0AMy%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}%20and%20I%20am%20emailing%20today%20to%20express%20my%20unequivocal%20support%20for%20the%20resolution%20introduced%20by%20Congresswoman%20Pressley%20and%20other%20leaders%20of%20color%20on%20Tuesday.%20I%20would%20like%20to%20know%20what%20the%20Mayor%27s%20plan%20is%20to%20support%20the%20issues%20encompassed%20in%20this%20resolution%20at%20the%20local%20level.%20I%20am%20also%20demanding%20that%20Mayor%20Walsh%20take%20specific%20measures%20to%20decrease%20police%20violence.%20%0D%0A%0D%0AI%20demand%20that%20the%20Mayor%20support%20the%20desires%20of%20our%20Boston%20community%20and%20hear%20our%20call%20for%3A%20%0A*%20Efforts%20to%20improve%20oversight%20and%20independent%20investigations%20to%20hold%20individual%20law%20enforcement%20officers%20and%20police%20departments%20accountable%0A*%20Supporting%20efforts%20to%20establish%20an%20all%20civilian%20review%20board%20with%20the%20authority%20to%20investigate%20incidents%20of%20police%20misconduct%2C%20to%20ensure%20community%20level%20oversight%20accountability%20and%20discipline%20the%20reaction%20of%20police%20officers%0A*%20The%20adoption%20of%20sound%20and%20unbiased%20law%20enforcement%20policies%20at%20all%20levels%20of%20government%20that%20reduce%20the%20disparate%20impact%20of%20police%20brutality%20racial%20profiling%20and%20use%20of%20force%20on%20black%20and%20brown%20people%2C%20and%20other%20historically%20marginalized%20communities.%0A*%20Action%20to%20address%20the%20racial%20wealth%20gap%20in%20Boston%20and%20decrease%20the%20spread%20of%20rampant%20gentrification%20and%20rising%20housing%20costs%20that%20disproportionately%20target%20black%20and%20brown%20residents.%20%0D%0A%0D%0AMayor%20Walsh%20can%20take%20specific%20action%20RIGHT%20NOW%20by%20enacting%20the%20following%20policies%3A%20%0A*%20Requiring%20officers%20to%20de-escalate%20situations%20before%20using%20force%2C%20mandating%20de-escalation%20training%20for%20officers%2C%20and%20requiring%20that%20police%20forces%20de-escalate%20as%20soon%20as%20resistance%20decreases%20%0A*%20Require%20that%20officers%20always%20give%20a%20clear%20verbal%20warning%20before%20discharging%20firearms%0A*%20Require%20that%20officers%20intervene%20if%20another%20officer%20is%20threatening%20excessive%20force%20or%20using%20excessive%20force%2C%20and%20train%20all%20officers%20to%20do%20so%0ARequire%20that%20all%20officers%20submit%20a%20report%20after%20any%20threat%20to%20use%20a%20firearm%20or%20any%20use%20of%20a%20firearm%0A*%20I%20would%20like%20to%20hear%20the%20Mayor%27s%20position%20on%20this%20resolution%20loud%20and%20clear%2C%20and%20see%20a%20clear%20plan%20forward%20on%20all%20of%20the%20above%20actions.%20%0D%0A%0D%0A${getSalutation()}%2C%20%0A${name}`,
         },
         {
           title: "Defund12: Asheville, NC",
           to: "ashevillenccouncil@ashevillenc.gov",
           subject:
             "Redirect%20money%20away%20from%20Asheville%20Police%20Department%E2%80%99s%20budget",
           getBody: (name: string, location: string) =>
             `Dear%20Asheville%20City%20Councilmembers%2C%20%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%E2%80%99m%20a%20resident%20of%20${location}.%20I%20am%20writing%20about%20Asheville%20Mayor%20Esther%20Manheimer%E2%80%99s%20fiscal%20year%202021%20budget%20proposal.%0D%0A%0D%0AI%20am%20asking%20that%20the%20Asheville%20City%20Council%20make%20a%20more%20overt%20and%20visible%20commitment%20to%20racial%20justice.%20I%20demand%20that%20the%20budget%20vote%20be%20delayed%20so%20that%20Council%20may%20find%20ways%20to%20redirect%20money%20away%20from%20Asheville%20Police%20Department%E2%80%99s%20overinflated%20budget.%20I%20urge%20you%20to%20pressure%20the%20City%20Manager%E2%80%99s%20Office%20towards%20an%20ethical%20and%20equal%20reallocation%20of%20the%20city%E2%80%99s%20expenditures%2C%20away%20from%20APD%2C%20and%20towards%20sectors%20that%20facilitate%20the%20dismantling%20of%20racial%20and%20class%20inequality.%20%0D%0A%0D%0AResearch%20shows%20that%20a%20living%20wage%2C%20access%20to%20holistic%20health%20services%20and%20treatment%2C%20educational%20opportunity%2C%20and%20stable%20housing%20are%20far%20more%20successful%20at%20reducing%20crime%20than%20police%20or%20prisons%20(Source%3A%20Popular%20Democracy).%20As%20such%2C%20I%20demand%20more%20aggressive%20financial%20support%20be%20directed%20to%20those%20areas.%0D%0A%0D%0ADo%20not%20forget%20our%20poor%20communities%20and%20communities%20of%20color%20who%20are%20disproportionate%20targets%20of%20police%20violence.%20Justice%20will%20only%20be%20served%20when%20the%20police%20are%20reformed%2C%20and%20this%20will%20not%20be%20possible%20until%20we%20defund%20them.%20%0D%0A%0D%0ACan%20I%20count%20on%20you%20to%20consider%20an%20alternative%20budget%20that%20puts%20a%20focus%20on%20social%20service%20programs%3F%20%0D%0A%0D%0AThank%20you%2C%0D%0A%0D%0A${name}`,
         },
         {
           title: "Defund12: Chapel Hill, NC",
           to: "mayorandcouncil@townofchapelhill.org",
           subject:
             "Please%20decrease%20Chapel%20Hill%20Police%20Department%E2%80%99s%20budget",
           getBody: (name: string, location: string) =>
             `Dear%20Mayor%20Hemminger%20and%20Council%20members%2C%0D%0A%0D%0AI%20write%20today%20to%20urge%20you%20to%20amend%20the%20recommended%20budget%20for%20FY%202020-21.%20In%20light%20of%20the%20continued%20devaluation%20of%20Black%20life%20in%20this%20country%2C%20I%20am%20disappointed%20to%20see%20that%20my%20town%20plans%20to%20increase%20the%20police%20budget%20in%20the%20coming%20year.%0D%0A%0D%0AWe%20have%20reached%20a%20turning%20point%2C%20here%20in%20Chapel%20Hill%20and%20around%20the%20country.%20We%20may%20choose%20to%20divert%20funds%20from%20an%20increasingly%20militarized%20police%20force%20and%20invest%20in%20community%20education%2C%20health%2C%20and%20employment.%20Or%20we%20may%20increase%20already%20sizable%20budgets%20and%20escalate%20the%20terror%20Black%20Americans%20face%20on%20our%20streets.%20I%20hope%20you%20all%20will%20choose%20the%20former.%0D%0A%0D%0APlease%20do%20not%20increase%20the%20police%20budget%20in%20FY2020-21.%0D%0A%0D%0AThank%20you%2C%0D%0A%0D%0A${name}`,
         },
         {
           title: "Defund12: Charlotte, NC",
           to: "mayor@charlottenc.gov",
           cc: [
             "Marcus.jones@charlottenc.gov",
             "James.mitchell@charlottenc.gov",
             "Braxton.winston@charlottenc.gov",
             "dimple.ajmera@charlottenc.gov",
             "larken.egleston@charlottenc.gov",
             "Malcolm.graham@ci.charlotte.nc.us",
             "Victoria.watlington@charlottenc.gov",
             "Renee.johnson@charlottenc.gov",
             "matt.newton@charlottenc.gov",
             "Tariq.bokhari@charlottenc.gov",
             "edriggs@charlottenc.gov",
           ],
           subject:
             "Defund%20CMPD%20and%20Eliminate%20%22Crowd%20Control%22%20Weapons",
           getBody: (name: string, location: string) =>
             `Dear%20City%20Council%2C%20Mayor%20Vi%20Lyles%2C%20and%20City%20Manager%20Marcus%20Jones%2C%0D%0A%0D%0AMy%20name%20is%20${name}.%20I%E2%80%99m%20writing%20to%20demand%20for%20a%20reduction%20of%20the%20Charlotte%20Mecklenburg%20Police%20Department%E2%80%99s%20%24290.2%20million%20budget%20allocation%2C%20with%20no%20additional%20funding%20of%20over%20%244%20million%20allocated%20to%20CMPD%20in%20the%202021%20budget.%20I%20am%20also%20writing%20to%20demand%20that%20the%20city%20of%20Charlotte%20abolishes%20CMPD%E2%80%99s%20usage%20of%20chemical%20weapons%20and%20rubber%20bullets.%0D%0A%0D%0AIn%20the%20context%20of%20nationwide%20protests%20against%20racist%20police%20brutality%2C%20CMPD%20has%20relentlessly%20stalked%2C%20manipulated%2C%20cornered%2C%20kettled%2C%20teargassed%2C%20pepper%20balled%2C%20and%20attacked%20the%20community%20it%20claims%20to%20serve.%20They%20have%20assaulted%20peaceful%20protesters%2C%20medics%2C%20children%2C%20and%20reporters%20with%20reckless%20abandon.%20On%20June%202%2C%20officers%20trapped%20a%20crowd%20of%20peaceful%20protesters%20in%20a%20parking%20garage%20with%20tear%20gas%2C%20pepper%20balls%2C%20and%20flash-bangs.%20A%20viral%20video%20of%20this%20incident%20has%20sparked%20outrage%20in%20North%20Carolina%20and%20beyond.%20As%20the%20Charlotte%20Observer%20wrote%20in%20its%20coverage%20of%20the%20attack%2C%20one%20protester%20stated%20that%20it%20felt%20as%20though%20their%20face%20%E2%80%9Cwas%20melting%20off.%E2%80%9D%20These%20chemical%20weapons%2C%20which%20are%20supposedly%20%E2%80%9Cnon-lethal%2C%E2%80%9D%20often%20result%20in%20violent%20injuries.%20Other%20cities%20have%20seen%20victims%20lose%20their%20eyes%20to%20rubber%20bullets%20and%20suffer%20horrific%20respiratory%20attacks%20from%20being%20pepper%20sprayed%20or%20teargassed.%20The%20usage%20of%20airborne%20chemical%20agents%20is%20particularly%20cruel%20and%20dangerous%20when%20considering%20the%20fact%20that%20coronavirus%20already%20weakens%20the%20respiratory%20and%20immune%20systems.%0D%0A%0D%0AAttempts%20to%20reform%20the%20Charlotte%20Mecklenburg%20Police%20Department%20have%20been%20woefully%20inadequate%20in%20reducing%20racial%20disparities%20in%20policing.%20Between%202013%20and%202019%20CMPD%20has%20killed%20Black%20people%20at%203.1%20times%20the%20rate%20of%20white%20people%20--%20higher%20than%20the%20already%20shameful%20national%20average.%20In%20spite%20of%20these%20troubling%20statistics%20and%20the%20national%20outcry%20against%20the%20murders%20of%20Keith%20Lamont%20Scott%2C%20Danquirs%20Franklin%2C%20and%20many%20others%2C%20CMPD%20continues%20to%20drag%20its%20feet%20on%20even%20the%20most%20basic%20reforms%3A%20bans%20on%20chokeholds%20or%20strangleholds%2C%20banning%20shooting%20at%20moving%20vehicles%2C%20requirements%20to%20exhaust%20all%20other%20means%20before%20shooting%2C%20requiring%20other%20officers%20to%20intervene%20if%20they%20see%20an%20officer%20using%20excessive%20force%2C%20and%20extensive%20reporting%20requirements.%20Its%20community%20review%20board%20serves%20only%20an%20advisory%20role%2C%20and%20as%20a%20result%2C%20a%20whole%20lot%20of%20community%20input%20is%20summarily%20ignored.%0D%0A%0D%0AThe%20truth%20of%20the%20matter%20is%20that%20pouring%2040%25%20of%20our%20city%E2%80%99s%20budget%20into%20a%20bloated%2C%20militant%2C%20and%20punitive%20police%20force%20will%20not%20stop%20crime%20in%20our%20city.%20It%20will%20only%20serve%20to%20encourage%20broken-windows%20policing%2C%20criminalize%20Black%20Charlotteans%20and%20waste%20tax%20dollars.%20If%20we%20want%20to%20stop%20crime%2C%20we%20have%20to%20fund%20the%20measures%20that%20will%20prevent%20it%3A%20education%2C%20arts%2C%20parks%2C%20social%20services%2C%20services%20for%20homeless%20and%20impoverished%20people%2C%20and%20healthcare.%0D%0A%0D%0ATeargassing%20protesters%20and%20trying%20to%20spin%20it%20a%20week%20before%20a%20budget%20vote%20is%20not%20how%20you%20build%20trust%20in%20a%20city%20already%20marred%20by%20racist%20police%20violence.%20If%20anything%2C%20this%20reflects%20an%20outrageous%20disregard%20for%20our%20community%E2%80%99s%20safety%20and%20well-being%2C%20and%20the%20outright%20danger%20CMPD%20presents%20to%20the%20most%20vulnerable%20Charlotteans.%20CMPD%E2%80%99s%20platitudes%2C%20kneeling%2C%20and%20%E2%80%9Ccommunity%20outreach%E2%80%9D%20don%E2%80%99t%20fool%20us.%20It%20is%20past%20time%20to%20retire%20the%20use%20of%20chemical%20weapons%20and%20pull%20back%20funding%20of%20CMPD.%0D%0A%0D%0ACities%20across%20America%20are%20reevaluating%20their%20racist%20policing%20systems%2C%20and%20we%20hope%20that%20Charlotte%20can%20be%20at%20the%20forefront%20of%20this%20movement.%20We%20will%20not%20be%20considered%20a%20leader%20for%20the%20New%20South%20if%20we%20do%20not%20interrogate%20racism%20in%20every%20way%20that%20it%20exists%20in%20Charlotte.%0D%0A%0D%0APlease%20do%20your%20part%20and%20implement%20these%20measures.%0D%0A%0D%0ABest%20wishes%2C%0D%0A%0D%0A${name}`,
         },
         {
           title: "Defund12: Cleveland, OH",
           to: "mayorsactioncenter@city.cleveland.oh.us",
           cc: [
             "jjones@clevelandcitycouncil.org",
             "kbishop@clevelandcitycouncil.org",
             "kmccormack@clevelandcitycouncil.org",
             "kjohnson@clevelandcitycouncil.org",
             "pcleveland@clevelandcitycouncil.org",
             "bgriffin@clevelandcitycouncil.org",
             "bjones@clevelandcitycouncil.org",
             "mpolensek@clevelandcitycouncil.org",
             "kconwell@clevelandcitycouncil.org",
             "ahairston@clevelandcitycouncil.org",
             "bmooney@clevelandcitycouncil.org",
             "abrancatelli@clevelandcitycouncil.org",
             "kkelley@clevelandcitycouncil.org",
             "cflanagan@clevelandcitycouncil.org",
             "jsantana@clevelandcitycouncil.org",
             "mzone@clevelandcitycouncil.org",
             "bkazy@clevelandcitycouncil.org",
             "cslife@clevelandcitycouncil.org",
           ],
           subject:
             "Redirect%20money%20from%20Cleveland%20Police%20Department%E2%80%99s%20budget",
           getBody: (name: string, location: string) =>
             `Hello%2C%20my%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${location}.%0D%0A%0D%0AThe%20City%20of%20Cleveland%20needs%20to%20address%20the%20lack%20of%20investment%20in%20predominantly%20Black%20communities%20and%20the%20over-investment%20in%20their%20criminalization.%20Although%20the%202020%20city%20budget%20was%20already%20approved%20in%20March%2C%20the%20City%20of%20Cleveland%20must%20reduce%20its%20Division%20of%20Police%20budget.%0D%0A%0D%0A%24217%2C908%2C375%20of%20the%20%241.8%20billion%20budget%20is%20allocated%20to%20the%20Division%20of%20Police%2C%20an%20increase%20of%20%2410%20million%20from%202019.%20That%20increase%20is%20greater%20than%20the%20entire%202020%20Department%20of%20Housing%20budget.%20%0D%0A%0D%0AAfter%20a%20two%20year%20investigation%20ending%20in%202014%2C%20the%20Justice%20Department%20cited%20CPD%20for%20abuse%20due%20to%20a%20pattern%20and%20practice%20of%20excessive%20force.%20Ohioans%20understand%20this%20resulted%20in%20a%20consent%20decree%20that%20mandates%20certain%20budget%20allocations.%20Ohioans%20also%20expect%20and%20deserve%20compliance%20and%20progress%20with%20the%20consent%20decree.%20In%20April%202020%2C%20Desmond%20Franklin%20was%20shot%20and%20killed%20by%20an%20off-duty%20police%20officer.%20In%20December%202019%2C%2013-year-old%20Tamia%20Chappman%20was%20killed%20in%20a%20high-speed%20police%20chase%20while%20walking%20to%20the%20library.%20We%20cannot%20rely%20on%20the%20Division%20of%20Police%20to%20%E2%80%9Cself-evaluate%20in%20order%20to%20improve%20in%20areas%20of%20training%2C%20efficient%20and%20effective%20delivery%20of%20services%2C%20officer%20safety%2C%20and%20community%20engagement%E2%80%9D%20in%20the%20best%20interest%20of%20the%20public%2C%20like%20the%20staffing%20report%20claims.%0D%0A%0D%0AMayor%20Frank%20Jackson%20is%20complicit%20in%20the%20crisis%20of%20police%20brutality.%20Tragic%20killings%20of%20Black%20Cleveland%20citizens%20by%20police%20violence%20%E2%80%94%20including%20Timothy%20Russell%2C%20Malissa%20Williams%2C%20and%20Tamir%20Rice%20%E2%80%94%20happened%20under%20Mayor%20Jackson%E2%80%99s%20tenure.%20%0D%0A%0D%0AIn%20an%20interview%20with%20The%20Appeal%20on%20June%203%202020%2C%20Mayor%20Jackson%20said%3A%20%0Aa)%20he%20would%20not%20revisit%20reallocating%20police%20budget%20now%20%0Ab)%20Cleveland%20cannot%20rely%20on%20the%20government%20to%20help%20end%20structural%20racism%20and%20police%20violence%20and%20we%20should%20instead%20look%20to%20philanthropy%20and%20the%20private%20sector.%0A%E2%80%A6If%20not%20now%2C%20when%3F%20If%20government%20can%E2%80%99t%20help%20fix%20itself%2C%20who%20can%3F%20The%20burden%20does%20not%20lie%20on%20citizens.%20I%20demand%20you%20reconsider%20these%20stances%20to%20help%20end%2C%20not%20mitigate%2C%20police%20brutality.%0D%0A%0D%0ACleveland%20City%20Council%20cares%20about%20these%20issues.%20The%20recent%20unanimous%20vote%20to%20declare%20racism%20a%20public%20health%20crisis%20proves%20that.%20I%20ask%20that%20you%20continue%20to%20find%20sustainable%2C%20long-term%20change%20for%20the%20entire%20community.%20%0D%0A%0D%0AResearch%20shows%20that%20a%20living%20wage%2C%20access%20to%20holistic%20health%20services%20and%20treatment%2C%20educational%20opportunity%2C%20and%20stable%20housing%20are%20far%20more%20successful%20at%20reducing%20crime%20than%20police%20or%20prisons.%20Redirect%20money%20from%20the%20Division%20of%20Police%20and%20instead%20invest%20in%20social%20services.%20The%20policing%20budget%20can%20be%20better%20spent%20on%20quality%20of%20life%20for%20all%2C%20particularly%20in%20predominantly%20Black%20and%20brown%20communities.%20Programs%20like%20education%2C%20housing%2C%20healthcare%2C%20cooperative%20businesses%2C%20and%20community%20centers%20deserve%20that%20funding.%20%0D%0A%0D%0AThank%20you,%20%0D%0A%0D%0A${name}`,
         },
         {
           title: "Defund12: Minneapolis, MN",
           to: "jacob.frey@minneapolismn.gov",
           cc: [
             "kevin.reich@minneapolismn.gov",
             "cam.gordon@minneapolismn.gov",
             "steve.fletcher@minneapolismn.gov",
             "phillipe.cunningham@minneapolismn.gov",
             "jeremiah.ellison@minneapolismn.gov",
             "abdi.warsame@minneapolismn.gov",
             "lisa.goodman@minneapolismn.gov",
             "andrea.jenkins@minneapolismn.gov",
             "alondra.cano@minneapolismn.gov",
             "lisa.bender@minneapolismn.gov",
             "jeremy.schroeder@minneapolismn.gov",
             "andrew.johnson@minneapolismn.gov",
             "linea.palmisano@minneapolismn.gov",
           ],
           subject: "Defund%20the%20Minneapolis%20Police%20Department",
           getBody: (name: string, location: string) =>
             `Dear%20Mayor%20Frey%20and%20City%20Council%20Members%2C%0D%0A%0D%0AMy%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}%20and%20I%20am%20emailing%20today%20to%20demand%20the%20defunding%20of%20the%20Minneapolis%20Police%20Department%20and%20the%20funding%20of%20new%2C%20community-led%20and%20integrated%20health%20and%20safety%20strategies.%0D%0A%0D%0AWe%20are%20in%20the%20midst%20of%20widespread%20upheaval%20over%20the%20systemic%2C%20racist%20violence%20which%20has%20been%2C%20to%20this%20point%2C%20overseen%20by%20the%20Minneapolis%20City%20Council.%20George%20Floyd%20was%20murdered%20during%20this%20oversight.%20Beloved%20Minneapolis%20institutions%20were%20burned%20and%20destroyed%20in%20the%20aftermath.%20People%20have%20been%20left%20without%20the%20resources%20they%20need.%20Jobs%20and%20livelihoods%20will%20take%20a%20long%20time%20to%20recover.%20And%20most%20of%20all%2C%20Black%20citizens%20of%20Minneapolis%20continue%20in%20this%20moment%20to%20live%20in%20a%20city%20that%20is%20currently%20upholding%20the%20Minneapolis%20Police%20Department%20which%20has%20brutalized%20and%20taken%20too%20many%20Black%20lives.%20Therefore%2C%20we%20will%20no%20longer%20accept%20empty%20gestures%20and%20suggestions%20of%20reform.%20%0D%0A%0D%0AWe%20need%20to%20defund%20the%20Minneapolis%20Police%20Department.%20We%20need%20a%20budget%20that%20adequately%20and%20effectively%20meets%20the%20needs%20of%20Minneapolis%20residents%20during%20the%20pandemic%20and%20well%20past%20it%3B%20and%20we%20need%20a%20budget%20that%20supports%20communities%20and%20supports%20their%20well-being.%20%0D%0A%0D%0AI%20am%20urging%20you%20and%20the%20Minneapolis%20City%20Council%20to%20adopt%20a%20budget%20that%20defunds%20the%20police%20and%20funds%20non-violent%2C%20community-led%2C%20health%20and%20safety%20strategies.%0D%0A%0D%0A${getSalutation()}%2C%0D%0A%0D%0A${name}`,
         },
         {
           title: "Defund the Houston Police Department",
           to: "districta@houstontx.gov",
           cc: [
             "districtb@houstontx.gov",
             "districtc@houstontx.gov",
             "districtd@houstontx.gov",
             "districte@houstontx.gov",
             "districtf@houstontx.gov",
             "districtg@houstontx.gov",
             "districth@houstontx.gov",
             "districti@houstontx.gov",
             "districtj@houstontx.gov",
             "districtk@houstontx.gov",
             "mayor@houstontx.gov",
           ],
           subject:
             "Commit%20to%20Vote%20No%20on%20the%20Mayor's%20Budget%20%2F%20Defund%20the%20HPD",
           getBody: (name: string, location: string) =>
             `Dear%20Houston%20City%20Council%20Members%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20a%20resident%20of%20${location}.%20I%20am%20emailing%20today%20to%20demand%20that%20you%20vote%20NO%20on%20the%20Mayor's%20FY21%20proposed%20budget%20on%20Wednesday%206%2F10%20in%20response%20to%20the%20ongoing%20police%20brutality%20taking%20place%20around%20the%20country%2C%20the%20epidemic%20of%20police%20brutality%20itself%2C%20and%20for%20the%20inherent%20systemic%20racism%20of%20the%20police%20system%20itself.%0D%0A%0D%0AI%20urge%20you%20to%20pressure%20the%20office%20of%20the%20mayor%20towards%20an%20ethical%20and%20equal%20reallocation%20of%20the%20Houston%20expense%20budget%2C%20away%20from%20HPD%20and%20towards%20health%20and%20human%20services%2C%20libraries%20and%20education%20programs%2C%20as%20well%20as%20neighborhood%20planning%20and%20development%20effective%20at%20the%20beginning%20of%20FY21.%0D%0A%0D%0AFurthermore%2C%20I%20ask%20the%20city%20council%20and%20mayor%20to%20discontinue%20tax%20payer%20funding%20of%20the%20Houston%20Police%20Department%20Officer%20Liability%20insurance.%20In%20any%20other%20profession%2C%20employees%20are%20required%20to%20fund%20their%20own%20liability%20insurance%20and%20this%20should%20be%20the%20same%20for%20the%20police%20department.%20Furthermore%2C%20the%20community%20feels%20that%20this%20will%20curb%20instances%20of%20police%20brutality%20and%20officer-involved%20shootings%20of%20unarmed%20persons%20if%20liability%20insurance%20is%20funded%20from%20the%20pockets%20of%20the%20officers%20themselves.%0D%0A%0D%0AThank%20you%2C%0D%0A${name}`,
         },
         {
           title: "Adjust the 2021 Budget for Houston",
           to: "mayor@houstontx.gov",
           cc: [
             "atlarge1@houstontx.gov",
             "atlarge2@houstontx.gov",
             "atlarge3@houstontx.gov",
             "atlarge4@houstontx.gov",
             "atlarge5@houstontx.gov",
             "districta@houstontx.gov",
             "districtb@houstontx.gov",
             "districtc@houstontx.gov",
             "districtd@houstontx.gov",
             "districte@houstontx.gov",
             "districtf@houstontx.gov",
             "districtg@houstontx.gov",
             "districth@houstontx.gov",
             "districti@houstontx.gov",
             "districtj@houstontx.gov",
             "districtk@houstontx.gov",
           ],
           subject: "2021%20Fiscal%20Year%20Budget%20for%20Houston",
           getBody: (name: string, _: string) =>
             `Hello%2C%0D%0A%0D%0AI%20am%20emailing%20today%20to%20let%20you%20know%20that%20I,%20along%20with%20many%20other%20Houstonians,%20highly%20encourage%20the%20budget%20to%20be%20revised%20and%20for%20you%20to%20vote%20NO%20on%20the%20budget%20on%20Wednesday%206/10.%20It%20is%20absolutely%20horrifying%20that%2017%20percent%20of%20the%20budget%20will%20go%20to%20the%20police%20department%20while%20only%205%20percent%20will%20go%20to%20the%20health%20department,%20libraries,%20and%20parks.%20This%20is%20contributing%20to%20a%20less%20equitable%20community%20and%20not%20addressing%20the%20root%20of%20the%20problems%20our%20city%20faces.%20This%20is%20an%20issue%20of%20extreme%20urgency%20and%20importance,%20and%20the%20people%20of%20Houston,%20your%20voters,%20will%20remember%20it%20come%20election%20time.%20DO%20NOT%20approve%20this%20budget%20that%20ignores%20the%20true%20needs%20of%20our%20community.%0D%0A%0D%0A${getSalutation()}%2C%0D%0A%0D%0A${name}`,
         },
         {
           title: "Decarceration Budget for LA County",
           to: "hamai@ceo.lacounty.gov",
           cc: ["info@lacounty.gov"],
           subject:
             "In%20Support%20of%20a%20Decarceration%20Budget%20for%20LA%20County",
           getBody: (name: string, _: string) =>
             `Dear%20County%20CEO%20Hamai%2C%0D%0A%0D%0AI%20am%20writing%20to%20you%20in%20these%20difficult%20times%20to%20ask%20you%20to%20amend%20your%202020-2021%20budget.%0D%0A%0D%0AAcross%20the%20country,%20people%20are%20demonstrating%20in%20the%20streets%20and%20uniting%20around%20the%20call%20to%20“defund%20the%20police”.%20This%20is%20not%20just%20a%20rallying%20cry;%20it%20is%20a%20vision%20for%20a%20new%20way%20of%20approaching%20how%20we%20care%20for,%20protect,%20and%20strengthen%20our%20communities.%20You%20have%20heard%20many%20iterations%20of%20this%20vision%20in%20public%20comments,%20in%20petitions,%20and%20from%20the%20community%20leaders%20who%20have%20been%20collaborators%20and%20guides%20in%20the%20historic%20actions%20that%20the%20Board%20has%20already%20supported.%0D%0A%0D%0AHere%20in%20Los%20Angeles,%20the%20call%20for%20law%20enforcement%20accountability%20and%20transformation%20includes%20the%20Sheriff’s%20Department.%20Sheriff%20Villanueva%20has%20shown%20callousness,%20negligence,%20and%20a%20disregard%20for%20human%20life%20in%20his%20handling%20of%20COVID-19%20in%20the%20county%20jails%20and%20detention%20centers,%20as%20evidenced%20by%20his%20public%20accusations%20that%20people%20in%20jail%20are%20trying%20to%20infect%20themselves,%20and%20his%20reliance%20on%20a%20baseless%20“herd%20immunity%20theory.”%20He%20has%20also%20flouted%20the%20subpoena%20issued%20to%20him%20by%20the%20Civilian%20Oversight%20Commission,%20refusing%20to%20appear%20and%20answer%20questions%20about%20his%20approach%20to%20COVID-19.%20The%20Sheriff’s%20demonstrated%20opposition%20to%20LA’s%20emerging%20“care%20first”%20approach,%20the%20reduction%20in%20the%20jail%20population%20due%20to%20COVID-19,%20and%20the%20overall%20decrease%20in%20crime,%20all%20necessitate%20allocating%20funds%20away%20from%20the%20Sheriff's%20Department%20in%20order%20to%20make%20Los%20Angeles%20a%20safer%20and%20healthier%20place%20for%20all.%0D%0A%0D%0AI%20urge%20you%20to%20amend%20your%20current%20proposed%20budget:%20to%20decrease%20funding%20for%20the%20Los%20Angeles%20Sheriff’s%20Department;%20redistribute%20the%20reductions%20in%20departmental%20budgets%20so%20that%20the%20Sheriff’s%20Department%20carries%20the%20burden%20of%20COVID-related%20austerity;%20and%20begin%20funding%20the%20implementation%20of%20the%20Alternatives%20to%20Incarceration%20Report.%0D%0A%0D%0ANow%20more%20than%20ever,%20we%20must%20prioritize%20steps%20toward%20a%20more%20just,%20safe,%20and%20equitable%20Los%20Angeles.%20I%20hope%20that%20you%20continue%20your%20commitment%20to%20this%20by%20supporting%20a%20decarceration%20budget.%0D%0A%0D%0A${getSalutation()},%0D%0A%0D%0A${name}`,
         },
         {
           title: "No New Jails D.C.",
           to: "eom@dc.gov",
           subject: "No%20New%20Jails",
           getBody: (name: string, location: string) =>
             `I'm%20writing%20to%20urge%20the%20D.C.%20government%20to%20stop%20any%20plans%20for%20building%20a%20new%20jail%20and%20invest%20resources%20in%20the%20health%20and%20well-being%20of%20currently%20and%20formerly%20incarcerated%20communities.%20Every%20human%20being%20deserves%20access%20to%20healthcare,%20education,%20transportation,%20job%20security,%20and%20more.%20Investing%20resources%20into%20our%20communities%20keeps%20us%20safe,%20not%20building%20more%20jails.%20I%20urge%20you%20to%20not%20build%20a%20new%20jail%20in%20D.C.%0D%0A%0D%0A${getSalutation()}%2C%0D%0A%0D%0A${name}`,
         },
         {
           title: "D.C. Budget Testimony, Defund MPD",
           to: "judiciary@dccouncil.us",
           subject: "FY21%20Budget%20Testimony%20-%20Defund%20MPD",
           getBody: (name: string, location: string) =>
             `Dear%20DC%20Council%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20live%20in%20${location}.%20I'm%20writing%20this%20testimony%20to%20demand%20that%20all%20MPD%20funds%20be%20reallocated%20to%20pay%20for%20non-police%20resources,%20that%20no%20new%20jails%20are%20built,%20and%20that%20the%20FY21%20Budget%20prioritizes%20racial%20justice.%0D%0A%0D%0AWhy%20does%20DC%20have%20more%20officers%20per%20capita%20than%20almost%20anywhere%20else%20in%20the%20country?%20Why%20has%20the%20MPD%20budget%20grown%20every%20year?%20When%20we%20know%20that%20time%20and%20time%20again%20police%20enforcement%20inflict%20harm%20on%20the%20communities%20they%20claim%20to%20protect?%20It's%20clear%20we%20must%20remove%20their%20function%20altogether.%0D%0A%0D%0AThe%20FY21%20Budget%20must%20prioritize%20community%20safety%20by:%0D%0A%0D%0A1.%20Maintaining%20and%20increasing%20funding%20for%20the%20Office%20of%20Neighborhood%20and%20Safety%20Engagement,%0D%0A%0D%0A2.%20Expanding%20and%20funding%20domestic%20violence%20prevention%20services%0D%0A%0D%0A3.%20Increasing%20funding%20for%20trauma-informed%20mental%20health%20care%20in%20DC%20public%20schools,%20and%0D%0A%0D%0A4.%20Providing%20COVID-19%20relief%20funding%20to%20all%20DC%20residents,%20including%20undocumented%20residents.%0D%0A%0D%0AOne%20third%20of%20the%20current%20MPD%20budget%20can%20fund%20many%20of%20these%20programs%20for%20years.%20DC%20needs%20a%20budget%20that%20supports%20thriving%20communities.%20I%20urge%20you%20to%20invest%20in%20care%20over%20punishment,%20to%20invest%20in%20community%20over%20imprisonment.%0D%0A%0D%0A${getSalutation()}%2C%0D%0A%0D%0A${name}`,
         },
         {
           title: "New York: Reinstate Habeas Corpus",
           to: "bdeblasio@cityhall.nyc.gov",
           cc: [
             "mguerra@council.nyc.gov",
             "District2@council.nyc.gov",
             "SpeakerJohnson@council.nyc.gov",
             "KPowers@council.nyc.gov",
             "BKallos@benkallos.com",
             "Helen@helenrosenthal.com",
             "District7@council.nyc.gov",
             "DAyala@council.nyc.gov",
             "D09perkins@council.nyc.gov",
             "yrodriguez@council.nyc.gov",
             "District11@council.nyc.gov",
             "Andy.King@council.nyc.gov",
             "MGjonaj@council.nyc.gov",
             "fcabrera@council.nyc.gov",
             "Rtorres@council.nyc.gov",
             "District16Bronx@council.nyc.gov",
             "salamanca@council.nyc.gov",
             "RDiaz@council.nyc.gov",
             "district19@council.nyc.gov",
             "pkoo@council.nyc.gov",
             "FMoya@council.nyc.gov",
             "BGrodenchik@council.nyc.gov",
             "RLancman@council.nyc.gov",
             "dromm@council.nyc.gov",
             "JVanBramer@council.nyc.gov",
             "Adams@council.nyc.gov",
             "Koslowitz@council.nyc.gov",
             "District30@council.nyc.gov",
             "drichards@council.nyc.gov",
             "eulrich@council.nyc.gov",
             "slevin@council.nyc.gov",
             "areynoso@council.nyc.gov",
             "LCumbo@council.nyc.gov",
             "district36@council.nyc.gov",
             "info38@council.nyc.gov",
             "lander@council.nyc.gov",
             "meugene@council.nyc.gov",
             "District41@council.nyc.gov",
             "AskJB@council.nyc.gov",
             "AskKalman@council.nyc.gov",
             "District45@council.nyc.gov",
             "AMaisel@council.nyc.gov",
             "MTreyger@council.nyc.gov",
             "cdeutsch@council.nyc.gov",
             "DROSE@council.nyc.gov",
             "SMatteo@council.nyc.gov",
             "borelli@council.nyc.gov",
           ],
           subject: "Unconstitutional%20Habeas%20Corpus%20Suspension",
           getBody: (name: string, location: string) =>
             `Dear%20Mayor%20De%20Blasio%20and%20New%20York%20City%20Council%20Members%2C%0D%0A%0D%0AMy%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}.%20I%20am%20writing%20to%20express%20that%20I%20am%20deeply%20disturbed%20by%20the%20suspension%20of%20habeas%20corpus%20that%2C%20as%20of%206%20PM%20last%20night%20%286/4%29%2C%20left%20160%20New%20Yorkers%20in%20custody%2024+%20hours%20after%20their%20arrest.%20%0D%0A%0D%0AThis%20unprecedented%20act%20is%20a%20clear%20tool%20of%20suppressing%20the%20constitutional%20right%20to%20protest%2C%20unlawfully%20deterring%20citizens%20and%20non-citizens%20from%20expressing%20dissent%20and%20mourning%20the%20loss%20of%20countless%20Black%20lives%20due%20to%20the%20insidious%20forces%20of%20white%20supremacy%20enforced%20by%20police%20departments%20across%20the%20country.%20More%20so%2C%20the%20detainment%20of%20so%20many%20in%20packed%20cells%20%28reportedly%20with%20insufficient%20water%20and%20sanitary%20supplies%29%20during%20a%20global%20pandemic%20is%20reckless%2C%20cruel%2C%20and%20counter%20to%20the%20public%20health%20goals%20that%20were%20espoused%20prior%20to%20the%20murder%20of%20George%20Floyd.%0D%0A%0D%0AI%20urge%20you%20to%20use%20your%20voice%20to%20oppose%20and%20reinstate%20habeas%20corpus%2C%20which%20is%20an%20important%20recourse%20in%20law%20and%20its%20current%20suspension%20is%20unconstitutional%20and%20a%20threat%20to%20our%20civil%20liberties.%20%0D%0A%0D%0A${getSalutation()}%2C%0A${name}`,
         },
         {
           title: "Divest from the SFPD",
           to: "board.of.supervisors@sfgov.org",
           cc: [
             "sandra.fewer@sfgov.org",
             "mandelmanstaff@sfgov.org",
             "shamann.walton@sfgov.org",
           ],
           subject: "Divest%20from%20the%20SFPD",
           getBody: (name: string, location: string) =>
             `To%20the%20San%20Francisco%20Board%20of%20Supervisors%2C%20specifically%20the%20Budget%20%26%20Finance%20Committee%20of%20Supervisors%20Sandra%20Fewer%2C%20Shamann%20Walton%2C%20and%20Rafael%20Mandelman%2C %0D%0A %0D%0A My%20name%20is%20${name}.%20I%20am%20a%20resident%20of%20${location}%2C%20and%20I%20am%20emailing%20today%20to%20demand%20a%20divestation%20of%20funds%20from%20San%20Francisco's%20police%20department%20and%20redistrubution%20towards%20social%20services%20focused%20on%20community%20safety%20and%20health.%20These%20include%3A%20San%20Francisco%20Human%20Services%20Agency%2C%20Adult%20Protective%20Services%2C%20SF%20Dept%20of%20Emergency%20Preparedness%20and%20Assistance%2C%20Medi-Cal%2C%20CalWORKS%2C%20County%20Adult%20Assistance%20Programs%2C%20JobsNOW!%2C%20Families%20Rising%2C%20Family%20and%20Children's%20Services%2C%20and%20SF%20Dept%20of%20Homelessness%20and%20Supportive%20Housing%2C%20to%20name%20a%20few. %0D%0A %0D%0A As%20you%20are%20reviewing%20Mayor%20London%20Breed's%20proposed%20city%20budget%20for%20the%20next%20two%20years%2C%20I%20know%20SF's%20financial%20outlook%20has%20changed%20drastically%20as%20a%20result%20of%20COVID-19%20and%20many%20social%20services%20are%20up%20for%20budget%20cuts.%20I%20also%20know%20that%20the%20SFPD%20has%20a%20history%20of%20fatal%20police%20shootings%20(the%20murders%20of%20Alex%20Nieto%2C%20Amilcar%20Perez-Lopez%2C%20Mario%20Woods%2C%20Luis%20Gongora%20Pat%2C%20Jessica%20Williams%2C%20the%20list%20goes%20on)%2C%20and%20countless%20reports%20of%20officer%20misconduct%20and%20brutality%20that%20continue%20to%20persist%20despite%20efforts%20by%20the%20District%20Attorney%20and%20public%20defenders%20to%20press%20charges%2C%20and%20despite%20implementation%20of%20additional%20bias%20trainings%20and%20other%20reforms%20from%20both%20a%20local%20and%20federal%20level.%20These%20harmful%20issues%20persist%20and%20something%20needs%20to%20change.%20 %0D%0A (With%20funds%20that%20are%20directed%20to%20the%20police%20department%20I%20ask%20that%20additional%20efforts%20towards%20ending%20police%20violence%20be%20made%2C%20outlined%20in%20Campaign%20Zero%20(https%3A%2F%2Fwww.joincampaignzero.org%2Fsolutions%23solutionsoverview).) %0D%0A %0D%0A I%20am%20demanding%20that%20you%20remove%20funds%20from%20this%20institution%20that%20violently%20responds%20to%20community%20concerns%20and%20move%20these%20vital%20funds%20to%20services%20that%20work%20to%20de-escalate%20crime%20before%20it%20has%20the%20chance%20to%20emerge.%20These%20services%2C%20initiatives%20such%20as%20affordable%20housing%2C%20youth%20programs%2C%20social%20worker%20support%2C%20mental%20health%20support%2C%20and%20crisis%20intervention%20and%20hotlines%2C%20are%20better%20equipped%20to%20protect%20our%20communities%20both%20now%20and%20long-term%20than%20police%20departments%20that%20have%20a%20consistent%20and%20inexcusable%20history%20of%20violence%20and%20excessive%20force%2C%20specifically%20against%20communities%20of%20color%2C%20as%20we%20are%20seeing%20at%20a%20local%20and%20national%20level%20from%20police%20departments%20around%20the%20country.%20Social%20services%20also%20play%20a%20vital%20role%20in%20providing%20support%20and%20resources%20for%20marginalized%20communities%20during%20a%20global%20pandemic.%20This%20divestation%20is%20crucial%20and%20urgent%20to%20ensure%20the%20flourishing%20of%20all%20communities%20and%20an%20end%20to%20systemic%20racism%20and%20oppression.%0D%0A%0D%0A${getSalutation()}%2C%0D%0A${name}`,
         },
         {
           title: "Justice for Elijah McClain",
           to: "mcoffman@auroragov.org",
           cc: [
             "cmurillo@auroragov.org",
             "njohnsto@auroragov.org",
             "mberzins@auroragov.org",
             "jmarcano@auroragov.org",
             "acoombs@auroragov.org",
             "fbergan@auroragov.org",
             "cgardner@auroragov.org",
             "dgruber@auroragov.org",
             "ahiltz@auroragov.org",
             "alawson@auroragov.org",
           ],
           subject: "We%20Demand%20Justice%20For%20Elijah%20McClain",
           getBody: (name: string, _: string) =>
             `Dear%20Mayor%20Coffman%2C%0D%0A%0D%0AIt%20has%20been%20almost%20a%20year%20since%20the%20murder%20of%20Elijah%20McClain%20and%20still%20no%20justice%20has%20been%20served.%20His%20death%20was%20the%20direct%20result%20of%20three%20officers%20in%20your%20Police%20Department%20and%20there%20is%20no%20excuse%20for%20them%20to%20be%20back%20on%20the%20street.%20The%20circumstances%20surrounding%20his%20death%20make%20it%20clear%20that%20it%20was%20no%20accident%20and%20you%20are%20complicit%20if%20you%20allow%20this%20killing%20to%20go%20unpunished.%20%0D%0A%0D%0ATerminating%20the%20biased%20attorney%20chosen%20to%20oversee%20the%20investigation%20into%20his%20death%20was%20a%20good%20first%20step%20but%20justice%20will%20not%20be%20served%20until%20Nathan%20Woodyard%2C%20Jason%20Rosenblatt%20and%20Randy%20Roedema%20have%20all%20been%20fired%20and%20charged.%20%20Additionally%2C%20those%20involved%20in%20wrongly%20deciding%20the%20innocence%20of%20those%20officers%2C%20including%20Chief%20Nick%20Metz%20and%20District%20Attorney%20Dave%20Young%2C%20should%20not%20be%20allowed%20to%20continue%20working.%20%0D%0A%0D%0AThe%20eyes%20of%20the%20nation%20are%20on%20your%20city%2C%20and%20the%20people%20will%20not%20rest%20until%20these%20corrupt%20actions%20have%20been%20righted.%0D%0A%0D%0A${getSalutation()}%2C%0D%0A%0D%0A${name}%0A%20%20`,
         },
         {
           title: "Free Chrystul Kizer",
           to: "Michael.Graveley@da.wi.gov",
           subject:
             "Drop%20All%20Charges%20Against%20Incarcerated%20Trafficking%20Survivor%20Chrystul%20Kizer",
           getBody: (name: string, _: string) =>
             `Dear%20District%20Attorney%20Michael%20D.%20Graveley%2C%0D%0A%0D%0AMy%20name%20is%20${name}%20and%20I%20am%20writing%20to%20you%20regarding%20an%20urgent%20matter%20of%20justice%3A%20dropping%20charges%20against%20child%20sex%20trafficking%20survivor%2C%20Chrystul%20Kizer.%0D%0A%0D%0AAt%2017%20years%20old%2C%20Chrystul%20was%20trafficked%20by%20Randall%20P.%20Volar%20III%20from%20Milwaukee%20to%20Kenosha%2C%20Wisconsin%20where%20she%20experienced%20ongoing%20physical%20and%20sexual%20abuse.%20As%20you%20know%2C%20other%20girls%20were%20also%20victimized%20by%20Volar%2C%20as%20he%20was%20under%20active%20investigation%20by%20the%20Kenosha%20Police%20Department%20for%20sexual%20conduct%20with%20underage%20girls%20prior%20to%20his%20death.%20In%20the%20state%20of%20Wisconsin%2C%20people%20under%20the%20age%20of%2018%20years%20old%20are%20not%20able%20to%20consent%20to%20engage%20in%20sexual%20activity.%20Therefore%2C%20any%20%E2%80%9Csexual%20conduct%E2%80%9D%20Volar%20had%20with%20these%20girls%2C%20including%20Chrystul%2C%20was%20sexual%20violence.%0D%0A%0D%0AAccording%20to%20Chrystul%20and%20her%20legal%20counsel%2C%20on%20June%205%202018%20Chrystul%20resisted%20Volar%E2%80%99s%20attempts%20to%20forcibly%20engage%20in%20sexual%20activity.%20During%20this%20struggle%2C%20Chrystul%20shot%20Volar%20in%20an%20act%20of%20self-defense.%20Chrystul%20has%20been%20charged%2C%20wrongfully%2C%20for%20surviving%20violence.%20She%20is%20being%20criminalized%20for%20staying%20alive.%0D%0A%0D%0AChrystul%E2%80%99s%20criminalization%20fits%20the%20pattern%20of%20Black%20people%20in%20general%2C%20and%20Black%20women%20and%20girls%20specifically%2C%20being%20denied%20the%20right%20to%20self-defense%20in%20US%20legal%20systems.%20Black%20girls%20and%20women%20are%20not%20seen%20by%20courts%20or%20society%20more%20broadly%20as%20being%20vulnerable%20to%20violence%2C%20even%20though%20they%20experience%20disproportionate%20levels%20of%20violence%20compared%20to%20white%20women%20and%20girls.%20Consider%20that%20overall%2C%20Black%2FAfrican%20American%20girls%20are%203.5%20times%20more%20likely%20to%20be%20incarcerated%20than%20white%20girls.%20Studies%20by%20the%20ACLU%20show%20that%20the%20majority%20of%20girls%20in%20juvenile%20detention%20have%20experienced%20both%20physical%20and%20sexual%20assault%20prior%20to%20their%20incarceration.%20In%20a%20study%20by%20the%20Medical%20College%20of%20Wisconsin%20on%20sex%20trafficking%20in%20the%20city%20of%20Milwaukee%20(2013-16)%2C%2065%25%20of%20victims%20under%20age%2025%20were%20Black%2FAfrican%20American%20and%2024%25%20were%20white.%20Further%2C%20studies%20on%20women%20in%20prison%20demonstrate%20that%20women%20who%20are%20victims%20of%20abuse%20are%20more%20likely%20to%20be%20in%20prison%20for%20a%20violent%20offense%20than%20incarcerated%20women%20who%20had%20not%20been%20victims%20of%20abuse.%0D%0A%0D%0AIn%20your%20statements%20to%20members%20of%20the%20public%20and%20to%20the%20media%20about%20Chrystul%E2%80%99s%20case%2C%20you%20have%20indicated%20that%20Chrystul%20was%20merely%20%E2%80%9Chired%20as%20a%20prostitute%2C%E2%80%9D%20%E2%80%9Cinvolved%20in%20a%20business%20transaction%2C%E2%80%9D%20and%20that%20she%20had%20%E2%80%9Ccome%20to%20this%20community%20from%20another%20%5Bto%20kill%20her%20trafficker%5D.%E2%80%9D%20These%20statements%20and%20the%20charges%20against%20Chrystul%20signal%20to%20her%20family%20and%20the%20larger%20community%20that%20Black%20women%20and%20girls%20do%20not%20live%20lives%20worth%20saving.%20Chrystul%20was%20a%20child%20and%20was%20being%20victimized%20and%20sexually%20exploited%20by%20an%20adult.%20Black%20girls%20have%20the%20right%20to%20resist%20sexual%20violence%20and%20the%20right%20to%20survive.%0D%0A%0D%0AIn%20Chrystul%20Kizer%E2%80%99s%20case%2C%20justice%20means%20dropping%20all%20charges%20so%20she%20can%20be%20released%20immediately.%20Child%20sex%20trafficking%20survivors%2C%20including%20Chrystul%2C%20need%20community%20and%20comprehensive%20support%20to%20heal%20from%20the%20trauma%20and%20violence%20they%20have%20endured.%20Incarceration%20at%20this%20young%2C%20formative%20age%20does%20not%20provide%20needed%20healing%3B%20it%20only%20compounds%20trauma.%20In%20no%20report%20on%20child%20sex%20trafficking%20that%20I%20am%20aware%20of%20is%20incarceration%20a%20recommended%20approach%20to%20healing%20survivors%20-%20rather%2C%20experts%20on%20child%20sex%20trafficking%20have%20highlighted%20incarceration%20as%20a%20problem%20survivors%20face.%20Chrystul%20should%20not%20spend%20the%20rest%20of%20her%20life%20in%20prison.%20You%20have%20the%20power%20to%20undo%20the%20further%20injustice%20Chrystul%20is%20being%20subjected%20to%20for%20staying%20alive.%20I%20urge%20you%20to%20make%20the%20right%20choice.%0D%0A%0D%0A${getSalutation()}%2C%0D%0A%0D%0A${name}`,
         },
         {
           title: "Defund the LAPD Air Support Division",
           to: "councilmember.cedillo@lacity.org",
           cc: [
             "councilmember.Krekorian@lacity.org",
             "councilmember.blumenfield@lacity.org",
             "david.ryu@lacity.org",
             "paul.koretz@lacity.org",
             "councilmember.martinez@lacity.org",
             "councilmember.rodriguez@lacity.org",
             "councilmember.harris-dawson@lacity.org",
             "councilmember.price@lacity.org",
             "councilmember.wesson@lacity.org",
             "councilmember.bonin@lacity.org",
             "councilmember.Lee@lacity.org",
             "councilmember.ofarrell@lacity.org",
             "councilmember.huizar@lacity.org",
             "councilmember.buscaino@lacity.org",
           ],
           subject: "DEFUND%20THE%20LAPD%20AIR%20SUPPORT%20DIVISION",
           getBody: (name: string, _: string) =>
             `Dear%20Councilmembers%2C%0D%0A%0D%0AI%20am%20calling%20on%20you%20to%20support%20the%20defunding%20of%20the%20Los%20Angeles%20Police%20Air%20Support%20Division.%20This%20political%20moment%20demands%20that%20the%20Los%20Angeles%20City%20Council%20look%20for%20areas%20where%20harmful%20law%20enforcement%20programs%20can%20be%20cut%20from%20the%20budget%20for%20the%20upcoming%20fiscal%20year.%20By%20withdrawing%20financial%20support%20for%20the%20LAPASD%2C%20the%20City%20Council%20can%20retire%20a%20politically%20dated%20program%20that%20actively%20harms%20LA%20residents%20and%20drains%20resources%20that%20could%20be%20better%20spent%20elsewhere.%20These%20funds%20should%20be%20redirected%20towards%20social%20programs%20to%20keep%20Angelenos%20safe%2C%20housed%20and%20healthy%20in%20a%20time%20of%20desperate%20need.%0D%0A%0D%0AThe%20LAPASD%20is%20a%20notoriously%20unpopular%2C%20abusive%2C%20and%20costly%20arm%20of%20the%20city%E2%80%99s%20law%20enforcement%20apparatus.%20As%20the%20past%20several%20weeks%20of%20protests%20against%20police%20brutality%20and%20public%20outcry%20over%20LA%E2%80%99s%20budget%20have%20made%20abundantly%20clear%2C%20the%20people%20of%20Los%20Angeles%20are%20demanding%20divestment%20from%20city%20and%20county%20programs%20that%20harm%20Black%2C%20Latinx%2C%20and%20unhoused%20communities.%0D%0A%0D%0ABy%202020%20estimates%2C%20it%20costs%20%241%2C200%20per%20hour%20to%20fly%20an%20LAPD%20helicopter%E2%80%94without%20accounting%20for%20the%20pilot%E2%80%99s%20salary.%20On%20average%2C%20an%20LAPD%20helicopter%20burns%20the%20equivalent%20of%20two%20car%20tanks%20of%20gas%20per%20hour.%20The%20constant%20thunder%20of%20LAPD%2FLASAD%20helicopters%20overhead%2C%20day%20and%20night%2C%20make%20Angelenos%20feel%20like%20we%20live%20in%20a%20war%20zone%2C%20where%20our%20own%20city%E2%80%99s%20division%20of%20public%20safety%20is%20the%20invading%20army.%0D%0A%0D%0AThe%20LAPASD%20unit%20cannot%20be%20justified%20as%20a%20crime-solving%20expense.%20In%20past%20studies%2C%20these%20helicopters%20have%20successfully%20resolved%20a%20mere%20six%20percent%20of%20car%20theft%20cases.%20LAPD%20responds%20to%20these%20damning%20statistics%20by%20arguing%20that%20the%20helicopters%20are%20part%20of%20a%20%E2%80%98predictive%20policing%E2%80%99%20campaign%20to%20stop%20crime%20before%20it%20happens.%20%E2%80%98Predictive%20policing%E2%80%99%20is%20essentially%20a%20euphemism%20for%20racial%20profiling%2C%20an%20issue%20that%20has%20long%20plagued%20the%20LAPD.%20In%202015%2C%20the%20ACLU%20of%20Southern%20California%20found%20that%20Black%20Angelenos%20are%20three%20times%20more%20likely%20to%20be%20stopped%20by%20police%20than%20white%20Angelenos%20under%20the%20program.%20Given%20the%20helicopters%E2%80%99%20ubiquity%20over%20neighborhoods%20whose%20residents%20are%20overwhelmingly%20low-income%20Black%20and%2For%20Latinx%20people%2C%20it%20is%20clear%20that%20LAPD%20finds%20its%20air%20division%20to%20be%20an%20expedient%20way%20to%20surveil%20the%20city%E2%80%99s%20non-white%20communities.%0D%0A%0D%0AIf%20you%20find%20it%20difficult%20to%20imagine%20LA%20without%20the%20constant%20presence%20of%20these%20helicopters%2C%20consider%20this%3A%20No%20other%20major%20US%20city%20possesses%20a%20comparable%20amount%20of%20helicopters.%20If%20the%20five%20US%20cities%20with%20population%20levels%20closest%20to%20Los%20Angeles%20(New%20York%2C%20Chicago%2C%20Houston%2C%20Phoenix%20and%20Philadelphia)%20combined%20their%20fleets%2C%20they%E2%80%99d%20still%20have%20ten%20fewer%20helicopters%20than%20Los%20Angeles.%0D%0A%0D%0AIt%20is%20abundantly%20clear%20that%20the%20psychological%20and%20material%20costs%20of%20the%20LAPASD%20are%20far%20greater%20than%20its%20contribution%20to%20public%20safety.%20At%20the%20end%20of%20the%20day%2C%20the%20continued%20use%20of%20these%20helicopters%20takes%20away%20funding%20that%20could%20be%20used%20to%20benefit%20LA%E2%80%99s%20most%20marginalized%20residents.%20We%20echo%20the%20calls%20of%20Black%20Lives%20Matter%20LA%20and%20other%20community%20organizations%3A%20Divest%20from%20the%20LAPD%20and%20invest%20these%20resources%20back%20into%20the%20community.%0D%0A%0D%0APlease%20contribute%20to%20the%20betterment%20of%20public%20safety%20and%20social%20justice%20in%20our%20city%20by%20defunding%20the%20Los%20Angeles%20Police%20Air%20Support%20Division.%0D%0A%0D%0AThank%20you%2C%0D%0A${name}`,
         },
         {
           title: "Justice for Robert Fuller",
           to: "shofbauer@cityofpalmdale.org",
           cc: [
             "rloa@cityofpalmdale.org",
             "abishop@cityofpalmdale.org",
             "lbettencourt@cityofpalmdale.org",
             "jcarrillo@cityofpalmdale.org",
             "rksneed@lasd.org",
           ],
           subject: "We%20Demand%20Justice%20For%20Robert%20Fuller",
           getBody: (name: string, _: string) =>
             `Hello%2C%0D%0A%0D%0ARobert%20Fuller%20was%20a%2024%20year%20old%20black%20man%20found%20hanging%20from%20a%20tree%20in%20Palmdale%2C%20California%20at%20Poncitl%C3%A1n%20Square%20on%20Wednesday%2C%20June%2010%2C%202020%20around%204%20A.M.%20His%20death%20is%20getting%20little%20to%20no%20news%20coverage%20by%20local%20news%2C%20and%20city%20officials%20have%20presumably%20ruled%20his%20death%20a%20suicide%20and%20linked%20his%20death%20to%20the%20COVID-19%20pandemic%20without%20proof.%20During%20such%20a%20heightened%20time%20with%20the%20Black%20Lives%20Matter%20movement%20and%20the%20city%E2%80%99s%20quickness%20to%20call%20his%20death%20a%20suicide%20before%20any%20investigation%2C%20there%20is%20reason%20to%20believe%20that%20Robert%E2%80%99s%20death%20was%20a%20lynching.%20%0D%0A%0D%0APalmdale%20and%20the%20Antelope%20Valley%20as%20a%20whole%20have%20a%20history%20of%20racism%20and%20negligence.%20This%20is%20the%20same%20town%20where%208%20year%20old%20Gabriel%20Fernandez%20was%20murdered.%20The%20city%E2%80%99s%20law%20enforcement%20and%20social%20workers%20failed%20to%20intervene%20to%20save%20his%20life.%20%0D%0A%0D%0AWe%20demand%20the%20Los%20Angeles%20Sheriff%E2%80%99s%20Department%20Palmdale%20Station%20and%20the%20City%20of%20Palmdale%20to%20conduct%20a%20full%2C%20thorough%20investigation%20into%20Robert%E2%80%99s%20death.%20We%20demand%20security%20footage%20in%20Poncitl%C3%A1n%20Square%20to%20be%20presented%20and%20audio%20of%20the%20call%20placed%20when%20his%20body%20was%20found.%20We%20demand%20justice%20to%20be%20served%20for%20Robert%20and%20his%20loved%20ones.%0D%0A%0D%0ASincerely%2C%0D%0A%0D%0A${name}`,
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
