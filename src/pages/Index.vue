<template>
  <Layout>
    <img class="greet-image" src="../../uploads/hello.svg" />

    <h2 class="mb-4">LarsLidgren.se</h2>
    <p>
      This is a starter project for Gridsome that comes with many features out of the box. It utilizes Bootstrap that is well known
      for powerful styling and layout. Ready to be deployed, automagically imports data to CMS and sets up your /admin page for easy
      access to edit your content. 
    </p>

    <p>
      It is designed to use Netlify, Forestry and Github which all have very fair free tier to their services, so you wont need to pay
      for monthly subscriptions and costly hosting fees.
    </p>

    <h3 class="mt-5 mb-4">Features</h3>
    <p>This starter project includes some of the latest powerful technologies.</p>
    <ul>
      <li>
        <b>Gridsome - </b> Vue.js & GraphQL powered framework genrating static files.
      </li>
      <li>
        <b>Bootstrap & Bootstrap Vue - </b> Powerful styling and layout with styled Vue components.
      </li>
      <li>
        <b>Sass - </b> Professional grade CSS extension with many features.
      </li>
      <li>
        <b>Forestry.io - </b> CMS that uses the Github repo for storage.
      </li>
      <li>
        <b>Markdown - </b> Easy and widely used format for writing content.
      </li>
      <li>
        <b>Netlify forms - </b> Netlify forms ready to be used after deployment.
      </li>
      <li>
        <b>Google Analytics - </b> Just add your tracking ID in the config.
      </li>
      <li>
        <b>Sitemap generator - </b> Automatically generates a sitemap.xml file.
      </li>
    </ul>

    <h3 class="mt-5 mb-4">Getting started</h3>
    <p>The easiest way to get started quick is to use the Forestry button below, which will create a Github repository for you,
      clone this starter repo and import all data to the CMS. After that is complete, you can just go to <a href="https://www.netlify.com/">Netlify</a>
      and connect your newly created project that will set it up for automatic deployment when you commit to the Github repo.
    </p>

    <a href="https://app.forestry.io/quick-start?repo=LokeCarlsson/gridsome-starter-bootstrap&amp;provider=github&amp;engine=vuepress" target="_blank" rel="nofollow">
      <img class="mt-3 mb-3" src="https://camo.githubusercontent.com/2455e97e4e989374a355fb0bea7ad364f2561c92/68747470733a2f2f6173736574732e666f7265737472792e696f2f696d706f72742d746f2d666f7265737472794b2e737667" alt="Import this project into Forestry" data-canonical-src="https://assets.forestry.io/import-to-forestryK.svg" style="max-width:100%;" />
    </a>

    <h3 class="mt-4 mb-4">Netlify config</h3>
    <p>
      Use the following build config for Netlify
    </p>
    
    <p>
      Build command: <code>gridsome build</code>
    </p>
    <p>
      Publish directory: <code>dist</code>
    </p>


    <h4 class="mb-3 mt-5">Manually install just the project (without CMS).</h4>

    <p>If you haven't already installed Gridsome CLI: <code>npm install --global @gridsome/cli</code></p>

    <ol>
      <li><code>gridsome create my-gridsome-site https://github.com/LokeCarlsson/gridsome-starter-bootstrap.git</code></li>

      <li><code>cd my-gridsome-site</code> to open folder</li>

      <li><code>yarn dev</code> to start local dev server at <code>http://localhost:8080</code></li>

      <li>Happy hacking 🎉🙌</li>
    </ol>

      <h1 class="my-4 mb-5">Index</h1>

    <g-link
      :to="item.node.path"
      v-for="item in $page.posts.edges"
      :key="item.node.id"
      class="blog-post"
    >

    <div class="media my-5">
      <!--<g-image immediate :src="item.node.image" class="mr-3" alt="image" />-->
      <div class="media-body">
        <h5 class="mt-0">{{item.node.title}}</h5>
        <p class="text-dark">{{item.node.id}}</p>
      </div>
    </div>

    </g-link>


  </Layout>
</template>

<page-query>
query {
  posts: allIndexPost {
    edges {
      node {
        id
        title
      }
    }
  }
}
</page-query>


<script>
export default {
  metaInfo: {
    title: 'LL Start'
  }
}
</script>


<style lang="scss" scoped>
.media {
  img {
    width: 120px;
    height: 120px;
  }
}
.greet-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
  padding-bottom: 50px;
}

</style>
