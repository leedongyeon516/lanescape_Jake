<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.post.title }}</h1>
      <!--<g-image :src="$page.post.heroImage.file.url">-->
      <div v-html="content" />
    </div>
    <Footer />
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: contentfulBlogPost(path: $path) {
      title,
      body
    }
  }
</page-query>

<script>
import MarkdownIt from 'markdown-it'
import Footer from '../components/Footer'

export default {
  components: {
    Footer
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  },
  computed: {
    content() {
      const md = new MarkdownIt()

      return md.render(this.$page.post.body)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 100px 0 100px 0;
}

p {
  color: rgb(150, 190, 150);
}

.blog-link {
  text-decoration: none;
  color: rgb(150, 190, 150);
  padding: 5px 15px;
  border: 1px rgb(150, 190, 150) solid;
  border-radius: 1rem;
}

.blog-link:hover {
  color: whitesmoke;
  background: rgb(150, 190, 150);
}
</style>
