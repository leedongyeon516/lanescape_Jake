<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.post.title }}</h1>
      <div class="post-image">
        <g-image :src="$page.post.heroImage.file.url"></g-image>
      </div>
      <div class="post-date">
        Posted on <span>{{ $page.post.date }}</span>
      </div>
      <div v-html="content" />
      <br />
      <g-link class="blog-link" to="/blog/">↽ Back to blog</g-link>
    </div>
    <Footer />
  </Layout>
</template>

<page-query>
  query Post($path: String!) {
    post: contentfulBlogPost(path: $path) {
      title,
      date(format: "MMMM D, Y")
      heroImage {
        file {
          url
        }
      },
      body
    }
  }
</page-query>

<script>
import MarkdownIt from 'markdown-it'
import Footer from '../components/Footer.vue'

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

.container h1 {
  text-align: center;
}

.post-date {
  color: rgb(150, 190, 150);
}

.post-image {
  display: flex;
  justify-content: center;
}

.post-image img {
  width: 75%;
  height: 45vh;
  margin: 2rem 0;
  box-shadow: 0px 0px 10px#888;
  object-fit: cover;
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

@media screen and (max-width: 868px) {
  .container h1 {
    font-size: 1.5rem;
  }
}
</style>
