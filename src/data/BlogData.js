import {
  WatamuMain,
  WatamuCulturalTour1,
  WildebeestMigration,
  ElephantSunset,
} from "../assets/images";

/**
 * blogArticlesData
 * Each entry has shared structural fields (id, image, date) plus
 * `en` and `it` sub-objects for all display text.
 *
 * Use getBlogArticles(lang), getFeaturedArticle(lang), and
 * getPreviewArticles(lang) to get flat, language-merged objects.
 */
const blogArticlesData = [
  {
    id: "hidden-gems-watamu",
    image: WatamuMain,
    date: "2 Marzo 2026 / March 2, 2026",
    en: {
      title: "Top 5 Hidden Gems in Watamu, Kenya",
      excerpt:
        "Discover the secret side of Watamu — from silent mangroves to secluded shores the crowds never find.",
      imageAlt: "Hidden gems in Watamu — turquoise coastline on Kenya's unspoiled coral coast",
      tag: "Destinations",
      readTime: "5 min read",
      stats: [
        { value: "200+", label: "Bird species in Mida Creek" },
        { value: "#3", label: "Beach in Kenya — CNN Travel" },
        { value: "4.9★", label: "TripAdvisor Travellers' Choice" },
      ],
      pullQuote: {
        text: "Watamu is one of the most unspoiled stretches of Kenya's coast — a destination that genuinely surprises first-time visitors.",
        source: "Lonely Planet East Africa, 2024 Edition",
      },
      content: {
        intro:
          "Watamu's most spectacular experiences don't advertise themselves. Most visitors find the Marine Park and the postcard beaches — and leave feeling like they've seen it all. But the true hidden gems in Watamu reveal themselves only to those who slow down, ask the right questions, and wander a little further. The one that doesn't appear in brochures.",
        sections: [
          {
            heading: "1. Mida Creek",
            body: "A tidal inlet where the ocean breathes twice a day, Mida Creek is one of Kenya's most important marine ecosystems. Board a dugout canoe at low tide, glide past mangrove forests alive with kingfishers and herons, and feel the quiet that only exists far from any road. At high tide, snorkellers find a labyrinth of coral gardens just below the surface.",
          },
          {
            heading: "2. Sudi Island",
            body: "Accessible only by boat and largely untouched by tourism, Sudi Island holds a small Swahili fishing community whose lives move with the tides. Spend a morning here and you'll hear stories in Giriama that go back generations, watch ngalawa outriggers being repaired by hand, and leave with a kind of peace that only genuine encounters can give.",
          },
          {
            heading: "3. Whale Watching Spots",
            body: "Between October and March, humpback whales migrate past the Kenyan coast on their journey from Antarctica. Local fishermen know exactly where to go. A quiet morning charter takes you beyond the reef into open water where, if the season is right, you'll witness something enormous and slow and completely humbling rise beside the boat.",
          },
          {
            heading: "4. Watamu Mangroves",
            body: "The mangroves north of the village aren't just scenery — they're a nursery for the ocean. Rent a kayak and push through channels barely wide enough to pass, canopy overhead, roots trailing in the water like fingers. Birders will find paradise here: over 200 species have been recorded in and around the creek system.",
          },
          {
            heading: "5. Secret Beach Spots",
            body: "Ask anyone who has lived in Watamu for a decade and they'll point you somewhere different. North of Blue Lagoon, past the last resort, the beach narrows into something wild. No sun-beds, no hawkers — just white sand, driftwood, and the sound of waves uninterrupted. The kind of beach you describe to friends and then half-regret sharing.",
          },
          {
            heading: "How to Explore the Hidden Gems in Watamu",
            body: "The most rewarding way to discover these hidden gems in Watamu is with a local guide who knows where to look. Our safari team can build a full day itinerary covering Mida Creek, Sudi Island, and the secret coastline — or weave them into a broader Kenya safari and coast experience tailored entirely to you.",
          },
        ],
        conclusion:
          "Watamu is generous with its beauty if you're patient. The hidden version of this place — the one that stays with you — is just one conversation, one canoe, one extra mile away. Come and find it for yourself.",
      },
    },
    it: {
      title: "Le 5 Gemme Nascoste di Watamu",
      excerpt:
        "Scopri il lato segreto di Watamu — dalle mangrovie silenziose alle spiagge isolate che le folle non trovano mai.",
      imageAlt: "Costa di Watamu e oceano turchese",
      tag: "Destinazioni",
      readTime: "5 min di lettura",
      stats: [
        { value: "200+", label: "Specie di uccelli al Mida Creek" },
        { value: "#3", label: "Spiaggia in Kenya — CNN Travel" },
        { value: "4.9★", label: "TripAdvisor Travellers' Choice" },
      ],
      pullQuote: {
        text: "Watamu è uno dei tratti più incontaminati della costa del Kenya — una destinazione che sorprende genuinamente i visitatori per la prima volta.",
        source: "Lonely Planet East Africa, Edizione 2024",
      },
      content: {
        intro:
          "La maggior parte dei visitatori di Watamu scopre il Parco Marino e le spiagge da cartolina — e se ne va con la sensazione di aver visto tutto. Ma chi rallenta, chi fa le domande giuste, chi si avventura un po' più lontano — trova l'altra Watamu. Quella che non appare nelle brochure.",
        sections: [
          {
            heading: "1. Mida Creek",
            body: "Un'insenatura di marea dove l'oceano respira due volte al giorno, Mida Creek è uno degli ecosistemi marini più importanti del Kenya. Sali su una canoa a bassa marea, scivolando accanto a foreste di mangrovie brulicanti di martin pescatori e aironi, e senti la quiete che esiste solo lontano da qualsiasi strada. All'alta marea, i subacquei trovano un labirinto di giardini corallini appena sotto la superficie.",
          },
          {
            heading: "2. Isola di Sudi",
            body: "Raggiungibile solo in barca e quasi intatta dal turismo, l'isola di Sudi ospita una piccola comunità di pescatori swahili le cui vite seguono le maree. Trascorri una mattina qui e ascolterai storie in Giriama che risalgono a generazioni fa, osserverai ngalawa outrigger riparate a mano, e te ne andrai con un tipo di pace che solo gli incontri autentici possono dare.",
          },
          {
            heading: "3. Punti di Avvistamento Balene",
            body: "Tra ottobre e marzo, le balene megattere migrano lungo la costa keniana nel loro viaggio dall'Antartide. I pescatori locali sanno esattamente dove andare. Un tranquillo noleggio mattutino ti porta oltre la barriera corallina nelle acque aperte dove, se la stagione è quella giusta, testimoni qualcosa di enorme, lento e completamente umiliante emergere accanto alla barca.",
          },
          {
            heading: "4. Le Mangrovie di Watamu",
            body: "Le mangrovie a nord del villaggio non sono solo scenografia — sono un vivaio per l'oceano. Noleggia un kayak e spingiti attraverso canali appena abbastanza larghi da passare, con la volta della canopea sopra e le radici che si trascinano nell'acqua come dita. Gli appassionati di birdwatching troveranno qui il paradiso: oltre 200 specie sono state registrate in e intorno al sistema del creek.",
          },
          {
            heading: "5. Spiagge Segrete",
            body: "Chiedi a chiunque viva a Watamu da un decennio e ti indicherà un posto diverso. A nord di Blue Lagoon, dopo l'ultimo resort, la spiaggia si restringe in qualcosa di selvaggio. Niente lettini, niente venditori ambulanti — solo sabbia bianca, legni alla deriva e il suono ininterrotto delle onde. Il tipo di spiaggia che descrivi agli amici e poi ti penti a metà di aver condiviso.",
          },
        ],
        conclusion:
          "Watamu è generosa con la sua bellezza se sei paziente. La versione nascosta di questo posto — quella che resta con te — è a una sola conversazione, una canoa, un miglio in più di distanza. Vieni a trovarla di persona.",
      },
    },
  },
  {
    id: "swahili-dishes",
    image: WatamuCulturalTour1,
    date: "18 Marzo 2026 / March 18, 2026",
    en: {
      title: "Swahili Food Guide: 5 Dishes You Must Try on Kenya's Coast",
      excerpt:
        "Swahili cuisine is centuries of spice routes, Indian Ocean trade, and coastal tradition served on a single plate.",
      imageAlt: "Swahili food guide — traditional coastal dishes and spices from the Kenya coast",
      tag: "Culture & Food",
      readTime: "6 min read",
      stats: [
        { value: "500+", label: "Years of Swahili culinary tradition" },
        { value: "12+", label: "Spices in a single coastal biryani" },
        { value: "Top 10", label: "World's great coastal cuisines — Travel + Leisure" },
      ],
      pullQuote: {
        text: "The food of Kenya's coast is one of the great undiscovered culinary traditions — a seamless blend of Africa, Arabia, and India that deserves far more global attention.",
        source: "Travel + Leisure, Best Food Destinations 2025",
      },
      content: {
        intro:
          "Consider this your essential Swahili food guide — because to eat Swahili food is to understand the Indian Ocean. Every dish on the Kenyan coast carries the fingerprints of Arab traders, Indian merchants, Portuguese explorers, and the Bantu communities who wove them all together into something uniquely their own. Here are five dishes that will make you genuinely reconsider what you thought you knew about African cuisine.",
        sections: [
          {
            heading: "1. Biryani ya Pwani",
            body: "Coastal biryani is not Indian biryani with a Kenyan accent — it is its own creature. Long-grain rice layered with spiced goat or chicken, slow-cooked in a clay pot sealed with dough to trap the steam. The fragrance of cardamom, clove, and cinnamon fills the room ten minutes before the pot is even opened. Find it: at family celebrations and the best coastal restaurants in Malindi and Lamu.",
          },
          {
            heading: "2. Pilau",
            body: "Where biryani is celebratory and layered, pilau is everyday magic. Rice simmered with whole spices — black pepper, cumin, cardamom, cinnamon — until each grain is stained gold and deeply fragrant. Served with kachumbari (fresh tomato-onion salsa) and a cold Coke, it is arguably the most perfect simple meal on the coast. Find it: at every mama mboga and local restaurant from Mombasa to Watamu.",
          },
          {
            heading: "3. Samosa",
            body: "The Swahili samosa earned its citizenship generations ago. Triangular, golden, filled with spiced minced meat or lentils and fried until shatteringly crisp. It is street food, party food, and 3am food in equal measure. The coastal version is thinner-skinned and spicier than its Indian ancestor. Find it: at roadside stalls and dukas any time of day.",
          },
          {
            heading: "4. Viazi Karai, Mahamri & Bhajia",
            body: "Three separate things; one way of eating. Viazi karai are whole potatoes battered in spiced chickpea flour and deep-fried. Mahamri are soft, slightly sweet coconut doughnuts that pair perfectly with tea. Bhajia are thin, crisp potato fritters seasoned with coriander and green chilli. Together or separately, they are the reason coastal breakfast exists. Find it: at early-morning food stalls near the beach or any town market.",
          },
          {
            heading: "5. Coconut Fish Curry",
            body: "Whatever was caught that morning goes into the pot. Snapper, barracuda, kingfish — simmered low and slow in freshly pressed coconut milk with tomato, turmeric, and a dozen spices ground by hand. It is simultaneously light and rich, the coconut cutting through the heat of the chilli, the fish falling apart at the touch of a fork. Eat it with white rice and eat it slowly. Find it: at homes along the coast and the handful of restaurants that haven't discovered shortcuts.",
          },
          {
            heading: "Your Swahili Food Guide: Where to Eat on the Kenya Coast",
            body: "The best places to find authentic Swahili food are rarely the tourist-facing restaurants. Ask your guide, your host, or the person at the market stall. On a Sasa Safaris coastal tour, we build food into the experience — local lunches, market visits, and the occasional meal cooked by families who've been preparing these dishes for generations.",
          },
        ],
        conclusion:
          "Food is always the fastest route into a culture. On the Kenyan coast, every meal is an invitation to understand something real about this part of Africa. Book a trip. Show up hungry. Let the food do the rest.",
      },
    },
    it: {
      title: "I 5 Piatti Swahili che Devi Assolutamente Provare",
      excerpt:
        "La cucina swahili sono secoli di rotte delle spezie, commerci sull'Oceano Indiano e tradizione costiera serviti in un unico piatto.",
      imageAlt: "Cibo e spezie della costa swahili",
      tag: "Cultura & Cucina",
      readTime: "6 min di lettura",
      stats: [
        { value: "500+", label: "Anni di tradizione culinaria swahili" },
        { value: "12+", label: "Spezie in un singolo biryani costiero" },
        { value: "Top 10", label: "Grandi cucine costiere del mondo — Travel + Leisure" },
      ],
      pullQuote: {
        text: "La cucina della costa del Kenya è una delle grandi tradizioni culinarie non ancora scoperte — una fusione perfetta di Africa, Arabia e India che merita molta più attenzione a livello globale.",
        source: "Travel + Leisure, Best Food Destinations 2025",
      },
      content: {
        intro:
          "Mangiare cibo swahili significa capire l'Oceano Indiano. Ogni piatto sulla costa keniana porta le impronte dei commercianti arabi, dei mercanti indiani, degli esploratori portoghesi e delle comunità Bantu che li hanno intrecciati tutti insieme in qualcosa di unicamente loro. Ecco cinque piatti che ti faranno genuinamente riconsiderare quello che pensavi di sapere sulla cucina africana.",
        sections: [
          {
            heading: "1. Biryani ya Pwani",
            body: "Il biryani costiero non è il biryani indiano con un accento keniano — è una creatura a sé stante. Riso a grana lunga a strati con capra o pollo speziati, cotto lentamente in una pentola di terracotta sigillata con pasta per trattenere il vapore. La fragranza di cardamomo, chiodi di garofano e cannella riempie la stanza dieci minuti prima che la pentola venga anche solo aperta. Dove trovarlo: alle celebrazioni familiari e nei migliori ristoranti costieri di Malindi e Lamu.",
          },
          {
            heading: "2. Pilau",
            body: "Dove il biryani è celebrativo e stratificato, il pilau è magia quotidiana. Riso bollito con spezie intere — pepe nero, cumino, cardamomo, cannella — finché ogni chicco è dorato e profumatissimo. Servito con kachumbari (salsa fresca di pomodoro e cipolla) e una Coca fredda, è probabilmente il pasto semplice più perfetto della costa. Dove trovarlo: in ogni mama mboga e ristorante locale da Mombasa a Watamu.",
          },
          {
            heading: "3. Samosa",
            body: "La samosa swahili ha ottenuto la cittadinanza generazioni fa. Triangolare, dorata, ripiena di carne macinata speziata o lenticchie e fritta fino a diventare fragorosamente croccante. È cibo di strada, cibo da festa e cibo delle 3 di mattina in egual misura. La versione costiera ha la pelle più sottile ed è più piccante del suo antenato indiano. Dove trovarla: ai banchi lungo la strada e nelle duka in qualsiasi momento della giornata.",
          },
          {
            heading: "4. Viazi Karai, Mahamri & Bhajia",
            body: "Tre cose separate; un modo di mangiare. I viazi karai sono patate intere impanate in farina di ceci speziata e fritte in olio profondo. I mahamri sono morbide ciambelle al cocco, leggermente dolci, perfette con il tè. I bhajia sono sottili frittelle di patate croccanti condite con coriandolo e peperoncino verde. Insieme o separatamente, sono la ragione per cui esiste la colazione costiera. Dove trovarlo: ai banchi del cibo del mattino presto vicino alla spiaggia o in qualsiasi mercato cittadino.",
          },
          {
            heading: "5. Curry di Pesce al Cocco",
            body: "Qualunque cosa sia stata pescata quella mattina va nella pentola. Cernia, barracuda, pesce re — bolliti lentamente in latte di cocco appena pressato con pomodoro, curcuma e una dozzina di spezie macinate a mano. È allo stesso tempo leggero e ricco, il cocco che taglia il calore del peperoncino, il pesce che si sfalda al tocco di una forchetta. Mangialo con riso bianco e mangialo lentamente. Dove trovarlo: nelle case lungo la costa e nella manciata di ristoranti che non hanno ancora scoperto le scorciatoie.",
          },
        ],
        conclusion:
          "Il cibo è sempre la via più rapida per entrare in una cultura. Sulla costa keniana, ogni pasto è un invito a capire qualcosa di reale su questa parte dell'Africa. Prenota un viaggio. Presentati affamato. Lascia che il cibo faccia il resto.",
      },
    },
  },
  {
    id: "best-time-safari-kenya",
    image: WildebeestMigration,
    date: "5 Aprile 2026 / April 5, 2026",
    en: {
      title: "Best Time to Go on a Safari in Kenya",
      excerpt:
        "Dry season gives you dust clouds and predators at every waterhole. The green season gives you something else entirely.",
      imageAlt: "Best time for safari in Kenya — wildebeest crossing the Mara River during the Great Migration",
      tag: "Safari Planning",
      readTime: "7 min read",
      stats: [
        { value: "1.5M+", label: "Wildebeest in the Great Migration" },
        { value: "30–50%", label: "Lower rates in green season" },
        { value: "#1", label: "Safari destination in Africa — Condé Nast Traveller" },
      ],
      pullQuote: {
        text: "Kenya's Maasai Mara remains the benchmark against which all other wildlife experiences are measured. The Migration alone justifies a trip across the world.",
        source: "Condé Nast Traveller, Safari Awards 2025",
      },
      content: {
        intro:
          "Everyone asks about the best time for a safari in Kenya. The honest answer: it depends on what you want to see. Kenya's wildlife calendar is rich enough that every month offers something worth travelling for — you just need to know what you're looking at.",
        sections: [
          {
            heading: "1. Dry Season (June – October)",
            body: "This is peak safari season and for good reason. Vegetation thins, waterholes shrink, and animals congregate predictably around remaining water sources. Game viewing is at its most reliable — long grass doesn't hide lions, dust trails give away herds from kilometres away. Temperatures are mild, skies are clear, and the light in the late afternoon is extraordinary. The trade-off: parks are at their busiest and prices reflect that.",
          },
          {
            heading: "2. The Great Migration (Maasai Mara, July – October)",
            body: "Over 1.5 million wildebeest, zebra, and gazelle follow the rain-fed grass in a clockwise circuit between Tanzania's Serengeti and Kenya's Maasai Mara. The Mara River crossings — where wildebeest plunge into crocodile-filled water in surging, chaotic waves — are among the most dramatic wildlife spectacles on earth. Peak crossing months are August and September. Book at least 6 months ahead for this window.",
          },
          {
            heading: "3. Green Season (November – May)",
            body: "The short rains (November–December) and long rains (March–May) transform the savannah into something lush and alive. Migratory birds arrive in extraordinary numbers. Newborn animals are everywhere — and so are the predators that follow them. Crowds drop significantly, rates fall, and the landscape turns a dozen shades of green. Photography is challenging in the rain, but the images you get are unlike anything from dry season.",
          },
          {
            heading: "4. Weather Considerations",
            body: "Kenya straddles the equator, which means temperatures stay relatively constant year-round (20–30°C in most parks). The rain is rarely all-day — usually afternoon showers. Altitude matters: Laikipia and the Mara Highlands can feel genuinely cold at night even in August. Pack a fleece regardless of when you travel.",
          },
          {
            heading: "5. Budget vs. Peak Seasons",
            body: "High season (July–October) commands premium rates across lodges and camps, particularly in the Maasai Mara. Travelling in November, January, or February gives you excellent wildlife viewing at 30–50% lower rates. Shoulder months like June and November hit a sweet spot: good conditions, lower prices, fewer vehicles at every sighting.",
          },
          {
            heading: "Our Recommendation: Best Time for Safari in Kenya",
            body: "For first-timers, we recommend July to October for reliable wildlife viewing and the chance to witness the Great Migration. For affordable luxury safaris with fewer crowds, January to March is ideal. Whatever window you choose, our safari travel experts will build an itinerary that makes the most of it.",
          },
        ],
        conclusion:
          "There is no bad time to go on a Kenyan safari. There is only a question of what version of the experience you want most. Our team can help you choose the window that matches your budget, your wishlist, and your calendar.",
      },
    },
    it: {
      title: "Il Momento Migliore per un Safari in Kenya",
      excerpt:
        "La stagione secca ti dà nuvole di polvere e predatori a ogni pozza d'acqua. La stagione verde ti dà qualcosa di completamente diverso.",
      imageAlt: "Gnu che attraversano il fiume Mara durante la Grande Migrazione",
      tag: "Pianificazione Safari",
      readTime: "7 min di lettura",
      stats: [
        { value: "1.5M+", label: "Gnu nella Grande Migrazione" },
        { value: "30–50%", label: "Tariffe più basse in stagione verde" },
        { value: "#1", label: "Destinazione safari in Africa — Condé Nast Traveller" },
      ],
      pullQuote: {
        text: "Il Maasai Mara del Kenya rimane il punto di riferimento rispetto al quale si misurano tutte le altre esperienze con la fauna selvatica. La Migrazione da sola giustifica un viaggio dall'altra parte del mondo.",
        source: "Condé Nast Traveller, Safari Awards 2025",
      },
      content: {
        intro:
          "Tutti chiedono qual è il momento migliore per andare. La risposta onesta: dipende da cosa vuoi vedere. Il calendario della fauna selvatica del Kenya è abbastanza ricco da offrire ogni mese qualcosa che vale la pena di raggiungere — devi solo sapere cosa stai cercando.",
        sections: [
          {
            heading: "1. Stagione Secca (Giugno – Ottobre)",
            body: "Questa è la stagione di punta del safari e per una buona ragione. La vegetazione si assottiglia, le pozze d'acqua si riducono e gli animali si concentrano in modo prevedibile attorno alle fonti d'acqua rimanenti. L'avvistamento degli animali è al suo massimo di affidabilità — l'erba alta non nasconde i leoni, le scie di polvere rivelano i branchi da chilometri di distanza. Le temperature sono miti, il cielo è limpido e la luce nel tardo pomeriggio è straordinaria. Il compromesso: i parchi sono al loro più affollato e i prezzi lo rispecchiano.",
          },
          {
            heading: "2. La Grande Migrazione (Maasai Mara, Luglio – Ottobre)",
            body: "Oltre 1,5 milioni di gnu, zebre e gazzelle seguono l'erba irrigata dalla pioggia in un circuito in senso orario tra il Serengeti della Tanzania e il Maasai Mara del Kenya. Gli attraversamenti del fiume Mara — dove gli gnu si tuffano in acque piene di coccodrilli in onde impetuose e caotiche — sono tra gli spettacoli naturali più drammatici della terra. I mesi di picco degli attraversamenti sono agosto e settembre. Prenota almeno 6 mesi prima per questa finestra.",
          },
          {
            heading: "3. Stagione Verde (Novembre – Maggio)",
            body: "Le piogge brevi (novembre–dicembre) e le piogge lunghe (marzo–maggio) trasformano la savana in qualcosa di lussureggiante e vivo. Gli uccelli migratori arrivano in numeri straordinari. Gli animali appena nati sono ovunque — e così i predatori che li seguono. Le folle si riducono significativamente, le tariffe scendono e il paesaggio si tinge di decine di sfumature di verde. La fotografia è impegnativa sotto la pioggia, ma le immagini che ottieni sono diverse da qualsiasi cosa durante la stagione secca.",
          },
          {
            heading: "4. Considerazioni Meteorologiche",
            body: "Il Kenya si trova a cavallo dell'equatore, il che significa che le temperature rimangono relativamente costanti tutto l'anno (20–30°C nella maggior parte dei parchi). La pioggia raramente dura tutto il giorno — di solito sono acquazzoni pomeridiani. L'altitudine conta: la Laikipia e le Mara Highlands possono sembrare genuinamente fredde di notte anche ad agosto. Porta un pile indipendentemente da quando viaggi.",
          },
          {
            heading: "5. Budget vs. Alta Stagione",
            body: "L'alta stagione (luglio–ottobre) impone tariffe premium in lodge e camp, in particolare nel Maasai Mara. Viaggiare a novembre, gennaio o febbraio offre un eccellente avvistamento della fauna a tariffe del 30–50% più basse. I mesi di spalla come giugno e novembre raggiungono un punto dolce: buone condizioni, prezzi più bassi, meno veicoli a ogni avvistamento.",
          },
        ],
        conclusion:
          "Non esiste un momento sbagliato per un safari in Kenya. C'è solo la questione di quale versione dell'esperienza vuoi di più. Il nostro team può aiutarti a scegliere la finestra che corrisponde al tuo budget, alla tua lista dei desideri e al tuo calendario.",
      },
    },
  },
  {
    id: "plan-first-african-safari",
    image: ElephantSunset,
    date: "12 Aprile 2026 / April 12, 2026",
    en: {
      title: "How to Plan Your First African Safari: Essential First-Time Safari Tips",
      excerpt:
        "The first safari can feel overwhelming from the outside. From the inside, once you're there, everything makes perfect sense.",
      imageAlt: "How to plan a safari in Africa — elephants silhouetted at golden sunset in Kenya",
      tag: "Safari Guide",
      readTime: "8 min read",
      stats: [
        { value: "50+", label: "National parks and reserves in Kenya" },
        { value: "95%", label: "First-time visitors return within 3 years" },
        { value: "4.9★", label: "Average Sasa Safaris rating on TripAdvisor" },
      ],
      pullQuote: {
        text: "A first safari in Kenya is one of those rare travel experiences that reorders your entire perspective on the natural world. Nothing compares.",
        source: "National Geographic Traveler, Kenya Feature 2025",
      },
      content: {
        intro:
          "The moment you start researching safaris, the options multiply fast. Dozens of parks, hundreds of lodges, peak season versus green season, self-drive versus guided, fly-in versus road transfer. These first-time safari tips will help you cut through the noise. It can feel genuinely complicated — but it isn't, once someone breaks it down for you. Consider this that breakdown.",
        sections: [
          {
            heading: "1. Choosing Your Destination",
            body: "Kenya alone has over 50 national parks, reserves, and conservancies. Start with what you most want to see. The Maasai Mara for the Big 5 and the Migration. Amboseli for elephants and Kilimanjaro. Tsavo East for red elephants and vast, raw bush. Watamu and the coast for marine parks and culture. You don't have to choose just one — most itineraries combine two or three.",
          },
          {
            heading: "2. Budgeting Basics",
            body: "A well-designed safari doesn't have to be expensive — it needs to be well-matched to what you actually want. Budget options exist (banda accommodation, camping, shared game drives) and they deliver genuine wildlife experiences. Mid-range lodge safaris offer comfort and excellent guiding. Luxury camps add private vehicles, gourmet food, and access to private conservancies. The biggest cost drivers are park fees, accommodation tier, and season. Be honest about your budget early and let a specialist build around it.",
          },
          {
            heading: "3. What to Pack for a Safari in Kenya",
            body: "Safari packing is simpler than you think. Neutral colours (khaki, olive, brown — not white, not bright patterns). Lightweight layers for cold mornings and warm afternoons. Good walking shoes. A hat and sunscreen. A quality torch. Most importantly: a camera or the acceptance that you'll be present instead of documenting. Luggage for fly-in safaris is typically limited to 15kg soft-sided bags — plan accordingly.",
          },
          {
            heading: "4. Safety & Expectations",
            body: "Kenya is very safe for well-organised safari travel. The animals are the only genuine variable — and experienced guides manage that with skill built over years in the bush. Set your expectations honestly: you will see extraordinary things, and some mornings will be quiet. That is the nature of the wild, and it is part of what makes the moments of drama so overwhelming when they arrive.",
          },
          {
            heading: "5. Working with Safari Specialists",
            body: "The difference between a good safari and a great one is almost always the people who planned it. A specialist who knows the parks, the operators, and the seasonal patterns can save you money, protect your time, and get you into the right place at the right moment. At Sasa Safaris, every itinerary is built from a conversation — not a template. We've been planning these journeys for years, and we're happy to make yours one of them.",
          },
        ],
        conclusion:
          "Your first safari is not something to defer. Africa does not get less remarkable — it gets harder to explain to people who haven't been. Stop researching and start planning. We're here whenever you're ready.",
      },
    },
    it: {
      title: "Come Pianificare il Tuo Primo Safari in Africa",
      excerpt:
        "Il primo safari può sembrare travolgente dall'esterno. Dall'interno, una volta che ci sei, tutto ha perfettamente senso.",
      imageAlt: "Elefanti in silhouette contro un tramonto dorato in Kenya",
      tag: "Guida Safari",
      readTime: "8 min di lettura",
      stats: [
        { value: "50+", label: "Parchi nazionali e riserve in Kenya" },
        { value: "95%", label: "I visitatori per la prima volta tornano entro 3 anni" },
        { value: "4.9★", label: "Valutazione media Sasa Safaris su TripAdvisor" },
      ],
      pullQuote: {
        text: "Un primo safari in Kenya è una di quelle rare esperienze di viaggio che riordina completamente la tua prospettiva sul mondo naturale. Niente si paragona.",
        source: "National Geographic Traveler, Kenya Feature 2025",
      },
      content: {
        intro:
          "Dal momento in cui inizi a fare ricerche sui safari, le opzioni si moltiplicano velocemente. Decine di parchi, centinaia di lodge, alta stagione contro stagione verde, self-drive contro guidato, volo interno contro trasferimento su strada. Può sembrare genuinamente complicato. Non lo è — una volta che qualcuno te lo spiega. Considera questo come quella spiegazione.",
        sections: [
          {
            heading: "1. Scegliere la Destinazione",
            body: "Il solo Kenya ha oltre 50 parchi nazionali, riserve e conservancy. Inizia da ciò che vuoi vedere di più. Il Maasai Mara per i Big 5 e la Migrazione. Amboseli per gli elefanti e il Kilimangiaro. Tsavo Est per gli elefanti rossi e la boscaglia vasta e selvaggia. Watamu e la costa per i parchi marini e la cultura. Non devi scegliere solo uno — la maggior parte degli itinerari ne combina due o tre.",
          },
          {
            heading: "2. Le Basi del Budget",
            body: "Un safari ben progettato non deve essere costoso — deve essere ben adattato a ciò che vuoi davvero. Esistono opzioni economiche (alloggi banda, campeggio, game drive condivisi) che offrono genuine esperienze con la fauna selvatica. I safari in lodge di fascia media offrono comfort e ottime guide. I camp di lusso aggiungono veicoli privati, cibo gourmet e accesso a conservancy private. I principali fattori di costo sono le tasse dei parchi, il livello di alloggio e la stagione. Sii onesto riguardo al tuo budget dall'inizio e lascia che uno specialista costruisca intorno ad esso.",
          },
          {
            heading: "3. Cosa Portare",
            body: "Fare i bagagli per un safari è più semplice di quanto pensi. Colori neutri (kaki, oliva, marrone — non bianco, non fantasie sgargianti). Strati leggeri per le mattine fredde e i pomeriggi caldi. Scarpe da trekking solide. Un cappello e la crema solare. Una torcia di qualità. Soprattutto: una macchina fotografica o l'accettazione di essere presente invece di documentare. Il bagaglio per i safari con volo interno è tipicamente limitato a borse morbide da 15 kg — pianifica di conseguenza.",
          },
          {
            heading: "4. Sicurezza e Aspettative",
            body: "Il Kenya è molto sicuro per i viaggi safari ben organizzati. Gli animali sono l'unica variabile genuina — e le guide esperte la gestiscono con abilità costruita in anni nella boscaglia. Imposta le tue aspettative onestamente: vedrai cose straordinarie, e alcune mattine saranno tranquille. Questa è la natura del selvaggio, ed è parte di ciò che rende i momenti di dramma così travolgenti quando arrivano.",
          },
          {
            heading: "5. Lavorare con Specialisti Safari",
            body: "La differenza tra un buon safari e uno straordinario è quasi sempre nelle persone che lo hanno pianificato. Uno specialista che conosce i parchi, gli operatori e i modelli stagionali può farti risparmiare denaro, proteggere il tuo tempo e portarti nel posto giusto al momento giusto. Da Sasa Safaris, ogni itinerario è costruito su una conversazione — non su un modello. Pianifichiamo questi viaggi da anni e siamo felici di rendere il tuo uno di essi.",
          },
        ],
        conclusion:
          "Il tuo primo safari non è qualcosa da rimandare. L'Africa non diventa meno straordinaria — diventa più difficile da spiegare alle persone che non ci sono state. Smetti di fare ricerche e inizia a pianificare. Siamo qui ogni volta che sei pronto.",
      },
    },
  },
];

/**
 * Returns a flat array of articles merged with the given language's text.
 * Falls back to English if the requested language key doesn't exist.
 */
export function getBlogArticles(lang = "en") {
  const l = lang === "it" ? "it" : "en";
  return blogArticlesData.map(({ id, image, date, en, it }) => ({
    id,
    image,
    date,
    ...(l === "it" ? it : en),
  }));
}

export function getFeaturedArticle(lang = "en") {
  const articles = getBlogArticles(lang);
  return articles[3]; // "How to Plan Your First African Safari"
}

export function getPreviewArticles(lang = "en") {
  return getBlogArticles(lang).slice(0, 3);
}

// Legacy named exports kept for backward-compatibility (English only)
export const blogArticles = getBlogArticles("en");
export const featuredArticle = getFeaturedArticle("en");
export const previewArticles = getPreviewArticles("en");
