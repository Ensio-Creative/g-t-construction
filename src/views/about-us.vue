<template>
<section class="bg-hero">
  <div class="content">
    <h1>About us</h1>
  </div>
</section>

<section class="who-we-are">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 item">
        <div class="content">
          <h2>Who we are</h2>
          <p>Established in 2007 and based in the East of England, Integrity Projects has evolved from its architectural and design consultancy roots to a main contracting business with capability in delivering a wide range of construction projects across East of England. We have a combined experience of providing design and construction management consultancy in the UK for over 15 years.</p>
        </div>
      </div>
      <div class="col-12 col-md-6 item"></div>
    </div>
  </div>
</section>
<section class="images-view">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 item">
        <div class="img-view-1"></div>
      </div>
      <div class="col-12 col-md-6 item">
        <div class="img-view-2"></div>
        <div class="img-view-3"></div>
      </div>
    </div>
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