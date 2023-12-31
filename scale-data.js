// --------------
// SCALE INDEXING
// --------------
// 0   C  Major | 12  C  Minor | 24  C  Harm. Minor | 36  C  Mel. Minor |
// 1   C# Major | 13  C# Minor | 25  C# Harm. Minor | 37  C# Mel. Minor |
// 2   D  Major | 14  D  Minor | 26  D  Harm. Minor | 38  D  Mel. Minor |
// 3   D# Major | 15  D# Minor | 27  D# Harm. Minor | 39  D# Mel. Minor |
// 4   E  Major | 16  E  Minor | 28  E  Harm. Minor | 40  E  Mel. Minor |
// 5   F  Major | 17  F  Minor | 29  F  Harm. Minor | 41  F  Mel. Minor |
// 6   F# Major | 18  F# Minor | 30  F# Harm. Minor | 42  F# Mel. Minor |
// 7   G  Major | 19  G  Minor | 31  G  Harm. Minor | 43  G  Mel. Minor |
// 8   G# Major | 20  G# Minor | 32  G# Harm. Minor | 44  G# Mel. Minor |
// 9   A  Major | 21  A  Minor | 33  A  Harm. Minor | 45  A  Mel. Minor |
// 10  A# Major | 22  A# Minor | 34  A# Harm. Minor | 46  A# Mel. Minor |
// 11  B  Major | 23  B  Minor | 35  B  Harm. Minor | 47  B  Mel. Minor |
// array for major scales

