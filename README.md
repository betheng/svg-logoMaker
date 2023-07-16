# README for - SVG Simple Logo Generator
  The code in this repo is covered under ![badge](https://img.shields.io/badge/license-MIT-violet)<br />
  
  ## Description
  Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileLinks to an external site.. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.
  
  ## Table of Contents
  - [Description](#description)
  - [Live_Site_and_Code_Repository](#live_site_and_code_repository)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Questions](#questions)
  
  ## Live Site and Code Repository
  GitHub Repo link of project: <https://github.com/betheng/svg-logoMaker>
  <br />
  Live project link: <https://betheng.github.io/svg-logoMaker/>

  ## Installation
 1. Clone and open repo in VS Code or other IDE
 2. Install node.js v16 and run 'npm init -y' to create package
 3. Open terminal and run 'npm i' to install dependencies
 4. Install inquirer ('npm i inquirer@8.2.4') and jest ('npm i jest') if not already done
 5. Within the terminal type 'node index.js' to run program

    

  ## User Story & Acceptance Criteria
```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
  ## License
  ![Static Badge](https://img.shields.io/badge/license-MIT-violet)
  This application uses the MIT license. 
  
  ## Tests
  Jest unit test scripts for basic shape validate; manual testing </br>
  Once you are in project directory run ```npx jest``` to view results</br>
  Test scripts are located at ```../lib/tests```
  
https://github.com/betheng/svg-logoMaker/assets/131614496/3b7195f0-2696-4d69-a2e1-f03449bc968b


  ## Contributors
  Created by GitHub user(s): betheng

  ## Questions
  Please reach out to Beth at bethengstrom@gmail.com with any questions.
  <br />
  Beth's GitHub repo is located at <https://github.com/betheng>
  
