import {compose} from './utilities';

const str = "bronzesummertanfromallthatgreatsunnyweather";

const frequencyAndIndex = (letters, char, idx) => {
    if (char in letters) {
        letters[char][0] += 1; // increment the frequency
    } else {
        letters[char] = [1, idx]; // init frequency to 1 and set the index
    }

    return letters;
}

// takes a string of letters
const frequencies = (str) => {
    // return an object with frequency and first index for each letter in the string
    return str.split('').reduce(frequencyAndIndex, {});
}


const highestFrequencyLowestIndex = (acc, cur) => {
    if (cur[1][0] > acc[1][0]) {
        return cur;
    } else if (cur[1][0] === acc[1][0]) {
        if (cur[1][1] < acc[1][1]) {
            return cur;
        } else {
            return acc;
        }
    } else {
        return acc;
    }
}

// takes an object with frequency and first index for each letter in the string
const highest = (frequencies) => {
    // returns an array or arrasy with letter at [0] and frequency and index at [1][0] and [1][1]
    return Object.entries(frequencies).reduce(highestFrequencyLowestIndex);
}

const letterFromArray = (item) => {
    return item[0];
}

const highestFrequencyLetter = compose(letterFromArray, highest, frequencies);

const letter = highestFrequencyLetter(str);

console.log(`letter with highest frequency and lowest index is: ${letter}`);
