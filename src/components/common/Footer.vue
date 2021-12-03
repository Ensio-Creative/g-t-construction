<template>
<section class="footer">
  <div class="container">
    <img src="/img/logo-white.png" alt="">
  <div class="row">
    <div class="col-12 col-md-3 footer-item">
      <h4>Company</h4>
      <ul>
        <li
          v-for="route in routes"
          :key="route.url">
          <router-link :to="route.url">{{ route.title }}</router-link>
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
  </div>
  </div>
</section>
</template>

<script>
import routes from '../../data/baseNav.js'
export default {
  name: 'Footer',
  data () {
    return {
      routes,
      services: [
        {
          title: 'Newbuild',
          url: '#'
        },
        {
          title: 'Expansion/Extension',
          url: '#'
        },
        {
          title: 'Refurbishment',
          url: '#'
        },
        {
          title: 'Fit-Out',
          url: '#'
        }
      ],
      sectors: [
        {
          title: 'Residential',
          url: '#'
        },
        {
          title: 'Industrial & Distribution',
          url: '#'
        },
        {
          title: 'Commercial',
          url: '#'
        },
        {
          title: 'Retail & Leisure',
          url: '#'
        },
        {
          title: 'Education',
          url: '#'
        }
      ]
    }
  },
  mounted () {
    this.removeHome()
  },
  methods: {
    removeHome () {
      routes.slice(0, 0)
    }
  }
}  
</script>

<style lang="scss" scoped>

</style>