let transpositionDelta = 0;

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
let userString = "You chose ";
const urlParams = new URLSearchParams(window.location.search);
const scaleIndex = urlParams.get("index");
document.getElementById("userSelection").innerHTML += scaleIndex;

userString += urlParams.get("mm") + " and ";
// document.getElementById("userSelection").innerHTML += scaleIndex;

userString += urlParams.get("scale");
// document.getElementById("userSelection").innerHTML += scaleIndex;

document.getElementById("userSelection").innerHTML = userString;

const transpositionString = urlParams.get("transposition");
console.log(transpositionString);
let pleasework = document.getElementById("transpositionVal");
console.log(transpositionVal);
pleasework.innerHTML = "Transposition:  " + transpositionString;

function createSpanElementsFromArray(stringsArray) {
  console.log(stringsArray);
  const container = document.getElementById("holdSpan"); // Create a container element to hold the <span> elements

  // Iterate through the array of strings and create a <span> element for each string
  let goingDownOnScale = 0;
  for (let str of stringsArray) {
    // const modifiedStr = str.replace("sharp", "#");

    const span = document.createElement("span"); // Create a <span> element

    // avoid duplication error by adding suffix
    if (goingDownOnScale === 14) {
      str += "2";
    } else if (goingDownOnScale > 6) {
      str += "1";
    }
    span.id = str; // Set the id of the <span> element to the modified string

    // convert transposition string into appropriate value
    transpositionDelta = 0;
    if (transpositionString === "Concert_Pitch") transpositionDelta = 0;
    if (transpositionString === "F_Transposition") transpositionDelta = -7;
    if (transpositionString === "Bb_Transposition") transpositionDelta = -2;
    if (transpositionString === "Eb_Transposition") transpositionDelta = -9;
    if (transpositionString === "A_Transposition") transpositionDelta = -3;
    if (transpositionString === "G_Transposition") transpositionDelta = -5;
    let scaleType = Math.floor(scaleIndex / 12);
    let transScaleIndex = scaleIndex % 12;
    transScaleIndex -= transpositionDelta;
    if (transScaleIndex < 0) transScaleIndex += 12;
    if (transScaleIndex > 11) transScaleIndex -= 12;
    transScaleIndex += 12 * scaleType;
    let display = displayArray[transScaleIndex];
    span.textContent = display[goingDownOnScale] + " "; // Set the text content of the <span> element to the modified string
    container.appendChild(span); // Append the <span> element to the container
    goingDownOnScale++;
  }

  return container; // Return the container with the <span> elements
}

const stringsArray = scaleArray[scaleIndex];
const container = createSpanElementsFromArray(stringsArray);

// Append the container to the body (or any other element you want)
document.body.appendChild(container);

// Get a reference to the button element
const homeButton = document.getElementById("homeButton");

// Add a click event listener to the button
homeButton.addEventListener("click", function () {
  // Navigate to the desired HTML page
  window.location.href = "index.html";
});

// initialize high scores to 0 for all 48 arr
let highScores = new Array(48);
for (let i = 0; i < 48; i++) {
  highScores[i] = 0;
}

// compares points generated from latest excercise to high score for that scale, updates if necessary
/*
function checkForHighScore(points, scaleIndex) {
  if (points > highScores[scaleIndex]) {
    // console log says true if we beat score
    console.log(points > highScores[scaleIndex]);
    highScores[scaleIndex] = points;
  }
}
*/

let pitch;
let audioStream;

// scale is with "sharp"
let scale = scaleArray[scaleIndex];
const chromatic = [
  "C",
  "Csharp",
  "D",
  "Dsharp",
  "E",
  "F",
  "Fsharp",
  "G",
  "Gsharp",
  "A",
  "Asharp",
  "B",
];

let currentNote = "";

const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

// Update the value display when the slider value changes
// slider.addEventListener("input", function () {
//   sliderValue.textContent = slider.value;
// });

function setup() {
  createCanvas(640, 520);
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  document.getElementById("userSelection").innerHtml = window.startingPitch;
}

function startPitch() {
  console.log("Listening");
  const url =
    "https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/";
  pitch = ml5.pitchDetection(url, audioContext, mic.stream, modelLoaded);
}

function modelLoaded() {
  select("#status").html("Model Loaded");
  getPitch();
}

let i = 0;
let temp = "";
let repeat = 0;
let lastNote = "";

