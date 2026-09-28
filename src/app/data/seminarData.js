export const seminarData = {
  en: {
    title: "Oral Data, FAIR-ness, and DH:",
    subtitle: [
      { text: "ethical, methodological, and technological challenges", styles: ["italic", "font-bold"] },
    ],
    date: "October 28th-29th 2026",
    location: "Aula Affreschi, Via Zamboni 34, 40126 Bologna",
    introductoryText: [
      [
        { text: "A two-day workshop dedicated to the challenges associated with the collection, management, and sharing of oral data. "
        },
      ],
      [
        { text: "Participation is " },
        { text: "free", styles: ["font-bold"] },
        { text: " and open to all." },
      ],
    ],
    registration: {
      buttonText: "Register to attend",
      doiUrl: "https://forms.cloud.microsoft/e/tpyqx77Z3L"
    },
    about: {
      title: "About",
      description: [
        // Paragrafo 1 (complesso, con corsivo)
        [
          {
            text: "Linguistic data represent a valuable resource for researchers across various disciplines, such as the digital humanities, oral history, linguistics, sociology, anthropology, media studies, memory studies, and others; working with these materials raises numerous methodological, technical, and ethical challenges. In fact, this work requires addressing issues that arise from different yet closely interconnected research perspectives.",
          },
        ],
        // Paragrafo 2 (complesso, con link e corsivo)
        [
          {
            text: "A crucial issue common to all researchers working with oral data is the difficulty of making the data FAIR and accessible to the widest possible audience while simultaneously complying with the privacy and copyright restrictions set forth by the GDPR.",
          },
        ],
        // Paragrafo 3 (semplice, solo testo)
        [
          {
            text: "In spoken data, the problem arises from the very feature that distinguishes it—namely, “the voice”—which, on the one hand, constitutes potentially identifiable personal data and must therefore be anonymized, but on the other hand, is an intrinsic and “unobscurable” element in many research fields that work with oral materials.",
          },
        ],
        // Paragrafo 4 (semplice)
        [
          {
            text: "A second crucial issue concerns the use of automated and/or generative technologies to facilitate the study and sharing of this data. For textual data, the intersection of computer science and the humanities has been a common practice shared across various fields of study for years; however, it has recently faced new challenges due to the growing capabilities and popularity of automated and generative systems. For spoken language, one of the major challenges associated with these systems is transcription, which—while making the content of the collected data more easily accessible—involves a normalization of speech that obscures certain fundamental elements of analysis related to non-standard linguistic varieties, spontaneous speech, or multilingual contexts.",
          },
        ],
        // Paragrafo 5 (complesso, con link e corsivo)
        [
          {
            text: "In light of these and other critical issues, the workshop aims to provide a forum for exchange among researchers, industry professionals, and students who, while adopting different methodological approaches and operational practices, have grappled with the challenges associated with the collection, management, use, and sharing of these types of data within the framework of Open Science and interdisciplinarity. The goal is to foster discussion among diverse experiences, share solutions and best practices, and contribute to the development of a shared body of knowledge that can support the research community in the responsible and effective handling of data."
          }
        ],
        [
          {
            text: "This workshop is organized by Silvia Ballarè, Nike F. Del Quercio, Laurent Fintoni, Costanza Paolillo in collaboration with",
          },
          {
            text: " BolDH - Bologna Digital Humanities ecosystem",
            href: "https://dharc-org.github.io/boldh/",
          },
          { text: " and" },
          {
            text: " /DH.arc - Digital Humanities Research Center of the University of Bologna",
            styles: ["italic"],
            href: "https://site.unibo.it/dharc/en",
          },
          { text: " as well as the support of X, Y, Z. " },
        ],
      ],
    },
    scheduleLabels: {
      title: "Program",
    },
    sectionLabels: {
      program: "Program",
      about: "About",
      researchCenters: "Projects",
      committee: "Organizing Committee",
    },
    footer: {
      fundingText: "This event was funded by Fondazione Carisbo through the Cultura e Rigenerazione 2025 program and by Alma Mater Studiorum - University of Bologna.",
      fundingLinkCarisbo: "https://fondazionecarisbo.it/bandi-e-iniziative/cultura-e-rigenerazione/",
      fundingLinkUnibo: "https://ficlit.unibo.it/it",
    },
    schedule: [
      {
        dayTitle: "Day 1",
        date: "October 28, 2026",
        sessions: [
          {
            sessionTitle: "Opening",
            events: [
              { time: "10:00 - 10:30", 
                type: "welcome", 
                title: "Welcome", 
                speaker: "Nicola Grandi, Francesca Tomasi, Giuliana Benvenuti"
              },
            ],
          },
          {
            sessionTitle: "SESSION I: ORAL DATA PROJECTS FROM BOLOGNA",
            chair: "Session Chair: TK",
            events: [
              {
                time: "10:30 - 10:50",
                type: "talk",
                title:
                  "The FAIR Memories project",
                speaker: "Nike Francesca Del Quercio, Costanza Paolillo",
                affiliation: "University of Bologna, FICLIT",
              },
              {
                time: "10:50 - 11:10",
                type: "talk",
                title: "The KiParla project",
                speaker: "Silvia Ballarè, Caterina Mauri",
                affiliation: "University of Bologna, FICLIT",
              },
              {
                time: "11:10 - 11:30",
                type: "talk",
                title:
                  "Women of Italian Cinema project",
                speaker: "Michela Zegna",
                affiliation: "Cineteca di Bologna",
              },
              {
                time: "11:30 - 11:50",
                type: "talk",
                title:
                  "Bologna in the 1990s project",
                speaker: "Jacopo Lorenzini, Toni Rovatti",
                affiliation: "University of Bologna, MemoryLab",
              },
              { time: "11:50 - 12:30", type: "qa", title: "Q&A" },
              { time: "12:30 - 14:00", type: "lunch", title: "Lunch Break" },
            ],
          },
          {
            sessionTitle:
              "SESSION II: DIGITAL HUMANITIES AT THE CROSSROADS OF ORAL DATA",
            chair: "Session Chair: TBC",
            events: [
              {
                time: "14:00 - 14:20",
                type: "talk",
                title:
                  "K-Oar: the CLARIN Knowledge Centre for Oral Archives",
                speaker: "Silvia Calamai",
                affiliation: "University of Siena",
              },
              {
                time: "14:20 - 14:40",
                type: "talk",
                title:
                  "Oral Sources and Linguistic Research: Regional Italian from Turin in the Giorgina Levi Arian Collection",
                speaker: "Daniela Mereu",
                affiliation: "University of Turin",
              },
              {
                time: "14:40 - 15:00",
                type: "talk",
                title:
                  "From Oral History to Oral Archives (and Vice Versa): Research Experiences",
                speaker: "Alessandro Casellato",
                affiliation: "University of Venice Ca' Foscari",
              },
              {
                time: "15:00 - 15:20",
                type: "talk",
                title:
                  "In the Hybrid Archive, Between Orality and Writing",
                speaker: "Emmanuela Carbè",
                affiliation: "University of Venice Ca' Foscari",
              },
              { time: "15:20 - 16:00", type: "qa", title: "Q&A" },
              { time: "16:00 - 16:30", type: "break", title: "Coffee Break" },
            ],
          },
          {
            sessionTitle: "SESSION III: Workshop",
            events: [
              {
                time: "16:30 - 18:00",
                type: "workshop",
                curator: "Silvia Ballarè, Laurent Fintoni",
                title: "Workshop: Transcription and Annotation - Tools & Best Practices",
              },
              { time: "18:00", type: "conclusion", title: "End" },
            ],
          },
        ],
      },
      {
        dayTitle: "Day 2",
        date: "October 29, 2026",
        sessions: [
          {
            sessionTitle: "SESSION IV: INTERDISCIPLINARY ROUNDTABLES",
            chair: "Session Chair: TK",
            events: [
              {
                time: "09:00 - 10:30",
                type: "roundtable",
                title:
                  "Legal and Ethical Issues in the Management of Oral Data",
                speaker: "Marco Dettori, Francesca Masini, Eugenio Goria, Lottie Provost",
                affiliation: "University of Bologna, University of Turin, ILC-CNR",
              },
              { time: "10:30 - 11:00", type: "break", title: "Coffee Break" },
              {
                time: "11:00 - 12:30",
                type: "roundtable",
                title:
                  "Archiving, Handling, and Sharing Oral Data: Interdisciplinary Perspectives",
                speaker: "Francesca Tomasi, Silvia Calamai, Jacopo Lorenzi, Toni Rovatti, Daniela Mereu",
                affiliation: "University of Bologna, University of Siena, University of Turin",
              },
              { time: "12:30 - 13:00", type: "conclusion", title: "Closing Remarks" },
            ],
          },
        ],
      },
    ],
  },
  it: {
    title: "Dati Orali, FAIR-ness, e DH:",
    subtitle: [
      { text: "sfide etiche, metodologiche e tecnologiche", styles: ["italic", "font-bold"] },
    ],
    date: "28-29 Ottobre 2026",
    location: "Aula Affreschi, Via Zamboni 34, 40126 Bologna",
    introductoryText: [
      [
        { text: "Un workshop di due giorni dedicato alle sfide legate alla raccolta, alla gestione e alla condivisione dei dati orali." },
      ],
      [
        { text: "La partecipazione è " },
        { text: "gratuita", styles: ["font-bold"] },
        { text: " e aperta a tutti." },
      ],
    ],
    registration: {
      buttonText: "Iscriviti per partecipare",
      doiUrl: "https://forms.cloud.microsoft/e/tpyqx77Z3L",
    },
    about: {
      title: "Informazioni",
      description: [
        // Paragrafo 1 (complesso, con corsivo)
        [
          {
            text: "The Building Knowledge Landscapes Across the Digital Humanities: /DH.arc & DHLab in Dialogue",
            styles: ["italic"],
          },
          {
            text: " è stato un seminario di tre giorni dedicato a temi rilevanti quali l'Organizzazione, la Rappresentazione, la Visualizzazione e l'Estrazione della Conoscenza nell'ambito delle discipline umanistiche e del patrimonio culturale. Durante il seminario, è stata posta particolare enfasi sull'esame degli approcci e delle pratiche adottate nelle Digital Humanities per evidenziare come prospettive diverse possano affrontare sfide simili nel settore.",
          },
        ],
        // Paragrafo 2 (complesso, con link e corsivo)
        [
          {
            text: "Al centro dell'iniziativa era lo scambio metodologico tra due importanti centri di ricerca di Digital Humanities: il ",
          },
          {
            text: "/DH.arc - Digital Humanities Research Center of the University of Bologna",
            styles: ["italic"],
            href: "https://site.unibo.it/dharc/it", // Link aggiornato alla versione italiana
          },
          { text: " e il " },
          {
            text: "Digital Humanities Research Lab of Amsterdam",
            href: "https://dhlab.huc.knaw.nl/",
          },
          {
            text: ". Il formato alternava contributi di relatori locali e ospiti invitati, creando spazi per dibattiti aperti e discussioni. Questa struttura mirava a promuovere un dialogo significativo tra studiosi internazionali, offrendo al contempo opportunità concrete per lo sviluppo di ricerche collaborative nelle DH. La serie si è conclusa con workshop interattivi pensati per unire i quadri teorici con le applicazioni pratiche nella ricerca DH.",
          },
        ],
        // Paragrafo 3 (semplice, solo testo)
        "L'iniziativa era aperta a ricercatori di ogni livello, studenti, professionisti del patrimonio culturale e ingegneri dell'informazione e della conoscenza. I contributi presentati hanno riflesso ricerche a diversi stadi di sviluppo, spaziando da idee esplorative e studi pilota a strumenti consolidati e progetti maturi.",
        // Paragrafo 4 (semplice)
        "I primi due giorni sono stati dedicati a interventi in stile seminariale. Ogni giornata si è aperta con un keynote che introduceva il tema principale, tenuto dalle due figure di spicco dei centri di ricerca partner: la Prof.ssa Francesca Tomasi (/DH.arc, Università di Bologna) e la Dott.ssa Marieke van Erp (DHLab, Amsterdam). La prima giornata ha esplorato l'Organizzazione e la Visualizzazione della Conoscenza, mentre la seconda si è concentrata sull'Estrazione della Conoscenza e, più in generale, sulle Pratiche di Conoscenza.",
        // Paragrafo 5 (semplice)
        "Il terzo e ultimo giorno è stato interamente dedicato a due workshop pratici. Il primo workshop ha introdotto metodi di annotazione del testo, mostrando come costruire specifici dataset da dati testuali usando RDF. Il secondo workshop ha esplorato diverse tecnologie per estrarre e analizzare le esperienze di lettura nelle recensioni di libri online.",
        // Paragrafo 6 (complesso, con link e corsivo)
        [
          {
            text: "Questo seminario è stato organizzato da dottorandi dell'Università di Bologna come parte del ",
          },
          {
            text: "BolDH - Bologna Digital Humanities ecosystem",
            href: "https://dharc-org.github.io/boldh/",
          },
          { text: " dell'Università di Bologna, in collaborazione con il " },
          {
            text: "/DH.arc - Digital Humanities Research Center of the University of Bologna",
            styles: ["italic"],
            href: "https://site.unibo.it/dharc/it", // Link aggiornato alla versione italiana
          },
          { text: " e il " },
          {
            text: "Digital Humanities Research Lab of Amsterdam",
            href: "https://dhlab.huc.knaw.nl/",
          },
          { text: "." },
        ],
      ],
    },
    scheduleLabels: {
      title: "Programma",
    },
    sectionLabels: {
      program: "Programma",
      about: "Informazioni",
      researchCenters: "Progetti",
      committee: "Comitato Organizzatore",
    },
    footer: {
      fundingText: "L'evento è finanziato da Fondazione Carisbo attraverso il bando Cultura e Rigenerazione 2025 e da Alma Mater Studiorum - Università di Bologna.",
      fundingLinkCarisbo: "https://fondazionecarisbo.it/bandi-e-iniziative/cultura-e-rigenerazione/",
      fundingLinkUnibo: "https://ficlit.unibo.it/it",
    },
    schedule: [
      {
        dayTitle: "Giorno 1",
        date: "5 Novembre 2025",
        sessions: [
          {
            sessionTitle: "Apertura e Keynote",
            chair: "Keynote Chair: Paola Italia",
            events: [
              { time: "10:00 - 10:30", type: "welcome", title: "Benvenuto" },
              {
                time: "10:30 - 11:00",
                type: "keynote",
                title: "Keynote",
                speaker: "Prof. Francesca Tomasi",
                link: "https://youtu.be/DOs9q_umkhk?si=8buv6qq2qpUAl6zw",
              },
            ],
          },
          {
            sessionTitle:
              "SESSIONE I: ORGANIZZAZIONE E VISUALIZZAZIONE DELLA CONOSCENZA",
            chair: "Session Chair: Joris van Zundert",
            events: [
              {
                time: "11:00 - 11:20",
                type: "talk",
                title:
                  "Literary Constraints and Combinatory Structures: Towards a Semantic Model",
                speaker: "Enrica Bruno",
                affiliation: "/DH.arc",
                link: "https://youtu.be/rGw4VdOU9KU?si=IGV-SDXgR_Nt61Zq"
              },
              {
                time: "11:20 - 11:40",
                type: "talk",
                title: "Encoding documents as graphs using markup",
                speaker: "Ronald Haentjens Dekker",
                affiliation: "DHLab",
              },
              { time: "11:40 - 12:10", type: "break", title: "Pausa Caffè" },
              {
                time: "12:10 - 12:30",
                type: "talk",
                title:
                  "Copyright and Computation: Rethinking Gadda through Open Data and Visualization",
                speaker: "Lorenzo Sabatino, Martina Pensalfini",
                affiliation: "/DH.arc",
                link: "https://youtu.be/YhruOhJnGpo?si=3Fe1KeP1LdvpWEhL"
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Analyzing semantic change through centuries in Cultural Heritage documents",
                speaker: "Jiaqi Zhu",
                affiliation: "DHLab",
                link: "https://youtu.be/PtpuZfFCFkg?si=JiOYDp3BId8w55BU",
              },
              { time: "12:50 - 13:00", type: "qa", title: "Q&A" },
              { time: "13:00 - 14:30", type: "lunch", title: "Pausa Pranzo" },
            ],
          },
          {
            sessionTitle:
              "SESSIONE II: ORGANIZZAZIONE E VISUALIZZAZIONE DELLA CONOSCENZA II",
            chair: "Session Chair: Marijn Koolen",
            events: [
              {
                time: "14:30 - 14:50",
                type: "talk",
                title:
                  "From Words to Images: A Framework for Modeling Ekphrasis",
                speaker: "Maria Francesca Bocchi, Carlo Teo Pedretti",
                affiliation: "/DH.arc",
                link: "https://youtu.be/U96sWCa__cU?si=tHsT_S8cGpyXvkgp"
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                              title:
                  "Visualizing the Humanities: a survey of visualization practices, narrativity, and critical approaches in Digital Humanities projects",
                speaker: "Tommaso Battisti",
                affiliation: "/DH.arc",
                link: "https://youtu.be/4N_N2VKJe7Q?si=dvwuyKYVGHtZOeic"
              },
              { time: "15:10 - 15:40", type: "break", title: "Pausa Caffè" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Experimenting a semi-automatic approach based on online surveys to formalize unstructured knowledge in linked data",
                speaker: "Arianna Moretti, Sebastian Barzaghi",
                affiliation: "/DH.arc",
                link: "https://youtu.be/_hN7kVfgum8?si=Of4ZL1BvIHwuL80f",
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "From Data to Meaning: Narrative Visualization for Critical Thinking in Semantic Web Learning",
                speaker: "Giulia Renda",
                affiliation: "/DH.arc",
                link: "https://youtu.be/3Cw34AObe1c?si=sypvsQB7nd8NVDKK",
              },
              {
                time: "16:20 - 16:40",
                type: "talk",
                title: "Born Digital Archives",
                speaker: "Lucia Giagnolini",
                affiliation: "/DH.arc",
                link: "https://youtu.be/oAUUmju0yTM?si=M-gO8996M1hPUGMd",
              },
            ],
          },
          {
            sessionTitle: "SESSIONE III: Dibattito aperto",
            chair: "Debate Chair: Paolo Bonora",
            events: [
              {
                time: "16:40 - 17:30",
                type: "qa",
                title: "Domande e Discussione Finale",
              },
              { time: "17:30", type: "conclusion", title: "Conclusione" },
            ],
          },
        ],
      },
      {
        dayTitle: "Giorno 2",
        date: "6 Novembre 2025",
        sessions: [
          {
            sessionTitle: "Apertura e Keynote",
            chair: "Keynote Chair: Francesca Tomasi",
            events: [
              { time: "10:00 - 10:30", type: "welcome", title: "Benvenuto" },
              {
                time: "10:30 - 11:00",
                type: "keynote",
                title: "Keynote",
                speaker: "Marieke van Erp",
                link: "https://youtu.be/XYkspIz1Jmg?si=nzOvjAsdLVcnew8_"
              },
            ],
          },
          {
            sessionTitle: "SESSIONE I: ESTRAZIONE DELLA CONOSCENZA",
            chair: "Session Chair: Fabio Vitali",
            events: [
              {
                time: "11:00 - 11:20",
                type: "talk",
                title:
                  "Hardships in Narratological Modeling and Literary Language Processing",
                speaker: "Joris van Zundert",
                affiliation: "DHLab",
                link: "https://youtu.be/sDZZVUDvUVI?si=-vzogoQm72b6YPDu"
              },
              {
                time: "11:20 - 11:40",
                type: "talk",
                title:
                  "Knowledge Extraction of Digital Hermeneutics of the Van den vos Reynaerde",
                speaker: "Andrea Schimmenti",
                affiliation: "/DH.arc",
                link: "https://youtu.be/ssmYXxz9R-8?si=KIhpjp4cdCg6I3WT",
              },
              { time: "11:40 - 12:10", type: "break", title: "Pausa" },
              {
                time: "12:10 - 12:30",
                type: "talk",
                title:
                  "Formulaic language in historical political-administrative corpora",
                speaker: "Marijn Koolen",
                affiliation: "DHLab",
                link: "https://youtu.be/-kBG-bimu4c?si=8IgfSDIuJJh8QOTo"
              },
              {
                time: "12:30 - 12:50",
                type: "talk",
                title:
                  "Automatic Extraction and Diachronic Analysis of Olfactory Language",
                speaker: "Teresa Paccosi",
                affiliation: "DHLab",
                link: "https://youtu.be/I_Fn9p0gN2I?si=nCkH97gfhsbjOvpe",
              },
              { time: "12:50 - 13:00", type: "qa", title: "Q&A" },
              { time: "13:00 - 14:30", type: "lunch", title: "Pausa Pranzo" },
            ],
          },
          {
            sessionTitle: "SESSIONE II: PRATICHE DI CONOSCENZA",
            chair: "Session Chair: Ivan Heibi",
            events: [
              {
                time: "14:30 - 14:50",
                type: "talk",
                title:
                  "Understanding questions: natural language queries and knowledge graphs",
                speaker: "Remo Grillo",
                affiliation: "/DH.arc",
                link: "https://youtu.be/lP0rR8P-ntc?si=EeiNEY56Vdf8dYJB"
              },
              {
                time: "14:50 - 15:10",
                type: "talk",
                title:
                  "What’s on the plate? Dutch culinary trends from historical recipes",
                speaker: "Gauri Bhagwat",
                affiliation: "DHLab",
                link: "https://youtu.be/cpAU29DfLFY?si=1dME0YnFplpvtRBV",
              },
              { time: "15:10 - 15:40", type: "break", title: "Pausa Caffè" },
              {
                time: "15:40 - 16:00",
                type: "talk",
                title:
                  "Scholarly Primitives Revisited (again): Building a Taxonomy of Scholarly Digital Objects",
                speaker: "Laurent Fintoni",
                affiliation: "/DH.arc",
                link: "https://youtu.be/s2tOcAakuBw?si=bDdZfDJQpm1PJ9ft"
              },
              {
                time: "16:00 - 16:20",
                type: "talk",
                title:
                  "Tracing the Art Market: A Digital-Semantic Workflow for the Zeri Foundation’s Historical Auction Records (1879-1929)",
                speaker: "Valentina Rossetti, Valentina Pasqual",
                affiliation: "/DH.arc",
                link: "https://youtu.be/ED9BxIcvJgw?si=T3pCdSu8WsmDKrvv"
              },
            ],
          },
          {
            sessionTitle: "SESSIONE III: Dibattito aperto",
            chair: "Debate Chair: Teresa Paccosi",
            events: [
              {
                time: "16:20 - 17:30",
                type: "qa",
                title: "Domande e Discussione Finale",
              },
              { time: "17:30", type: "conclusion", title: "Conclusione" },
            ],
          },
        ],
      },
      {
        dayTitle: "Giorno 3",
        date: "7 Novembre 2025",
        sessions: [
          {
            sessionTitle: "Giornata dei Workshop",
            events: [
              { time: "09:00 - 09:30", type: "welcome", title: "Benvenuto" },
              {
                time: "09:30 - 11:00",
                type: "workshop",
                title: "Workshop: Semantic Annotation with INCEpTION",
                speaker: "A cura di Teresa Paccosi",
              },
              { time: "11:00 - 11:30", type: "break", title: "Pausa Caffè" },
              {
                time: "11:30 - 13:00",
                type: "workshop",
                title:
                  "Workshop: Analyzing multilingual dataset of online book reviews",
                speaker: "A cura di Marijn Koolen, Joris van Zundert",
              },
              {
                time: "13:00 - 13:15",
                type: "conclusion",
                title: "Feedback e Conclusione",
              },
            ],
          },
        ],
      },
    ],
  },
};
