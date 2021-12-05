<template>
<section class="bg-hero">
  <div class="content">
    <h1>Contact us</h1>
    <p class="texxt-center">Whether you have questions, need feedback or want to make enquiries about any of our services, we’d love to hear from you.</p>
  </div>
</section>

<section class="contact">
  <div class="container-fluid">
    <div class="row">
    <div class="col-12 col-md-5 contact-item">
      <div class="content">
        <div class="content-item">
          <h5>Head Office</h5>
          <p>3 Revill Court, Exeter Airport Business Park, Exeter, Devon EX5 2UL</p>
        </div>
        <div class="content-item">
          <h5>Phone</h5>
          <p>01392 444 642</p>
        </div>
        <div class="content-item">
          <h5>Email</h5>
          <span>sales@g-and-t.co.uk</span>
          <br />
          <span>info@gandtconstruction.co.uk </span>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-7 contact-item">
      <div class="content">
        <h5>Get in touch</h5>
        <p>{{ errorMsg }}</p>
        <form @submit.prevent="onSubmit">
          <div class="form-content">
            <label for="name" >Name <span>*</span></label>
            <input v-model="name" id="name" type="text" >
          </div>
          <div class="form-content">
            <label for="email" >Email <span>*</span></label>
            <input v-model="email" id="email" type="email" >
          </div>
          <div class="form-content">
            <label for="subject" >Subject <span>*</span></label>
            <input v-model="subject" id="subject" type="text" >
          </div>
          <div class="form-content">
            <label for="about" >Tell us a bit about your project.<span>*</span></label>
            <textarea v-model="about" name="about" id="about" cols="30" rows="10" ></textarea>
          </div>
          <input class="submit" type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>
  </div>
</section>
</template>

<script>
// import { ref } from 'vue'
export default {
  title: 'Contact us | G&T',
  setup () {
    

    return {}
  },
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      about: '',
      errorMsg: ''
    }
  },
  methods: {
    onSubmit () {
      const errorText = 'Fill every filed'
      if (!this.name) return this.errorMsg = errorText
      if (!this.email) return this.errorMsg = errorText
      if (!this.validEmail(this.email)) return this.errorMsg = 'Add a valid email'
      if (!this.subject) return this.errorMsg = errorText
      if (!this.about) return this.errorMsg = errorText
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-hero {
  background: linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url('/img/Pexels Photo by JÉSHOOTS.png') !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center !important;
  height: 80vh;
  display: flex;
  align-items: center;
  .content {
    width: 619px;
    margin: auto;
    h1 {
      font-size: 80px;
      font-weight: bold;
      text-align: center;
    }
    p {
      font-size: 30px;
      text-align: center;
    }
  }
}
</style>