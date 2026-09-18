export type Breed = {
  slug: string;
  name: string;
  origin: string;
  tagline: string;
  description: string[];
  traits: string[];
  featured?: boolean;
  image?: string;
};

export type Country = {
  slug: string;
  name: string;
  subtitle: string;
  intro: string;
  breeds: Breed[];
};

export const COUNTRIES: Country[] = [
  {
    slug: "oostenrijk",
    name: "Oostenrijk",
    subtitle: "De Alpenweiden",
    intro:
      "In de rustige, kleinschalige veeteelt van Oostenrijk en de omliggende Alpenlanden vinden we de twee rassen waarmee Mitera ooit begon, en die tot vandaag onze bestverkochte blijven.",
    breeds: [
      {
        slug: "simmental",
        name: "Simmental",
        origin: "Oostenrijk & Beieren",
        tagline: "Onze meest gevraagde rug — de perfecte balans tussen smaak en toegankelijkheid.",
        description: [
          "Simmentaler-rund vindt zijn oorsprong in Zwitserland, en werd in de 18de eeuw uitgevoerd naar het zuiden van Duitsland (Beieren) en Oostenrijk, waar het vandaag vooral gekweekt wordt. Dit rund, met zijn lichtgele tot roodbruine vlekken op een witte vacht, wordt zowel voor de melk- als voor de vleesproductie ingezet.",
          "De dieren leven voornamelijk van gras en kruiden die ze vinden op de berghellingen en in de valleien. Door deze natuurlijke, gezonde voeding en de rust in de omgeving is het vlees mooi met vet dooraderd, met een zachte en fijne smaak.",
        ],
        traits: ["Fijne marmering", "Zachte, ronde smaak", "Ideaal voor rijping"],
        featured: true,
      },
      {
        slug: "holstein",
        name: "Holstein",
        origin: "Oostenrijk & omliggende landen",
        tagline: "Diep, romig en boterzacht — een klassieker die zijn reputatie waard is.",
        description: [
          "Wij kiezen voor vlees van Holstein-runderen die opgroeiden in minder intensieve veeteelt in Oostenrijk en de omliggende landen. De dieren grazen op uitgestrekte weilanden en krijgen daarnaast gerst en maïs.",
          "De gevarieerde voeding en de stressvrije omgeving zorgen voor extra vetmarmering, waardoor het vlees zijn natuurlijke, dieprode kleur krijgt en een romige, volle botersmaak. De structuur is vezelig maar toch mals — het vlees is sterk dooraderd met vet, ideaal voor rijping.",
        ],
        traits: ["Romige botersmaak", "Sterk dooraderd", "Uitstekende prijs/kwaliteit"],
        featured: true,
      },
    ],
  },
  {
    slug: "frankrijk",
    name: "Frankrijk",
    subtitle: "Terroir uit het Centraal Massief & de Savoie",
    intro:
      "Frankrijk telt enkele van de oudste en meest karaktervolle vleesrassen ter wereld. Elk komt uit een streek met een uitgesproken terroir — van de vulkanische Auvergne tot de bergweiden van de Savoie.",
    breeds: [
      {
        slug: "charolais",
        name: "Charolais",
        image: "/images/breeds/charolais.jpg",
        origin: "Bourgondië, Frankrijk",
        tagline: "Eén van de oudste vleesrassen ter wereld — stevig, licht gemarmerd en smaakvol.",
        description: [
          "Charolais is één van de oudste vleesrassen ter wereld. Het zijn grote en sterke dieren (tussen 750 en 1000 kg) met een crèmekleurige vacht. Het vlees is relatief mager, aangezien de dieren een goede vleestoename combineren met een lage vetvorming.",
          "Het vlees is stevig, licht gemarmerd en heel smakelijk. Het ras komt oorspronkelijk uit de streek rond Charolles, vandaar de naam, maar wordt vandaag in meerdere Franse regio's gekweekt.",
        ],
        traits: ["Stevige structuur", "Licht gemarmerd", "Klassieke Franse smaak"],
      },
      {
        slug: "limousin",
        name: "Limousin",
        image: "/images/breeds/limousin.jpg",
        origin: "Centraal Massief, Frankrijk",
        tagline: "Gebalanceerd, zacht en licht zoetig — een van de bekendste rassen van Frankrijk.",
        description: [
          "Limousin is wellicht één van de bekendste vleesrassen, afkomstig uit het Centraal Massief in Frankrijk, meer bepaald uit de streek rond Limoges, waaraan het zijn naam dankt.",
          "De smaak van dit vlees is heel gebalanceerd, zacht en licht zoetig. Het vlees is vrij mager en toch lichtjes gemarbreerd, met een stevige en licht vezelige structuur. Het heeft minder overtollig vet en is heel sappig.",
        ],
        traits: ["Zacht & licht zoetig", "Sappig", "Weinig overtollig vet"],
      },
      {
        slug: "salers",
        name: "Salers",
        image: "/images/breeds/salers.jpg",
        origin: "Cantal, Frankrijk",
        tagline: "Een beschermde delicatesse van de vulkanische bodems van de Auvergne.",
        description: [
          "De Salers behoort tot één van de meest karaktervolle rassen. Het is afkomstig uit het Centraal Massief in Frankrijk, waar het graast op de arme vulkanische grond van het onherbergzame Cantalgebergte.",
          "Op zijn zoektocht naar de tientallen soorten gras en kruiden waarmee het zich voedt, krijgt het ras veel beweging — dat toont zich in de volle en rijke vleessmaak. In Frankrijk staat het ras gekend als een delicatesse en wordt het niet voor niets onder een beschermd label verkocht.",
        ],
        traits: ["Volle, rijke smaak", "Beschermd label", "Extensieve begrazing"],
      },
      {
        slug: "aubrac",
        name: "Aubrac",
        image: "/images/breeds/aubrac.jpg",
        origin: "Plateau de l'Aubrac, Frankrijk",
        tagline: "Een oeroud, robuust ras met een kruidig, verfijnd karakter.",
        description: [
          "Het oude Aubrac-ras wordt vooral gekweekt ten zuiden van het Centraal Massief in Frankrijk. Het zijn sterke dieren, bestand tegen het ruwe klimaat op de vlakte van Aubrac en tegen ziekten.",
          "Aubrac-runderen zijn vooral vleesdieren, maar geven ook hoogwaardige melk dankzij hun natuurlijke voeding op de uitgestrekte heuvels waar ze vrij grazen. Het vlees is mals en kruidig, met karakter en verfijning.",
        ],
        traits: ["Kruidig karakter", "Vrije begrazing", "Mals"],
      },
      {
        slug: "blonde-daquitaine",
        name: "Blonde d'Aquitaine",
        image: "/images/breeds/blonde-daquitaine.jpg",
        origin: "Aquitaine, Zuidwest-Frankrijk",
        tagline: "Groot en elegant, met een mager maar mals en cholesterolarm vlees.",
        description: [
          "Dit prachtige ras komt, zoals de naam het zegt, uit de Franse Aquitaine, in het zuidwesten van Frankrijk. Het werd oorspronkelijk als werkdier gebruikt wegens zijn kracht en goede bespiering.",
          "De dieren zijn groot en elegant, met een lichtbruine vacht en een krachtig gestel. Het vlees is relatief mager maar heeft toch intramusculair vet, waardoor het heerlijk mals en lekker is. Bovendien is het vlees cholesterolarm.",
        ],
        traits: ["Mager & mals", "Cholesterolarm", "Krachtig gestel"],
      },
      {
        slug: "normande",
        name: "Normande",
        origin: "Normandië, Frankrijk",
        tagline: "Vlees met een licht zilte toets, gegraasd nabij de Mont Saint-Michel.",
        description: [
          "De Normande-runderen grazen in het Franse Normandië, dicht bij de Mont Saint-Michel. Hierdoor heeft het vlees een licht zilte smaak — het is als het ware pré-salé.",
          "Het ras kenmerkt zich door zijn sterke marmering en zijn romige smaak, een gevolg van de vochtige, grazige kustweiden waarop de dieren opgroeien.",
        ],
        traits: ["Licht ziltig (pré-salé)", "Romige smaak", "Sterke marmering"],
      },
      {
        slug: "montbeliard",
        name: "Montbéliard",
        image: "/images/breeds/montbeliard.jpg",
        origin: "Jura & Savoie, Frankrijk",
        tagline: "Een ware ontdekking — krachtig van smaak en perfect geschikt voor dry aging.",
        description: [
          "Montbéliard is een melkveeras afkomstig uit de Franse Jura, dat vandaag voornamelijk in de Savoie gekweekt wordt. Het is een stevig en robuust dier, met sterke lange poten, dat zich uitstekend handhaaft in de ruwe omstandigheden van het bergachtige Savoie-gebied.",
          "Het ras geeft zowel zeer hoogwaardige melk — gebruikt voor kazen zoals de Comté — als uitstekend vlees dankzij zijn goede bespiering. Het vlees is krachtig en enorm smaakvol, en leent zich perfect voor dry aging. Voor iedereen die het proeft, een ware ontdekking.",
        ],
        traits: ["Perfect voor dry aging", "Krachtige smaak", "Bergras uit de Savoie"],
      },
      {
        slug: "abondance",
        name: "Abondance",
        image: "/images/breeds/abondance.jpg",
        origin: "Savoie, Frankrijk",
        tagline: "Een kleine bergkoe met een fijne, mooi gemarmerde vleessmaak.",
        description: [
          "Abondance is een ras dat vooral gekweekt wordt in de Franse Savoie. Het is een echte bergkoe die zich makkelijk beweegt over ruig en steil terrein. Ze is klein van gestalte en produceert melk van hoge kwaliteit, die uitsluitend dient voor de productie van enkele AOC-kazen zoals Abondance en Reblochon.",
          "Het vlees is heel fijn van smaak, mooi gemarmerd en heel mals.",
        ],
        traits: ["Fijn van smaak", "Mooi gemarmerd", "Bergras"],
      },
    ],
  },
  {
    slug: "schotland",
    name: "Schotland",
    subtitle: "De ruige Highlands & kust",
    intro:
      "De Schotse rassen groeien op tegen weer en wind, op de zilte, kruidige weilanden van de Highlands en de kust. Hun trage, extensieve levenswijze levert een vlees op met een zeldzame diepgang.",
    breeds: [
      {
        slug: "aberdeen-angus",
        name: "Aberdeen Angus",
        image: "/images/breeds/aberdeen-angus.jpg",
        origin: "Schotse Highlands & kust",
        tagline: "Krachtig, sappig en sterk gemarmerd — een ras met tien eeuwen geschiedenis.",
        description: [
          "Het Aberdeen Angus-ras stamt uit de tiende eeuw en groeit op in de ruwe en regenachtige weilanden ten zuiden van de Schotse Highlands en aan de Schotse kust, waar het steeds smaakvol gras ter beschikking heeft.",
          "Het jodium in de lucht zorgt bovendien voor een zilte smaak. Hierdoor heeft het vlees een krachtige en sappige smaak en is het sterk gemarmerd.",
        ],
        traits: ["Sterk gemarmerd", "Zilte ondertoon", "Krachtige smaak"],
      },
      {
        slug: "highlander",
        name: "Highlander",
        image: "/images/breeds/highlander.jpg",
        origin: "Schotse Highlands & Hebriden",
        tagline: "Een oerras met een aparte, moeilijk te vergelijken smaak.",
        description: [
          "Highlanders herken je meteen aan hun roodbruine vacht met lang haar en lange horens. Dit oerras uit de Schotse Highlands en Hebriden kreeg al in 1885 zijn eerste stamboek. Het zijn erg rustige en vriendelijke dieren, eerder klein van gestalte, en dankzij hun dikke vacht bestand tegen het koude weer — waardoor ze het hele jaar buiten kunnen grazen.",
          "Het vlees heeft een aparte smaak die moeilijk te vergelijken is met andere rassen: mooi gemarmerd, smakelijk en sappig, met minder cholesterol en vet dan vele andere rassen, en een hoger eiwit- en ijzergehalte.",
        ],
        traits: ["Aparte, karaktervolle smaak", "Laag in vet & cholesterol", "Het hele jaar buiten"],
      },
      {
        slug: "luing",
        name: "Luing",
        origin: "West-Schotland",
        tagline: "Ontwikkeld voor de barre Highlands — krachtig en mooi gemarmerd.",
        description: [
          "Luing-runderen zijn van oorsprong een kruising tussen Shorthorn en Highlander, ontwikkeld in Schotland in 1947 om een ras te bekomen met een uitstekende bevlezing en een hoge weerstand tegen de barre weersomstandigheden in de Highlands. In 1965 werd het erkend als een echt ras.",
          "De dieren hebben een roodbruine vacht met halflang haar, een gemiddelde grootte, en zijn sterk en bestand tegen de woeste natuur. Het vlees is krachtig en mooi gemarmerd.",
        ],
        traits: ["Krachtig & gemarmerd", "Zeer weerbaar ras", "Gematigde grootte"],
      },
      {
        slug: "belted-galloway",
        name: "Belted Galloway",
        image: "/images/breeds/belted-galloway.jpg",
        origin: "West-Schotland",
        tagline: "Herkenbaar aan de witte gordel — mals vlees, laag in verzadigd vet.",
        description: [
          "Belted Galloway stamt uit het westen van Schotland en werd in 1921 erkend als ras. De dieren hebben een speciale vacht met een kenmerkende witte band (\"belt\") rond de rug, waaraan je ze meteen herkent. Een dikke buitenlaag stugge haren stoot regen en wind af, terwijl een zachte ondervacht hen warm houdt in de koude.",
          "Het vlees is laag in verzadigde vetten en mooi gemarmerd, mals en bijzonder smaakvol.",
        ],
        traits: ["Laag in verzadigd vet", "Mals & smaakvol", "Herkenbare witte gordel"],
      },
      {
        slug: "shorthorn",
        name: "Shorthorn",
        image: "/images/breeds/shorthorn.jpg",
        origin: "Schotland",
        tagline: "Een 18de-eeuws dubbeldoelras, vandaag een echt topproduct.",
        description: [
          "Het Shorthorn-ras stamt af van een oud dubbeldoelras uit de 18de eeuw, dat door Schotse boeren verder werd ontwikkeld tot een echt vleesras. De dieren hebben een vacht in het rood, wit of bruinzwart.",
          "Het zijn stevige dieren met een goede bevlezing, ze groeien snel en zijn zeer geschikt voor de Schotse extensieve rundveehouderij. Het vlees is gemarmerd en mals — een echt topproduct.",
        ],
        traits: ["Snelgroeiend & robuust", "Gemarmerd en mals", "Extensieve houderij"],
      },
      {
        slug: "hereford",
        name: "Hereford",
        origin: "Herefordshire, Engeland",
        tagline: "Roodbruin met een witte kop — rustiek en zacht van smaak.",
        description: [
          "Hereford is één van de oudste Britse rundveerassen, ontstaan in de groene glooiingen van het Engelse Herefordshire. Onmiskenbaar door zijn roodbruine vacht met witte kop, is dit een rustiek dier dat het grootste deel van zijn leven vrij buiten graast.",
          "Het rustige, extensieve leven op een natuurlijk grasdieet resulteert in een vlees met een zachte, ronde en licht zoete smaak, met een fijne en gelijkmatige marmering.",
        ],
        traits: ["Zachte, ronde smaak", "Extensief grasgevoerd", "Gelijkmatige marmering"],
      },
    ],
  },
  {
    slug: "italie",
    name: "Italië",
    subtitle: "Toscane, Piemonte & Veneto",
    intro:
      "Van de imposante Chianina uit Toscane tot het verfijnde, magere Piemontese-rund: Italië herbergt enkele van de meest gerenommeerde vleesrassen van Europa.",
    breeds: [
      {
        slug: "chianina",
        name: "Chianina",
        image: "/images/breeds/chianina.jpg",
        origin: "Valdichiana, Toscane",
        tagline: "De reus van Toscane — het ras achter de legendarische bistecca alla fiorentina.",
        description: [
          "Het Chianina-rund vindt zijn oorsprong in Toscane, meer bepaald in Valdichiana, de vruchtbare vallei tussen Arezzo en Chiusi waar de Chianina-rivier stroomt. Deze soort is beroemd om zijn schoonheid (brede rug en schouders, lange en gespierde romp, een schoft tot 1,8 m hoog), zijn kracht en zijn fijne smaak: lichtjes gezouten en bijzonder mals. Die smaak is te danken aan de natuurlijke begrazing in de valleien van centraal en noordelijk Italië, aangevuld met maïs en meel uit diezelfde regio.",
          "De echte bistecca alla fiorentina wordt in de beste restaurants ter wereld geserveerd. Het beste vlees komt van vrouwelijke dieren die na ongeveer 16 maanden geslacht worden: mager, licht van kleur, mals en vol smaak.",
        ],
        traits: ["Fijn & mals", "Legendarisch in Toscane", "Basis voor bistecca fiorentina"],
      },
      {
        slug: "marchigiana",
        name: "Marchigiana",
        origin: "Marche, Italië",
        tagline: "Een Romeinse delicatesse — weinig vet, licht gemarmerd en fijn van draad.",
        description: [
          "Aan de oostkust van Italië ontstond tijdens de Romeinse periode het Marchigiana-ras in de Marche. Vandaag wordt het nog steeds als delicatesse beschouwd in Italië.",
          "Het vlees is dan ook van uitstekende kwaliteit: het bevat weinig vet, maar is toch licht gemarmerd en heeft een fijne draad.",
        ],
        traits: ["Fijne draad", "Weinig vet, toch gemarmerd", "Italiaanse delicatesse"],
      },
      {
        slug: "romagnola",
        name: "Romagnola",
        image: "/images/breeds/romagnola.jpg",
        origin: "Emilia-Romagna, Italië",
        tagline: "Een oud werkdier, herboren als verfijnd vleesras.",
        description: [
          "Het Italiaanse Romagnola-ras is afkomstig uit de regio Emilia-Romagna in Noord-Italië. Oorspronkelijk werd dit ras gebruikt als trekdier. De koeien kenmerken zich door hun witte tot lichtgrijze vacht.",
          "Vandaag levert het ras een fijn getextureerd vlees op met een evenwichtige, delicate smaak — het resultaat van generaties selectie op kwaliteit boven kwantiteit.",
        ],
        traits: ["Delicate smaak", "Fijne textuur", "Historisch werkdier"],
      },
      {
        slug: "piemontese",
        name: "Piemontese",
        origin: "Piemonte, Italië",
        tagline: "Extreem mager en toch bijzonder mals, dankzij een unieke, natuurlijke bespiering.",
        description: [
          "Piemontese-runderen grazen aan de voet van de Alpen in het Italiaanse Piemonte, de bakermat van de Barolo-wijnen en de witte truffel. Het ras is wereldwijd bekend voor zijn opmerkelijk magere, maar bijzonder malse vlees — een gevolg van de natuurlijke, dubbele bespiering die het ras kenmerkt.",
          "Piemontese-vlees heeft een fijne draad en een delicate, zuivere smaak, en wordt in Italië traditioneel geserveerd als carne cruda. Een verfijnd en licht ras voor wie subtiliteit boven massa verkiest.",
        ],
        traits: ["Extreem mager", "Fijne, zuivere smaak", "Traditioneel als carne cruda"],
      },
      {
        slug: "scottona",
        name: "Scottona",
        image: "/images/breeds/scottona.jpg",
        origin: "Verona-streek, Italië (Frans-Italiaans)",
        tagline: "Het beste van twee werelden: een Frans kalf, opgegroeid op Italiaanse bodem.",
        description: [
          "Vrij vertaald betekent het Italiaanse 'scottona' vaars of eerste kalf. Kenners omschrijven dit lekkers als het beste uit twee werelden: dit jonge Limousin-kalf wordt zorgvuldig geselecteerd in de streek rond Limoges in Centraal-Frankrijk, en groeit vervolgens op in de goede handen van onze Italiaanse boeren, op hun liefdevolle bodem nabij Verona.",
          "Deze combinatie resulteert in een gebalanceerde, zachte smaak, met mals vlees dat zeer fijn van draad is. Dit natuurdier heeft daardoor zelfs geen lange rijping nodig — twee weken mag voor wie van wat meer pit houdt, maar even goed vers zal het iedereen bekoren.",
        ],
        traits: ["Zacht & fijn van draad", "Nauwelijks rijping nodig", "Frans-Italiaanse kruising"],
      },
    ],
  },
  {
    slug: "portugal",
    name: "Portugal",
    subtitle: "Van de Azoren tot Trás-os-Montes",
    intro:
      "Portugal is een land van kleine, autochtone rassen met een streng beschermde oorsprongsbenaming. Zeldzaam, weinig gekend buiten hun eigen streek, en daardoor des te bijzonderder.",
    breeds: [
      {
        slug: "arouquesa",
        name: "Arouquesa",
        image: "/images/breeds/arouquesa.jpg",
        origin: "Noord-Portugal (DOC)",
        tagline: "Zeldzaam en zeer gegeerd — in Portugal een echte delicatesse.",
        description: [
          "Arouquesa is een zeldzaam en bijzonder gegeerd vleesras, dat enkel voorkomt in het noorden van Portugal, waar het een DOC-erkenning gekregen heeft.",
          "Bij ons is het nog maar weinig gekend, maar in Portugal staat het bekend als een echte delicatesse, dankzij de sterke marmering, de malsheid en de uitgesproken smaak.",
        ],
        traits: ["DOC-erkend", "Sterke marmering", "Uitgesproken smaak"],
      },
      {
        slug: "black-angus-azoren",
        name: "Black Angus van de Azoren",
        image: "/images/breeds/black-angus-azoren.jpg",
        origin: "Azoren, Portugal",
        tagline: "Vrij grazend op vulkanische bodem, midden in de Atlantische Oceaan.",
        description: [
          "De fiere en vorstelijke Black Angus-runderen lopen het hele jaar door vrij in de uitgestrekte natuur van de Portugese Azoren, een archipel in de Atlantische Oceaan. Hun stressloze leven en rustige karakter vertalen zich in zeer mals, dooraderd en erg sappig vlees.",
          "De smaak van de Azoren komt terug door het kwalitatieve gras van de biotoop waarin ze grazen: het zorgt voor een lichte kruidentoets en smaakaroma's die uit het vet vrijkomen, wat uitmondt in een karaktervolle smaak.",
        ],
        traits: ["Vrije, jaarronde begrazing", "Karaktervolle smaak", "Vulkanische bodem"],
      },
      {
        slug: "turina",
        name: "Turina",
        origin: "Azoren, Portugal",
        tagline: "Onze selectie van weidevlees uit de Azoren — sappig met een subtiele kruidigheid.",
        description: [
          "Turina is de naam die wij geven aan een select vlees, afkomstig van rundvee dat — net als onze Azoren Black Angus — het hele jaar vrij graast in de vulkanische natuur van de Portugese Azoren.",
          "Het mineraalrijke gras en de zilte oceaanlucht van de archipel geven een sappig, mals vlees met een subtiele kruidigheid en een verfijnde marmering: een mooi alternatief binnen ons Azoren-aanbod.",
        ],
        traits: ["Sappig & mals", "Subtiele kruidigheid", "Azoren-terroir"],
      },
      {
        slug: "barrosa",
        name: "Barrosã",
        origin: "Barroso, Noord-Portugal (DOP)",
        tagline: "Traag gegroeid op karige hoogland — geconcentreerd en kruidig van smaak.",
        description: [
          "Barrosã is een oud Portugees ras uit de bergachtige streek van Barroso, in het noorden van het land. De dieren zijn opvallend door hun lange, gebogen horens en hun compacte, gespierde bouw.",
          "Ze grazen op de karige, minerale hooglandweiden en groeien traag, wat resulteert in een geconcentreerde, kruidige smaak en een fijne vetmarmering — een authentiek terroirproduct met een beschermde oorsprongsbenaming.",
        ],
        traits: ["Beschermde oorsprongsbenaming", "Traag gegroeid", "Geconcentreerde smaak"],
      },
      {
        slug: "mirandesa",
        name: "Mirandesa",
        origin: "Miranda do Douro, Portugal (DOP)",
        tagline: "Van het ruige hoogplateau tegen de Spaanse grens — diep en aards van smaak.",
        description: [
          "Mirandesa is afkomstig van het ruige hoogplateau van Miranda do Douro, in het uiterste noordoosten van Portugal, tegen de Spaanse grens. Het is een robuust bergras met een goudbruine vacht, dat zich onder barre omstandigheden voedt met wilde grassen en kruiden.",
          "Dat resulteert in een vlees met een diepe, aardse smaak en een stevige, kenmerkende structuur. In Portugal wordt de Carne Mirandesa gekoesterd als streekproduct met beschermde oorsprongsbenaming.",
        ],
        traits: ["Beschermde oorsprongsbenaming", "Diepe, aardse smaak", "Stevige structuur"],
      },
      {
        slug: "maronesa",
        name: "Maronesa",
        origin: "Trás-os-Montes, Portugal (DOP)",
        tagline: "Een zeldzaam, wild bergras met een uitgesproken, kruidige smaak.",
        description: [
          "Maronesa is een zeldzaam en rustiek bergras uit de streek Trás-os-Montes, in het noorden van Portugal. De dieren hebben een donkere, bijna zwarte vacht en zijn perfect aangepast aan het ruige, besneeuwde bergklimaat.",
          "Ze grazen het hele jaar in extensieve omstandigheden op wilde weiden, wat het vlees een uitgesproken, wilde en kruidige smaak geeft, met een stevige bite.",
        ],
        traits: ["Zeldzaam bergras", "Wilde, kruidige smaak", "Extensieve begrazing"],
      },
      {
        slug: "minhota",
        name: "Minhota",
        origin: "Minho, Noord-Portugal",
        tagline: "Uit de groene Minho-vallei, bakermat van de Vinho Verde.",
        description: [
          "Minhota vindt zijn oorsprong in de groene, vochtige Minho-vallei in het uiterste noorden van Portugal, de bakermat van de Vinho Verde. Het ras werd traditioneel ingezet als werkdier op de kleine familiale landbouwbedrijven van de streek, en dankt daaraan zijn stevige bespiering.",
          "Het malse gras en het milde Atlantische klimaat van de streek geven het vlees een zachte, ronde smaak met een fijne marmering.",
        ],
        traits: ["Zachte, ronde smaak", "Fijne marmering", "Atlantisch klimaat"],
      },
    ],
  },
  {
    slug: "spanje",
    name: "Spanje",
    subtitle: "Van Galicië tot de Sierra de Gredos",
    intro:
      "Spanje is het land van het gerijpte rund. Oude koeien, extensieve dehesa's en eeuwenoude rassen leveren er het meest karaktervolle en gegeerde vlees van heel Europa op.",
    breeds: [
      {
        slug: "rubia-gallega",
        name: "Rubia Gallega",
        image: "/images/breeds/rubia-gallega.jpg",
        origin: "Galicië, Noordwest-Spanje",
        tagline: "Het inmiddels wereldberoemde rund van de Atlantische kust van Galicië.",
        description: [
          "Het inmiddels beroemde Rubia Gallega-ras is een rund afkomstig uit de Spaanse regio Galicië, in het uiterste noordwesten van Spanje. Het zijn robuuste dieren die zich uitstekend voelen in de uitgestrekte weilanden langs de Atlantische kuststrook. Ze voeden zich het hele jaar door uitsluitend met gras, kruiden en klaver.",
          "De nabijheid van de Atlantische Oceaan geeft het vlees een ietwat zilte smaak (pré-salé). Doordat de dieren pas op latere leeftijd geslacht worden, heeft het vlees de karakteristieke smaken van voeding en omgeving kunnen opnemen, en krijgt men na rijping een complexe smaak met toetsen van boter en kruiden. De koeien leven op kleinschalige boerderijen en kennen in hun leven geen stress.",
        ],
        traits: ["Complex na rijping", "Licht ziltig (pré-salé)", "Kleinschalige boerderijen"],
        featured: true,
      },
      {
        slug: "kruising-rubia-holstein",
        name: "Kruising Rubia Gallega / Holstein",
        image: "/images/breeds/kruising-rubia-holstein.jpg",
        origin: "Galicië, Spanje",
        tagline: "Nog meer marmering, nog meer diepgang — topkwaliteit voor de fijnproever.",
        description: [
          "Door Rubia Gallega met Holstein te kruisen, krijgt het vlees nog meer marmering en een nog diepere en krachtigere smaak.",
          "Een echte topkwaliteit, gemaakt voor de fijnproever die het beste van twee grote rassen zoekt.",
        ],
        traits: ["Extra marmering", "Diepe, krachtige smaak", "Voor de fijnproever"],
      },
      {
        slug: "retinta",
        name: "Retinta",
        origin: "Extremadura & Andalusië, Spanje",
        tagline: "Uit dezelfde dehesa als het beroemde Ibérico-varken — aards met een nootachtige toets.",
        description: [
          "Retinta is een aloud Iberisch ras dat al eeuwenlang de dehesa's van Extremadura en Andalusië bevolkt — de uitgestrekte eikenbossavannes die ook de leefomgeving zijn van het beroemde Ibérico-varken.",
          "De koperrode dieren grazen er extensief op wilde grassen en genieten in de herfst mee van de eikels. Dat geeft het vlees een diepe, aardse smaak met een subtiele, nootachtige toets en een fijne marmering.",
        ],
        traits: ["Dehesa-terroir", "Nootachtige toets", "Extensief gegraasd"],
      },
      {
        slug: "avilena-negra-iberica",
        name: "Avileña-Negra Ibérica",
        origin: "Sierra de Gredos, Ávila, Spanje",
        tagline: "Een robuust bergras met een krachtig, gelijkmatig gemarmerd vlees.",
        description: [
          "Avileña-Negra Ibérica is een robuust rund uit de bergen van Ávila, in het Spaanse Castilië. De dieren hebben een donkere, bijna zwarte vacht en zijn perfect aangepast aan de extreme temperatuurschommelingen van de Sierra de Gredos.",
          "Hun extensieve, stressvrije leven op de hoge weiden vertaalt zich in een krachtig, karaktervol vlees met een mooie, gelijkmatige marmering.",
        ],
        traits: ["Krachtig karakter", "Gelijkmatige marmering", "Extensief bergleven"],
      },
      {
        slug: "frisona-gallega",
        name: "Frisona Gallega",
        origin: "Galicië, Spanje",
        tagline: "Friese koeien op de Atlantische weiden van Galicië — romig en vol.",
        description: [
          "Frisona Gallega is het vlees van Friese koeien (Holstein-Friesian) die op de groene, Atlantische weilanden van Galicië worden gehouden. Net als de Rubia Gallega genieten ze het hele jaar van vers gras, wat het vlees een romige, boterachtige smaak geeft.",
          "Wij selecteren enkel de beste dieren binnen dit ras, voor een vlees met een uitstekende marmering en een zachte, volle afdronk.",
        ],
        traits: ["Romige, boterachtige smaak", "Uitstekende marmering", "Atlantische weiden"],
      },
      {
        slug: "la-reina",
        name: "La Reina",
        origin: "Galicië, Spanje",
        tagline: "Onze selectie van uitzonderlijke Galicische koeien — complex en rijk.",
        description: [
          "La Reina is onze selectie van uitzonderlijke koeien uit Galicië, zorgvuldig gekozen op leeftijd, vetzetting en karakter.",
          "Het resultaat is een vlees met een complexe, ronde smaak en een rijke marmering — een sublieme keuze voor wie op zoek is naar het beste wat de Galicische weiden te bieden hebben.",
        ],
        traits: ["Rijke marmering", "Complexe, ronde smaak", "Zorgvuldige selectie"],
      },
      {
        slug: "bellota-angus",
        name: "Bellota Angus",
        origin: "Ávila, Spanje",
        tagline: "Angus-genetiek, afgemest met eikels — een unieke ontmoeting van twee tradities.",
        description: [
          "Bellota Angus is een uitzonderlijke kruising van de gekende Angus-genetiek met de eeuwenoude Spaanse traditie van het bellota-afmesten. De dieren grazen in de dehesa's nabij Ávila en worden in de herfst, net als de beroemde Ibérico-varkens, afgemest met eikels.",
          "Dat levert een uiterst mals vlees op met een unieke, nootachtige ondertoon — een zeldzame ontmoeting tussen twee grote vleestradities.",
        ],
        traits: ["Afgemest met eikels", "Nootachtige ondertoon", "Zeer mals"],
      },
      {
        slug: "capricho-doro",
        name: "Capricho d'Oro",
        origin: "Spanje",
        tagline: "Een exclusieve selectie van oudere koeien, gekozen voor hun smaakdiepte.",
        description: [
          "Capricho d'Oro is een exclusieve selectie van oudere Spaanse koeien, gekozen om hun uitzonderlijke vetzetting en smaakdiepte.",
          "Na een lange, natuurlijke rijping ontstaat een vlees met een intense, complexe smaak en een weelderige marmering — voor wie het uiterste in smaakintensiteit zoekt.",
        ],
        traits: ["Lange, natuurlijke rijping", "Intense smaakdiepte", "Weelderige marmering"],
      },
      {
        slug: "jersey",
        name: "Jersey",
        origin: "Spanje",
        tagline: "Van melkveeras tot cultstatus — extreme marmering in een klein, rijk stuk vlees.",
        description: [
          "Jersey is oorspronkelijk een melkveeras, gekend voor zijn uitzonderlijk vette, romige melk. Net die eigenschap maakt het rund de laatste jaren ook gegeerd als vleesras: de natuurlijke aanleg tot vetopslag zorgt voor een extreem intense marmering.",
          "Het resultaat is een klein maar buitengewoon rijk en boterzacht stuk vlees, voor de echte fijnproever.",
        ],
        traits: ["Extreme marmering", "Boterzacht", "Kleine porties, grote smaak"],
      },
    ],
  },
  {
    slug: "baskenland",
    name: "Baskenland",
    subtitle: "Voor de gastronomie",
    intro:
      "Een naam die synoniem staat voor absolute topkwaliteit in de gastronomische wereld — exclusief geportioneerd, en voornamelijk bestemd voor de horeca.",
    breeds: [
      {
        slug: "txogitxu",
        name: "Txogitxu",
        origin: "Spaans Baskenland",
        tagline: "Wereldberoemd in de gastronomie — lang gerijpte oudere koeien uit Galicië.",
        description: [
          "Txogitxu is een naam die synoniem staat voor absolute topkwaliteit rundvlees in de gastronomische wereld. Vanuit het Spaanse Baskenland selecteert deze gerenommeerde slager de beste oudere melkkoeien uit Galicië, die na een zorgvuldige, lange rijping een ongeëvenaarde smaakdiepte en sappigheid krijgen.",
          "Txogitxu is wereldwijd een gegeerde naam in de gastronomie, en wij brengen dit exclusieve vlees, geportioneerd en klaar voor gebruik, naar de Belgische horeca.",
        ],
        traits: ["Wereldwijd gegeerd in de horeca", "Lang gerijpt", "Geportioneerd aangeleverd"],
      },
    ],
  },
  {
    slug: "australie",
    name: "Australië",
    subtitle: "Wagyu",
    intro:
      "Wagyu-genetiek, uitgegroeid op de rustige, uitgestrekte weilanden van Australië — met een marmering die zijn Japanse oorsprong niet verloochent.",
    breeds: [
      {
        slug: "wagyu-australie",
        name: "Wagyu",
        origin: "Australië",
        tagline: "Extreme, boterzachte marmering — F1 en fullblood, beoordeeld op de BMS-schaal.",
        description: [
          "Wagyu is ontstaan in Japan, maar wordt vandaag ook met veel succes gefokt in Australië, waar de dieren op uitgestrekte, rustige weilanden opgroeien.",
          "Australische Wagyu, zowel F1 (kruising) als fullblood, staat gekend voor zijn extreme, boterzachte marmering — gemeten volgens de internationale BMS-schaal. Het resultaat is een vlees dat smelt op de tong, met een unieke, zoetige en rijke smaak.",
        ],
        traits: ["BMS-beoordeeld", "Extreme marmering", "F1 & fullblood beschikbaar"],
      },
    ],
  },
  {
    slug: "japan",
    name: "Japan",
    subtitle: "Wagyu A5",
    intro:
      "De absolute referentie wanneer het op marmering en malsheid aankomt — beoordeeld volgens het strengste keuringssysteem ter wereld.",
    breeds: [
      {
        slug: "wagyu-japan-a5",
        name: "Wagyu A5",
        origin: "Japan",
        tagline: "De hoogste klasse van het strengste keuringssysteem ter wereld.",
        description: [
          "Het Japanse Wagyu-ras is de absolute referentie wanneer het op marmering en malsheid aankomt. Onze Japanse Wagyu wordt beoordeeld volgens het strengste keuringssysteem ter wereld en behaalt de hoogste klasse: A5.",
          "Dit vlees, met zijn ongeziene, sneeuwachtige vetmarmering, is een unieke culinaire ervaring en het toppunt van verfijning binnen ons assortiment.",
        ],
        traits: ["Klasse A5", "Sneeuwachtige marmering", "Toppunt van verfijning"],
      },
    ],
  },
];

export function getAllBreeds() {
  return COUNTRIES.flatMap((country) =>
    country.breeds.map((breed) => ({ country, breed }))
  );
}

export function getCountry(slug: string) {
  return COUNTRIES.find((c) => c.slug === slug);
}

export function getBreed(landSlug: string, rasSlug: string) {
  const country = getCountry(landSlug);
  if (!country) return undefined;
  const breed = country.breeds.find((b) => b.slug === rasSlug);
  if (!breed) return undefined;
  return { country, breed };
}

export function getFeaturedBreeds() {
  return getAllBreeds().filter((x) => x.breed.featured);
}

export function getBreedCount() {
  return getAllBreeds().length;
}
