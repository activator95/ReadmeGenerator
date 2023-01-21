const inquirer = require('inquirer');
const fs = require ('fs');
const { default: Choices } = require('inquirer/lib/objects/choices');
let filename = 'README.md'


const questions = [
{
type: 'input',
name: 'project',
message: 'what is the project name'
},
{
    type: 'input',
    name: 'email',
    message: 'what is your email'
},
{
  type: 'input',
  name: 'description',
  message: 'What is the desctription of your project'
},
{
  type: 'input',
  name: 'image',
  message: 'what is your image name'
},
{
  type: 'input',
  name: 'usage',
  message: 'how do you use this project'
},
{
  type: 'input',
  name: 'install',
  message: 'how to install'
},
{
  type: 'input',
  name: 'video',
  message: 'what is the link to the video'
},
{
  type: 'input',
  name: 'contributors',
  message: 'who contributed'
},
{
  type: 'input',
  name: 'test',
  message: 'what tests did you check for the project'
},
{
  type: 'input',
  name: 'username',
  message: 'enter github username'
},
{
  type: 'list',
  name: 'license',
  message: 'asking what a license is',
  choices: ['MIT', 'No', 'Apache']
},
];

inquirer
.prompt(questions)
.then(answers => {
    createMD(answers);
});

const createMD = data => {
 const template = `# project name is ${data.project}

## Description
${data.description}
${data.image}

## 📝 Table of Contents
- <a href="#description">Description</a>
- <a href="#installation">Installation</a>
- <a href="#usage">Usage</a>
- <a href="#contributors">Contributors</a>
- <a href="#license">License</a>
- <a href="#questions">Questions</a>
- <a href="#tests">Tests</a>

## Usage
${data.usage}
![projectPhoto](./${data.image})

## Installation
${data.install}

${data.video}

## Contributors
${data.contributors}

## Tests
${data.test}

## Questions
GITHUB: https://github.com/${data.username}/

Contact ${data.email}

## License
This project is under ${data.license} license
![License](https://img.shields.io/badge/License-${data.license}-green.svg)
`
fs.writeFile('README.md' , template, (err) => {
err ? console.log(err) : console.log('Success!!')
});

};