import Vue from 'vue/dist/vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.component('form-el', {
  props: ['source', 'categories', 'message_ok', 'message_ko'],
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
        lang: '',
        form: this.source
      },
      loading: false,
      message: ''
    }
  },
  template: '#form-template',
  methods: {
    send: function (event) {
      this.loading = true;
      this.message = '';

      this.$http.post('https://f472npuuea.execute-api.eu-west-1.amazonaws.com/dev/save', this.form)
        .then(response => {
          this.message = this.message_ok
        })
        .catch(error => {
          this.message = this.message_ko
        })
        .finally(() => this.loading = false);
    }
  }
})

new Vue({
  el: '#form-wrapper'
})
