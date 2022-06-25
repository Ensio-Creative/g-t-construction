<template>
<section class="bg-hero">
  <div class="content">
    <h1>Sectors</h1>
  </div>
</section>

<section class="side-msg">
  <div class="side-message">
    <div class="container">
    <p>Integrity Projects operates across a range of sectors including residential, industrial, commercial, retail and educational projects.</p>
  </div>
  </div>
</section>

<section class="sector-card">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-4 sector-item">
        <div class="sector-content">
          <div class="img-1"></div>
          <h3>Residential</h3>
          <p>The Residential sector is wide- ranging and we can provide design management services to both private domestic clients and major residential led mixed-use developments, student accommodation and specialist housing (retirement living and extra care).  </p>
        </div>
      </div>
      <div class="col-12 col-md-4 sector-item">
        <div class="sector-content">
          <div class="img-2"></div>
          <h3>Industrial & Distribution</h3>
          <p>At Integrity Projects we have developed design management capability for delivery of industrial and logistics facilities. We understand and support the commercial need to produce sustainable and high-quality structures, often at speed, creating lasting value for Clients. </p>
        </div>
      </div>
      <div class="col-12 col-md-4 sector-item">
        <div class="sector-content">
          <div class="img-3"></div>
          <h3>Commercial</h3>
          <p>Integrity Projects works with commercial businesses to create customer-friendly facilities. We work with our specialist supply chain to ensure that your facilities are designed and built to the optimum specification, safely and sustainably.  </p>
        </div>
      </div>
      <div class="col-12 col-md-4 sector-item">
        <div class="sector-content">
          <div class="img-4"></div>
          <h3>Retail & Leisure</h3>
          <p>The construction of retail and leisure facilities encompasses a wide range of aesthetic treatments and construction methodologies. We offer a collaborative design management approach and to deliver high quality building solution.</p>
        </div>
      </div>
      <div class="col-12 col-md-4 sector-item">
        <div class="sector-content">
          <div class="img-5"></div>
          <h3>Education</h3>
          <p>Over the last decade, we have utilised our design management expertise in the delivery of various education projects, including nursery, primary and secondary schools to create improvement of sustainable learning environments. Work in this sector is often driven by stringent time constraints, and we work collaboratively with end users to implement solutions that optimise cost, drive efficiency, and enhance outcomes. </p>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer />
</template>

<script>
import Footer from '../components/common/Footer.vue';
export default {
  title: 'Integrity projects - Sectors',
  components: { Footer }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/img/Pexels Photo by Jimmy Chan.png') !important;
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