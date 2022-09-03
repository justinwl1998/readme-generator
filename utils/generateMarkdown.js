// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ""
  }
  // Why the large switch function to do this? who knows man
  let badge;
  switch(license) {
    case "Apache 2.0":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "BSD-2":
      badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
      break;
    case  "BSD-3":
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "Boost Software License 1.0":
      badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "Creative Commons Zero v1.0 Universal":
      badge = "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
      break;
    case "Eclipse Public license 2.0":
      badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      break;
    case "GNU Affero General Public License v3.0":
      badge = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      break;
    case "GNU General Public License v2.0":
      badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
      break;
    case "GNU Lesser General Public License v2.1":
      badge = "[![License: LGPL v2.1](https://img.shields.io/badge/License-LGPL_v2.1-blue.svg)](https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html)";
      break;
    case "Mozilla Public License 2.0":
      badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "The Unlicense":
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;    
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  }

  let link;
  switch(license) {
    case "Apache 2.0":
      link = "https://opensource.org/licenses/Apache-2.0"
      break;
    case "GNU General Public License v3.0":
      link = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "MIT":
      link = "https://opensource.org/licenses/MIT";
      break;
    case "BSD-2":
      link = "https://opensource.org/licenses/BSD-2-Clause";
      break;
    case  "BSD-3":
      link = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "Boost Software License 1.0":
      link = "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "Creative Commons Zero v1.0 Universal":
      link = "https://creativecommons.org/publicdomain/zero/1.0/";
      break;
    case "Eclipse Public license 2.0":
      link = "https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba";
      break;
    case "GNU Affero General Public License v3.0":
      link = "https://www.gnu.org/licenses/agpl-3.0";
      break;
    case "GNU General Public License v2.0":
      link = "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
      break;
    case "GNU Lesser General Public License v2.1":
      link = "https://www.gnu.org/licenses/old-licenses/lgpl-2.1.en.html";
      break;
    case "Mozilla Public License 2.0":
      link = "https://opensource.org/licenses/MPL-2.0";
      break;
    case "The Unlicense":
      link = "https://unlicense.org";
      break;
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }

  return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
// Have fun finding any comments here, there won't be any
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.desc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${data.license === "None" ? ``: `- [License](#license)
`}
## Installation

${data.install}

## Usage

${data.usage}

## Contributing

${data.contrib}

## Tests

${data.test}

## Questions

[${data.githubUsername}](https://www.github.com/${data.githubUsername}) is the creator of the project and can be E-mailed at ${data.email}

${renderLicenseSection(data.license)}
`;
}

module.exports = {
   generateMarkdown
};
