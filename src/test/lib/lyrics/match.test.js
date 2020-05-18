const utils = require("../../../lib/lyrics/providers/utils");

const tests = [
  [
    "your song ellie goulding",
    "https://www.lyrics.com/lyric/26847304/Ellie+Goulding/Your+Song",
    true,
  ],
  ["your song ellie goulding", "Your Song - Lyrics.com", false],
  [
    "Jassie Gill Keh Gayi Sorry",
    "KEH GAYI SORRY LYRICS - Jassi Gill | Shehnaaz Gill",
    true,
  ],
  ["鄧福如 如果有如果", "如果有如果歌詞鄧福如※ Mojim.com - 魔鏡歌詞", true],
  [
    "GUNGUN - ร้องไห้เพราะคนโง่",
    "เพลง ร้องไห้เพราะคนโง่ Gungun ฟังเพลง MV เพลงร้องไห้เพราะคนโง่",
    true,
  ],
];
describe("match", () => {
  it.each(tests)("%s", async (a, b, expected) => {
    const actual = utils.match(a, b);
    expect(actual).toBe(expected);
  });
});
