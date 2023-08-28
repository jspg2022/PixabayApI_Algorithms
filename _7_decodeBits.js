const decodeBits = function (bits) {
  const arr = bits.split(1).filter(Boolean);
  const max = Math.max(...arr.map((el) => el.length));
  const min = Math.min(...arr.map((el) => el.length));

  let newStrBits = '';
  let count = 0;
  const n = max / 7;

  for (let i = 0; i < bits.length; i++) {
    if (bits[i] === '1') {
      count += 1;
      if (bits[i + 1] === undefined) {
        if (count === n) {
          newStrBits += '.';
        }
        if (count === n * 3) {
          newStrBits += '-';
        }
      } else if (bits[i + 1] === '1') continue;
      else if (bits[i + 1] === '0') {
        if (count === n) {
          newStrBits += '.';
        }
        if (count === n * 3) {
          newStrBits += '-';
          count = 0;
        }
        count = 0;
      }
    } else if (bits[i] === '0') {
      count += 1;
      if (bits[i + 1] === '0') continue;
      else if (bits[i + 1] === '1') {
        if (count === n * 3) {
          newStrBits += ' ';
        }
        if (count === n * 7) {
          newStrBits += '   ';
        }

        count = 0;
      }
    }
  }
  return newStrBits;
};

const morseCode = {
  '-.-.--': '!',
  '.-..-.': '"',
  '...-..-': '$',
  '.-...': '&',
  '.----.': "'",
  '-.--.': '(',
  '-.--.-': ')',
  '.-.-.': '+',
  '--..--': ',',
  '-....-': '-',
  '.-.-.-': '.',
  '-..-.': '/',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '---...': ':',
  '-.-.-.': ';',
  '-...-': '=',
  '..--..': '?',
  '.--.-.': '@',
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '..--.-': '_',
  '...---...': 'SOS',
};

const decodeMorse = function (morseInput) {
  const morseArr = morseInput.split('   ');
  let str = '';

  for (let i = 0; i < morseArr.length; i++) {
    let char = morseArr[i].split(' ');
    for (let j = 0; j < char.length; j++) {
      str += morseCode[char[j]];
    }
    str += ' ';
  }
  console.log(str);
};

const bits =
  '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011';

decodeMorse(decodeBits(bits));
