<template>
<section class="bg-hero">
  <div class="content">
    <h1>Page not found</h1>
    <router-link to="/">Home</router-link>
  </div>
</section>
<Footer />
</template>

<script>
import Footer from '../components/common/Footer.vue';
export default {
  title: 'G&T Construction - About',
  components: {Footer}
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/img/pexels-mikael-blomkvist-8961401\ 1.png') !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  height: 40vh;
  display: flex;
  align-items: center;
  .content {
    width: 183px;
    margin: auto;
    height: 0vh;
    h1 {
      text-align: center;
      font-size: 40px;
    font-weight: bold;
    }
  }
}

a {
  color: #fff;
  font-size: 18px;
  text-align: center;
}

@media (min-width: 1000px) {
  .bg-hero {
    height: 80vh;
  .content {
    width: 500px;
    margin: auto;
    height: 20vh;
    h1 {
      font-size: 80px;
    }
  }
}
}
</style>