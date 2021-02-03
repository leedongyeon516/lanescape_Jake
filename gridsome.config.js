module.exports = {
  siteName: 'Lanescape',
  siteDescription: '',
  siteUrl: '',
  plugins: [
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
