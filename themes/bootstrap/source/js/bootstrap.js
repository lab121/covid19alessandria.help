import * as jquery from 'jquery/dist/jquery'
import * as popper from 'popper.js/dist/popper'
import * as collapse from 'bootstrap/js/dist/collapse'

jquery(function () {
  'use strict';

  jquery('[data-toggle="offcanvas"]').on('click', function () {
    jquery('.offcanvas-collapse').toggleClass('open')
  })
});
