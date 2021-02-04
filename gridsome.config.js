module.exports = {
  siteName: 'Lanescape',
  siteDescription: '',
  siteUrl: '',
  plugins: [
    // I stored a space and token in here on purpose(instead of env file)
    // so that people(at NFA) can query the database directly if it's necessary.
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
    // For uploading Markdown file to the website
    // It works, but since it's not the requirement, I'm not using it.
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
