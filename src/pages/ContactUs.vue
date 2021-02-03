<template>
  <Layout>
    <HeaderImage />
    <div class="container">
      <div>
        <h1 class="page-title">Contact us</h1>
        <div class="contact-info">
          Lanescape 140 Yonge St, Suite 200 Toronto, ON M5C 1X6
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
</template>

<script>
import HeaderImage from '../components/HeaderImage'
import Footer from '../components/Footer'

export default {
  components: {
    HeaderImage,
    Footer
  },
  metaInfo: {
    title: 'Contact Us'
  }
}
</script>
