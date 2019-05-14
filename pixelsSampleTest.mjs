import {getRandomIntInclusive} from "./random.mjs";
import {bitCount} from "./bitTwiddling.mjs";

const pixelSample = 4;
const width = 10;
const height = 10;

const contains  = {
  "all": 1,
  "some": 0,
  "none": -1,
};

const ACTIVE_PIXEL = 1;

const grid = Array.from({length: width * height}, x => 0);

const testRowForPixels = (row, pixelSample) => {
    const activePixels = row.filter(x => x === 1);

    if (activePixels.length === 0) {
      return contains.none;
    } else if (activePixels.length < pixelSample) {
      return contains.some;
    } else if (activePixels.length === pixelSample) {
      return contains.all;
    }
}

const testForPixel = (row) => {
  let pixelCount = 0;

  for (let i = 0; i < row.length; i += 1) {
    if (row[i] === ACTIVE_PIXEL) {
      pixelCount += 1;
    }
  }

  return pixelCount;
}

const testForPixelBitWise = (row) => {
  let pixelCount = 0;
  const numFromRow = parseInt(row.join(''), 2);
  pixelCount = bitCount(numFromRow);

  return pixelCount;
}


const setRandomPixels = (grid, numPixels) => {
  const arr = grid.slice();
  
  for (let i = 0; i < numPixels; i += 1) {
    let randIndex = getRandomIntInclusive(0, arr.length - 1);
    arr[randIndex] = 1;
  }
  
  return arr;
}

const updatedGrid = setRandomPixels(grid, pixelSample);

const pixelFrequency = (grid) => {
  return grid.reduce((acc, cur) => {
    acc[cur] ? acc[cur] += 1 : acc[cur] = 1;
    return acc;
  }, {}); 
}

// the element at (x,y) is found at position x + (y × width) in the array.
// our test grid is ten by ten
const getRowsWithPixels = (grid, pixelSample) => {
  const rowsWithPixels = [];

  for (let i = 0; i < height; i += 1) {
    let row = grid.slice(i * width, (i + 1) * width);
    if (testRowForPixels(row, pixelSample) === contains.all) {
      rowsWithPixels.push(i);
      break;
    } else if (testRowForPixels(row, pixelSample) === contains.some) {
      rowsWithPixels.push(i);
    }
  }
  return rowsWithPixels;
}

const getPixelCount = (grid, rowsWithPixels) => {
  let pixelCount = 0;

  for (let rowIndex of rowsWithPixels) {
    // row that contains pixel(s)
    let row = grid.slice(rowIndex * width, (rowIndex + 1) * width);
    pixelCount += testForPixel(row);
    // pixelCount += testForPixelBitWise(row);
  }

  return pixelCount;
}

console.time('pixel test');
const frequency = pixelFrequency(updatedGrid);

console.timeLog('pixel test', frequency[ACTIVE_PIXEL.toString()]);
console.assert(parseInt(frequency[ACTIVE_PIXEL.toString()], 10) === pixelSample, "calculated pixel frequency and pixel sample size do not match.");

const rowsWithPixels = getRowsWithPixels(updatedGrid, pixelSample);
console.timeLog('pixel test', rowsWithPixels);

const pixelsInGrid = getPixelCount(updatedGrid, rowsWithPixels);
console.timeLog('pixel test', pixelsInGrid);
console.timeEnd('pixel test');

console.assert(pixelsInGrid === pixelSample, "calculated pixel frequency and pixel sample size do not match.");
