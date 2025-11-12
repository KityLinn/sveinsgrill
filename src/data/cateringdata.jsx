export const category = ['HOVEDRETTER', 'SNITTER', 'DESSERTER', 'KAKER', 'VANLIG KOLDTBORD', 'KOLDTBORD DE LUX M/SPEKEFAT', 'KOLDTBORD DE LUXE']

export const hovedretterdata = [
  {
    navn: 'HOVEDRETTER',
    items: [
      {
        navn: 'Reinsdyrstek',
        info: 'med poteter, gulrøtter, rosenkål, viltsaus og rørte tyttebær',
        pris: 299,
        allergener: [1, 9],
      },
      {
        navn: 'Svinestek',
        info: 'med surkål, grønnsaker, poteter, saus og svisker',
        pris: 259,
        allergener: [1, 9, 11],
      },
      {
        navn: 'Røkt svinebog',
        info: 'med surkål, grønnsaker, poteter og rødvinssaus',
        pris: 269,
        allergener: [1, 9],
      },
      {
        navn: 'Røkt svinekam',
        info: 'med champignon, gulrøtter, aspargesbønner, poteter og saus',
        pris: 269,
        allergener: [1, 9],
      },
      {
        navn: 'Kalvestek',
        info: 'med poteter, babygulrøtter, erter og champignonsaus',
        pris: 279,
        allergener: [11],
      },
      {
        navn: 'Lammestek',
        info: 'med poteter, saus, babygulrøtter og blomkål',
        pris: 299,
        allergener: [1, 9],
      },
      {
        navn: 'Sosekjøtt av lam',
        info: 'med grønnsaker, poteter og rørte tyttebær',
        pris: 279,
        allergener: [1, 9],
      },
      {
        navn: 'Raspeballer',
        info: 'med saltkjøtt, vossakorv, kålrabistappe og poteter',
        pris: 240,
        allergener: [1, 8, 11],
      },
      {
        navn: 'Viltgryte',
        info: 'med rosenkål, gulrøtter og poteter',
        pris: 270,
        allergener: [1, 7, 8, 11],
      },
      {
        navn: 'Lapskaus',
        info: 'med flatbrød og smør',
        pris: 165,
        allergener: [9],
      },
      {
        navn: 'Gryterett',
        info: 'med ris, salat og brød med smør',
        pris: 230,
        allergener: [1, 7, 8, 11],
      },
      {
        navn: 'Avkokt laks',
        info: 'med poteter, agurksalat og rømme',
        pris: 245,
        allergener: [6, 8],
      },
      {
        navn: 'Sosekjøtt',
        info: 'med poteter og grønnsaker',
        pris: 260,
        allergener: [1, 9],
      },
      {
        navn: 'Betasuppe',
        info: 'med urtebrød',
        pris: 180,
        allergener: [1, 9, 14],
      },
      {
        navn: 'Fiskesuppe',
        info: 'med fisk, boller og urtebrød',
        pris: 180,
        allergener: [1, 5, 6, 8, 9],
      },
    ],
  },
];

export const snitterdata = [
  {
    navn: 'SNITTER',
    items: [
      {
        navn: 'Baguetter 90g',
        info: 'med reker eller ost og skinke med salat',
        pris: 70,
        allergener: [1, 4, 8],
      },
      {
        navn: 'Baguetter 140g',
        info: 'med reker eller ost og skinke med salat',
        pris: 95,
        allergener: [1, 4, 8],
      },
      {
        navn: 'Rekesmørbrød',
        info: 'med ferske reker og majones',
        pris: 140,
        allergener: [4, 5, 8],
      },
      {
        navn: 'Luxussnitter',
        info: 'med reker, røkelaks, roastbiff, svinestek og danskerull',
        pris: 49,
        allergener: [1, 4, 5, 8],
      },
      {
        navn: 'Rundstykker',
        info: 'med skinke og ost, reker, roastbiff',
        pris: 49,
        allergener: [1, 5, 8],
      },
      {
        navn: 'Karbonadesmørbrød',
        info: 'varme smørbrød toppet med stekt løk',
        pris: 110,
        allergener: [1, 5],
      },
      {
        navn: 'Kanapéer',
        info: 'munnfullstore kanapéer med diverse pålegg',
        pris: 50,
        allergener: [1, 4, 6, 8],
      },
    ],
  },
];
export const dessertdata = [
  {
    navn: 'DESSERTER',
    items: [
      {
        navn: 'Is',
        info: 'med bjørnebær',
        pris: 120,
        allergener: [8],
      },
      {
        navn: 'Fruktsalat',
        info: 'med krem',
        pris: 125,
        allergener: [8],
      },
      {
        navn: 'Multekrem',
        info: 'tradisjonell krem med multer',
        pris: 140,
        allergener: [8],
      },
      {
        navn: 'Crème brûlée',
        info: 'krempudding med smak av fersk vanilje',
        pris: 110,
        allergener: [1, 5, 8, 11],
      },
      {
        navn: 'Sitronfromasj',
        info: 'kremet fromasj av sitron',
        pris: 90,
        allergener: [8],
      },
      {
        navn: 'Sjokoladefromasj',
        info: 'kremet fromasj av sjokolade',
        pris: 90,
        allergener: [3, 5, 8, 11],
      },
      {
        navn: 'Karamellfromasj',
        info: 'kremet fromasj av karamell',
        pris: 90,
        allergener: [8],
      },
    ],
  },
];
export const kakerdata = {
  navn: "KAKER",
  items: [
    {
      navn: "Fløtekake",
      allergener: [1, 5],
      info: [
        { porsjoner: 15, pris: 950 },
        { porsjoner: 20, pris: 1090 },
      ],
    },
    {
      navn: "Jordbærkake",
      allergener: [1, 5],
      info: [{ porsjoner: 15, pris: 1090 }],
    },
    {
      navn: "Sitronkake",
      allergener: [1, 5],
      info: [{ porsjoner: 15, pris: 890 }],
    },
    {
      navn: "Sjokoladekake",
      allergener: [1, 5],
      info: [{ porsjoner: 20, pris: 1090 }],
    },
    {
      navn: "Hjertekake",
      allergener: [1, 5],
      info: [
        { porsjoner: 6, pris: 487 },
        { porsjoner: 20, pris: 1490 },
      ],
    },
    {
      navn: "Kransekake",
      allergener: [1, 5],
      info: [{ beskrivelse: "Med 24 ringer", pris: 995 }],
    },
    {
      navn: "Hvit dame",
      allergener: [1, 5],
      info: [
        { porsjoner: 15, pris: 1100 },
        { porsjoner: 20, pris: 1400 },
        { tillegg: "Tilleg for makronbunn", pris: 100 },
      ],
    },
  ],
};