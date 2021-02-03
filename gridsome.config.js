module.exports = {
  siteName: 'Lanescape',
  siteDescription: '',
  siteUrl: '',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'd7dd9m7rm4tq',
        accessToken: 'gRg14PPWtIqsePYWw4osgHV1oxObz_wDFlEeKvGCW0M',
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
    ContentfulBlogPost: '/blog/:slug/'
    //Post: '/blog/:path'
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
