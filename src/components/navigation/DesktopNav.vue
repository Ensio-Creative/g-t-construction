<template>
  <div id="nav">
    <nav
      :class="[view.topOfPage ? 'navigate' : 'onScroll']"
    >
      <div class="container">
        <div class="nav-contact">
          <div class="contact">
            <span>01234 938150</span>
            <span>info@integrityprojects.biz</span>
          </div>
        </div>
          <hr />
        <div class="nav-container">
          <div class="nav-brand">
            <img
              v-if="view.topOfPage"
              src="/img/integrity-projects-logo-white.svg" alt=""
            >
            <img
              v-else
              src="/img/integrity-projects-logo.svg" alt=""
            >
        </div>
        <ul class="nav-container">
          <li
            v-for="route in routes"
            :key="route.url"
            class="nav-item"
          >
            <router-link :to="route.url" class="nav-link">{{ route.title }}</router-link>
          </li>
        </ul>
        </div>
      </div>
   </nav>
  </div>
</template>

<script>
import routes from '../../data/baseNav.js'
export default {
  name: 'App',
  data () {
    return {
      routes,
      view: {
        topOfPage: true
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      if (window.pageYOffset > 0) {
        if (this.view.topOfPage) this.view.topOfPage = false
      } else {
        if (!this.view.topOfPage) this.view.topOfPage = true
      }
    }
  }
}
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>