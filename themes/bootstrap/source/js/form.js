import Vue from 'vue/dist/vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.component('form-el', {
  props: ['source', 'categories'],
  data: function () {
    return {
      form: {
        name: '',
        category: '',
        message: '',
        address: '',
        phone: '',
        email: '',
        link: '',
        form: this.source
      },
      loading: false,
      message: ''
    }
  },
  template: `
      <form method="POST" action="#" @submit="send" v-on:submit.prevent>
          <div class="row">
              <div class="col-md-6 mb-3">
                  <label for="name">Nome *</label>
                  <input type="text" class="form-control" id="name" name="name" v-model="form.name" required>
              </div>
              <div class="col-md-6 mb-3">
                  <label for="category">Categoria *</label>
                  <select type="text" class="form-control" id="category" name="category" v-model="form.category" required>
                      <option v-for="category in categories">
                          {{ category }}
                      </option>
                  </select>
              </div>
          </div>

          <div class="mb-3">
              <label for="message">Messaggio *</label>
              <textarea class="form-control" id="message" name="message" v-model="form.message" required></textarea>
          </div>

          <div class="mb-3">
              <label for="address">Indirizzo</label>
              <input type="text" class="form-control" id="address" name="address" v-model="form.address">
          </div>

          <div class="mb-3">
              <label for="phone">Telefono</label>
              <input type="text" class="form-control" id="phone" name="phone" v-model="form.phone">
          </div>

          <div class="mb-3">
              <label for="email">Email</label>
              <input type="text" class="form-control" id="email" name="email" v-model="form.email">
          </div>

          <div class="mb-3">
              <label for="link">Link</label>
              <input type="text" class="form-control" id="link" name="link" v-model="form.link">
          </div>

          <div class="mb-3">
              <input type="checkbox" name="privacy" value="privacy" id="privacy" required>
              <label for="privacy">Confermo di aver letto e accettato l'informativa trattamento dati personali</label>
          </div>

          <div class="row">
              <div class="col-md-6 mb-3 offset-md-3">
                  <button class="btn btn-primary btn-lg btn-block bg-orange" type="submit" v-bind:disabled="loading">Invia</button>
              </div>
          </div>

          <div class="row">
              <div class="col-md-6 mb-3 offset-md-3 text-center font-weight-bolder" style="font-size: 30px">
                  <div v-if="loading">Invio in corso...</div>

                  <div class="message">
                      {{ message }}
                  </div>
              </div>
          </div>
      </form>
  `,
  methods: {
    send: function (event) {
      this.loading = true;
      this.message = '';

      this.$http.post('https://7prb5mz3vb.execute-api.eu-west-1.amazonaws.com/dev/save', this.form)
        .then(response => {
          this.message = 'Grazie per la tua segnalazione!'
        })
        .catch(error => {
          this.message = 'Si è verificato un errore!'
        })
        .finally(() => this.loading = false);
    }
  }
})

new Vue({
  el: '#form-wrapper'
})
