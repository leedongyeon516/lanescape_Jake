<template>
  <Layout>
    <img class="hero-image" src="../images/hero-image.jpg" />
    <div class="hero-text">
      <h1>We're Lanescape</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
        Dolores, aperiam non officia eos quod asperiores
      </p>
      <g-link class="our-story-btn" to="/company/">OUR STORY</g-link>
    </div>

    <div class="container">
      <DesignBlock />
      <div class="gallery">
        <img
          class="gallery-image-1"
          src="../images/gallery-image-1.jpg"
          alt=""
        />
        <img
          class="gallery-image-2"
          src="../images/gallery-image-2.jpg"
          alt=""
        />
        <img
          class="gallery-image-3"
          src="../images/gallery-image-3.jpg"
          alt=""
        />
        <img
          class="gallery-image-4"
          src="../images/gallery-image-4.jpg"
          alt=""
        />
      </div>

      <article v-for="post in $page.posts.edges" :key="post.id">
        <h2>
          <g-link class="blog-title" :to="post.node.path" rel="bookmark">{{
            post.node.title
          }}</g-link>
        </h2>
        <p>{{ post.node.summary }}..</p>
      </article>
    </div>
    <Footer />
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 2, page: $page) {
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
import DesignBlock from '../components/DesignBlock'
import Footer from '../components/Footer'

export default {
  components: {
    DesignBlock,
    Footer
  },
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style scoped>
img {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.hero-text {
  background: rgb(175, 210, 175);
  position: absolute;
  top: 45vh;
  left: 50%;
  padding: 2rem 2rem 4rem 2rem;
  z-index: 1;
}

.hero-text p {
  margin-bottom: 3rem;
}

.our-story-btn {
  font-size: 0.8rem;
  text-decoration: none;
  color: #111;
  padding: 10px 20px;
  border: 1px #111 solid;
  border-radius: 2.5rem;
}

.our-story-btn:hover::after {
  content: ' ⇁';
}

.gallery {
  position: relative;
  margin-top: 10rem;
  display: grid;
  grid-template-areas:
    'area-1 area-2'
    'area-3 area-4';
}

.gallery img {
  width: 100%;
  height: 45vh;
}

.gallery-image-1 {
  grid-area: 'area-1';
}

.gallery-image-2 {
  grid-area: 'area-2';
}

.gallery-image-3 {
  grid-area: 'area-3';
}

.gallery-image-4 {
  grid-area: 'area-4';
}

article {
  margin-top: 55px;
  padding: 15px 0;
  border-bottom: 3px rgb(150, 190, 150) solid;
  display: flex;
  align-items: center;
}

article h2 {
  flex: 1.25;
}

article p {
  padding-left: 25px;
  flex: 2;
}

.blog-title {
  text-decoration: none;
  color: #444;
}

.blog-title:hover {
  color: rgb(150, 190, 150);
}

@media screen and (max-width: 868px) {
  .hero-text {
    top: 50%;
    left: 0;
  }

  .gallery {
    grid-template-areas:
      'area-1'
      'area-2'
      'area-3'
      'area-4';
  }

  article {
    flex-direction: column;
  }

  article p {
    padding-left: 0;
  }
}
</style>
