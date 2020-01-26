<template>
  <Layout>
    <h1 class="mb-4">Kontakt</h1>
    <div>
      <img class="contact-image mb-4" src="../../uploads/email.svg" />
      <b-form 
        name="contact"
        method="post"
        @submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
      <input type="hidden" name="name" value="contact" />
      <p hidden>
        <label>
          Fyll inte i detta: <input name="bot-field" />
        </label>
      </p>
        <b-form-group id="input-group-2" label="Namn:" label-for="form-name">
          <b-form-input
            id="name"
            name="name"
            v-model="form.name"
            required
            placeholder="Ditt namn"
          />
        </b-form-group>

        <b-form-group
          id="input-group-1"
          label="Epost:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            name="email"
            type="email"
            required
            placeholder="Din epostadress"
          />
        </b-form-group>

        <b-form-group id="input-group-3" label="Meddelande:" label-for="message">
          <b-form-textarea
            id="message"
            name="message"
            v-model="form.message"
            required
            placeholder="Ditt meddelande"
          />
        </b-form-group>

        <b-button type="submit" variant="primary">Skicka</b-button>
      </b-form>
    </div>
  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Kontakt'
    },
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      }
    },
    methods: {
      encode(data) {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&')
      },
      handleSubmit(e) {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({
            'form-name': e.target.getAttribute('name'),
            ...this.form,
          }),
        })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error))
      }
    }
  }
</script>

<style scoped lang="scss">
.contact-image {
  display: block;
  margin: auto;
  width: 90%;
  max-width: 500px;
}
</style>
