const fs = require('fs');
const inquirer = require('inquirer');

 const  generateREADME = ({title, details, install, usage, contribution, tests, license, github, email, credits}) => 
 `# ${title}
 ${generateLicense(license)}
 ## Description
 ${details}

 ## Table of contents
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)
 
 
 ## Installation
 ${install}
  
 ## Usage
 ${usage}


 ## Contributions
 ${contribution}
 ## Tests
 ${tests}
 ## Questions
 If you have any questions concerning this project, you can reach me at ${email} or to see my project details visit my github https://github.com/${github} 
  
 ## Credits
 ${credits}

 ## License
 ${generateLicense(license)}
`

inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'details',
      message: 'Describe your project in detail',
    },
    {
      type: 'input',
      name: 'install',
      message: 'How do you install this application?',
      
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use this application',
      
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Any contributors?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'tests',
    },
    {
      type: 'list',
      name: 'license',
      choices: ["MIT", "BSD", "Apache"],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'credits?',
    },
  ])
  .then((answers) => {
  const readMePage = generateREADME(answers);
    fs.writeFile('README.md', readMePage, (err) =>
    err ? console.log(err) : console.log('Successfully created READme.md file!!')
    );
  });


function generateLicense(license){
  if (license === "MIT") {
   return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } if (license === "BSD") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }}