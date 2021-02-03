module.exports = {
  siteName: 'Lanescape',
  siteDescription: '',
  siteUrl: '',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'vagc6170xsnj',
        accessToken: 'qxzYwiX5M_xwHwSPpkSYMC09DlCywhqLkgzU-pqkRrA',
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post'
      }
    }
  ],
  templates: {
    Post: '/blog/:path'
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener'],
      anchorClassName: 'icon icon-link'
    }
  }
}
