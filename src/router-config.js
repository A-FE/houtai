import step1 from './page/activePublic/step1.vue'
import step2 from './page/activePublic/step2.vue'
import step3 from './page/activePublic/step3.vue'
import step4 from './page/activePublic/step4.vue'
import index from './page/activeManage/index.vue'
export default [
  {
    path: '/step1',
    name: 'step1',
    component: step1
  },{
    path: '/step2',
    name: 'step2',
    component: step2
  }, {
    path: '/step3',
    name: 'step3',
    component: step3
  },{
    path: '/step4',
    name: 'step4',
    component: step4
  },{
    path: '/index',
    name: 'index',
    component: index
}]
