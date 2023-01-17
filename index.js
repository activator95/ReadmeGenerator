const inquirer = require('inquirer');
const fs = require ('fs');

const questions = [
{
type: 'input',
name: 'facebook',
message: 'what is your facebook name'
},
{
    type: 'input',
    name: 'email',
    message: 'what is your email'
}
];

inquirer
.prompt(questions)
.then(answers => {
    createMD(answers);
  console.log(`my facebook name is ${answers.facebook} and my email is ${answers.email}`)
});

const createMD = data => {
 const template = `# my facebook name is ${data.facebook}
 
 ## my email is ${data.email} 
 `
console.log (template);
fs.writeFile('README.md' , template, (err) => {
err ? console.log(err) : console.log('Success!!')
});

};