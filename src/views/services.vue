<template>
<section class="bg-hero">
  <div class="content">
    <h1>Our Services</h1>
  </div>
</section>

<section class="side-msg">
  <div class="side-message">
    <div class="container">
    <p>G&T construction, our services include new build, refurbishment, and fit-out projects with a particular specialism in the construction of residential, industrial, commercial, retail, and educational facilities.</p>
  </div>
  </div>
</section>

<section class="services-our-services">
    <div class="container">
      <div class="services-content">
        <div class="row">
          <div class="col-12 col-md-4 service-item mt-5">
            <div class="new-bg">
              <div v-if="newBuild" class="read-more">
                <div class="thumbnail-1"></div>
                <p>G&T Construction works closely with clients, developers, and architects to create purpose-built facilities that meet the requirements of scheme aesthetics, function, and budget.</p>
              </div>
                <img v-if="newBuild" src="/img/Vector42.svg" alt="">
            </div>
            <div class="title-text">
              <p>Newbuild</p>
              <button @click="openNewbuild(newBuild)" class="learn-btn">Learn more</button>
            </div>
          </div>
          <div class="col-12 col-md-4 service-item mt-5">
            <div class="expansion-bg">
                <div v-if="expansion" class="read-more">
                  <div class="thumbnail-2"></div>
                  <p>Expansion of existing facilities can be undertaken whilst they remain operational in many cases, and we work closely with our clients to ensure minimal disruption.</p>
                </div>
                <img v-if="expansion" src="/img/Vector42.svg" alt="">
            </div>
              <div class="title-text">
                <p>Expansion/Extension</p>
                <button @click="openExpansion(expansion)" class="learn-btn">Learn more</button>
              </div>
          </div>
          <div class="col-12 col-md-4 service-item mt-5">
            <div class="refurbishment-bg">
                <div v-if="refub" class="read-more">
                  <div class="thumbnail-3"></div>
                  <p>G&T Construction carries out a variety of refurbishment works to warehouse and office space, from aesthetic updates to more significant renovation works.</p>
                </div>
                <img v-if="refub"  src="/img/Vector42.svg" alt="">
            </div>
              <div class="title-text">
                <p>Refurbishment</p>
                <button @click="openRefub(refub)" class="learn-btn">Learn more</button>
              </div>
          </div>
          <div class="col-12 col-md-4 service-item mt-5">
            <div class="fit-out-bg">
                <div v-if="fitOut" class="read-more">
                  <div class="thumbnail-4"></div>
                  <p>We can undertake fit-out works to a variety of existing commercial and industrial facilities, from office spaces to retail outlets.</p>
                </div>
                <img v-if="fitOut" src="/img/Vector42.svg" alt="">
            </div>
              <div class="title-text">
                <p>Fit-out</p>
                <button @click="openFitout(fitOut)" class="learn-btn">Learn more</button>
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
import Footer from '../components/common/Footer.vue'
export default {
  title: 'G&T Construction - Services',
  components: { Footer },
  data () {
    return  {
      newBuild: false,
      expansion: false,
      refub: false,
      fitOut: false
    }
  },
  methods: {
    openNewbuild (value) {
      if (value) {
       return this.newBuild = false 
      }
      this.newBuild = true
      this.expansion = false
      this.refub = false
      this.fitOut = false
    },
    openExpansion (value) {
      if (value) {
       return this.expansion = false 
      }
      this.newBuild = false
      this.expansion = true
      this.refub = false
      this.fitOut = false
    },
    openRefub (value) {
      if (value) {
       return this.refub = false 
      }
      this.newBuild = false
      this.expansion = false
      this.refub = true
      this.fitOut = false
    },
    openFitout (value) {
      if (value) {
       return this.fitOut = false 
      }
      this.newBuild = false
      this.expansion = false
      this.refub = false
      this.fitOut = true
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/img/Pexels Photo by Los Muertos Crew.png') !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  height: 40vh;
  display: flex;
  align-items: center;
  .content {
    width: 249px;
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