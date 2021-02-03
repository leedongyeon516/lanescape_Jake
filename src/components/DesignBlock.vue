<template>
  <div class="design-block-container">
    <img src="../images/gallery-image-4.jpg" />
    <div class="design-block-text">
      <h2>Reusable design block</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed non
        repellendus facilis repudiandae eius ut dicta, libero enim soluta ea
        quisquam, labore exercitationem. Voluptates quod corrupti eum dolor odio
        vel?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DesignBlock'
}
</script>

<style scoped>
.design-block-container {
  position: relative;
  margin-top: 2rem;
  margin-bottom: 8rem;
  display: flex;
}

img {
  width: 35vw;
  height: 45vh;
  box-shadow: 0px 0px 10px #888;
  object-fit: cover;
  z-index: 2;
}

.design-block-text {
  background: #e3e3e3;
  position: absolute;
  top: 1.5rem;
  left: 40%;
  width: 35vw;
  height: 100%;
  padding: 3rem 4rem 0rem 6rem;
}

@media screen and (max-width: 868px) {
  .design-block-container {
    flex-direction: column;
  }

  img {
    width: 75vw;
  }

  .design-block-text {
    text-align: center;
    position: static;
    left: 0;
    width: 75vw;
    height: 40vh;
    padding: 0;
  }

  .design-block-text h2 {
    padding-top: 20px;
  }

  .design-block-text p {
    padding-left: 25px;
    padding-right: 25px;
  }
}

@media screen and (max-width: 568px) {
  .design-block-text {
    height: 55vh;
  }
}

@media screen and (min-width: 1268px) {
  .design-block-text h2,
  .design-block-text p {
    padding-left: 15%;
  }
}

@media screen and (max-height: 568px) {
  .design-block-container {
    display: none;
  }
}
</style>
