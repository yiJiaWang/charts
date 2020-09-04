import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueParticles from 'vue-particles'
//./components/index导出了组件及install方法
import Vcomp from './components/index'
import Toast from './components/toast'

import '@/assets/styles/base.scss'
import '@/assets/styles/common.scss'
import '@/assets/iconfont/iconfont.css'

Vue.use(vueParticles)
//挂载vue   //vue use方法 会掉Vcomp 的 install方法
Vue.use(Vcomp)

Vue.config.productionTip = false

Vue.prototype.$Toast = Toast


router.beforeEach((to, from, next) => {
	if (to.meta.title) {
	  document.title = to.meta.title;
	}
	next();
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
