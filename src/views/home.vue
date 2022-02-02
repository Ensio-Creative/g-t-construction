<template>
  <section class="bg-hero">
    <div class="container">
      <div class="content">
      <h2>Whatever you imagine, we build for you</h2>
      <p class="first-hero-text">We offer a full design and build service or work in partnership with your existing project team to deliver your building solution.</p>
      <button @click="$router.push('/sectors')" class="btn-button">Learn more <img src="/img/Vector5.svg" alt=""> </button>
      <p class="pt-4">Residential | Industrial & Distribution | Commercial | Retail & Leisure | Education</p>
      </div>
    </div>
  </section>
  <section class="yellow-bg">
    <div class="container">
      <div class="content">
        <p>Integrity Projects is a regional contractor specialising in the delivery of high-quality building projects to a wide range of Clients. We cover the counties of Hertfordshire, Bedfordshire, Buckinghamshire, Northamptonshire, and Cambridgeshire. Working as a main Contractor, we specialise in the construction of residential, commercial, retail, industrial and education projects.</p>
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
          <p class="text-content">Established in 2007 and based in the East of England, Integrity Projects has evolved from its architectural and design consultancy roots to a main contracting business with capability in delivering a wide range of construction projects across East of England.</p>
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
            <div @click="$router.push('/services')" class="new-bg">
            </div>
              <div class="title-text">
                <p @click="$router.push('/services')">Newbuild</p>
              </div>
          </div>
          <div class="col-12 col-md-4 service-item">
            <div @click="$router.push('/services')" class="expansion-bg">
            </div>
              <div class="title-text">
                <p @click="$router.push('/services')">Expansion/Extension</p>
              </div>
          </div>
          <div class="col-12 col-md-4 service-item">
            <div @click="$router.push('/services')" class="refurbishment-bg">
            </div>
              <div class="title-text">
                <p @click="$router.push('/services')">Refurbishment</p>
              </div>
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

