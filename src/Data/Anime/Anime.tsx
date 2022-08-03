enum status {
  INPROGRESS = "IN PROGRESS",
  FINISHED = "FINISHED",
}

export interface Anime {
  id: number;
  name: string;
  status: status;
  rating: number;
}
export const findAnimeById = (id: number) => {
  return AnimeList.find((anime) => anime.id == id);
};
export const AnimeList: Anime[] = [
  {
    id: 12,
    name: "One Piece",
    status: status.INPROGRESS,
    rating: 100,
  },
  {
    id: 11209,
    name: "Re:Zero",
    status: status.FINISHED,
    rating: 95,
  },
  {
    id: 42198,
    name: "Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 42323,
    name: "Mushoku Tensei",
    status: status.FINISHED,
    rating: 93,
  },
  {
    id: 43907,
    name: "Mushoko Tensei: Isekai Ittara Honki Dasu Part 2",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 43932,
    name: "Odd Taxi",
    status: status.FINISHED,
    rating: 98,
  },
  {
    id: 5646,
    name: "Steins;Gate",
    status: status.FINISHED,
    rating: 96,
  },
  {
    id: 10788,
    name: "Steins;Gate 0",
    status: status.FINISHED,
    rating: 85,
  },
  {
    id: 42147,
    name: "Beastars",
    status: status.FINISHED,
    rating: 88,
  },
  {
    id: 7442,
    name: "Attack on Titan",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 8671,
    name: "Attack on Titan 2",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 13569,
    name: "Attack on Titan 3",
    status: status.FINISHED,
    rating: 81,
  },
  {
    id: 41982,
    name: "Attack on Titan 3 Part 2",
    status: status.FINISHED,
    rating: 93,
  },
  {
    id: 42422,
    name: "Attack on Titan: The Final Season",
    status: status.FINISHED,
    rating: 94,
  },
  {
    id: 44240,
    name: "Attack on Titan: The Final Season Part 2",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 45398,
    name: "SPY x FAMILY",
    status: status.INPROGRESS,
    rating: 100,
  },
  {
    id: 41370,
    name: "Kimetsu no Yaiba",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 11578,
    name: "Mob Psycho 100",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 41071,
    name: "Mob Psycho 100 II",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 41084,
    name: "Vinland Saga",
    status: status.FINISHED,
    rating: 94,
  },
  {
    id: 42765,
    name: "Jujutsu Kaisen",
    status: status.FINISHED,
    rating: 87,
  },
  {
    id: 13273,
    name: "Made in Abyss",
    status: status.FINISHED,
    rating: 88,
  },
  {
    id: 12230,
    name: "Violet Evergarden",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 8403,
    name: "Shigatsu wa Kimi no Uso",
    status: status.FINISHED,
    rating: 85,
  },
  {
    id: 13615,
    name: "A Place Further Than the Universe",
    status: status.FINISHED,
    rating: 99,
  },
  {
    id: 41312,
    name: "Yakusoku no Neverland",
    status: status.FINISHED,
    rating: 96,
  },
  {
    id: 42220,
    name: "Yakusoku no Neverland 2nd Season",
    status: status.FINISHED,
    rating: 40,
  },
  {
    id: 10740,
    name: "One Punch Man",
    status: status.FINISHED,
    rating: 91,
  },
  {
    id: 14190,
    name: "Grand Blue",
    status: status.FINISHED,
    rating: 95,
  },
  {
    id: 115,
    name: "Hunter x Hunter",
    status: status.FINISHED,
    rating: 95,
  },
  {
    id: 41372,
    name: "Kaze ga Tsuyoku Fuiteiru",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 41024,
    name: "Tensei shitara Slime Datta Ken",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 42196,
    name: "Tensei shitara Slime Datta Ken 2",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 43361,
    name: "Tensei shitara Slime Datta Ken 2nd Season Part 2",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 43211,
    name: "Fumetsu no Anata e",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 45506,
    name: "Paripi Koumei",
    status: status.FINISHED,
    rating: 99,
  },
  {
    id: 44382,
    name: "Sono Bisque Doll wa Koi wo Suru",
    status: status.FINISHED,
    rating: 99,
  },
  {
    id: 7000,
    name: "Psycho-Pass",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 7863,
    name: "Psycho-Pass 2",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 8147,
    name: "Kiseijuu: Sei no Kakuritsu",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 5981,
    name: "Ano Hi Mita Hana no Namae wo Bokutachi wa Mada Shiranai.",
    status: status.FINISHED,
    rating: 100,
  },
  {
    id: 6028,
    name: "Fate/Zero",
    status: status.FINISHED,
    rating: 88,
  },
  {
    id: 7658,
    name: "Fate/Zero 2nd Season",
    status: status.FINISHED,
    rating: 88,
  },
  {
    id: 43849,
    name: "Ousama Ranking",
    status: status.FINISHED,
    rating: 98,
  },
  {
    id: 1376,
    name: "Death Node",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 9969,
    name: "Death Parade",
    status: status.FINISHED,
    rating: 75,
  },
  {
    id: 42080,
    name: "Dr. Stone",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 42867,
    name: "Dr.Stone: Stone Wars",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 41056,
    name: "Seishun Buta Yarou wa Bunny Girl Senpai no Yume wo Minai",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 6109,
    name: "Gyakkyou Burai Kaiji: Hakairoku-hen",
    status: status.INPROGRESS,
    rating: 80,
  },
  {
    id: 43066,
    name: "86",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 44398,
    name: "86 Part 2",
    status: status.FINISHED,
    rating: 92,
  },
  {
    id: 13949,
    name: "Megalo Box",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 42720,
    name: "Megalo Box 2",
    status: status.FINISHED,
    rating: 95,
  },
  {
    id: 43545,
    name: "Horimiya",
    status: status.FINISHED,
    rating: 85,
  },
  {
    id: 11,
    name: "Naruto",
    status: status.FINISHED,
    rating: 89,
  },
  {
    id: 1555,
    name: "Naruto: Shippuden",
    status: status.FINISHED,
    rating: 88,
  },
  {
    id: 11339,
    name: "Bungou Stray Dogs",
    status: status.FINISHED,
    rating: 75,
  },
  {
    id: 11882,
    name: "Bungou Stray Dogs 2nd Season",
    status: status.FINISHED,
    rating: 75,
  },
  {
    id: 41984,
    name: "Bungou Stray Dogs 3",
    status: status.FINISHED,
    rating: 75,
  },
  {
    id: 13597,
    name: "Shoujo Shuumatsu Ryokou",
    status: status.FINISHED,
    rating: 60,
  },
  {
    id: 9967,
    name: "Shokugeki no Souma",
    status: status.FINISHED,
    rating: 85,
  },
  {
    id: 11612,
    name: "Shokugeki no Souma: Ni no Sara",
    status: status.FINISHED,
    rating: 80,
  },
  {
    id: 13581,
    name: "Shokugeki no Souma: San no Sara",
    status: status.FINISHED,
    rating: 60,
  },
  {
    id: 14092,
    name: "Shokugeki no Souma: San no Sara - Toutsuki Ressha-hen",
    status: status.FINISHED,
    rating: 60,
  },
  {
    id: 199,
    name: "Dragon Ball",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 720,
    name: "Dragon Ball Z",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 200,
    name: "Dragon Ball GT",
    status: status.FINISHED,
    rating: 50,
  },
  {
    id: 10879,
    name: "Dragon Ball Super",
    status: status.FINISHED,
    rating: 60,
  },
  {
    id: 13209,
    name: "Black Clover",
    status: status.FINISHED,
    rating: 85,
  },
  {
    id: 10941,
    name: "Kono Subarashii Sekai ni Shukufuku wo!",
    status: status.FINISHED,
    rating: 86,
  },
  {
    id: 11937,
    name: "Kono Subarashii Sekai ni Shukufuku wo! 2",
    status: status.FINISHED,
    rating: 87,
  },
  {
    id: 43321,
    name: "Tokyo Revengers",
    status: status.FINISHED,
    rating: 84,
  },
  {
    id: 7880,
    name: "No Game No Life",
    status: status.FINISHED,
    rating: 84,
  },
  {
    id: 7023,
    name: "Sakura-sou no Pet na Kanojo",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 6686,
    name: "Hyouka",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 4604,
    name: "Angel Beats!",
    status: status.FINISHED,
    rating: 88,
  },
  {
    id: 5330,
    name: "Gosick",
    status: status.INPROGRESS,
    rating: 70,
  },
  {
    id: 43595,
    name: "SK8",
    status: status.FINISHED,
    rating: 85,
  },
  {
    id: 41459,
    name: "Zombieland Saga",
    status: status.INPROGRESS,
    rating: 70,
  },
  {
    id: 8648,
    name: "Akatsuki no Yona",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 8093,
    name: "Baby Steps",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 9142,
    name: "Baby Steps 2nd Season",
    status: status.FINISHED,
    rating: 90,
  },
  {
    id: 44551,
    name: "Komi-san wa, Komyushou desu.",
    status: status.INPROGRESS,
    rating: 70,
  },
  {
    id: 13593,
    name: "Tate no Yuusha no Nariagari",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 42530,
    name: "Tate no Yuusha no Nariagari 2",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 13485,
    name: "Uma Musume: Pretty Derby",
    status: status.INPROGRESS,
    rating: 70,
  },
  {
    id: 7169,
    name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru.",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 8478,
    name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Zoku",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 42194,
    name: "Yahari Ore no Seishun Love Comedy wa Machigatteiru. Kan",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 1962,
    name: "Clannad",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 3505,
    name: "Clannad: After Story",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 42722,
    name: "Kakushigoto (TV)",
    status: status.INPROGRESS,
    rating: 70,
  },
  {
    id: 7370,
    name: "Nagi no Asu kara",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 7881,
    name: "Noragami",
    status: status.FINISHED,
    rating: 70,
  },
  {
    id: 10800,
    name: "Noragami Aragoto",
    status: status.FINISHED,
    rating: 70,
  },
];
