<template>
  <Layout>
    <HeaderImage />
    <div class="container" v-if="$page">
      <h1 class="page-title">Blog</h1>
      <article v-for="{ node } in $page.posts.edges" :key="node.id">
        <h2>
          <g-link class="blog-title" :to="node.path">{{ node.title }}</g-link>
        </h2>
        <div>
          Posted on <span>{{ node.date }}</span>
        </div>
        <p class="blog-excerpt">{{ node.excerpt }}..</p>
        <g-link class="blog-link" :to="node.path">Read More ⇁</g-link>
      </article>

      <pager
        v-if="$page.posts.pageInfo.totalPages > 1"
        :info="$page.posts.pageInfo"
      />
    </div>
    <Footer />
  </Layout>
</template>

<page-query>
query Posts($page: Int) {
  posts: allContentfulBlogPost(sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        path
        title
        date(format: "MMMM D, Y")
        excerpt
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

.blog-excerpt {
  margin-bottom: 2rem;
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
