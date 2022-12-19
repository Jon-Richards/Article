const fs = require('fs');
const path = require('path');
const sass = require('sass');

const sourceHTML = path.resolve(__dirname, '..', 'src', 'quality_over_quantity.html');
const distHTML = path.resolve(__dirname, '..', 'dist', 'quality_over_quantity.html');

fs.copyFile(sourceHTML, distHTML, () => console.log('HTML build complete.'));

const sourceSASS = path.resolve(__dirname, '..', 'src', 'quality_over_quantity.scss');
const renderedSASS = sass.compile(sourceSASS);

fs.writeFile(
  path.resolve(__dirname, '..', 'dist', 'quality_over_quantity.css'),
  renderedSASS.css,
  {},
  () => console.log('SASS build complete.')
);
