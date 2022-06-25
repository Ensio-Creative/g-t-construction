<template>
<section class="footer">
  <div class="container">
    <img src="/img/integrity-projects-logo-white.svg" alt="">
  <div class="row">
    <div class="col-12 col-md-3 footer-item">
      <h4>Company</h4>
      <ul>
        <li
          v-for="route in routes"
          :key="route.url">
          <router-link :to="route.url">{{ route.title }}</router-link>
        </li>
        <!-- <li>
          <a href="https://business.yell.com/websites-privacy-cookie-policy/" target="_blank" rel="noopener noreferrer">Privacy & Cookie Policy</a>
        </li> -->
      </ul>
    </div>
    <div class="col-12 col-md-2 footer-item">
      <h4>Services</h4>
      <ul>
        <li
          v-for="route in services"
          :key="route.url">
          <router-link :to="route.url">{{ route.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-3 footer-item">
      <h4>Sectors</h4>
      <ul>
        <li
          v-for="route in sectors"
          :key="route.url">
          <router-link :to="route.url">{{ route.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-4 footer-item">
      <h4>Follow us</h4>
      <div class="content-social">
          <div class="social-item">
            <a href="https://business.facebook.com/Integrity-Projects-Limited-110559268204169/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
          </div>
          <div class="social-item">

          <a href="https://www.linkedin.com/company/integrity-projects-limited-biz" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
    <!-- <div class="legal-images">
      <img class="legal-item" src="/img/alcumus.png" alt="img-1">
      <img class="legal-item" src="/img/niceic.png" alt="img-1">
      <img class="legal-item" src="/img/safe-contractor.png" alt="img-1">
    </div> -->
    </div>
  </div>
  <div class=" copyright mt-5">
      <p class="copy-items">&copy; {{ new Date().getFullYear() }} Integrity Projects.</p>
      <p class="copy-items">Site Credit: <strong> <a href="https://ensiocreative.com" target="_blank" rel="noopener noreferrer">Ensio Creative</a> </strong></p>
    </div>
  </div>
</section>
</template>

<script>
// import routes from '../../data/baseNav.js'
export default {
  name: 'Footer',
  data () {
    return {
      routes: [
        {
          title: 'About us',
          url: '/about-us'
        },
        {
          title: 'Contact us',
          url: '/contact-us'
        },
        {
          title: 'Privacy & Cookie Policy',
          url: '/privacy'
        }
      ],
      services: [
        {
          title: 'Design Strategy',
          url: '/services'
        },
        {
          title: 'Design Programming',
          url: '/services'
        },
        {
          title: 'Design Deliverables',
          url: '/services'
        },
        {
          title: 'Design Co-ordination',
          url: '/services'
        }
      ],
      sectors: [
        {
          title: 'Residential',
          url: '/sectors'
        },
        {
          title: 'Industrial & Distribution',
          url: '/sectors'
        },
        {
          title: 'Commercial',
          url: '/sectors'
        },
        {
          title: 'Retail & Leisure',
          url: '/sectors'
        },
        {
          title: 'Education',
          url: '/sectors'
        }
      ]
    }
  }
}  
</script>

<style lang="scss" scoped>

</style>