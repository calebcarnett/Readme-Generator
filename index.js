const fs = require('fs');
const inquirer = require('inquirer');

 const  generateREADME = ({title, details, install, usage, contribution, tests, license, badge, github, email, credits}) => 
 `# ${title}
 ${generateBadge(license)}
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

${generateLicenseLink(license)}
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
      choices: ["MIT", "BSD", "Apache", "N/A"],
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


function generateBadge(license){
  if (license === "MIT") {
   return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } if (license === "BSD") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } if (license === "N/A") {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }}


  
function generateLicense(license){
  if (license === "MIT") {
   return `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions" The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
   THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
  } if (license === "BSD") {
    return `THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
  }  if (license === "Apache") {
    return `Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.`
  } if (license === "N/A") {
    return `This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.
    
    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    `
  }}
  
  function generateLicenseLink(license){
    if (license === "MIT") {
     return `https://opensource.org/licenses/MIT`
    } if (license === "BSD") {
      return `https://opensource.org/licenses/BSD-2-Clause`
    }  if (license === "Apache") {
      return `https://opensource.org/licenses/Apache-2.0`
    } if (license === "N/A") {
        return `http://unlicense.org/`
    }}