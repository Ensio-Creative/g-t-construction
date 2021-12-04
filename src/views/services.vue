<template>
<section class="bg-hero">
  <div class="content">
    <h1>Our Services</h1>
  </div>
</section>

<section class="side-msg">
  <div class="side-message">
    <div class="container">
    <p>G&T Construction operates across a range of sectors, with a particular specialism in the construction of residential, industrial, commercial, retail, and educational facilities.</p>
  </div>
  </div>
</section>

<section class="services-our-services">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-12 col-md-4 service-item mt-5">
            <div class="new-bg">
              <div class="content">
                <div class="read-more">
                  <div class="thumbnail"></div>
                  <p>G&T Construction works closely with clients, developers, and architects to create purpose-built facilities that meet the requirements of scheme aesthetics, function, and budget.</p>
                </div>
                  <!-- <img src="/img/Vector 42.svg" alt=""> -->
                <p>Newbuild</p>
                <button class="learn-btn">Learn more</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 service-item mt-5">
            <div class="expansion-bg">
              <div class="content">
                <p>Expansion/Extension</p>
                <div class="read-more">
                  <p></p>
                </div>
                <button class="learn-btn">Learn more</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 service-item mt-5">
            <div class="refurbishment-bg">
              <div class="content">
                <p>Refurbishment</p>
                <button class="learn-btn">Learn more</button>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 service-item mt-5">
            <div class="refurbishment-bg">
              <div class="content">
                <p>Fit-out</p>
                <button class="learn-btn">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<Footer />
</template>

<script >
// import ref from 'vue'
import Footer from '../components/common/Footer.vue';
export default {
  title: 'Our services | G&T',
  components: { Footer }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/img/Pexels Photo by Los Muertos Crew.png') !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  height: 80vh;
  display: flex;
  align-items: center;
  .content {
    width: 500px;
    margin: auto;
    h1 {
      font-size: 80px;
    font-weight: bold;
    }
  }
}
</style>