const displayArray = [
  ["C", "D", "E", "F", "G", "A", "B", "C", "B", "A", "G", "F", "E", "D", "C"],
  [
    "Db",
    "Eb",
    "F",
    "Gb",
    "Ab",
    "Bb",
    "C",
    "Db",
    "C",
    "Bb",
    "Ab",
    "Gb",
    "F",
    "Eb",
    "Db",
  ],
  [
    "D",
    "E",
    "F#",
    "G",
    "A",
    "B",
    "C#",
    "D",
    "C#",
    "B",
    "A",
    "G",
    "F#",
    "E",
    "D",
  ],
  [
    "Eb",
    "F",
    "G",
    "Ab",
    "Bb",
    "C",
    "D",
    "Eb",
    "D",
    "C",
    "Bb",
    "Ab",
    "G",
    "F",
    "Eb",
  ],
  [
    "E",
    "F#",
    "G#",
    "A",
    "B",
    "C#",
    "D#",
    "E",
    "D#",
    "C#",
    "B",
    "A",
    "G#",
    "F#",
    "E",
  ],
  ["F", "G", "A", "Bb", "C", "D", "E", "F", "E", "D", "C", "Bb", "A", "G", "F"],
  [
    "F#",
    "G#",
    "A#",
    "B",
    "C#",
    "D#",
    "E#",
    "F#",
    "E#",
    "D#",
    "C#",
    "B",
    "A#",
    "G#",
    "F#",
  ],
  ["G", "A", "B", "C", "D", "E", "F#", "G", "F#", "E", "D", "C", "B", "A", "G"],
  [
    "Ab",
    "Bb",
    "C",
    "Db",
    "Eb",
    "F",
    "G",
    "Ab",
    "G",
    "F",
    "Eb",
    "Db",
    "C",
    "Bb",
    "Ab",
  ],
  [
    "A",
    "B",
    "C#",
    "D",
    "E",
    "F#",
    "G#",
    "A",
    "G#",
    "F#",
    "E",
    "D",
    "C#",
    "B",
    "A",
  ],
  [
    "Bb",
    "C",
    "D",
    "Eb",
    "F",
    "G",
    "A",
    "Bb",
    "A",
    "G",
    "F",
    "Eb",
    "D",
    "C",
    "Bb",
  ],
  [
    "B",
    "C#",
    "D#",
    "E",
    "F#",
    "G#",
    "A#",
    "B",
    "A#",
    "G#",
    "F#",
    "E",
    "D#",
    "C#",
    "B",
  ],
  [
    "C",
    "D",
    "Eb",
    "F",
    "G",
    "Ab",
    "Bb",
    "C",
    "Bb",
    "Ab",
    "G",
    "F",
    "Eb",
    "D",
    "C",
  ],
  [
    "C#",
    "D#",
    "E",
    "F#",
    "G#",
    "A",
    "B",
    "C#",
    "B",
    "A",
    "G#",
    "F#",
    "E",
    "D#",
    "C#",
  ],
  ["D", "E", "F", "G", "A", "Bb", "C", "D", "C", "Bb", "A", "G", "F", "E", "D"],
  [
    "Eb",
    "F",
    "Gb",
    "Ab",
    "Bb",
    "Cb",
    "Db",
    "Eb",
    "Db",
    "Cb",
    "Bb",
    "Ab",
    "Gb",
    "F",
    "Eb",
  ],
  ["E", "F#", "G", "A", "B", "C", "D", "E", "D", "C", "B", "A", "G", "F#", "E"],
  [
    "F",
    "G",
    "Ab",
    "Bb",
    "C",
    "Db",
    "Eb",
    "F",
    "Eb",
    "Db",
    "C",
    "Bb",
    "Ab",
    "G",
    "F",
  ],
  [
    "F#",
    "G#",
    "A",
    "B",
    "C#",
    "D",
    "E",
    "F#",
    "E",
    "D",
    "C#",
    "B",
    "A",
    "G#",
    "F#",
  ],
  [
    "G",
    "A",
    "Bb",
    "C",
    "D",
    "Eb",
    "F",
    "G",
    "F",
    "Eb",
    "D",
    "C",
    "Bb",
    "A",
    "G",
  ],
  [
    "G#",
    "A#",
    "B",
    "C#",
    "D#",
    "E",
    "F#",
    "G#",
    "F#",
    "E",
    "D#",
    "C#",
    "B",
    "A#",
    "G#",
  ],
  ["A", "B", "C", "D", "E", "F", "G", "A", "G", "F", "E", "D", "C", "B", "A"],
  [
    "Bb",
    "C",
    "Db",
    "Eb",
    "F",
    "Gb",
    "Ab",
    "Bb",
    "Ab",
    "Gb",
    "F",
    "Eb",
    "Db",
    "C",
    "Bb",
  ],
  [
    "B",
    "C#",
    "D",
    "E",
    "F#",
    "G",
    "A",
    "B",
    "A",
    "G",
    "F#",
    "E",
    "D",
    "C#",
    "B",
  ],
  [
    "C",
    "D",
    "Eb",
    "F",
    "G",
    "Ab",
    "B",
    "C",
    "B",
    "Ab",
    "G",
    "F",
    "Eb",
    "D",
    "C",
  ],
  [
    "C#",
    "D#",
    "E",
    "F#",
    "G#",
    "A",
    "B#",
    "C#",
    "B#",
    "A",
    "G#",
    "F#",
    "E",
    "D#",
    "C#",
  ],
  [
    "D",
    "E",
    "F",
    "G",
    "A",
    "Bb",
    "C#",
    "D",
    "C#",
    "Bb",
    "A",
    "G",
    "F",
    "E",
    "D",
  ],
  [
    "Eb",
    "F",
    "Gb",
    "Ab",
    "Bb",
    "Cb",
    "D",
    "Eb",
    "D",
    "Cb",
    "Bb",
    "Ab",
    "Gb",
    "F",
    "Eb",
  ],
  [
    "E",
    "F#",
    "G",
    "A",
    "B",
    "C",
    "D#",
    "E",
    "D#",
    "C",
    "B",
    "A",
    "G",
    "F#",
    "E",
  ],
  [
    "F",
    "G",
    "Ab",
    "Bb",
    "C",
    "Db",
    "E",
    "F",
    "E",
    "Db",
    "C",
    "Bb",
    "Ab",
    "G",
    "F",
  ],
  [
    "F#",
    "G#",
    "A",
    "B",
    "C#",
    "D",
    "E#",
    "F#",
    "E#",
    "D",
    "C#",
    "B",
    "A",
    "G#",
    "F#",
  ],
  [
    "G",
    "A",
    "Bb",
    "C",
    "D",
    "Eb",
    "F#",
    "G",
    "F#",
    "Eb",
    "D",
    "C",
    "Bb",
    "A",
    "G",
  ],
  [
    "Ab",
    "Bb",
    "Cb",
    "Db",
    "Eb",
    "Fb",
    "G",
    "Ab",
    "G",
    "Fb",
    "Eb",
    "Db",
    "Cb",
    "Bb",
    "Ab",
  ],
  ["A", "B", "C", "D", "E", "F", "G#", "A", "G#", "F", "E", "D", "C", "B", "A"],
  [
    "Bb",
    "C",
    "Db",
    "Eb",
    "F",
    "Gb",
    "A",
    "Bb",
    "A",
    "Gb",
    "F",
    "Eb",
    "Db",
    "C",
    "Bb",
  ],
  [
    "B",
    "C#",
    "D",
    "E",
    "F#",
    "G",
    "A#",
    "B",
    "A#",
    "G",
    "F#",
    "E",
    "D",
    "C#",
    "B",
  ],
  [
    "C",
    "D",
    "Eb",
    "F",
    "G",
    "A",
    "B",
    "C",
    "Bb",
    "Ab",
    "G",
    "F",
    "Eb",
    "D",
    "C",
  ],
  [
    "C#",
    "D#",
    "E",
    "F#",
    "G#",
    "A#",
    "B#",
    "C#",
    "B",
    "A",
    "G#",
    "F#",
    "E",
    "D#",
    "C#",
  ],
  ["D", "E", "F", "G", "A", "B", "C#", "D", "C", "Bb", "A", "G", "F", "E", "D"],
  [
    "Eb",
    "F",
    "Gb",
    "Ab",
    "Bb",
    "C",
    "D",
    "Eb",
    "Db",
    "Cb",
    "Bb",
    "Ab",
    "Gb",
    "F",
    "Eb",
  ],
  [
    "E",
    "F#",
    "G",
    "A",
    "B",
    "C#",
    "D#",
    "E",
    "D",
    "C",
    "B",
    "A",
    "G",
    "F#",
    "E",
  ],
  [
    "F",
    "G",
    "Ab",
    "Bb",
    "C",
    "D",
    "E",
    "F",
    "Eb",
    "Db",
    "C",
    "Bb",
    "Ab",
    "G",
    "F",
  ],
  [
    "F#",
    "G#",
    "A",
    "B",
    "C#",
    "D#",
    "E#",
    "F#",
    "E",
    "D",
    "C#",
    "B",
    "A",
    "G#",
    "F#",
  ],
  [
    "G",
    "A",
    "Bb",
    "C",
    "D",
    "E",
    "F#",
    "G",
    "F",
    "Eb",
    "D",
    "C",
    "Bb",
    "A",
    "G",
  ],
  [
    "Ab",
    "Bb",
    "Cb",
    "Db",
    "Eb",
    "F",
    "G",
    "Ab",
    "Gb",
    "Fb",
    "Eb",
    "Db",
    "Cb",
    "Bb",
    "Ab",
  ],
  ["A", "B", "C", "D", "E", "F#", "G#", "A", "G", "F", "E", "D", "C", "B", "A"],
  [
    "Bb",
    "C",
    "Db",
    "Eb",
    "F",
    "G",
    "A",
    "Bb",
    "Ab",
    "Gb",
    "F",
    "Eb",
    "Db",
    "C",
    "Bb",
  ],
  [
    "B",
    "C#",
    "D",
    "E",
    "F#",
    "G#",
    "A#",
    "B",
    "A",
    "G",
    "F#",
    "E",
    "D",
    "C#",
    "B",
  ],
];

