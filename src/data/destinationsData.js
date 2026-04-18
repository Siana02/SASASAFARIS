/**
 * destinationsData.js
 * Rich in-depth data for each destination displayed in the homepage carousel.
 * IDs must match the `id` values in DestinationsSection.jsx.
 *
 * Each entry has:
 *  - structural fields shared across languages (id, price)
 *  - `en` sub-object: all display text in English
 *  - `it` sub-object: all display text in Italian
 *
 * Use getDestinationById(id, lang) to get a flat merged object for the given language.
 */

export const destinationsData = [
  {
    id: "safari-blue",
    price: "€70 – €80 pp",
    en: {
      label: "Safari Blue — Dolphins, Snorkeling & Mida Creek",
      headline: "Dive Into the Wild Blue",
      subheadline: "Safari Blue — Dolphins, Snorkeling & Mida Creek",
      tag: "Ocean Adventure",
      duration: "Full Day",
      location: "Watamu & Mida Creek, Kenya",
      imageAlt: "Watamu ocean and dolphins",
      image2Alt: "Snorkeling in Watamu Marine Park",
      story:
        "Chase wild dolphins across open ocean, glide through coral gardens in the Marine Park, and drift through the mystical mangroves of Mida Creek. This is freedom — salt air, cerulean water, and a world below the surface that will hold you forever.",
      overview:
        "Chase wild dolphins across the open Indian Ocean, glide through coral gardens in the Watamu Marine National Park, and drift silently through the mystical mangroves of Mida Creek. Safari Blue is a full-day ocean odyssey — salt air, cerulean water, fresh seafood, and a world beneath the surface that will hold you forever.",
      highlights: [
        "Dolphin watching in the open ocean — wild, free, unforgettable",
        "Snorkeling at Watamu Marine National Park coral gardens",
        "Mida Creek mangrove exploration by traditional dhow",
        "Fresh seafood lunch on a secluded sandbank",
        "Sunset return along the Kenyan coastline",
      ],
      activities: [
        "Morning boat departure from Watamu beach",
        "Dolphin-spotting cruise in the Indian Ocean",
        "Guided snorkeling over coral reefs (equipment provided)",
        "Dhow sailing through Mida Creek mangrove channels",
        "Sandbank picnic with fresh grilled seafood",
        "Snorkeling or swimming at the sandbank",
        "Scenic afternoon return",
      ],
      included: [
        "Full-day boat trip with experienced local crew",
        "Snorkeling equipment (mask, fins, life jacket)",
        "Fresh seafood lunch and tropical fruits on the sandbank",
        "Non-alcoholic drinks during the excursion",
        "Marine park entry fees",
        "Hotel pickup and drop-off in Watamu area",
        "Expert guides fluent in English and Italian",
      ],
      customizable: [
        "Private boat charter for couples or small groups",
        "Add-on: PADI certified scuba dive at the coral gardens",
        "Add-on: sunset dhow cruise on Mida Creek",
        "Extended tour including Gede Ruins in the afternoon",
        "Upgrade to gourmet seafood lunch package",
      ],
      notIncluded: [
        "Alcoholic beverages",
        "Personal travel insurance",
        "Tips for guides and crew",
        "Underwater camera hire",
      ],
      notes: [
        "Best experienced between October and March when seas are calmer.",
        "Dolphin sightings are frequent but not guaranteed — nature is wild.",
        "Suitable for all swimmers; non-swimmers can enjoy the boat and sandbank.",
        "Book early during peak season (December–March) as spaces fill quickly.",
      ],
    },
    it: {
      label: "Safari Blue — Delfini, Snorkeling & Mida Creek",
      headline: "Immergiti nel Blu Selvaggio",
      subheadline: "Safari Blue — Delfini, Snorkeling & Mida Creek",
      tag: "Avventura Oceanica",
      duration: "Giornata Intera",
      location: "Watamu & Mida Creek, Kenya",
      imageAlt: "Oceano di Watamu e delfini",
      image2Alt: "Snorkeling nel Parco Marino di Watamu",
      story:
        "Insegui delfini selvatici sull'oceano aperto, scivolando tra giardini di corallo nel Parco Marino, e drifta attraverso le misteriose mangrovie di Mida Creek. Questa è la libertà — aria salmastra, acque cerulee, e un mondo sott'acqua che ti terrà per sempre.",
      overview:
        "Insegui delfini selvatici attraverso l'Oceano Indiano aperto, scivolando tra giardini di corallo nel Parco Nazionale Marino di Watamu, e drifta silenziosamente attraverso le misteriose mangrovie di Mida Creek. Safari Blue è un'odissea oceanica di un giorno intero — aria di mare, acque cerulee, frutti di mare freschi, e un mondo sotto la superficie che ti terrà per sempre.",
      highlights: [
        "Avvistamento delfini nell'oceano aperto — selvatici, liberi, indimenticabili",
        "Snorkeling ai giardini di corallo del Parco Nazionale Marino di Watamu",
        "Esplorazione delle mangrovie di Mida Creek in dhow tradizionale",
        "Pranzo con frutti di mare freschi su un banco di sabbia isolato",
        "Ritorno al tramonto lungo la costa keniota",
      ],
      activities: [
        "Partenza mattutina in barca dalla spiaggia di Watamu",
        "Crociera per l'avvistamento delfini nell'Oceano Indiano",
        "Snorkeling guidato sulle barriere coralline (attrezzatura inclusa)",
        "Navigazione in dhow attraverso i canali di mangrovie di Mida Creek",
        "Picnic sul banco di sabbia con frutti di mare freschi alla griglia",
        "Snorkeling o nuoto al banco di sabbia",
        "Pomeriggio panoramico di ritorno",
      ],
      included: [
        "Gita in barca per la giornata intera con equipaggio locale esperto",
        "Attrezzatura da snorkeling (maschera, pinne, giubbotto salvagente)",
        "Pranzo con frutti di mare freschi e frutti tropicali sul banco di sabbia",
        "Bevande analcoliche durante l'escursione",
        "Tasse di ingresso al parco marino",
        "Trasferimento hotel a/r nell'area di Watamu",
        "Guide esperte con fluente italiano e inglese",
      ],
      customizable: [
        "Charter privato in barca per coppie o piccoli gruppi",
        "Opzione: immersione scuba certificata PADI ai giardini di corallo",
        "Opzione: crociera al tramonto in dhow su Mida Creek",
        "Tour esteso con visita alle Rovine di Gede nel pomeriggio",
        "Upgrade al pacchetto pranzo gourmet con frutti di mare",
      ],
      notIncluded: [
        "Bevande alcoliche",
        "Assicurazione di viaggio personale",
        "Mance per guide e equipaggio",
        "Noleggio fotocamera subacquea",
      ],
      notes: [
        "Ideale da ottobre a marzo quando i mari sono più calmi.",
        "Gli avvistamenti di delfini sono frequenti ma non garantiti — la natura è selvaggia.",
        "Adatto a tutti i nuotatori; chi non nuota può godere della barca e del banco di sabbia.",
        "Prenotare in anticipo durante l'alta stagione (dicembre–marzo) poiché i posti si esauriscono rapidamente.",
      ],
    },
  },

  {
    id: "sardegna-sandbank",
    price: "€60 – €70 pp",
    en: {
      label: "Sardegna 2 Sandbank Experience",
      headline: "Lost in Turquoise",
      subheadline: "Sardegna 2 Sandbank Experience",
      tag: "Beach Paradise",
      duration: "Half Day",
      location: "Watamu Marine Park, Kenya",
      imageAlt: "Sardegna 2 sandbank turquoise waters",
      image2Alt: "Crystal water at Sardegna 2 sandbank",
      story:
        "A strip of white sand rising from the Indian Ocean — no roads, no crowds, just crystal water in every direction. Swim, float, and let the world melt away. Fresh seafood awaits at Safina Beach Club before the afternoon sun paints everything gold.",
      overview:
        "A strip of white sand rising from the Indian Ocean — no roads, no crowds, just crystal water stretching in every direction. Sardegna 2 is one of Kenya's best-kept secrets: a private sandbank in the heart of Watamu Marine Park where you swim, float, and let the world melt away. Fresh seafood awaits at Safina Beach Club before the afternoon sun paints everything gold.",
      highlights: [
        "Exclusive access to a pristine private sandbank",
        "Swimming in crystal-clear shallow Indian Ocean waters",
        "Incredible marine life visible in the surrounding reef",
        "Relaxed atmosphere — no crowds, just nature and beauty",
        "Fresh catch lunch at Safina Beach Club",
      ],
      activities: [
        "Morning boat transfer to Sardegna 2 sandbank",
        "Free swimming and snorkeling around the sandbank",
        "Guided reef walk at low tide (seasonal)",
        "Relaxation time on the sandbank",
        "Lunch at Safina Beach Club (optional add-on)",
        "Return transfer by boat",
      ],
      included: [
        "Boat transfer to and from the sandbank",
        "Basic snorkeling equipment",
        "Marine park entry fees",
        "Hotel transfers within Watamu area",
        "Expert guides fluent in English and Italian",
      ],
      customizable: [
        "Private boat charter for exclusive access",
        "Combine with Safari Blue for a full day at sea",
        "Sunrise sandbank trip (limited availability)",
        "Seafood lunch at Safina Beach Club (add-on)",
        "Photography package with underwater camera",
      ],
      notIncluded: [
        "Lunch (available as add-on)",
        "Alcoholic beverages",
        "Travel insurance",
        "Tips",
      ],
      notes: [
        "The sandbank is best visited at low tide; your guide will time the excursion accordingly.",
        "Bring reef-safe sunscreen — the marine park is a protected area.",
        "Ideal for families, couples, and solo travelers.",
      ],
    },
    it: {
      label: "Esperienza Banco di Sabbia Sardegna 2",
      headline: "Persi nel Turchese",
      subheadline: "Esperienza Banco di Sabbia Sardegna 2",
      tag: "Paradiso Balneare",
      duration: "Mezza Giornata",
      location: "Parco Marino di Watamu, Kenya",
      imageAlt: "Acque turchesi del banco di sabbia Sardegna 2",
      image2Alt: "Acqua cristallina al banco di sabbia Sardegna 2",
      story:
        "Una striscia di sabbia bianca che emerge dall'Oceano Indiano — nessuna strada, nessuna folla, solo acque cristalline in ogni direzione. Nuota, galleggia e lascia che il mondo si dissolva. Frutti di mare freschi ti attendono al Safina Beach Club prima che il sole del pomeriggio dipinga tutto d'oro.",
      overview:
        "Una striscia di sabbia bianca che emerge dall'Oceano Indiano — nessuna strada, nessuna folla, solo acque cristalline in ogni direzione. Sardegna 2 è uno dei segreti meglio custoditi del Kenya: un banco di sabbia privato nel cuore del Parco Marino di Watamu dove nuoti, galleggi, e lasci che il mondo si dissolva. Frutti di mare freschi ti attendono al Safina Beach Club prima che il sole del pomeriggio dipinga tutto d'oro.",
      highlights: [
        "Accesso esclusivo a un pristino banco di sabbia privato",
        "Nuoto in acque cristalline e poco profonde dell'Oceano Indiano",
        "Incredibile vita marina visibile nella barriera corallina circostante",
        "Atmosfera rilassata — nessuna folla, solo natura e bellezza",
        "Pranzo con pesca fresca al Safina Beach Club",
      ],
      activities: [
        "Trasferimento mattutino in barca al banco di sabbia Sardegna 2",
        "Nuoto libero e snorkeling intorno al banco di sabbia",
        "Passeggiata guidata sulla barriera corallina durante la bassa marea (stagionale)",
        "Tempo di relax sul banco di sabbia",
        "Pranzo al Safina Beach Club (opzione aggiuntiva)",
        "Ritorno in barca",
      ],
      included: [
        "Trasferimento in barca a/r al banco di sabbia",
        "Attrezzatura base da snorkeling",
        "Tasse di ingresso al parco marino",
        "Trasferimenti hotel nell'area di Watamu",
        "Guide esperte con fluente italiano e inglese",
      ],
      customizable: [
        "Charter privato in barca per accesso esclusivo",
        "Combinabile con Safari Blue per un'intera giornata in mare",
        "Gita al banco di sabbia all'alba (disponibilità limitata)",
        "Pranzo con frutti di mare al Safina Beach Club (opzione)",
        "Pacchetto fotografico con fotocamera subacquea",
      ],
      notIncluded: [
        "Pranzo (disponibile come opzione)",
        "Bevande alcoliche",
        "Assicurazione di viaggio",
        "Mance",
      ],
      notes: [
        "Il banco di sabbia si visita meglio con la bassa marea; la guida organizzerà l'escursione di conseguenza.",
        "Porta crema solare reef-safe — il parco marino è un'area protetta.",
        "Ideale per famiglie, coppie e viaggiatori solitari.",
      ],
    },
  },

  {
    id: "gede-marafa",
    price: "€80 – €90 pp",
    en: {
      label: "Gede Ruins & Marafa (Hell's Kitchen)",
      headline: "Where Empires Slept & Canyons Burn",
      subheadline: "Gede Ruins & Marafa Depression",
      tag: "History & Nature",
      duration: "Half Day / Full Day",
      location: "Gede & Marafa, Kilifi County, Kenya",
      imageAlt: "Gede Ruins ancient Swahili city",
      image2Alt: "Marafa Depression — Hell's Kitchen canyon",
      story:
        "Walk through a Swahili city swallowed by the forest — then stand at the edge of a canyon that blazes crimson as the sun sinks behind the earth. Two worlds, one day. The kind of afternoon that rewrites how you see Africa.",
      overview:
        "Walk through a Swahili city swallowed by the forest — then stand at the edge of a canyon that blazes crimson and ochre as the sun sinks behind the earth. Two entirely different worlds in one unforgettable day. Gede Ruins reveal the grandeur of a medieval Swahili civilization, while Marafa Depression — known as Hell's Kitchen — is a surreal landscape of eroded sandstone pillars that seems to belong on another planet.",
      highlights: [
        "Gede Ruins: one of East Africa's most significant archaeological sites",
        "Explore the palace, mosques, and coral-stone houses of a 12th-century Swahili city",
        "Marafa Depression: dramatic canyon of crimson, amber, and cream sandstone",
        "Best at golden hour when the canyon walls glow in warm light",
        "Local guide storytelling — ancient legends and Swahili history",
      ],
      activities: [
        "Guided tour of Gede Ruins — palace, great mosque, tombs and houses",
        "Forest walk through towering baobabs and indigenous trees",
        "Bird watching (Gede has over 140 recorded species)",
        "Drive to Marafa Depression (45 min from Gede)",
        "Guided walk along the canyon rim and descend into the gorge",
        "Sunset viewing at Hell's Kitchen lookout",
      ],
      included: [
        "Professional English-speaking guide",
        "Entry fees to Gede Ruins National Monument",
        "Entry fees to Marafa Depression",
        "Private transport between sites",
        "Hotel transfers in Watamu / Malindi area",
        "Expert guides fluent in English and Italian",
      ],
      customizable: [
        "Add-on: Watamu village cultural walk",
        "Add-on: Mida Creek sunset dhow cruise",
        "Extend to a full day with additional coastal sites",
        "Private guided tour for exclusive access",
        "Photography-focused tour with extra time at golden hour",
      ],
      notIncluded: [
        "Meals and drinks (recommendations provided)",
        "Personal expenses",
        "Tips for guide and driver",
      ],
      notes: [
        "Comfortable walking shoes are recommended — some paths are uneven.",
        "The Marafa canyon is most beautiful at sunrise or 1–2 hours before sunset.",
        "This tour can be combined with a morning Safari Blue excursion for a full day.",
      ],
    },
    it: {
      label: "Rovine di Gede & Marafa (La Cucina dell'Inferno)",
      headline: "Dove i Regni Dormono e i Canyon Bruciano",
      subheadline: "Rovine di Gede & Depressione di Marafa",
      tag: "Storia & Natura",
      duration: "Mezza Giornata / Giornata Intera",
      location: "Gede & Marafa, Contea di Kilifi, Kenya",
      imageAlt: "Rovine di Gede, antica città Swahili",
      image2Alt: "Depressione di Marafa — canyon della Cucina dell'Inferno",
      story:
        "Cammina attraverso una città Swahili inghiottita dalla foresta — poi stai sull'orlo di un canyon che brucia di cremisi mentre il sole tramonta. Due mondi, un giorno. Il tipo di pomeriggio che riscrive come vedi l'Africa.",
      overview:
        "Cammina attraverso una città Swahili inghiottita dalla foresta — poi stai sull'orlo di un canyon che brucia di cremisi e ocra mentre il sole tramonta. Due mondi completamente diversi in un giorno indimenticabile. Le Rovine di Gede rivelano la grandiosità di una civiltà Swahili medievale, mentre la Depressione di Marafa — conosciuta come La Cucina dell'Inferno — è un paesaggio surreale di pilastri di arenaria erosa.",
      highlights: [
        "Rovine di Gede: uno dei siti archeologici più significativi dell'Africa Orientale",
        "Esplora il palazzo, le moschee e le case in corallo di una città Swahili del XII secolo",
        "Depressione di Marafa: drammatico canyon di arenaria cremisi, ambra e crema",
        "Ideale all'ora d'oro quando le pareti del canyon brillano nella luce calda",
        "Storytelling della guida locale — leggende antiche e storia Swahili",
      ],
      activities: [
        "Tour guidato delle Rovine di Gede — palazzo, grande moschea, tombe e case",
        "Passeggiata nella foresta tra baobab imponenti e alberi indigeni",
        "Birdwatching (Gede ha oltre 140 specie registrate)",
        "Trasferimento alla Depressione di Marafa (45 min da Gede)",
        "Passeggiata guidata lungo il bordo del canyon e discesa nella gola",
        "Vista al tramonto al belvedere della Cucina dell'Inferno",
      ],
      included: [
        "Guida professionista di lingua inglese",
        "Tasse di ingresso al Monumento Nazionale delle Rovine di Gede",
        "Tasse di ingresso alla Depressione di Marafa",
        "Trasporto privato tra i siti",
        "Trasferimenti hotel nell'area di Watamu/Malindi",
        "Guide esperte con fluente italiano e inglese",
      ],
      customizable: [
        "Opzione: passeggiata culturale nel villaggio di Watamu",
        "Opzione: crociera al tramonto in dhow su Mida Creek",
        "Estensione a giornata intera con siti costieri aggiuntivi",
        "Tour guidato privato per accesso esclusivo",
        "Tour fotografico con tempo extra all'ora d'oro",
      ],
      notIncluded: [
        "Pasti e bevande (consigli forniti)",
        "Spese personali",
        "Mance per guida e autista",
      ],
      notes: [
        "Si consigliano scarpe comode per camminare — alcuni percorsi sono irregolari.",
        "Il canyon di Marafa è più bello all'alba o 1–2 ore prima del tramonto.",
        "Questo tour può essere combinato con un'escursione mattutina Safari Blue per una giornata intera.",
      ],
    },
  },

  {
    id: "tsavo-east",
    price: "From €250 pp",
    en: {
      label: "Tsavo East Safari — 2 Days / 1 Night",
      headline: "Face to Face with the Red Giants",
      subheadline: "Tsavo East Safari — 2 Days / 1 Night",
      tag: "Wildlife Safari",
      duration: "2 Days / 1 Night",
      location: "Tsavo East National Park, Kenya",
      imageAlt: "Tsavo East red elephants at sunset",
      image2Alt: "Tsavo East National Park landscape",
      story:
        "Nothing prepares you for the moment the first red elephant emerges from the bush. Tsavo is raw, vast, and unapologetically wild. Lions, giraffes, zebras, and the legendary red elephants of Kenya — all witnessed from an open jeep under a sky that goes on forever.",
      overview:
        "Nothing prepares you for the moment the first red elephant emerges from the dust. Tsavo East is Kenya's largest national park — raw, vast, and unapologetically wild. The legendary red elephants of Kenya coat themselves in the park's signature rust-red soil, creating one of Africa's most iconic wildlife sights. Lions, leopards, giraffes, hippos, and over 500 bird species roam freely across endless savannah under a sky that goes on forever.",
      highlights: [
        "Kenya's iconic red elephants — unique to Tsavo, coated in red volcanic soil",
        "Big Five wildlife: lions, leopards, elephants, buffalo, rhino",
        "Yatta Plateau — the world's longest lava flow",
        "Lugard Falls and the Galana River — dramatic gorge scenery",
        "Overnight in a safari lodge or tented camp under the stars",
        "Morning and afternoon game drives with expert naturalist guide",
      ],
      activities: [
        "Afternoon game drive on arrival — spot elephant herds and big cats",
        "Sundowner drinks at a scenic viewpoint",
        "Overnight in mid-range lodge or tented camp",
        "Early morning game drive at sunrise — best for predator activity",
        "Visit to Lugard Falls on the Galana River",
        "Drive along Yatta Plateau route",
        "Departure after lunch",
      ],
      included: [
        "Return transport from Watamu / Malindi (approx. 2.5 hrs)",
        "Professional safari driver-guide",
        "Park entry fees (Tsavo East National Park)",
        "1 night accommodation — mid-range lodge or tented camp",
        "Full board (dinner, breakfast, lunch)",
        "All game drives as per itinerary",
        "Expert guides fluent in English and Italian",
      ],
      customizable: [
        "Upgrade to luxury lodge or exclusive tented camp",
        "Extend to 3 days / 2 nights for deeper exploration",
        "Add night game drive (subject to park permits)",
        "Combine with Tsavo West for a 3–4 day multi-park safari",
        "Add Amboseli or Maasai Mara extension",
        "Private vehicle for exclusive safari experience",
      ],
      notIncluded: [
        "International flights",
        "Visas and travel insurance",
        "Personal expenses, tips, and souvenirs",
        "Premium drinks at lodge",
      ],
      notes: [
        "Best time to visit: January–March and June–October (dry season).",
        "Tsavo East is a very large park — game drives cover significant distances.",
        "The red elephants are most commonly seen at waterholes in the dry season.",
      ],
    },
    it: {
      label: "Safari Tsavo Est — 2 Giorni / 1 Notte",
      headline: "Faccia a Faccia con i Giganti Rossi",
      subheadline: "Safari Tsavo Est — 2 Giorni / 1 Notte",
      tag: "Safari Fauna Selvatica",
      duration: "2 Giorni / 1 Notte",
      location: "Parco Nazionale Tsavo Est, Kenya",
      imageAlt: "Elefanti rossi di Tsavo Est al tramonto",
      image2Alt: "Paesaggio del Parco Nazionale Tsavo Est",
      story:
        "Niente ti prepara al momento in cui il primo elefante rosso emerge dalla boscaglia. Tsavo è grezzo, vasto e selvaggiamente indomito. Leoni, giraffe, zebre e i leggendari elefanti rossi del Kenya — tutto visto da un'auto aperta sotto un cielo che non finisce mai.",
      overview:
        "Niente ti prepara al momento in cui il primo elefante rosso emerge dalla polvere. Tsavo Est è il più grande parco nazionale del Kenya — grezzo, vasto e selvaggiamente indomito. I leggendari elefanti rossi del Kenya si ricoprono del caratteristico terriccio rosso del parco, creando uno degli scenari faunistici più iconici dell'Africa. Leoni, leopardi, giraffe, ippopotami e oltre 500 specie di uccelli girovagano liberamente attraverso un'infinita savana.",
      highlights: [
        "I famosi elefanti rossi del Kenya — unici nel Tsavo, ricoperti di suolo vulcanico rosso",
        "Big Five: leoni, leopardi, elefanti, bufali, rinoceronti",
        "Altopiano Yatta — il più lungo flusso lavico del mondo",
        "Cascate Lugard e il Fiume Galana — scenari di gola spettacolari",
        "Pernottamento in un lodge safari o campo tende sotto le stelle",
        "Game drive mattutini e pomeridiani con guida naturalista esperta",
      ],
      activities: [
        "Game drive pomeridiano all'arrivo — avvistamento branchi di elefanti e grandi felini",
        "Sundowner al tramonto in un punto panoramico",
        "Pernottamento in lodge di medio livello o campo tende",
        "Game drive mattutino all'alba — ideale per l'attività dei predatori",
        "Visita alle Cascate Lugard sul Fiume Galana",
        "Percorso lungo l'altopiano Yatta",
        "Partenza dopo pranzo",
      ],
      included: [
        "Trasporto a/r da Watamu/Malindi (circa 2,5 ore)",
        "Guida-autista safari professionista",
        "Tasse di ingresso al parco (Parco Nazionale Tsavo Est)",
        "1 notte di alloggio — lodge di medio livello o campo tende",
        "Pensione completa (cena, colazione, pranzo)",
        "Tutti i game drive secondo l'itinerario",
        "Guide esperte con fluente italiano e inglese",
      ],
      customizable: [
        "Upgrade a lodge di lusso o campo tende esclusivo",
        "Estensione a 3 giorni/2 notti per un'esplorazione più approfondita",
        "Aggiunta game drive notturna (soggetta a permessi del parco)",
        "Combinazione con Tsavo Ovest per un safari multi-parco di 3–4 giorni",
        "Aggiunta estensione Amboseli o Maasai Mara",
        "Veicolo privato per un'esperienza safari esclusiva",
      ],
      notIncluded: [
        "Voli internazionali",
        "Visti e assicurazione di viaggio",
        "Spese personali, mance e souvenir",
        "Bevande premium al lodge",
      ],
      notes: [
        "Periodo migliore per la visita: gennaio–marzo e giugno–ottobre (stagione secca).",
        "Tsavo Est è un parco molto vasto — i game drive coprono distanze significative.",
        "Gli elefanti rossi si vedono più comunemente ai pozzi d'acqua nella stagione secca.",
      ],
    },
  },

  {
    id: "village-tour",
    price: "Contact Us",
    en: {
      label: "Watamu Village Cultural Tour",
      headline: "Taste the Soul of Swahili Life",
      subheadline: "Watamu Village Cultural Tour",
      tag: "Cultural Immersion",
      duration: "Half Day",
      location: "Watamu, Kilifi County, Kenya",
      imageAlt: "Watamu village cultural life",
      image2Alt: "Local crafts and culture in Watamu",
      story:
        "Slow down and truly arrive. Meet the families, walk the markets, discover the crafts, and hear the stories that make Watamu what it is. This is not tourism — this is belonging, if only for a morning.",
      overview:
        "Slow down and truly arrive. The Watamu Village Cultural Tour takes you beyond the beach and into the heartbeat of coastal Kenyan life. Meet families in their homes, walk through local markets buzzing with colour and sound, discover traditional crafts and cooking, and hear the stories that have shaped this extraordinary community. This is not tourism — this is belonging, if only for a morning.",
      highlights: [
        "Walking tour through Watamu village with a local guide",
        "Visit to a traditional family compound — genuine cultural exchange",
        "Local market exploration: fresh produce, spices, and crafts",
        "Traditional Swahili cooking demonstration",
        "Meet local artisans, fishermen, and community elders",
        "Authentic storytelling — history, traditions, and daily life",
      ],
      activities: [
        "Morning meeting with local guide and village overview",
        "Walk through residential areas and community spaces",
        "Visit local market — taste tropical fruits and spices",
        "Traditional cooking class: learn to prepare a Swahili dish",
        "Visit to local artisan workshop (weaving, carving, or batik)",
        "Meet elders and hear oral history of Watamu",
        "Optional: visit to the beach with local fishermen at sunrise",
      ],
      included: [
        "Local English-speaking community guide",
        "Entry fees to any community sites visited",
        "Small gift contribution to local community project",
        "Cooking class ingredients and tasting",
        "Hotel transfers within Watamu",
        "Expert guides fluent in English and Italian",
      ],
      customizable: [
        "Sunrise fishermen's beach walk (early morning)",
        "Extended half-day including Gede Ruins",
        "School visit and interaction with local children",
        "Private tour for families or groups",
        "Photography-focused tour with cultural portrait session",
      ],
      notIncluded: [
        "Personal shopping at the market",
        "Lunch (recommendations provided)",
        "Donations beyond included community contribution",
      ],
      notes: [
        "This tour is operated in partnership with the local Watamu community.",
        "A portion of every booking directly supports community projects.",
        "Dress modestly out of respect for local customs.",
        "Children are very welcome on this experience.",
      ],
    },
    it: {
      label: "Tour Culturale del Villaggio di Watamu",
      headline: "Assapora l'Anima della Vita Swahili",
      subheadline: "Tour Culturale del Villaggio di Watamu",
      tag: "Immersione Culturale",
      duration: "Mezza Giornata",
      location: "Watamu, Contea di Kilifi, Kenya",
      imageAlt: "Vita culturale del villaggio di Watamu",
      image2Alt: "Artigianato locale e cultura a Watamu",
      story:
        "Rallenta e arriva davvero. Incontra le famiglie, cammina per i mercati, scopri l'artigianato e ascolta le storie che rendono Watamu quello che è. Questo non è turismo — è appartenenza, anche solo per una mattina.",
      overview:
        "Rallenta e arriva davvero. Il Tour Culturale del Villaggio di Watamu ti porta oltre la spiaggia e nel battito cardiaco della vita costiera keniota. Incontra famiglie nelle loro case, passeggia per i mercati locali vibranti di colori e suoni, scopri l'artigianato tradizionale e la cucina, e ascolta le storie che hanno plasmato questa straordinaria comunità. Questo non è turismo — è appartenenza, anche solo per una mattina.",
      highlights: [
        "Tour a piedi attraverso il villaggio di Watamu con una guida locale",
        "Visita a un compound familiare tradizionale — autentico scambio culturale",
        "Esplorazione del mercato locale: prodotti freschi, spezie e artigianato",
        "Dimostrazione di cucina tradizionale Swahili",
        "Incontro con artigiani, pescatori e anziani della comunità locali",
        "Storytelling autentico — storia, tradizioni e vita quotidiana",
      ],
      activities: [
        "Incontro mattutino con la guida locale e panoramica del villaggio",
        "Passeggiata attraverso aree residenziali e spazi comunitari",
        "Visita al mercato locale — assaggia frutti tropicali e spezie",
        "Corso di cucina tradizionale: impara a preparare un piatto Swahili",
        "Visita al laboratorio di artigiani locali (tessitura, intaglio o batik)",
        "Incontro con gli anziani e storia orale di Watamu",
        "Opzionale: visita alla spiaggia con i pescatori locali all'alba",
      ],
      included: [
        "Guida comunitaria locale di lingua inglese",
        "Tasse di ingresso ai siti comunitari visitati",
        "Piccolo contributo regalo al progetto comunitario locale",
        "Ingredienti del corso di cucina e assaggio",
        "Trasferimenti hotel a Watamu",
        "Guide esperte con fluente italiano e inglese",
      ],
      customizable: [
        "Passeggiata mattutina con i pescatori sulla spiaggia (all'alba)",
        "Mezza giornata estesa con Rovine di Gede",
        "Visita scolastica e interazione con bambini locali",
        "Tour privato per famiglie o gruppi",
        "Tour fotografico con sessione di ritratti culturali",
      ],
      notIncluded: [
        "Acquisti personali al mercato",
        "Pranzo (consigli forniti)",
        "Donazioni oltre il contributo comunitario incluso",
      ],
      notes: [
        "Questo tour è operato in collaborazione con la comunità locale di Watamu.",
        "Una parte di ogni prenotazione supporta direttamente i progetti comunitari.",
        "Vestirsi in modo modesto in rispetto dei costumi locali.",
        "I bambini sono molto benvenuti in questa esperienza.",
      ],
    },
  },

  {
    id: "maasai-mara",
    price: "From €250 pp",
    en: {
      label: "Maasai Mara — Great Migration Safari",
      headline: "The Greatest Show on Earth",
      subheadline: "Maasai Mara — Great Migration Safari",
      tag: "Wildlife Safari",
      duration: "3 Days / 2 Nights",
      location: "Maasai Mara National Reserve, Kenya",
      imageAlt: "Maasai Mara golden savannah at golden hour",
      image2Alt: "The Great Wildebeest Migration crossing the Mara River",
      story:
        "Over a million wildebeest thunder across the Mara River in nature's most dramatic spectacle. Lions stalk the tall grass, leopards drape themselves over acacia trees, and the vast sky above makes you feel both small and infinite. The Mara isn't somewhere you visit — it's somewhere you become.",
      overview:
        "Over a million wildebeest thunder across the Mara River in nature's most dramatic spectacle. Lions stalk the tall grass. Leopards drape themselves over acacia trees. The vast sky above makes you feel both small and infinite. The Maasai Mara isn't somewhere you visit — it's somewhere you become. Our 3-day safari gives you the time to absorb the Mara's magic: from the tension of a river crossing to the golden silence of a savannah sunrise.",
      highlights: [
        "The Great Wildebeest Migration — over 1.5 million animals (July–October)",
        "Big Five: lion, leopard, elephant, buffalo, black rhino",
        "Mara River crossings — one of nature's greatest dramas",
        "Cheetah, hyena, wild dog and over 450 bird species",
        "Overnight in a safari lodge or classic tented camp",
        "Optional: hot air balloon safari at dawn",
      ],
      activities: [
        "Day 1: arrival, afternoon game drive, sundowner in the bush",
        "Day 2: full day in the reserve — morning, lunch, and evening game drives",
        "Optional: early morning hot air balloon flight over the Mara",
        "Bush lunch in the savannah",
        "Day 3: sunrise game drive, pack up and depart",
        "Optional Maasai village visit",
        "Night game drives (where permitted)",
      ],
      included: [
        "Return transport from Watamu or Nairobi (road or domestic flight options)",
        "Professional safari driver-guide",
        "Maasai Mara National Reserve entry fees",
        "2 nights accommodation — mid-range safari lodge or tented camp",
        "Full board (all meals)",
        "Game drives as per itinerary",
        "Expert guides fluent in English and Italian",
      ],
      customizable: [
        "Upgrade to luxury or premium tented camp",
        "Add domestic flight transfers (Nairobi–Mara)",
        "Hot air balloon safari add-on (highly recommended)",
        "Extend to 4 or 5 days for deeper immersion",
        "Combine with Amboseli or Lake Nakuru",
        "Private vehicle and exclusive guide",
      ],
      notIncluded: [
        "International and domestic flights (unless arranged)",
        "Visas and travel insurance",
        "Personal expenses, tips, and drinks",
        "Hot air balloon safari (available as add-on)",
      ],
      notes: [
        "The Great Migration peak is July–October; the Mara is excellent year-round.",
        "River crossings are unpredictable — patience is rewarded.",
        "Minimum 2 persons per booking; private tours available for solo travelers.",
      ],
    },
    it: {
      label: "Maasai Mara — Safari Grande Migrazione",
      headline: "Il Più Grande Spettacolo sulla Terra",
      subheadline: "Maasai Mara — Safari Grande Migrazione",
      tag: "Safari Fauna Selvatica",
      duration: "3 Giorni / 2 Notti",
      location: "Riserva Nazionale del Maasai Mara, Kenya",
      imageAlt: "Savana dorata del Maasai Mara all'ora d'oro",
      image2Alt: "La Grande Migrazione degli Gnu che attraversa il Fiume Mara",
      story:
        "Oltre un milione di gnu tuona attraverso il Fiume Mara nel più drammatico spettacolo della natura. I leoni sorvegliano l'alta erba, i leopardi si distendono sugli alberi di acacia, e il vasto cielo sopra ti fa sentire piccolo e infinito. Il Mara non è un posto che si visita — è un posto dove si diventa.",
      overview:
        "Oltre un milione di gnu tuona attraverso il Fiume Mara nel più drammatico spettacolo della natura. I leoni sorvegliano l'alta erba. I leopardi si distendono sugli alberi di acacia. Il vasto cielo sopra ti fa sentire piccolo e infinito. Il Maasai Mara non è un posto che si visita — è un posto dove si diventa. Il nostro safari di 3 giorni ti dà il tempo di assorbire la magia del Mara: dalla tensione di un attraversamento del fiume al silenzio dorato di un'alba sulla savana.",
      highlights: [
        "La Grande Migrazione degli Gnu — oltre 1,5 milioni di animali (luglio–ottobre)",
        "Big Five: leone, leopardo, elefante, bufalo, rinoceronte nero",
        "Attraversamenti del Fiume Mara — uno dei grandi drammi della natura",
        "Ghepardi, iene, cani selvatici e oltre 450 specie di uccelli",
        "Pernottamento in un lodge safari o campo tende classico",
        "Opzionale: safari in mongolfiera all'alba",
      ],
      activities: [
        "Giorno 1: arrivo, game drive pomeridiana, sundowner nella boscaglia",
        "Giorno 2: intera giornata nella riserva — game drive mattutina, pranzo e serale",
        "Opzionale: volo in mongolfiera all'alba sul Mara",
        "Pranzo nella savana",
        "Giorno 3: game drive all'alba, preparativi e partenza",
        "Opzionale visita al villaggio Maasai",
        "Game drive notturne (dove consentito)",
      ],
      included: [
        "Trasporto a/r da Watamu o Nairobi (opzioni strada o volo interno)",
        "Guida-autista safari professionista",
        "Tasse di ingresso alla Riserva Nazionale del Maasai Mara",
        "2 notti di alloggio — lodge safari di medio livello o campo tende",
        "Pensione completa (tutti i pasti)",
        "Game drive secondo l'itinerario",
        "Guide esperte con fluente italiano e inglese",
      ],
      customizable: [
        "Upgrade a campo tende di lusso o premium",
        "Aggiunta trasferimenti con voli interni (Nairobi–Mara)",
        "Opzione safari in mongolfiera (consigliato vivamente)",
        "Estensione a 4 o 5 giorni per un'immersione più profonda",
        "Combinazione con Amboseli o Lago Nakuru",
        "Veicolo privato e guida esclusiva",
      ],
      notIncluded: [
        "Voli internazionali e interni (salvo accordi)",
        "Visti e assicurazione di viaggio",
        "Spese personali, mance e bevande",
        "Safari in mongolfiera (disponibile come opzione)",
      ],
      notes: [
        "Il picco della Grande Migrazione è luglio–ottobre; il Mara è eccellente tutto l'anno.",
        "Gli attraversamenti del fiume sono imprevedibili — la pazienza viene ricompensata.",
        "Minimo 2 persone per prenotazione; tour privati disponibili per viaggiatori solitari.",
      ],
    },
  },
];

/**
 * Helper: get a destination by its ID, merged with language-specific content.
 * @param {string} id
 * @param {string} [lang='en'] - 'en' or 'it'
 */
export const getDestinationById = (id, lang = 'en') => {
  const dest = destinationsData.find((d) => d.id === id);
  if (!dest) return null;
  const { en, it, ...structural } = dest;
  const langContent = lang === 'it' && it ? it : en;
  return { ...structural, ...langContent };
};

/**
 * All destinations as a simple label+id list (for form dropdowns, etc.)
 * Always uses English labels.
 */
export const destinationOptions = destinationsData.map((d) => ({
  id: d.id,
  label: d.en.label,
}));
