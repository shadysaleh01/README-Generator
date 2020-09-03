const fs = require("fs")
const inquirer = require("inquirer")

const questions = [
   {
      type: "input",
      message: "What is the title of the project?",
      name: "title",
   },
   {
      type: "input",
      message: "Please write a description of your project?",
      name: "description",
   },
   {
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "installation",
   },
   {
      type: "input",
      message: "Desctibe usage",
      name: "usage",
   },
   {
      type: "rawlist",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3Clause", "None"],
   },
   {
      type: "input",
      message: "Please provide any details about contributing guidelines:",
      name: "contributing",
   },
   {
      type: "input",
      message: "What command should be run to run tests?",
      name: "test",
   },
   {
      type: "input",
      message: "Please enter your Email address",
      name: "email",
   },
   {
      type: "input",
      message: "Please enter your GitHub username",
      name: "github",
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
   // fs.appendFileSync("README.md", "![Alt Video](https://drive.google.com/file/d/1ufmDXTfcrsYziI7gU-a8jKqeVNMyOanw/view)" + '\n', function (err) {
   //    if (err) {
   //       return console.log(err)
   //    }
   //    console.log("Success")
   // })

   fs.appendFileSync("README.md", ("## Description" + '\n' + "### " + res.description) + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created a Description")
   })

   fs.appendFileSync("README.md", ("## Table of Contents" + '\n' + '- ' + ["[Installation](#installation)", "[Usage](#usage)", "[License](#license)", "[Contributing](#contributing)", "[Tests](#tests)", "[Questions](#questions)"].join('\n' + '- ')) + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created a Table")
   })

   fs.appendFileSync("README.md", ("## Installation" + '\n' + "### To install necessary dependencies, run the following command: \n```\n" + res.installation) + "\n```" + '\n', function (err) {
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

   fs.appendFileSync("README.md", ("## Contributing" + '\n' + "### " + res.contributing) + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Seccessfully! Created Contributing")
   })
   fs.appendFileSync("README.md", ("## License" + '\n' + "### This project is licensed under the " + [res.license] + " license." + '\n') + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created License")
   })
   fs.appendFileSync("README.md", ("## Tests" + '\n' + "### To run tests, run the following command: \n ``` \n" + res.tests) + "\n ```" + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created Tests")
   })
   fs.appendFileSync("README.md", ("## Questions" + '\n' + "### If you have any questions about the repo, contact me directly at my [Email](mailto:" + res.email + "). You can find more of my work at my [GitHub](https://github.com/" + res.github + ").") + '\n', function (err) {
      if (err) {
         return console.log(err)
      }
      console.log("Successfully! Created Contacts")
   })
   // fs.appendFileSync("README.md", "![Full Demo Video](https://drive.google.com/file/d/1ufmDXTfcrsYziI7gU-a8jKqeVNMyOanw/view)", function (err) {
   //    if (err) {
   //       return console.log(err)
   //    }
   //    console.log("seccess")
   // })
   console.log("Generating README...")
})