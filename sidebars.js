/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

const { sidebar: stocksSidebar } = require('./sidebars/stocks');
const { sidebar: economicsSidebar } = require('./sidebars/economics');
const { sidebar: confuciusSidebar } = require('./sidebars/confucius');
const { sidebar: zenSidebar } = require('./sidebars/zen');
const { sidebar: poemsSidebar } = require('./sidebars/poems');
const { sidebar: fluidSidebar } = require('./sidebars/fluid');

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  stocksSidebar,
  economicsSidebar,
  confuciusSidebar,
  zenSidebar,
  poemsSidebar,
  fluidSidebar

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
