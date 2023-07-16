// lib/tests/setShapesColors.test.js
const {Shape, Circle, Square, Triangle} = require('../shapes');
const {setShape, colorOptions} = require('../setShapesColors.js')

describe('setShape', () => {
  test('should render a Circle correctly', () => {
    const response = {
      shape: 'Circle',
      shapeColor: 'blue',
      text: 'ABC',
      textColor: 'white'
    };

    const svg = setShape(response);

    expect(svg).toEqual(expect.stringContaining('<circle cx="150" cy="100" r="100" fill="blue" />'));
    expect(svg).toEqual(expect.stringContaining('<text x="150" y="125" font-size="70" text-anchor="middle" fill="white">ABC</text>'));
  });

  test('should render a Square correctly', () => {
    const response = {
      shape: 'Square',
      shapeColorChoice: 'red',
      text: 'AYO',
      textColorChoice: 'white'
    };

    const svg = setShape(response);

    expect(svg).toEqual(expect.stringContaining('<rect width="200" height="200" fill="red"/>'));
    expect(svg).toEqual(expect.stringContaining('text x="100" y="125" font-size="70" text-anchor="middle" fill="white">AYO</text'));
  });

  test('should render a Triangle correctly', () => {
    const response = {
      shape: 'Triangle',
      shapeColor: 'green',
      text: 'GHI',
      textColor: 'yellow'
    };

    const svg = setShape(response);

    expect(svg).toEqual(expect.stringContaining('<polygon points="100, 15 200, 200 0, 200" fill="green"/>'));
    expect(svg).toEqual(expect.stringContaining('<text x="100" y="185" font-size="70" text-anchor="middle" fill="yellow">GHI</text>'));
  });
});
