// pulls in color and shape options for user selection
const { Circle, Square, Triangle } = require('./setShapesColors');
const { setShape, colorOptions } = require('./setShapesColors');

const questions = [
// Prompt user for TEXT and validate for 3 chars
    {
        name: 'text',
        message: 'What is the text? (three character maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },

// Prompt user for text color using keyword or hexadecimal color code
    {
        name: 'textColorChoice',
        message: 'Choose a color format how you want to select or enter your text color? ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal'],
        filter: (choice) => choice.toLowerCase()
    },
    {
        type: 'list',
        name: 'textColor',
        message: 'Select the text color',
        choices: colorOptions,
        when: (answers) => answers.textColorChoice === 'color keyword',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text hexadecimal number (#CCCCCC)',
        when: (answers) => answers.textColorChoice === 'hexadecimal',
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (!answer.match(hexRegEx)) {
                return 'Please enter a valid hexadecimal color code (e.g., #FF0000)';
            }
            return true;
        }
    },
    
// Prompts user for shape from three child class options
    {
        name: 'shape',
        message: 'What is the shape of your logo?',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

// Prompt user for SHAPE color using keyword or hexadecimal color code
    {
        name: 'shapeColorChoice',
        message: 'What is the color of the shape? Choose a color format: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    
     {
        type: 'list',
        name: 'shapeColor',
        message: 'Select the color you want the shape to be:',
        choices: colorOptions,
        when: (answers) => answers.textColorChoice === 'color keyword',

    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the text hexadecimal number (#CCCCCC)',
        when: (answers) => answers.shapeColorChoice === 'hexadecimal',
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (!answer.match(hexRegEx)) {
                return 'Please enter a valid hexadecimal color code (e.g., #FF0000; can be found at htmlcolorcodes.com/)';
            }
            return true;
        }
    },

];

module.exports = questions;