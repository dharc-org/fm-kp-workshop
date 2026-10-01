export const seminarData = {
  en: {
    title: "Oral Data, FAIR-ness, and DH",
    subtitle: [
      { text: "ethical, methodological, and technological challenges", styles: ["italic", "font-bold"] },
    ],
    date: "October 28th-29th 2026",
    location: "Aula Affreschi, Via Zamboni 34, 40126 Bologna",
    introductoryText: [
      [
        { text: "A two-day workshop exploring the challenges and opportunities of using oral data in research. From collection to dissemination according to FAIR principles, experts and researchers will share experiences, methodologies, and best practices for the management, preservation, and reuse of oral sources."
        },
      ],
      [
        { text: "Participation in person or online is " },
        { text: "free", styles: ["font-bold"] },
        { text: " and open to all. The event will be streamed via Teams." },
      ],
    ],
    registration: {
      buttonText: "Register to attend",
      doiUrl: "https://forms.cloud.microsoft/e/tpyqx77Z3L"
    },
    about: {
      title: "About",
      description: [
        // Paragrafo 1 
        [
          {
            text: "Oral data constitute a valuable resource for a wide range of research fields, from Digital Humanities and oral history to linguistics, sociology, anthropology, media studies, and memory studies. Their use nevertheless raises several methodological, technical, and ethical issues that call for dialogue across different disciplinary perspectives.",
          },
        ],
        // Paragrafo 2
        [
          {
            text: "One of the central challenges concerns the possibility of making such data FAIR and accessible to as broad a research community as possible, while at the same time complying with requirements relating to privacy, personal data protection, and copyright. In the case of oral data, the tension between privacy and accessibility is particularly evident: on the one hand, the voice itself constitutes potentially identifiable personal information; on the other, it is an essential element of research in a number of fields.",
          },
        ],
        // Paragrafo 3 (semplice, solo testo)
        [
          {
            text: "A further challenge concerns the use of automated and generative technologies to facilitate the study, management, and dissemination of oral data. In particular, automatic transcription can make oral content more accessible and amenable to analysis, but it often entails processes of normalization that risk attenuating or eliminating elements that are relevant to research, such as non-standard linguistic varieties, features of spontaneous speech, and phenomena associated with multilingual contexts.",
          },
        ],
        // Paragrafo 4 (semplice)
        [
          {
            text: "Against this background, the workshop provides a forum for exchange among researchers, professionals, and students who, through different methodological approaches and operational practices, engage with the challenges involved in the collection, transcription, annotation, management, preservation, and sharing of oral data.",
          },
        ],
        // Paragrafo 5 (complesso, con link e corsivo)
        [
          {
            text: "Through project presentations, workshops, and roundtable discussions, the event brings together experiences from different disciplinary and institutional contexts, with particular attention to the use of Digital Humanities approaches and to the ethical and legal issues involved in the treatment of oral sources. The workshop aims to foster the exchange of experiences, solutions, and best practices that can support the research community in the responsible, informed, and effective management of oral data, while promoting their preservation, accessibility, and reuse."
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
          { text: " as well as the support of OSCARS and Alma Mater Studiorum - Università di Bologna. " },
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
      committee: [
        { name: "Silvia Ballarè", affiliation: "University of Bologna", role: "", isProfessor: false },
        { name: "Giuliana Benvenuti", affiliation: "University of Bologna", role: "", isProfessor: false },
        { name: "Nike Francesca Del Quercio", affiliation: "University of Bologna", role: "", isProfessor: false },
        { name: "Laurent Fintoni", affiliation: "University of Bologna", role: "", isProfessor: false },
        { name: "Nicola Grandi", affiliation: "University of Bologna", role: "", isProfessor: false },
        { name: "Stephen Gundle", affiliation: "University of Warwick", role: "", isProfessor: false },
        { name: "Costanza Paolillo", affiliation: "University of Bologna", role: "", isProfessor: false },
        { name: "Silvio Peroni", affiliation: "University of Bologna", role: "", isProfessor: false },
        { name: "Francesca Tomasi", affiliation: "University of Bologna", role: "", isProfessor: false },
      ],
      contact: {
        title: "Contact",
        emailLabel: "Email:",
        email: "laurent.fintoni2@unibo.it", 
        infoText: "For more information, visit",
        infoLinkText: "Bologna DH ecosystem.",
        infoLinkHref: "https://dharc-org.github.io/boldh/",
      },
      venue: {
        title: "Venue",
        lines: [
          "28-29 October 2026",
          "Aula Affreschi, Via Zamboni 34",
          "40126 Bologna, Italy",
        ],
      },
      funding: [
        { text: "This event is supported by " },
        { text: "OSCARS", styles: ["font-bold"], href: "https://www.oscars-project.eu/" },
        { text: " and by " },
        { text: "Alma Mater Studiorum - University of Bologna", href: "https://ficlit.unibo.it/it" },
        { text: "." },
      ],
      copyrightText: "/DH.arc — code MIT, content CC BY 4.0.",
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
            chair: "",
            events: [
              {
                time: "10:30 - 10:50",
                type: "talk",
                title:
                  "FAIR Memories project",
                speaker: "Nike Francesca Del Quercio, Costanza Paolillo",
                affiliation: "University of Bologna, FICLIT",
              },
              {
                time: "10:50 - 11:10",
                type: "talk",
                title: "KiParla project",
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
            chair: "",
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
                title: "DH Workshop: Transcription and Annotation - Tools & Best Practices",
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
            chair: "",
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
                speaker: "Silvia Calamai, Jacopo Lorenzini, Toni Rovatti, Daniela Mereu",
                affiliation: "University of Siena, University of Turin",
              },
              { time: "12:30 - 13:00", type: "conclusion", title: "Closing Remarks" },
            ],
          },
        ],
      },
    ],
  },
  it: {
    title: "Dati Orali, FAIR-ness, e DH",
    subtitle: [
      { text: "sfide etiche, metodologiche e tecnologiche", styles: ["italic", "font-bold"] },
    ],
    date: "28-29 Ottobre 2026",
    location: "Aula Affreschi, Via Zamboni 34, 40126 Bologna",
    introductoryText: [
      [
        { text: "Un workshop di due giorni sulle sfide e le opportunità legate all’uso dei dati orali nella ricerca. Dalla raccolta alla diffusione secondo i principi FAIR, esperti e ricercatori condivideranno esperienze, metodologie e buone pratiche per la gestione, conservazione e riuso delle fonti orali." },
      ],
      [
        { text: "La partecipazione in persona o da remoto è " },
        { text: "gratuita", styles: ["font-bold"] },
        { text: " e aperta a tutti. L'evento sarà trasmesso in streaming via Teams." },
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
            text: "I dati orali costituiscono una risorsa preziosa per numerosi ambiti di ricerca, dalle Digital Humanities alla storia orale, dalla linguistica alla sociologia, dall’antropologia ai media e memory studies. Il loro utilizzo pone tuttavia una serie di questioni metodologiche, tecniche ed etiche che mettono in dialogo prospettive disciplinari diverse.",
          },
        ],
        // Paragrafo 2 (complesso, con link e corsivo)
        [
          {
            text: "Uno dei nodi centrali riguarda la possibilità di rendere tali dati FAIR e accessibili a una comunità scientifica il più ampia possibile, nel rispetto al contempo dei vincoli relativi alla privacy, alla protezione dei dati personali e al copyright. Nel caso dei dati parlati, la tenzione tra privacy e accessibilità è particolarmente evidente perché la voce rappresenta da un lato un dato personale potenzialmente identificativo dall’altro è un elemento essenziale per diversi ambiti della ricerca.",
          },
        ],
        // Paragrafo 3 (semplice, solo testo)
        [
          {
            text: "Un ulteriore sfida riguarda l’impiego di tecnologie automatiche e generative per facilitare lo studio, la gestione e la condivisione dei dati. In particolare, la trascrizione automatica può rendere i contenuti orali più facilmente accessibili e trattabili, ma spesso attua processi di normalizzazione che rischiano di attenuare o eliminare elementi rilevanti per l’analisi, come varietà linguistiche non standard, caratteristiche del parlato spontaneo e fenomeni legati ai contesti multilingui.",
          },
        ],
        // Paragrafo 4 (semplice)
        [
          {
            text: "A partire da queste e da altre questioni, il workshop propone uno spazio di confronto tra ricercatrici e ricercatori, professionisti e studenti che, attraverso approcci metodologici e pratiche operative differenti, si confrontano con le sfide poste dalla raccolta, dalla trascrizione, dall’annotazione, dalla gestione, dalla conservazione e dalla condivisione dei dati orali.",
          },
        ],
        // Paragrafo 5 (complesso, con link e corsivo)
        [
          {
            text: "Attraverso la presentazione di progetti, laboratori e tavole rotonde, il workshop mette in dialogo esperienze provenienti da diversi ambiti disciplinari e istituzionali, con particolare attenzione all’uso delle Digital Humanities e alle questioni etiche e giuridiche nel trattamento delle fonti orali. L’obiettivo è favorire la condivisione di esperienze, soluzioni e buone pratiche che possano sostenere la comunità scientifica nella gestione responsabile, consapevole ed efficace dei dati orali, promuovendone al tempo stesso la conservazione, l’accessibilità e il riuso."
          }
        ],
        [
          {
            text: "Il workshop è organizzato da Silvia Ballarè, Nike F. Del Quercio, Laurent A. Fintoni e Costanza Paolillo, in collaborazione con",
          },
          {
            text: " BolDH - Bologna Digital Humanities ecosystem",
            href: "https://dharc-org.github.io/boldh/",
          },
          { text: " e" },
          {
            text: " /DH.arc - Digital Humanities Research Center of the University of Bologna",
            styles: ["italic"],
            href: "https://site.unibo.it/dharc/en",
          },
          { text: " e il supporto di OSCARS e Alma Mater Studiorum - Università di Bologna. " },
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
      committee: [
        { name: "Silvia Ballarè", affiliation: "Università di Bologna", role: "", isProfessor: false },
        { name: "Giuliana Benvenuti", affiliation: "Università di Bologna", role: "", isProfessor: false },
        { name: "Nike Francesca Del Quercio", affiliation: "Università di Bologna", role: "", isProfessor: false },
        { name: "Laurent Fintoni", affiliation: "Università di Bologna", role: "", isProfessor: false },
        { name: "Nicola Grandi", affiliation: "Università di Bologna", role: "", isProfessor: false },
        { name: "Stephen Gundle", affiliation: "University of Warwick", role: "", isProfessor: false },
        { name: "Costanza Paolillo", affiliation: "Università di Bologna", role: "", isProfessor: false },
        { name: "Silvio Peroni", affiliation: "Università di Bologna", role: "", isProfessor: false },
        { name: "Francesca Tomasi", affiliation: "Università di Bologna", role: "", isProfessor: false },
      ],
      contact: {
        title: "Conttati",
        emailLabel: "Email:",
        email: "laurent.fintoni2@unibo.it",
        infoText: "Per ulteriori informazioni, visita",
        infoLinkText: "Bologna DH ecosystem.",
        infoLinkHref: "https://dharc-org.github.io/boldh/",
      },
      venue: {
        title: "Sede",
        lines: [
          "28-29 Ottobre 2026",
          "Aula Affreschi, Via Zamboni 34",
          "40126 Bologna, Italia",
        ],
      },
      funding: [
        { text: "L'evento è patrocinato da " },
        { text: "OSCARS", styles: ["font-bold"], href: "https://www.oscars-project.eu/" },
        { text: " e da " },
        { text: "Alma Mater Studiorum - Università di Bologna", href: "https://ficlit.unibo.it/it" },
        { text: "." },
      ],
      copyrightText: "/DH.arc — code MIT, content CC BY 4.0.",
    },
    schedule: [
      {
        dayTitle: "Giorno 1",
        date: "Ottobre 28, 2026",
        sessions: [
          {
            sessionTitle: "Benvenuto",
            events: [
              { time: "10:00 - 10:30", 
                type: "welcome", 
                title: "Benvenuto", 
                speaker: "Nicola Grandi, Francesca Tomasi, Giuliana Benvenuti"
              },
            ],
          },
          {
            sessionTitle: "SESSION I: PROGETTI SUI DATI ORALI A BOLOGNA",
            chair: "",
            events: [
              {
                time: "10:30 - 10:50",
                type: "talk",
                title:
                  "Progetto FAIR Memories project",
                speaker: "Nike Francesca Del Quercio, Costanza Paolillo",
                affiliation: "Università di Bologna, FICLIT",
              },
              {
                time: "10:50 - 11:10",
                type: "talk",
                title: "Progetto KiParla",
                speaker: "Silvia Ballarè, Caterina Mauri",
                affiliation: "Università di Bologna, FICLIT",
              },
              {
                time: "11:10 - 11:30",
                type: "talk",
                title:
                  "Le Donne del Cinema Italiano",
                speaker: "Michela Zegna",
                affiliation: "Cineteca di Bologna",
              },
              {
                time: "11:30 - 11:50",
                type: "talk",
                title:
                  "Progetto Bologna anni '90",
                speaker: "Jacopo Lorenzini, Toni Rovatti",
                affiliation: "Università di Bologna, MemoryLab",
              },
              { time: "11:50 - 12:30", type: "qa", title: "Q&A" },
              { time: "12:30 - 14:00", type: "lunch", title: "Pausa Pranzo" },
            ],
          },
          {
            sessionTitle:
              "SESSION II: LE DH AL CROCEVIA DEI DATI ORALI",
            chair: "",
            events: [
              {
                time: "14:00 - 14:20",
                type: "talk",
                title:
                  "K-OAr: il Centro di Conoscenza CLARIN per gli archivi orali",
                speaker: "Silvia Calamai",
                affiliation: "Università di Siena",
              },
              {
                time: "14:20 - 14:40",
                type: "talk",
                title:
                  "Fonti orali e ricerca linguistica: l’italiano regionale torinese nel Fondo Giorgina Levi Arian",
                speaker: "Daniela Mereu",
                affiliation: "Università di Torino",
              },
              {
                time: "14:40 - 15:00",
                type: "talk",
                title:
                  "Dalla storia orale agli archivi orali (e viceversa): esperienze di ricerca",
                speaker: "Alessandro Casellato",
                affiliation: "Università Ca’ Foscari di Venezia",
              },
              {
                time: "15:00 - 15:20",
                type: "talk",
                title:
                  "Nell'archivio ibrido, tra oralità e scritture",
                speaker: "Emmanuela Carbè",
                affiliation: "Università Ca’ Foscari di Venezia",
              },
              { time: "15:20 - 16:00", type: "qa", title: "Q&A" },
              { time: "16:00 - 16:30", type: "break", title: "Pausa Caffè" },
            ],
          },
          {
            sessionTitle: "SESSION III: Workshop",
            events: [
              {
                time: "16:30 - 18:00",
                type: "workshop",
                curator: "Silvia Ballarè, Laurent Fintoni",
                title: "Laboratorio DH: Trascrizione e annotazione: strumenti e buone pratiche",
              },
              { time: "18:00", type: "conclusion", title: "End" },
            ],
          },
        ],
      },
      {
        dayTitle: "Giorno 2",
        date: "Ottobre 29, 2026",
        sessions: [
          {
            sessionTitle: "SESSION IV: TAVOLE ROTONDE INTERDISCIPLINARI",
            chair: "",
            events: [
              {
                time: "09:00 - 10:30",
                type: "roundtable",
                title:
                  "Problemi etici e legali nel trattamento dei dati orali",
                speaker: "Marco Dettori, Francesca Masini, Eugenio Goria, Lottie Provost",
                affiliation: "Università di Bologna, Università di Torino, ILC-CNR",
              },
              { time: "10:30 - 11:00", type: "break", title: "Coffee Break" },
              {
                time: "11:00 - 12:30",
                type: "roundtable",
                title:
                  "Archiviare, trattare e condividere i dati orali: un dialogo interdisciplinare",
                speaker: "Silvia Calamai, Jacopo Lorenzini, Toni Rovatti, Daniela Mereu",
                affiliation: "Università di Bologna, Università di Siena, Università di Torino",
              },
              { time: "12:30 - 13:00", type: "conclusion", title: "Saluti Finali" },
            ],
          },
        ],
      },
    ],
  },
};
