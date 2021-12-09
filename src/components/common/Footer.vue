<template>
<section class="footer">
  <div class="container">
    <img src="/img/g-&-t-construction-logo-white.png" alt="">
  <div class="row">
    <div class="col-12 col-md-3 footer-item">
      <h4>Company</h4>
      <ul>
        <li
          v-for="route in routes"
          :key="route.url">
          <router-link :to="route.url">{{ route.title }}</router-link>
        </li>
        <li>
          <a href="https://business.yell.com/websites-privacy-cookie-policy/" target="_blank" rel="noopener noreferrer">Privacy & Cookie Policy</a>
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-3 footer-item">
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
    <div class="col-12 col-md-3 footer-item">
      <h4>Follow us</h4>
      <div class="content-social">
          <div class="social-item">
            <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
          </div>
          <div class="social-item">

          <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-twitter"></i></a>
          </div>
          <div class="social-item">

          <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
          </div>
          <div class="social-item">

          <a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
    </div>
  </div>
  <div class=" copyright mt-5">
      <p class="copy-items">&copy; {{ new Date().getFullYear() }} G&T Construction.</p>
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
          title: 'Services',
          url: '/services'
        },
        {
          title: 'Sectors',
          url: '/sectors'
        },
        {
          title: 'Contact us',
          url: '/contact-us'
        }
      ],
      services: [
        {
          title: 'Newbuild',
          url: '/services'
        },
        {
          title: 'Expansion/Extension',
          url: '/services'
        },
        {
          title: 'Refurbishment',
          url: '/services'
        },
        {
          title: 'Fit-Out',
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