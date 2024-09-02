import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


let root = null;

function render(props = {}) {
  const { container } = props;
  root = new Vue({
    router,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  root.$destroy();
  root.$el.innerHTML = '';
  root = null;
}