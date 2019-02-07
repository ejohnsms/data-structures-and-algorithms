import {getRandomIntInclusive, getRandomInt, getRandomArbitrary} from "./random.mjs";

export const data = (size, min, max) => {
    return Array.from(Array(size), () => getRandomIntInclusive(min, max)); // Array.apply(null, {length: 10}).map(() => (getRandomIntInclusive(1,10)));
}
