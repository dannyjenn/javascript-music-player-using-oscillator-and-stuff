// Define the constants

const FULL_VOLUME = 0.1;
const LOOP = false;

// notes
const C = 0;
const C_SHARP = 1;
const D_FLAT = 1;
const D = 2;
const D_SHARP = 3;
const E_FLAT = 3;
const E = 4;
const E_SHARP = 5;
const F_FLAT = 4;
const F = 5;
const F_SHARP = 6;
const G_FLAT = 6;
const G = 7;
const G_SHARP = 8;
const A_FLAT = 8;
const A = 9;
const A_SHARP = 10;
const B_FLAT = 10;
const B = 11;
const B_SHARP = 0;
const C_FLAT = 11;
const REST = 12;
const NULL = 12;

const base_frequencies = [16.35, 17.32, 18.35, 19.45, 20.60, 21.83, 23.12, 24.50, 25.96, 27.50, 29.14, 30.87, 0.0];

// note lengths
const WHOLE = 128; // whole note
const HALF = 64; // half note
const QUARTER = 32; // quarter note
const EIGHTH = 16; // eighth note
const SIXTEENTH = 8; // sixteenth note (slightly longer than it should be)

const NORMAL = 1;
const DOTTED = 1.5;
const DOUBLE_DOTTED = 1.75;

const STACCATO = -1;
const LEGATO = 1;

const UNKNOWN = -1;


// The following constants (for the key signatures and the time signatures) are
// completely dependent upon the MusiQwik font, which is why they have strange values.
// Also, these will only be used for the purposes of displaying the sheet music.

// key signatures
const C_MAJOR = "=";
const A_MINOR = "=";
const G_MAJOR = "¡";
const E_MINOR = "¡";
const D_MAJOR = "¢";
const B_MINOR = "¢";
const A_MAJOR = "£";
const F_SHARP_MINOR = "£";
const E_MAJOR = "¤";
const C_SHARP_MINOR = "¤";
const B_MAJOR = "¥";
const G_SHARP_MINOR = "¥";
const F_SHARP_MAJOR = "¦";
const D_SHARP_MINOR = "¦";
const C_SHARP_MAJOR = "§";
const A_SHARP_MINOR = "§";
const F_MAJOR = "¨";
const D_MINOR = "¨";
const B_FLAT_MAJOR = "©";
const G_MINOR = "©";
const E_FLAT_MAJOR = "ª";
const C_MINOR = "ª";
const A_FLAT_MAJOR = "«";
const F_MINOR = "«";
const D_FLAT_MAJOR = "¬";
const B_FLAT_MINOR = "¬";
const G_FLAT_MAJOR = "¬é";//"&shy;";
const E_FLAT_MINOR = "¬é";//"&shy;";
const C_FLAT_MAJOR = "®";
const A_FLAT_MINOR = "®";

// time signatures
const COMMON = "0";
const COMMON_TIME = "0";
const _2_2 = "1";
const _2_4 = "2";
const _3_4 = "3";
const _4_4 = "4";
const _3_2 = "5";
const _6_8 = "6";
const CUT = "7";
const CUT_TIME = "7";
const CUT_COMMON_TIME = "7";