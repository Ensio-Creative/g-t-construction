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
          <h2>We are Integrity Projects</h2>
          <p>
            At Integrity Projects, we understand that the management and coordination of design for complex, multi-disciplinary projects present several significant challenges. Our Design Management service is tailored specifically to meet these challenges and enable our clients and their designers to deliver successful projects.
          </p>
          <p>
            We have a wealth of in-house design resource and in partnership with supply chain partners, we can support our clients in a cost-effective manner to facilitate the delivery of coordinated design for their construction projects.
          </p>
          <p>
             What sets us apart is our design and build experience, coupled with our desire to build lasting relationships with our clients and contacts in the construction industry. 
          </p>
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
  title: 'Integrity projects - About',
  components: {Footer}
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/img/about-header.png') !important;
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