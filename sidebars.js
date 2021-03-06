// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // sidebar: [{ type: 'autogenerated', dirName: '.' }],

  // But you can create a sidebar manually
  sidebar: [
    {
      type: 'doc',
      label: 'Usage',
      id: 'usage',
    },
    {
      type: 'category',
      collapsed: false,
      label: 'API Reference',
      items: ['api/modules', 'api/interfaces'],
    },
    {
      type: 'doc',
      id: 'handbook',
      label: 'Handbook',
    },
    {
      type: 'category',
      label: 'Plugins',
      link: { id: 'plugins/plugins', type: 'doc' },
      items: ['plugins/diagnostics/diagnostics'],
    },
    // {
    //   type: 'category',
    //   label: 'Handbook',
    // },
    // {
    //   type: 'category',
    //   label: 'Plugins',
    //   items: [
    //     {
    //       type: 'category',
    //       label: 'Diagnostics',
    //       items: ['assertRef'],
    //     },
    //   ],
    // },
  ],
}

module.exports = sidebars
