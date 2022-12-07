const fs = require('fs');
const inquirer = require('inquirer');

inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${"<head> "}\n` + `${data.name}` + `${"<head> "}\n`;

    fs.appendFile('index.html', JSON.stringify(data, null, '\t'), (err) =>
    err ? console.log
    (err) : console.log('Success!')
    );
  });
