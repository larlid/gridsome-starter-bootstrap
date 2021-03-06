module.exports = {
  siteName: 'LarsLidgren.se',
  siteDescription: 'Personlig hemsida med aktier, personlig information och tips',
  siteUrl: 'https://gridsome-starter-bootstrap.loke.dev',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: { 
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: { 
        path: 'index/**/*.md',
        typeName: 'IndexPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        // id: 'UA-72659574-10'
        id: 'UA-113764807-2'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
}
