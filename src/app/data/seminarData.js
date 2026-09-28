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
      committee: [
        { name: "Silvia Ballarè", affiliation: "University of Bologna", role: "Member", isProfessor: true },
        { name: "Giuliana Benvenuti", affiliation: "University of Bologna", role: "Member", isProfessor: true },
        { name: "Nike Francesca Del Quercio", affiliation: "University of Bologna", role: "Member", isProfessor: false },
        { name: "Laurent Fintoni", affiliation: "University of Bologna", role: "Member", isProfessor: false },
        { name: "Nicola Grandi", affiliation: "University of Bologna", role: "Member", isProfessor: false },
        { name: "Stephen Gundle", affiliation: "University of Warwick", role: "Member", isProfessor: true },
        { name: "Costanza Paolillo", affiliation: "University of Bologna", role: "Member", isProfessor: false },
        { name: "Silvio Peroni", affiliation: "University of Bologna", role: "Member", isProfessor: true },
        { name: "Francesca Tomasi", affiliation: "University of Bologna", role: "Supervisor", isProfessor: true },
      ],
      contact: {
        title: "Contact",
        emailLabel: "Email:",
        email: "know.land.unibo@gmail.com",
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
      copyrightText: "/DH.arc & DHLab Seminar — code MIT, content CC BY 4.0.",
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
      title: "Programma",
    },
    sectionLabels: {
      program: "Programma",
      about: "Informazioni",
      researchCenters: "Progetti",
      committee: "Comitato Organizzatore",
    },
    footer: {
      // NOTE: committee / contact / venue below are English placeholders (there was
      // no Italian version before) — translate as needed.
      committee: [
        { name: "Silvia Ballarè", affiliation: "University of Bologna", role: "Member", isProfessor: true },
        { name: "Giuliana Benvenuti", affiliation: "University of Bologna", role: "Member", isProfessor: true },
        { name: "Nike Francesca Del Quercio", affiliation: "University of Bologna", role: "Member", isProfessor: false },
        { name: "Laurent Fintoni", affiliation: "University of Bologna", role: "Member", isProfessor: false },
        { name: "Nicola Grandi", affiliation: "University of Bologna", role: "Member", isProfessor: false },
        { name: "Stephen Gundle", affiliation: "University of Warwick", role: "Member", isProfessor: true },
        { name: "Costanza Paolillo", affiliation: "University of Bologna", role: "Member", isProfessor: false },
        { name: "Silvio Peroni", affiliation: "University of Bologna", role: "Member", isProfessor: true },
        { name: "Francesca Tomasi", affiliation: "University of Bologna", role: "Supervisor", isProfessor: true },
      ],
      contact: {
        title: "Contact",
        emailLabel: "Email:",
        email: "know.land.unibo@gmail.com",
        infoText: "For more information, visit",
        infoLinkText: "Bologna DH ecosystem",
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
        { text: "L'evento è finanziato da " },
        { text: "Fondazione Carisbo", styles: ["font-bold"] },
        { text: " attraverso il bando " },
        { text: "Cultura e Rigenerazione 2025", href: "https://fondazionecarisbo.it/bandi-e-iniziative/cultura-e-rigenerazione/" },
        { text: " e da " },
        { text: "Alma Mater Studiorum - Università di Bologna", href: "https://ficlit.unibo.it/it" },
        { text: "." },
      ],
      copyrightText: "/DH.arc & DHLab Seminar — code MIT, content CC BY 4.0.",
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
            chair: "Session Chair: TK",
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
            chair: "Session Chair: TBC",
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
            chair: "Session Chair: TK",
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
                speaker: "Francesca Tomasi, Silvia Calamai, Jacopo Lorenzi, Toni Rovatti, Daniela Mereu",
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
