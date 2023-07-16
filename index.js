const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const {setShape} = require('./lib/setShapesColors.js')

// creates svg file
function createLogo(response) {
    let fileIndex = 1;
    let newFileName = `${fileName.slice(0, -4)}_${fileIndex}.svg`;
  
    while (fs.existsSync(newFileName)) {
      fileIndex++;
      newFileName = `${fileName.slice(0, -4)}_${fileIndex}.svg`;
    }
  
    const svg = setShape(response);
    fs.writeFile(newFileName, svg, (err) => {
      if (err) {
        console.error(`Error creating ${newFileName}:`, err);
      } else {
        console.log(`Logo created: ${newFileName}`);
      }
    });
  }
// initialize logo questions using inquirer
function init() {
    inquirer 
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        })
    .catch(err => {
            console.log(err)
        });
}

init();