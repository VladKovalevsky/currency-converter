import Vue from 'vue'
import App from './App.vue'
import Inputmask from 'inputmask'

Vue.directive('input-mask', {
	bind: function(el) {
		new Inputmask('numeric', {
        digits: 0,
        rightAlign: false,
        autoGroup: true
    }).mask(el);
	}
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
