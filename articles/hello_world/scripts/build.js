const fs = require('fs');
const path = require('path');
const sass = require('sass');

const sourceHTML = path.resolve(__dirname, '..', 'src', 'hello_world.html');
const distHTML = path.resolve(__dirname, '..', 'dist', 'hello_world.html');
const sourceSASS = path.resolve(__dirname, '..', 'src', 'hello_world.scss');

fs.copyFile(sourceHTML, distHTML, () => console.log('HTML build complete.'));

const renderedSASS = sass.compile(sourceSASS);
fs.writeFile(
  path.resolve(__dirname, '..', 'dist', 'hello_world.css'),
  renderedSASS.css,
  {},
  () => console.log('SASS build complete.')
);
