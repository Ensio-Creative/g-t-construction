<template>
  <section class="bg-hero">
    <div class="container">
      <div class="content">
      <h2>We define and manage the design processes for construction projects</h2>
      <p class="first-hero-text">We offer a full design management service or work in partnership with your existing project team to deliver your building solution.</p>
      <button @click="$router.push('/sectors')" class="btn-button">Learn more <img src="/img/Vector5.svg" alt=""> </button>
      <p class="pt-4">Residential | Industrial & Distribution | Commercial | Retail & Leisure | Education</p>
      </div>
    </div>
  </section>
  <section class="yellow-bg">
    <div class="container">
      <div class="content">
        <p>Integrity Projects Limited is a consultancy that provides architectural and design management services. We manage design process to deliver successful projects, irrespective of the size, scope, or location.</p>
      </div>
    </div>
  </section>
  <section class="home-about-us">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 col-md-6 about-item">
          <div class="content">
            <p class="title">ABOUT US</p>
          <h2>Explore Integrity Projects</h2>
          <p class="text-content">Established in 2007 and based in the East of England, Integrity Projects has its roots in architectural and design management consultancy with capability in delivering a wide range of construction projects across England.</p>
        <button @click="$router.push('/about-us')" class="btn-button">Learn more <img src="/img/Vector5.svg" alt=""></button>
        </div>
          </div>
        <div class="col-12 col-md-6 about-item"></div>
      </div>
    </div>
  </section>

  <section class="home-our-services">
    <div class="container">
      <div class="content">
        <p class="title">OUR SERVICES</p>
        <h2>Capabilities</h2>
        <p class="text">At Integrity Projects, we offer creative pricing, quality delivery and efficient service.</p>
          <div class="row ">
          <div class="col-12 col-md-4 service-item">
            <div @click="$router.push('/services')" class="design-bg">
            </div>
              <div class="title-text">
                <p @click="$router.push('/services')">Design Strategy</p>
              </div>
          </div>
          <div class="col-12 col-md-4 service-item">
            <div @click="$router.push('/services')" class="programming-bg">
            </div>
              <div class="title-text">
                <p @click="$router.push('/services')">Design Programming</p>
              </div>
          </div>
          <div class="col-12 col-md-4 service-item">
            <div @click="$router.push('/services')" class="deliverables-bg">
            </div>
              <div class="title-text">
                <p @click="$router.push('/services')">Design Deliverables</p>
              </div>
          </div>
          <div class="btn-container">
              <button @click="$router.push('/services')" class="btn-button">
              Learn more <img src="/img/Arrow1.svg" alt="">
            </button>
          </div>
        </div>
        </div>
      </div>
  </section>
  <Footer />
</template>

<script >
import { useRoute } from 'vue-router';
import Footer from '../components/common/Footer.vue';
export default {
  title: 'Integrity projects - Home',
  components: { Footer },
  setup(props, ctx) {
    const router = useRoute()
    const options = {
      rewind : true,
      perPage: 1,
      height : '25rem',
      width : '100rem',
      drag   : 'free',
      arrow: false,
      breakpoints: {
        1000: {
          perPage: 1,
        },
      },
    }

    return {
      options,
      router
    }
  }
}
</script>

<style lang="scss">
.spaces-add {
  padding-bottom: 90px;
}
.home-our-services{
  .btn-container {
    width: 200px;
    margin: auto;
    .btn-button{
      background-color: #0C0F68;
    }
  }
}
</style>