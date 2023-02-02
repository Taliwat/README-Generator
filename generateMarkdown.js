// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  let choice = data.LICENSE;
  if(choice === "MIT") {
    return `## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else {
    return "";
  }};
  




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  let choice = data.LICENSE;
  if(choice === "None") {
    return ""
  } else {
    return `* [License](#license)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.TITLE}

## Table of Contents
* [Description](#description)
${renderLicenseSection(data)}

## Description
${data.DESCRIPTION}

## Installation
${data.INSTALLATION}

## Usage
${data.USAGE}

${renderLicenseBadge(data)}

## Contributing
${data.CONTRIBUTING}

## Tests
${data.TESTS}

## Questions
${data.QUESTIONS}
`;
}

module.exports = generateMarkdown;
