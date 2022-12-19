#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const sass = require('sass');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

if (!argv.html) process.exit(1);
if (!argv.scss) process.exit(1);

const sourceHTML = path.resolve(__dirname, '..', 'src', `${argv.html}.html`);
const distHTML = path.resolve(__dirname, '..', 'dist', `${argv.html}.html`);

fs.copyFile(sourceHTML, distHTML, () => console.log('HTML build complete.'));

const sourceSASS = path.resolve(__dirname, '..', 'src', `${argv.scss}.scss`);
const renderedSASS = sass.compile(sourceSASS);

fs.writeFile(
  path.resolve(__dirname, '..', 'dist', `${argv.scss}.css`),
  renderedSASS.css,
  {},
  () => console.log('SASS build complete.')
);
