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
        <div class="form-row">
          <div class="form-group col-md-6">
            <input type="text" class="form-control" id="name" name="name" v-model="form.name" required>
            <label for="name">Nome *</label>
          </div>
          <div class="form-group col-md-6">
            <div class="bootstrap-select-wrapper">
              <label>Categoria *</label>
              <select id="category" name="category" v-model="form.category" required>
                <option v-for="category in categories">
                  {{ category }}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-12">
            <textarea id="message" name="message" v-model="form.message" required></textarea>
            <label for="message">Messaggio *</label>
          </div>
          <div class="form-group col-md-12">
            <input type="text" class="form-control" id="address" name="address" v-model="form.address">
            <label for="address">Indirizzo</label>
          </div>
          <div class="form-group col-md-12">
            <input type="text" class="form-control" id="phone" name="phone" v-model="form.phone">
            <label for="phone">Telefono</label>
          </div>
          <div class="form-group col-md-12">
            <input type="text" class="form-control" id="email" name="email" v-model="form.email">
            <label for="email">Email</label>
          </div>
          <div class="form-group col-md-12">
            <input type="text" class="form-control" id="link" name="link" v-model="form.link">
            <label for="link">Link</label>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group col-md-6">
            <div class="toggles">
              <label for="privacy">
                Accetto l'informativa sul trattamento dei dati personali
                <input type="checkbox" name="privacy" value="privacy" id="privacy" required>
                <span class="lever"></span>
              </label>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col text-center">
            <button type="submit" class="btn btn-primary" v-bind:disabled="loading">Invia</button>
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

      this.$http.post('https://f472npuuea.execute-api.eu-west-1.amazonaws.com/dev/save', this.form)
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
