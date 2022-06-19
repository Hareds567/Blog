enum status {
  INPROGRESS = "IN PROGRESS",
  FINISHED = "FINISHED",
}

export interface Anime {
  id: number;
  name: string;
  //   synopsis: string;
  status: status;
}

export const AnimeList: Anime[] = [
  {
    id: 12,
    name: "One Piece",
    status: status.INPROGRESS,
  },
  {
    id: 11209,
    name: "Re:Zero",
    status: status.FINISHED,
  },
  {
    id: 42198,
    name: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season",
    status: status.FINISHED,
  },
  {
    id: 42323,
    name: "Mushoku Tensei",
    status: status.FINISHED,
  },
  {
    id: 43907,
    name: "Mushoko Tensei: Isekai Ittara Honki Dasu Part 2",
    status: status.FINISHED,
  },
  {
    id: 43932,
    name: "Odd Taxi",
    status: status.FINISHED,
  },
  {
    id: 5646,
    name: "Steins;Gate",
    status: status.FINISHED,
  },
  {
    id: 10788,
    name: "Steins;Gate 0",
    status: status.FINISHED,
  },
  {
    id: 42147,
    name: "Beastars",
    status: status.FINISHED,
  },
  {
    id: 7442,
    name: "Attack on Titan",
    status: status.FINISHED,
  },
  {
    id: 8671,
    name: "Attack on Titan 2",
    status: status.FINISHED,
  },
  {
    id: 13569,
    name: "Attack on Titan 3",
    status: status.FINISHED,
  },
  {
    id: 41982,
    name: "Attack on Titan 3 Part 2",
    status: status.FINISHED,
  },
  {
    id: 42422,
    name: "Attack on Titan: The Final Season",
    status: status.FINISHED,
  },
  {
    id: 44240,
    name: "Attack on Titan: The Final Season Part 2",
    status: status.FINISHED,
  },
  {
    id: 45398,
    name: "SPY x FAMILY",
    status: status.INPROGRESS,
  },
  {
    id: 41370,
    name: "Kimetsu no Yaiba",
    status: status.FINISHED,
  },
  {
    id: 11578,
    name: "Mob Psycho 100",
    status: status.FINISHED,
  },
  {
    id: 41071,
    name: "Mob Psycho 100 II",
    status: status.FINISHED,
  },
  {
    id: 41084,
    name: "Vinland Saga",
    status: status.FINISHED,
  },
  {
    id: 42765,
    name: "Jujutsu Kaisen",
    status: status.FINISHED,
  },
  {
    id: 13273,
    name: "Made in Abyss",
    status: status.FINISHED,
  },
  {
    id: 12230,
    name: "Violet Evergarden",
    status: status.FINISHED,
  },
  {
    id: 8403,
    name: "Shigatsu wa Kimi no Uso",
    status: status.FINISHED,
  },
  {
    id: 13615,
    name: "A Place Further Than the Universe",
    status: status.FINISHED,
  },
  {
    id: 41312,
    name: "Yakusoku no Neverland",
    status: status.FINISHED,
  },
  {
    id: 42220,
    name: "Yakusoku no Neverland 2nd Season",
    status: status.FINISHED,
  },
  {
    id: 10740,
    name: "One Punch Man",
    status: status.FINISHED,
  },
  {
    id: 14190,
    name: "Grand Blue",
    status: status.FINISHED,
  },
  {
    id: 115,
    name: "Hunter x Hunter",
    status: status.FINISHED,
  },
  {
    id: 41372,
    name: "Kaze ga Tsuyoku Fuiteiru",
    status: status.FINISHED,
  },
  {
    id: 41024,
    name: "Tensei shitara Slime Datta Ken",
    status: status.FINISHED,
  },
  {
    id: 42196,
    name: "Tensei shitara Slime Datta Ken 2",
    status: status.FINISHED,
  },
  {
    id: 43361,
    name: "Tensei shitara Slime Datta Ken 2nd Season Part 2",
    status: status.FINISHED,
  },
  {
    id: 43211,
    name: "Fumetsu no Anata e",
    status: status.FINISHED,
  },
  {
    id: 45506,
    name: "Paripi Koumei",
    status: status.FINISHED,
  },
  {
    id: 42194,
    name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan",
    status: status.FINISHED,
  },
  {
    id: 44382,
    name: "Sono Bisque Doll wa Koi wo Suru",
    status: status.FINISHED,
  },
  {
    id: 7000,
    name: "Psycho-Pass",
    status: status.FINISHED,
  },
  {
    id: 7863,
    name: "Psycho-Pass 2",
    status: status.FINISHED,
  },
  {
    id: 8147,
    name: "Kiseijuu: Sei no Kakuritsu",
    status: status.FINISHED,
  },
  {
    id: 5981,
    name: "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.",
    status: status.FINISHED,
  },
  {
    id: 6028,
    name: "Fate/Zero",
    status: status.FINISHED,
  },
  {
    id: 7658,
    name: "Fate/Zero 2nd Season",
    status: status.FINISHED,
  },
];
