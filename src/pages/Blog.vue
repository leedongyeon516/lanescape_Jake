<template>
  <Layout>
    <HeaderImage />
    <div class="container">
      <h1 class="page-title">Blog</h1>
      <article v-for="post in $page.posts.edges" :key="post.id">
        <h2>
          <g-link class="blog-title" :to="post.node.path" rel="bookmark">{{
            post.node.title
          }}</g-link>
        </h2>
        <p>
          Posted on
          <time :datetime="post.node.date">{{ post.node.date }}</time>
        </p>
        <p>{{ post.node.summary }}..</p>
        <g-link class="blog-link" :to="post.node.path">Read more ⇁</g-link>
      </article>

      <Pager class="blog-pagination" :info="$page.posts.pageInfo" />
    </div>
    <Footer />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 7, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
import HeaderImage from '../components/HeaderImage'
import Footer from '../components/Footer'

export default {
  components: {
    Pager,
    HeaderImage,
    Footer
  },
  metaInfo: {
    title: 'Lanescapes newsfeed'
  }
}
</script>

<style scoped>
article {
  padding: 25px 0;
}

.blog-title {
  text-decoration: none;
  color: #444;
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

.blog-pagination {
  text-align: center;
  text-decoration: none;
}
</style>