const scaleArray = [
  ["C", "D", "E", "F", "G", "A", "B", "C", "B", "A", "G", "F", "E", "D", "C"],
  [
    "Csharp",
    "Dsharp",
    "F",
    "Fsharp",
    "Gsharp",
    "Asharp",
    "C",
    "Csharp",
    "C",
    "Asharp",
    "Gsharp",
    "Fsharp",
    "F",
    "Dsharp",
    "Csharp",
  ],
  [
    "D",
    "E",
    "Fsharp",
    "G",
    "A",
    "B",
    "Csharp",
    "D",
    "Csharp",
    "B",
    "A",
    "G",
    "Fsharp",
    "E",
    "D",
  ],
  [
    "Dsharp",
    "F",
    "G",
    "Gsharp",
    "Asharp",
    "C",
    "D",
    "Dsharp",
    "D",
    "C",
    "Asharp",
    "Gsharp",
    "G",
    "F",
    "Dsharp",
  ],
  [
    "E",
    "Fsharp",
    "Gsharp",
    "A",
    "B",
    "Csharp",
    "Dsharp",
    "E",
    "Dsharp",
    "Csharp",
    "B",
    "A",
    "Gsharp",
    "Fsharp",
    "E",
  ],
  [
    "F",
    "G",
    "A",
    "Asharp",
    "C",
    "D",
    "E",
    "F",
    "E",
    "D",
    "C",
    "Asharp",
    "A",
    "G",
    "F",
  ],
  [
    "Fsharp",
    "Gsharp",
    "Asharp",
    "B",
    "Csharp",
    "Dsharp",
    "F",
    "Fsharp",
    "F",
    "Dsharp",
    "Csharp",
    "B",
    "Asharp",
    "Gsharp",
    "Fsharp",
  ],
  [
    "G",
    "A",
    "B",
    "C",
    "D",
    "E",
    "Fsharp",
    "G",
    "Fsharp",
    "E",
    "D",
    "C",
    "B",
    "A",
    "G",
  ],
  [
    "Gsharp",
    "Asharp",
    "C",
    "Csharp",
    "Dsharp",
    "F",
    "G",
    "Gsharp",
    "G",
    "F",
    "Dsharp",
    "Csharp",
    "C",
    "Asharp",
    "Gsharp",
  ],
  [
    "A",
    "B",
    "Csharp",
    "D",
    "E",
    "Fsharp",
    "Gsharp",
    "A",
    "Gsharp",
    "Fsharp",
    "E",
    "D",
    "Csharp",
    "B",
    "A",
  ],
  [
    "Asharp",
    "C",
    "D",
    "Dsharp",
    "F",
    "G",
    "A",
    "Asharp",
    "A",
    "G",
    "F",
    "Dsharp",
    "D",
    "C",
    "Asharp",
  ],
  [
    "B",
    "Csharp",
    "Dsharp",
    "E",
    "Fsharp",
    "Gsharp",
    "Asharp",
    "B",
    "Asharp",
    "Gsharp",
    "Fsharp",
    "E",
    "Dsharp",
    "Csharp",
    "B",
  ],
  [
    "C",
    "D",
    "Dsharp",
    "F",
    "G",
    "Gsharp",
    "Asharp",
    "C",
    "Asharp",
    "Gsharp",
    "G",
    "F",
    "Dsharp",
    "D",
    "C",
  ],
  [
    "Csharp",
    "Dsharp",
    "E",
    "Fsharp",
    "Gsharp",
    "A",
    "B",
    "Csharp",
    "B",
    "A",
    "Gsharp",
    "Fsharp",
    "E",
    "Dsharp",
    "Csharp",
  ],
  [
    "D",
    "E",
    "F",
    "G",
    "A",
    "Asharp",
    "C",
    "D",
    "C",
    "Asharp",
    "A",
    "G",
    "F",
    "E",
    "D",
  ],
  [
    "Dsharp",
    "F",
    "Fsharp",
    "Gsharp",
    "Asharp",
    "B",
    "Csharp",
    "Dsharp",
    "Csharp",
    "B",
    "Asharp",
    "Gsharp",
    "Fsharp",
    "F",
    "Dsharp",
  ],
  [
    "E",
    "Fsharp",
    "G",
    "A",
    "B",
    "C",
    "D",
    "E",
    "D",
    "C",
    "B",
    "A",
    "G",
    "Fsharp",
    "E",
  ],
  [
    "F",
    "G",
    "Gsharp",
    "Asharp",
    "C",
    "Csharp",
    "Dsharp",
    "F",
    "Dsharp",
    "Csharp",
    "C",
    "Asharp",
    "Gsharp",
    "G",
    "F",
  ],
  [
    "Fsharp",
    "Gsharp",
    "A",
    "B",
    "Csharp",
    "D",
    "E",
    "Fsharp",
    "E",
    "D",
    "Csharp",
    "B",
    "A",
    "Gsharp",
    "Fsharp",
  ],
  [
    "G",
    "A",
    "Asharp",
    "C",
    "D",
    "EDsharp",
    "Fs",
    "G",
    "Fs",
    "EDsharp",
    "D",
    "C",
    "BAsharp",
    "A",
    "G",
  ],
  [
    "Gsharp",
    "Asharp",
    "B",
    "Csharp",
    "Dsharp",
    "E",
    "Fsharp",
    "Gsharp",
    "Fsharp",
    "E",
    "Dsharp",
    "Csharp",
    "B",
    "Asharp",
    "Gsharp",
  ],
  ["A", "B", "C", "D", "E", "F", "G", "A", "G", "F", "E", "D", "C", "B", "A"],
  [
    "Asharp",
    "C",
    "Csharp",
    "Dsharp",
    "F",
    "Fsharp",
    "Gsharp",
    "Asharp",
    "Gsharp",
    "Fsharp",
    "F",
    "Dsharp",
    "Csharp",
    "C",
    "Asharp",
  ],
  [
    "B",
    "Csharp",
    "D",
    "E",
    "Fsharp",
    "G",
    "A",
    "B",
    "A",
    "G",
    "Fsharp",
    "E",
    "D",
    "Csharp",
    "B",
  ],
  [
    "C",
    "D",
    "Dsharp",
    "F",
    "G",
    "Gsharp",
    "B",
    "C",
    "B",
    "Gsharp",
    "G",
    "F",
    "Dsharp",
    "D",
    "C",
  ],
  [
    "Csharp",
    "Dsharp",
    "E",
    "Fsharp",
    "Gsharp",
    "A",
    "C",
    "Csharp",
    "C",
    "A",
    "Gsharp",
    "Fsharp",
    "E",
    "Dsharp",
    "Csharp",
  ],
  [
    "D",
    "E",
    "F",
    "G",
    "A",
    "Asharp",
    "Csharp",
    "D",
    "Csharp",
    "Asharp",
    "A",
    "G",
    "F",
    "E",
    "D",
  ],
  [
    "Dsharp",
    "F",
    "Fsharp",
    "Gsharp",
    "Asharp",
    "B",
    "D",
    "Dsharp",
    "D",
    "B",
    "Asharp",
    "Gsharp",
    "Fsharp",
    "F",
    "Dsharp",
  ],
  [
    "E",
    "Fsharp",
    "G",
    "A",
    "B",
    "C",
    "Dsharp",
    "E",
    "Dsharp",
    "C",
    "B",
    "A",
    "G",
    "Fsharp",
    "E",
  ],
  [
    "F",
    "G",
    "Gsharp",
    "Asharp",
    "C",
    "Csharp",
    "E",
    "F",
    "E",
    "Csharp",
    "C",
    "Asharp",
    "Gsharp",
    "G",
    "F",
  ],
  [
    "Fsharp",
    "Gsharp",
    "A",
    "B",
    "Csharp",
    "D",
    "F",
    "Fsharp",
    "F",
    "D",
    "Csharp",
    "B",
    "A",
    "Gsharp",
    "Fsharp",
  ],
  [
    "G",
    "A",
    "Asharp",
    "C",
    "D",
    "Dsharp",
    "Fsharp",
    "G",
    "Fsharp",
    "Dsharp",
    "D",
    "C",
    "Asharp",
    "A",
    "G",
  ],
  [
    "Gsharp",
    "Asharp",
    "B",
    "Csharp",
    "Dsharp",
    "E",
    "G",
    "Gsharp",
    "G",
    "E",
    "Dsharp",
    "Csharp",
    "B",
    "Asharp",
    "Gsharp",
  ],
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "Gsharp",
    "A",
    "Gsharp",
    "F",
    "E",
    "D",
    "C",
    "B",
    "A",
  ],
  [
    "Asharp",
    "C",
    "Csharp",
    "Dsharp",
    "F",
    "Fsharp",
    "A",
    "Asharp",
    "A",
    "Fsharp",
    "F",
    "Dsharp",
    "Csharp",
    "C",
    "Asharp",
  ],
  [
    "B",
    "Csharp",
    "D",
    "E",
    "Fsharp",
    "G",
    "Asharp",
    "B",
    "Asharp",
    "G",
    "Fsharp",
    "E",
    "D",
    "Csharp",
    "B",
  ],
  [
    "C",
    "D",
    "Dsharp",
    "F",
    "G",
    "A",
    "B",
    "C",
    "Asharp",
    "Gsharp",
    "G",
    "F",
    "Dsharp",
    "D",
    "C",
  ],
  [
    "Csharp",
    "Dsharp",
    "E",
    "Fsharp",
    "Gsharp",
    "Asharp",
    "B",
    "Csharp",
    "B",
    "A",
    "Gsharp",
    "Fsharp",
    "E",
    "Dsharp",
    "Csharp",
  ],
  [
    "D",
    "E",
    "F",
    "G",
    "A",
    "B",
    "Csharp",
    "D",
    "C",
    "Asharp",
    "A",
    "G",
    "F",
    "E",
    "D",
  ],
  [
    "Dsharp",
    "F",
    "Fsharp",
    "Gsharp",
    "Asharp",
    "C",
    "D",
    "Dsharp",
    "Csharp",
    "B",
    "Asharp",
    "Gsharp",
    "Fsharp",
    "F",
    "Dsharp",
  ],
  [
    "E",
    "Fsharp",
    "G",
    "A",
    "B",
    "Csharp",
    "Dsharp",
    "E",
    "D",
    "C",
    "B",
    "A",
    "G",
    "Fsharp",
    "E",
  ],
  [
    "F",
    "G",
    "Gsharp",
    "Asharp",
    "C",
    "D",
    "E",
    "F",
    "Dsharp",
    "Csharp",
    "C",
    "Asharp",
    "Gsharp",
    "G",
    "F",
  ],
  [
    "Fsharp",
    "Gsharp",
    "A",
    "B",
    "Csharp",
    "Dsharp",
    "F",
    "Fsharp",
    "E",
    "D",
    "Csharp",
    "B",
    "A",
    "Gsharp",
    "Fsharp",
  ],
  [
    "G",
    "A",
    "Asharp",
    "C",
    "D",
    "E",
    "Fsharp",
    "G",
    "F",
    "Dsharp",
    "D",
    "C",
    "Asharp",
    "A",
    "G",
  ],
  [
    "Gsharp",
    "Asharp",
    "B",
    "Csharp",
    "Dsharp",
    "F",
    "G",
    "Gsharp",
    "Fsharp",
    "E",
    "Dsharp",
    "Csharp",
    "B",
    "Asharp",
    "Gsharp",
  ],
  [
    "A",
    "B",
    "C",
    "D",
    "E",
    "Fsharp",
    "Gsharp",
    "A",
    "G",
    "F",
    "E",
    "D",
    "C",
    "B",
    "A",
  ],
  [
    "Asharp",
    "C",
    "Csharp",
    "Dsharp",
    "F",
    "G",
    "A",
    "Asharp",
    "Gsharp",
    "Fsharp",
    "F",
    "Dsharp",
    "Csharp",
    "C",
    "Asharp",
  ],
  [
    "B",
    "Csharp",
    "D",
    "E",
    "Fsharp",
    "Gsharp",
    "Asharp",
    "B",
    "A",
    "G",
    "Fsharp",
    "E",
    "D",
    "Csharp",
    "B",
  ],
];
