<template>
  <div>
    <div class="footer-image-container">
      <img src="../images/footer-image.jpg" />
    </div>
    <footer>
      Copyright © 2021 Designed and developed by Dongyeon Lee
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
img {
  width: 100%;
  height: 45vh;
  margin-top: 25vh;
  filter: grayscale(0.8);
  object-fit: cover;
}

footer {
  font-size: 0.75rem;
  text-align: center;
  padding: 20px 0 25px 0;
}
</style>