// points keeps track of correct notes
let points = 0;

// creates an arr of wrong note indexes
let wrong = new Array();
let wrongCount = 0;

function getPitch() {
  pitch.getPitch(function (err, frequency) {
    // if done with excercise, end

    if (i >= scale.length) {
      // push new score to arr
      // checkForHighScore(points, scaleIndex);
      console.log("end points " + points);
      console.log("Scale completed!");
      let stringNameMe = returnWrong(wrong);
      let scaleString = document.getElementById;
      window.location.href = `score.html?points=${points}&index=${scaleIndex}&wrong=${stringNameMe}&scale=${urlParams.get(
        "scale"
      )}&mm=${urlParams.get("mm")}&transposition=${urlParams.get(
        "transposition"
      )}&delta=${transpositionDelta}`;

      // transpositionDelta;

      // exit and dont listen anymore
      return;
    }

    // if frequency is detected, convert to note
    if (frequency) {
      let midiNum = freqToMidi(frequency);
      currentNote = chromatic[midiNum % 12];
      console.log("you played a " + currentNote);

      let result = coolFunction(currentNote, scale, i);
      if (result == 0) {
        i++;
      } else if (result == 1) {
        i++;

        // do red
      } else {
        // do blank
      }
    }
    getPitch();
  });
}

// boolean funciton, is last note the current note?
function weShouldTryNote(currentNote, lastNote, correctNote) {
  if (lastNote === "") return true;
  if (lastNote === correctNote) return true;
  if (lastNote === currentNote) return false;
  // returns boolean value if current note being played is the same as the last one
  return true;
}

// perform assessment of current note
function coolFunction(currentNote, scale, i) {
  // underlines and removes underline from previous span

  let num = "";
  // if last one, add suffix of 2
  if (i - 1 === 14) num = 2;
  // if repeat, add suffix of 1
  else if (i - 1 > 6) num = 1;
  // create suffix string, concat
  let stringToCheck = scale[i - 1] + num;
  // get the correct element and turn green
  const elementPrev = document.getElementById(stringToCheck);

  // Check if the element with the specified ID exists
  if (elementPrev) {
    if ((elementPrev.style.textDecoration = "underline")) {
      elementPrev.style.textDecoration = "none";
    }
    // Use the style property to apply the 'text-decoration' CSS property
  }

  // if last one, add suffix of 2
  if (i === 14) num = 2;
  // if repeat, add suffix of 1
  else if (i > 6) num = 1;
  // create suffix string, concat
  let stringToCheck2 = scale[i] + num;
  // get the correct element and turn green

  // underline
  const element = document.getElementById(stringToCheck2);

  // Check if the element with the specified ID exists
  if (element) {
    // Use the style property to apply the 'text-decoration' CSS property
    element.style.textDecoration = "underline";
  }

  if (weShouldTryNote(currentNote, lastNote, scale[i])) {
    if (currentNote === temp) {
      repeat++;
    } else {
      temp = currentNote;
      repeat = 0;
    }
  }
  // tick check
  if (repeat > 50 - slider.value) {
    // right note, make green case
    if (currentNote === scale[i]) {
      console.log("correct note");

      // turn note green

      let num = "";
      // if last one, add suffix of 2
      if (i === 14) num = 2;
      // if repeat, add suffix of 1
      else if (i > 6) num = 1;
      // create suffix string, concat
      let string = scale[i] + num;
      // get the correct element and turn green
      document.getElementById(string).style.color = "green";

      // increase points!
      points++;

      repeat = 0;
      // update previous note
      lastNote = currentNote;
      return 0;
    }
    // not the right note, make red case
    else {
      console.log("right note was " + scale[i]);
      let num = "";
      if (i === 14) num = 2;
      else if (i > 6) num = 1;
      let string = scale[i] + num;
      document.getElementById(string).style.color = "red";
      repeat = 0;
      lastNote = currentNote;

      // keep track of an arr of all the wrong notes
      wrong[wrongCount] = i + "-";
      wrongCount++;

      return 1;
    }
  }
  // not 12 ticks, make blank case
  else {
    return 2;
  }
}

// pass indexes of wrong notes over query params as 1-4-23
// return string of indexes of wrong notes seperated by "-"
function returnWrong(wrong) {
  let str = "";
  for (let i = 0; i < wrong.length; i++) {
    str += wrong[i];
  }

  return str;
}
