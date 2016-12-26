/* global find, ls, sed */
require('shelljs/global');
var exec = require('child_process').exec;
var inquirer = require('inquirer');

// You can manually add configuration options here if you don't want to go through the
// interactive script or if the interactive script is not working.
var CONFIG = {
    projectname: '',
    repo: '',
    author: ''
};

// ---

exec("sed '1,/--trim--/d' README.md | tee README.md");

if (CONFIG.projectname && CONFIG.repo) {
    run(CONFIG);
    process.exit(0);
}

var q1 = {
    name: 'projectname',
    message: 'What is your project name?',
    type: 'input'
};

var q2 = {
    name: 'repo',
    message: 'Where is your component on Github? (e.g., yourusername/aframe-rick-roll-component)',
    type: 'input'
};

var q3 = {
    name: 'author',
    message: 'Who are you? (e.g., Jane John <jj@example.com>)',
    type: 'input'
};

inquirer.prompt([q1, q2, q3]).then(run);

function run(ans) {
    ls(['package.json', 'README.md']).forEach(function(file) {
        sed('-i', 'project-name', ans.projectname, file);
        sed('-i', 'jujunjun110/aframe-application-boilerplate', ans.repo, file);
        sed('-i', 'jujunjun110 <https://twitter.com/jujunjun110>', ans.author, file);
    });
}