const fs = require("fs")
const inquirer = require("inquirer")

const questions = [
   {
      type: "input",
      message: "What is the title of the project?",
      name: "title",
      default: "Readme.md"
   },
   // {
   //    type: "input",
   //    message: "Enter your badge code",
   //    name: "badge",
   //    default: "Tast"
   // },
   {
      type: "input",
      message: "Please write a description of your project?",
      name: "description",
      default: "Tast"
   },
   {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "installation",
      default: "Tast"
   },
   {
      type: "input",
      message: "Desctibe usage",
      name: "usage",
      default: "Tast"
   },
   {
      type: "rawlist",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3Clause", "None"],
      default: "Tast"
   },
   {
      type: "input",
      message: "Please provide any details about contributing guidelines:",
      name: "contribute",
      default: "Tast"
   },
   {
      type: "input",
      message: "What command should be run to run tests?",
      name: "test",
      default: "Tast"
   },
   {
      type: "input",
      message: "Please enter your Email address",
      name: "email",
      default: "Tast"
   },
   {
      type: "input",
      message: "Please enter your GitHub username",
      name: "github",
      default: "Tast"
   }
]

inquirer.prompt(questions).then((res) => {
   console.log(res)

   // const userFile = res.name.toLowerCase().split(" ").join("") + ".json"

   fs.appendFileSync("README.md", ("# **" + res.title + "**") + '\n', function (err) {
      if (err) throw err
      console.log("Successfully! Created a title")
   })
   fs.appendFileSync("README.md", ('\n' + "[![License](https://img.shields.io/badge/License-" + res.license.slice("-") + "-blue.svg)](https://opensource.org/licenses/" + res.license + ")" + '\n') + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created License")
   })

   // fs.appendFileSync("README.md", ('\n' + "### " + res.badge) + '\n', function (err) {
   //    if (err) throw err
   //    console.log("Successfully! Created a Badge")
   // })

   fs.appendFileSync("README.md", ("## Description" + '\n' + "### " + res.description) + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created a Description")
   })

   fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + '- ' + ["[Instructions](#instructions)", "[Usage](#usage)", "[License](#license)", "[Contibute](#contibute)", "[Test](#test)", "[Questions](#questions)"].join('\n' + '- ')) + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created a Table")
   })

   fs.appendFileSync("README.md", ("## Installation" + '\n' + "### To install necessary dependencies, run the following command: \n```" + res.installation) + "\n```" + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created a Instructions")
   })
   fs.appendFileSync("README.md", ("## Usage" + '\n' + "### " + res.usage) + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created a Usage")
   })

   fs.appendFileSync("README.md", ("## Contibute" + '\n' + "### " + res.contribute) + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Seccessfully! Created Contribute")
   })
   fs.appendFileSync("README.md", ("## License" + '\n' + "### This project is licensed under the " + [res.license] + " license." + '\n') + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created License")
   })
   fs.appendFileSync("README.md", ("## Tests" + '\n' + "### To run tests, run the following command: \n ```" + res.test) + "\n ```" + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created Test")
   })
   fs.appendFileSync("README.md", ("## Questions" + '\n' + "### If you have any questions about the repo, contact me directly at my [Email](mailto:" + res.email + "). You can find more of my work at my [GitHub](https://github.com/" + res.github + ").") + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created Test")
   })
   console.log("Generating README...")
})