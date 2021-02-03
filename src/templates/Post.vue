<template>
  <Layout>
    <div class="container">
      <h1>{{ $page.post.title }}</h1>
      <p>Posted on {{ $page.post.date }}</p>
      <div
        class="markdown-body mb-8"
        id="article-area"
        v-html="$page.post.content"
      />
      <br />
      <g-link class="blog-link" to="/blog/">↽ Back to blog</g-link>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
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
