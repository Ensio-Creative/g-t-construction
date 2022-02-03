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
          <!-- <span>G&T Services (SW) Ltd</span> -->
          <p>6 Gower Drive, Bedford MK40 4PZ </p>
        </div>
        <div class="content-item">
          <h5>Phone</h5>
          <p>01234 938150</p>
        </div>
        <div class="content-item pb-3">
          <h5>Email</h5>
          <!-- <span>sales@g-and-t.co.uk</span> -->
          <br />
          <span class="last-span">info@integrityprojects.biz</span>
        </div>
        <div class="content-social">
          <div class="social-item">
            <a href="https://business.facebook.com/Integrity-Projects-Limited-110559268204169/" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"></i></a>
          </div>
          <div class="social-item">

          <a href="https://www.linkedin.com/company/integrity-projects-limited-biz" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
          </div>
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
            <label for="phone" >Phone <span>*</span></label>
            <input v-model="phone" id="phone" type="text" >
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
<section >
  <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d990.7168668243253!2d-3.410602552495614!3d50.72999978397932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3%20Revill%20Court%2C%20Exeter%20Airport%20Business%20Park%2C%20Exeter%2C%20Devon%20EX5%202UL!5e0!3m2!1sen!2sng!4v1638732999056!5m2!1sen!2sng" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe> -->
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.6111905866082!2d-0.5087347845131399!3d52.14139377974428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b118a74ad4f1%3A0x6858001716d86544!2s6%20Gower%20Dr%2C%20Biddenham%2C%20Bedford%20MK40%204PZ%2C%20UK!5e0!3m2!1sen!2sng!4v1643594866108!5m2!1sen!2sng" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
</section>
<Footer />
</template>

<script>
// import { ref } from 'vue'
import Footer from '../components/common/Footer.vue'
export default {
  title: 'Integrity projects - Contact us',
  components: { Footer },
  setup () {
    

    return {}
  },
  data () {
    return {
      name: '',
      phone: '',
      email: '',
      subject: '',
      about: '',
      errorMsg: ''
    }
  },
  methods: {
    async onSubmit  () {
      const errorText = 'Fill every filed'
      if (!this.name) return this.errorMsg = errorText
      if (!this.phone) return this.errorMsg = errorText
      if (!this.email) return this.errorMsg = errorText
      if (!this.validEmail(this.email)) return this.errorMsg = 'Add a valid email'
      if (!this.subject) return this.errorMsg = errorText
      if (!this.about) return this.errorMsg = errorText
      // $.ajax({
      //     url: "",
      //     method: "POST",
          
      //     dataType: "json"
      // })
      let data = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        subject: this.subject,
        message: this.about
      }
      const response = await fetch('https://formsubmit.co/ajax/info@integrityprojects.biz', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      console.log(response)
      // return response.json();
      if (response.status === 200) return this.errorMsg = 'Message sent'
      if (response.status !== 200) return this.errorMsg = 'Something went wrong'
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
  height: 40vh;
  display: flex;
  align-items: center;
  .content {
    width: 619px;
    margin: auto;
    height: 0vh;
    h1 {
      margin-bottom: -5px;
      font-size: 40px;
      font-weight: bold;
      text-align: center;
    }
    p {
      padding: 0px 20px 0px 20px;
      font-size: 15px;
      text-align: center;
    }
  }
}

iframe {
  height: 500px;
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
      margin-bottom: 0px;
    }
    p {
      padding: 0px;
      font-size: 30px;
    }
  }
}
}
</style>