import step1 from './page/activePublic/step1.vue'
import step2 from './page/activePublic/step2.vue'
import step3 from './page/activePublic/step3.vue'
import step4 from './page/activePublic/step4.vue'

import index from './page/activeManage/index.vue'
import page1 from './page/activeManage/page1.vue'
import page2 from './page/activeManage/page2.vue'
import page3 from './page/activeManage/page3.vue'
import page4 from './page/activeManage/page4.vue'
import page5 from './page/activeManage/page5.vue'
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
},{
    path: '/page1',
    name: 'page1',
    component: page1
  },{
    path: '/page2',
    name: 'page2',
    component: page2
  },{
    path: '/page3',
    name: 'page3',
    component: page3
  },{
    path: '/page4',
    name: 'page4',
    component: page4
  },{
    path: '/page5',
    name: 'page5',
    component: page5
  }
]
