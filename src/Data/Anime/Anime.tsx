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
  {
    id: 43849,
    name: "Ousama Ranking",
    status: status.FINISHED,
  },
  {
    id: 1376,
    name: "Death Node",
    status: status.FINISHED,
  },
  {
    id: 9969,
    name: "Death Parade",
    status: status.FINISHED,
  },
  {
    id: 42080,
    name: "Dr. Stone",
    status: status.FINISHED,
  },
  {
    id: 42867,
    name: "Dr.Stone: Stone Wars",
    status: status.FINISHED,
  },
  {
    id: 41056,
    name: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
    status: status.FINISHED,
  },
  {
    id: 6109,
    name: "Gyakkyou Burai Kaiji: Hakairoku-hen",
    status: status.INPROGRESS,
  },
  {
    id: 43066,
    name: "86",
    status: status.FINISHED,
  },
  {
    id: 44398,
    name: "86 Part 2",
    status: status.FINISHED,
  },
  {
    id: 13949,
    name: "Megalo Box",
    status: status.FINISHED,
  },
  {
    id: 42720,
    name: "Megalo Box 2",
    status: status.FINISHED,
  },
  {
    id: 43545,
    name: "Horimiya",
    status: status.FINISHED,
  },
  {
    id: 11,
    name: "Naruto",
    status: status.FINISHED,
  },
  {
    id: 1555,
    name: "Naruto: Shippuden",
    status: status.FINISHED,
  },
  {
    id: 11339,
    name: "Bungou Stray Dogs",
    status: status.FINISHED,
  },
  {
    id: 11882,
    name: "Bungou Stray Dogs 2nd Season",
    status: status.FINISHED,
  },
  {
    id: 41984,
    name: "Bungou Stray Dogs 3",
    status: status.FINISHED,
  },
  {
    id: 13597,
    name: "Shoujo Shuumatsu Ryokou",
    status: status.FINISHED,
  },
  {
    id: 9967,
    name: "Shokugeki no Souma",
    status: status.FINISHED,
  },
  {
    id: 11612,
    name: "Shokugeki no Souma: Ni no Sara",
    status: status.FINISHED,
  },
  {
    id: 13581,
    name: "Shokugeki no Souma: San no Sara",
    status: status.FINISHED,
  },
  {
    id: 14092,
    name: "Shokugeki no Souma: San no Sara - Toutsuki Ressha-hen",
    status: status.FINISHED,
  },
  {
    id: 199,
    name: "Dragon Ball",
    status: status.FINISHED,
  },
  {
    id: 720,
    name: "Dragon Ball Z",
    status: status.FINISHED,
  },
  {
    id: 200,
    name: "Dragon Ball GT",
    status: status.FINISHED,
  },
  {
    id: 10879,
    name: "Dragon Ball Super",
    status: status.FINISHED,
  },
  {
    id: 13209,
    name: "Black Clover",
    status: status.FINISHED,
  },
  {
    id: 10941,
    name: "Kono Subarashii Sekai ni Shukufuku wo!",
    status: status.FINISHED,
  },
  {
    id: 11937,
    name: "Kono Subarashii Sekai ni Shukufuku wo! 2",
    status: status.FINISHED,
  },
  {
    id: 43321,
    name: "Tokyo Revengers",
    status: status.FINISHED,
  },
  {
    id: 7880,
    name: "No Game No Life",
    status: status.FINISHED,
  },
  {
    id: 7023,
    name: "Sakura-sou no Pet na Kanojo",
    status: status.FINISHED,
  },
  {
    id: 6686,
    name: "Hyouka",
    status: status.FINISHED,
  },
  {
    id: 4604,
    name: "Angel Beats!",
    status: status.FINISHED,
  },
  {
    id: 5330,
    name: "Gosick",
    status: status.INPROGRESS,
  },
  {
    id: 43595,
    name: "SK8",
    status: status.FINISHED,
  },
  {
    id: 41459,
    name: "Zombieland Saga",
    status: status.INPROGRESS,
  },
  {
    id: 8648,
    name: "Akatsuki no Yona",
    status: status.FINISHED,
  },
  {
    id: 8093,
    name: "Baby Steps",
    status: status.FINISHED,
  },
  {
    id: 9142,
    name: "Baby Steps 2nd Season",
    status: status.FINISHED,
  },
  {
    id: 44551,
    name: "Komi-san wa, Komyushou desu.",
    status: status.INPROGRESS,
  },
  {
    id: 13593,
    name: "Tate no Yuusha no Nariagari",
    status: status.FINISHED,
  },
  {
    id: 42530,
    name: "Tate no Yuusha no Nariagari 2",
    status: status.FINISHED,
  },
  {
    id: 13485,
    name: "Uma Musume: Pretty Derby",
    status: status.INPROGRESS,
  },
  {
    id: 7169,
    name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru.",
    status: status.FINISHED,
  },
  {
    id: 8478,
    name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku",
    status: status.FINISHED,
  },
  {
    id: 42194,
    name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan",
    status: status.FINISHED,
  },
  {
    id: 1962,
    name: "Clannad",
    status: status.FINISHED,
  },
  {
    id: 3505,
    name: "Clannad: After Story",
    status: status.FINISHED,
  },
  {
    id: 42722,
    name: "Kakushigoto (TV)",
    status: status.INPROGRESS,
  },
  {
    id: 7370,
    name: "Nagi no Asu kara",
    status: status.FINISHED,
  },
  {
    id: 7881,
    name: "Noragami",
    status: status.FINISHED,
  },
  {
    id: 10800,
    name: "Noragami Aragoto",
    status: status.FINISHED,
  },
];
