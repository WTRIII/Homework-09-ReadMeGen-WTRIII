// TODO: Create a function to generate markdown for README
const generateMarkdown =({ title, description, contents, installation, usage, contributing, tests, question}) =>
`
  # Title: ${title}
  ### Description: 
  ${description}
  ## Table of Contents ${contents}
  ### Installation Instructions: ${installation}
  ### Application Usage: ${usage}
  ### Contributing: ${contributing}
  ### Testing: ${tests}
  ### Questions? Contact Me at https://github.com/${question}
`;

module.exports = generateMarkdown;
